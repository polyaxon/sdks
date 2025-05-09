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
from typing import List, Optional
from pydantic import BaseModel, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_preset_settings import V1PresetSettings

class V1Preset(BaseModel):
    """
    V1Preset
    """
    uuid: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    live_state: Optional[StrictInt] = None
    content: Optional[StrictStr] = None
    settings: Optional[V1PresetSettings] = None
    __properties = ["uuid", "name", "description", "tags", "created_at", "updated_at", "live_state", "content", "settings"]

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
    def from_json(cls, json_str: str) -> V1Preset:
        """Create an instance of V1Preset from a JSON string"""
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
    def from_dict(cls, obj: dict) -> V1Preset:
        """Create an instance of V1Preset from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Preset.parse_obj(obj)

        _obj = V1Preset.parse_obj({
            "uuid": obj.get("uuid"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "live_state": obj.get("live_state"),
            "content": obj.get("content"),
            "settings": V1PresetSettings.from_dict(obj.get("settings")) if obj.get("settings") is not None else None
        })
        return _obj

