# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.5.3
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
from pydantic import BaseModel, Field, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_environment import V1Environment
from polyaxon_sdk.models.v1_init import V1Init

class V1RayReplica(BaseModel):
    """
    V1RayReplica
    """
    replicas: Optional[StrictInt] = None
    min_replicas: Optional[StrictInt] = Field(None, alias="minReplicas")
    max_replicas: Optional[StrictInt] = Field(None, alias="maxReplicas")
    group_name: Optional[StrictStr] = Field(None, alias="groupName")
    ray_start_params: Optional[Dict[str, StrictStr]] = Field(None, alias="rayStartParams")
    environment: Optional[V1Environment] = None
    connections: Optional[conlist(StrictStr)] = None
    volumes: Optional[conlist(Dict[str, Any])] = Field(None, description="Volumes is a list of volumes that can be mounted.")
    init: Optional[conlist(V1Init)] = None
    sidecars: Optional[conlist(Dict[str, Any])] = None
    container: Optional[Dict[str, Any]] = None
    __properties = ["replicas", "minReplicas", "maxReplicas", "groupName", "rayStartParams", "environment", "connections", "volumes", "init", "sidecars", "container"]

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
    def from_json(cls, json_str: str) -> V1RayReplica:
        """Create an instance of V1RayReplica from a JSON string"""
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
    def from_dict(cls, obj: dict) -> V1RayReplica:
        """Create an instance of V1RayReplica from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1RayReplica.parse_obj(obj)

        _obj = V1RayReplica.parse_obj({
            "replicas": obj.get("replicas"),
            "min_replicas": obj.get("minReplicas"),
            "max_replicas": obj.get("maxReplicas"),
            "group_name": obj.get("groupName"),
            "ray_start_params": obj.get("rayStartParams"),
            "environment": V1Environment.from_dict(obj.get("environment")) if obj.get("environment") is not None else None,
            "connections": obj.get("connections"),
            "volumes": obj.get("volumes"),
            "init": [V1Init.from_dict(_item) for _item in obj.get("init")] if obj.get("init") is not None else None,
            "sidecars": obj.get("sidecars"),
            "container": obj.get("container")
        })
        return _obj

