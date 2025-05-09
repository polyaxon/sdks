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


from typing import Optional
from pydantic import BaseModel
from polyaxon_sdk.models.v1_version import V1Version

class V1Compatibility(BaseModel):
    """
    V1Compatibility
    """
    cli: Optional[V1Version] = None
    platform: Optional[V1Version] = None
    agent: Optional[V1Version] = None
    ui: Optional[V1Version] = None
    __properties = ["cli", "platform", "agent", "ui"]

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
    def from_json(cls, json_str: str) -> V1Compatibility:
        """Create an instance of V1Compatibility from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of cli
        if self.cli:
            _dict['cli'] = self.cli.to_dict()
        # override the default output from pydantic by calling `to_dict()` of platform
        if self.platform:
            _dict['platform'] = self.platform.to_dict()
        # override the default output from pydantic by calling `to_dict()` of agent
        if self.agent:
            _dict['agent'] = self.agent.to_dict()
        # override the default output from pydantic by calling `to_dict()` of ui
        if self.ui:
            _dict['ui'] = self.ui.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Compatibility:
        """Create an instance of V1Compatibility from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Compatibility.parse_obj(obj)

        _obj = V1Compatibility.parse_obj({
            "cli": V1Version.from_dict(obj.get("cli")) if obj.get("cli") is not None else None,
            "platform": V1Version.from_dict(obj.get("platform")) if obj.get("platform") is not None else None,
            "agent": V1Version.from_dict(obj.get("agent")) if obj.get("agent") is not None else None,
            "ui": V1Version.from_dict(obj.get("ui")) if obj.get("ui") is not None else None
        })
        return _obj

