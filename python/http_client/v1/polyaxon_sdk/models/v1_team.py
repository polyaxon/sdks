# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.3.1
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, StrictStr, conlist
from polyaxon_sdk.models.v1_team_settings import V1TeamSettings

class V1Team(BaseModel):
    """
    V1Team
    """
    uuid: Optional[StrictStr] = None
    owner: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    projects: Optional[conlist(StrictStr)] = None
    component_hubs: Optional[conlist(StrictStr)] = None
    model_registries: Optional[conlist(StrictStr)] = None
    settings: Optional[V1TeamSettings] = None
    policy: Optional[StrictStr] = None
    role: Optional[StrictStr] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    __properties = ["uuid", "owner", "name", "projects", "component_hubs", "model_registries", "settings", "policy", "role", "created_at", "updated_at"]

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
    def from_json(cls, json_str: str) -> V1Team:
        """Create an instance of V1Team from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of settings
        if self.settings:
            _dict['settings'] = self.settings.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Team:
        """Create an instance of V1Team from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Team.parse_obj(obj)

        _obj = V1Team.parse_obj({
            "uuid": obj.get("uuid"),
            "owner": obj.get("owner"),
            "name": obj.get("name"),
            "projects": obj.get("projects"),
            "component_hubs": obj.get("component_hubs"),
            "model_registries": obj.get("model_registries"),
            "settings": V1TeamSettings.from_dict(obj.get("settings")) if obj.get("settings") is not None else None,
            "policy": obj.get("policy"),
            "role": obj.get("role"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at")
        })
        return _obj

