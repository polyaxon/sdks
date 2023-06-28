# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc23
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import List, Optional
from pydantic import BaseModel, StrictStr, conlist
from polyaxon_sdk.models.v1_project_user_access import V1ProjectUserAccess

class V1ProjectSettings(BaseModel):
    """
    V1ProjectSettings
    """
    connections: Optional[conlist(StrictStr)] = None
    preset: Optional[StrictStr] = None
    presets: Optional[conlist(StrictStr)] = None
    queue: Optional[StrictStr] = None
    queues: Optional[conlist(StrictStr)] = None
    agents: Optional[conlist(StrictStr)] = None
    user_accesses: Optional[conlist(V1ProjectUserAccess)] = None
    teams: Optional[conlist(StrictStr)] = None
    projects: Optional[conlist(StrictStr)] = None
    __properties = ["connections", "preset", "presets", "queue", "queues", "agents", "user_accesses", "teams", "projects"]

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
    def from_json(cls, json_str: str) -> V1ProjectSettings:
        """Create an instance of V1ProjectSettings from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in user_accesses (list)
        _items = []
        if self.user_accesses:
            for _item in self.user_accesses:
                if _item:
                    _items.append(_item.to_dict())
            _dict['user_accesses'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1ProjectSettings:
        """Create an instance of V1ProjectSettings from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1ProjectSettings.parse_obj(obj)

        _obj = V1ProjectSettings.parse_obj({
            "connections": obj.get("connections"),
            "preset": obj.get("preset"),
            "presets": obj.get("presets"),
            "queue": obj.get("queue"),
            "queues": obj.get("queues"),
            "agents": obj.get("agents"),
            "user_accesses": [V1ProjectUserAccess.from_dict(_item) for _item in obj.get("user_accesses")] if obj.get("user_accesses") is not None else None,
            "teams": obj.get("teams"),
            "projects": obj.get("projects")
        })
        return _obj

