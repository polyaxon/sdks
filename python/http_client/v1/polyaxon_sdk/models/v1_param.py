# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc20
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, Optional
from pydantic import BaseModel, Field, StrictBool, StrictStr

class V1Param(BaseModel):
    """
    V1Param
    """
    value: Optional[Dict[str, Any]] = None
    ref: Optional[StrictStr] = None
    connection: Optional[StrictStr] = None
    to_init: Optional[StrictBool] = Field(None, alias="toInit")
    to_env: Optional[StrictStr] = Field(None, alias="toEnv")
    context_only: Optional[StrictBool] = Field(None, alias="contextOnly")
    __properties = ["value", "ref", "connection", "toInit", "toEnv", "contextOnly"]

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
    def from_json(cls, json_str: str) -> V1Param:
        """Create an instance of V1Param from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Param:
        """Create an instance of V1Param from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Param.parse_obj(obj)

        _obj = V1Param.parse_obj({
            "value": obj.get("value"),
            "ref": obj.get("ref"),
            "connection": obj.get("connection"),
            "to_init": obj.get("toInit"),
            "to_env": obj.get("toEnv"),
            "context_only": obj.get("contextOnly")
        })
        return _obj

