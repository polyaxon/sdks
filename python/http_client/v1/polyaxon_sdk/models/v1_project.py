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

from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_project_settings import V1ProjectSettings

class V1Project(BaseModel):
    """
    V1Project
    """
    uuid: Optional[StrictStr] = None
    owner: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    is_public: Optional[StrictBool] = None
    bookmarked: Optional[StrictBool] = None
    readme: Optional[StrictStr] = None
    excluded_features: Optional[conlist(StrictStr)] = None
    excluded_runtimes: Optional[conlist(StrictStr)] = None
    archived_deletion_interval: Optional[StrictInt] = None
    settings: Optional[V1ProjectSettings] = None
    role: Optional[StrictStr] = None
    live_state: Optional[StrictInt] = None
    contributors: Optional[conlist(Dict[str, Any])] = None
    __properties = ["uuid", "owner", "name", "description", "tags", "created_at", "updated_at", "is_public", "bookmarked", "readme", "excluded_features", "excluded_runtimes", "archived_deletion_interval", "settings", "role", "live_state", "contributors"]

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
    def from_json(cls, json_str: str) -> V1Project:
        """Create an instance of V1Project from a JSON string"""
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
    def from_dict(cls, obj: dict) -> V1Project:
        """Create an instance of V1Project from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Project.parse_obj(obj)

        _obj = V1Project.parse_obj({
            "uuid": obj.get("uuid"),
            "owner": obj.get("owner"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "is_public": obj.get("is_public"),
            "bookmarked": obj.get("bookmarked"),
            "readme": obj.get("readme"),
            "excluded_features": obj.get("excluded_features"),
            "excluded_runtimes": obj.get("excluded_runtimes"),
            "archived_deletion_interval": obj.get("archived_deletion_interval"),
            "settings": V1ProjectSettings.from_dict(obj.get("settings")) if obj.get("settings") is not None else None,
            "role": obj.get("role"),
            "live_state": obj.get("live_state"),
            "contributors": obj.get("contributors")
        })
        return _obj

