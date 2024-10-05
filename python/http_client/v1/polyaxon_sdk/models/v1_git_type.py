# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.5.0
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

class V1GitType(BaseModel):
    """
    V1GitType
    """
    url: Optional[StrictStr] = None
    revision: Optional[StrictStr] = None
    flags: Optional[conlist(StrictStr)] = None
    __properties = ["url", "revision", "flags"]

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
    def from_json(cls, json_str: str) -> V1GitType:
        """Create an instance of V1GitType from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1GitType:
        """Create an instance of V1GitType from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1GitType.parse_obj(obj)

        _obj = V1GitType.parse_obj({
            "url": obj.get("url"),
            "revision": obj.get("revision"),
            "flags": obj.get("flags")
        })
        return _obj

