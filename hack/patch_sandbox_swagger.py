#!/usr/bin/env python3
"""Patch sandbox OpenAPI gaps that protoc-gen-openapiv2 cannot express."""

from __future__ import annotations

import copy
import json
from pathlib import Path


SWAGGER_PATH = Path(__file__).resolve().parents[1] / "swagger/v1/polyaxon_sdk.swagger.json"

EXEC_BG_PATH = "/sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg"
PTY_PATH = "/sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty"

NULLABLE_FIELDS = {
    "v1ExecResult": ("exit_code",),
    "v1ExecBgStatus": ("exit_code",),
    "v1FsStatResult": ("symlink_target",),
    "v1Pty": ("exit_code", "detached_since"),
}


def _insert_response_after_200(responses: dict, status: str, response: dict) -> None:
    if status in responses:
        return

    patched = {}
    inserted = False
    for key, value in responses.items():
        patched[key] = value
        if key == "200":
            patched[status] = response
            inserted = True

    if not inserted:
        patched[status] = response

    responses.clear()
    responses.update(patched)


def _patch_success_response(spec: dict, path: str, method: str, status: str) -> None:
    operation = spec["paths"][path][method]
    responses = operation.setdefault("responses", {})
    response = copy.deepcopy(
        responses.get("200", {"description": "A successful response."})
    )
    _insert_response_after_200(responses, status, response)


def _patch_nullable_fields(spec: dict) -> None:
    definitions = spec.get("definitions", {})
    for definition_name, fields in NULLABLE_FIELDS.items():
        definition = definitions.get(definition_name)
        if not definition:
            continue
        properties = definition.setdefault("properties", {})
        for field in fields:
            if field in properties:
                properties[field]["x-nullable"] = True


def _drop_empty_200_response_schemas(spec: dict) -> None:
    for path_item in spec.get("paths", {}).values():
        if not isinstance(path_item, dict):
            continue
        for operation in path_item.values():
            if not isinstance(operation, dict):
                continue
            response = operation.get("responses", {}).get("200")
            if not isinstance(response, dict):
                continue
            if response.get("schema") == {"properties": {}}:
                response.pop("schema")


def main() -> None:
    spec = json.loads(SWAGGER_PATH.read_text())

    _patch_success_response(spec, EXEC_BG_PATH, "post", "202")
    _patch_success_response(spec, PTY_PATH, "post", "201")
    _patch_nullable_fields(spec)
    _drop_empty_200_response_schemas(spec)

    SWAGGER_PATH.write_text(json.dumps(spec, indent=2) + "\n")


if __name__ == "__main__":
    main()
