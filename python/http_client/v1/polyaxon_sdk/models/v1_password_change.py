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
from pydantic import BaseModel, StrictStr

class V1PasswordChange(BaseModel):
    """
    V1PasswordChange
    """
    old_password: Optional[StrictStr] = None
    new_password1: Optional[StrictStr] = None
    new_password2: Optional[StrictStr] = None
    __properties = ["old_password", "new_password1", "new_password2"]

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
    def from_json(cls, json_str: str) -> V1PasswordChange:
        """Create an instance of V1PasswordChange from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1PasswordChange:
        """Create an instance of V1PasswordChange from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1PasswordChange.parse_obj(obj)

        _obj = V1PasswordChange.parse_obj({
            "old_password": obj.get("old_password"),
            "new_password1": obj.get("new_password1"),
            "new_password2": obj.get("new_password2")
        })
        return _obj

