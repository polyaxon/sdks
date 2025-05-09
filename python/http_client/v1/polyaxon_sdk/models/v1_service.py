# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.8.0
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field, StrictBool, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_environment import V1Environment
from polyaxon_sdk.models.v1_init import V1Init

class V1Service(BaseModel):
    """
    V1Service
    """
    kind: Optional[StrictStr] = 'service'
    environment: Optional[V1Environment] = None
    connections: Optional[conlist(StrictStr)] = None
    volumes: Optional[conlist(Dict[str, Any])] = Field(None, description="Volumes is a list of volumes that can be mounted.")
    init: Optional[conlist(V1Init)] = None
    sidecars: Optional[conlist(Dict[str, Any])] = None
    container: Optional[Dict[str, Any]] = None
    ports: Optional[conlist(StrictInt)] = None
    rewrite_path: Optional[StrictBool] = Field(None, alias="rewritePath", description="Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url.")
    is_external: Optional[StrictBool] = Field(None, alias="isExternal", description="Optional flag to signal to Polyaxon that this service should not go through Polyaxon's auth Default is false, the service will be controlled by Polyaxon's auth.")
    replicas: Optional[StrictInt] = None
    __properties = ["kind", "environment", "connections", "volumes", "init", "sidecars", "container", "ports", "rewritePath", "isExternal", "replicas"]

    class Config:
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> V1Service:
        """Create an instance of V1Service from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of environment
        if self.environment:
            _dict['environment'] = self.environment.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in init (list)
        _items = []
        if self.init:
            for _item in self.init:
                if _item:
                    _items.append(_item.to_dict())
            _dict['init'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Service:
        """Create an instance of V1Service from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Service.parse_obj(obj)

        _obj = V1Service.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'service',
            "environment": V1Environment.from_dict(obj.get("environment")) if obj.get("environment") is not None else None,
            "connections": obj.get("connections"),
            "volumes": obj.get("volumes"),
            "init": [V1Init.from_dict(_item) for _item in obj.get("init")] if obj.get("init") is not None else None,
            "sidecars": obj.get("sidecars"),
            "container": obj.get("container"),
            "ports": obj.get("ports"),
            "rewrite_path": obj.get("rewritePath"),
            "is_external": obj.get("isExternal"),
            "replicas": obj.get("replicas")
        })
        return _obj

