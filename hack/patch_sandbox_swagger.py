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

NUMERIC_INT64_FIELDS = {
    "v1ExecBgLogs": ("offset", "next_offset"),
    "v1ExecBgStatus": ("duration_ms", "stdout_bytes", "stderr_bytes"),
    "v1ExecResult": ("duration_ms",),
    "v1FsEntry": ("size",),
    "v1FsStatResult": ("size",),
    "v1PingResponse": (
        "uptime_ms",
        "execs_running",
        "ptys_running",
        "ptys_attached",
    ),
    "v1Pty": ("duration_ms",),
}

NUMERIC_INT64_QUERY_PARAMS = {
    "/sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/logs": {
        "get": ("offset", "max_bytes"),
    },
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


def _patch_numeric_int64_fields(spec: dict) -> None:
    definitions = spec.get("definitions", {})
    for definition_name, fields in NUMERIC_INT64_FIELDS.items():
        definition = definitions.get(definition_name)
        if not definition:
            continue
        properties = definition.setdefault("properties", {})
        for field in fields:
            if field in properties:
                properties[field]["type"] = "integer"
                properties[field]["format"] = "int64"


def _patch_numeric_int64_query_params(spec: dict) -> None:
    paths = spec.get("paths", {})
    for path, methods in NUMERIC_INT64_QUERY_PARAMS.items():
        path_item = paths.get(path)
        if not path_item:
            continue
        for method, params in methods.items():
            operation = path_item.get(method)
            if not operation:
                continue
            for parameter in operation.get("parameters", []):
                if parameter.get("name") in params and parameter.get("in") == "query":
                    parameter["type"] = "integer"
                    parameter["format"] = "int64"


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
    _patch_numeric_int64_fields(spec)
    _patch_numeric_int64_query_params(spec)
    _drop_empty_200_response_schemas(spec)

    SWAGGER_PATH.write_text(json.dumps(spec, indent=2) + "\n")


if __name__ == "__main__":
    main()
