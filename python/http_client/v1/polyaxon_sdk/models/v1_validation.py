# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.2-rc0
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

class V1Validation(BaseModel):
    """
    V1Validation
    """
    delay: Optional[StrictBool] = None
    gt: Optional[StrictInt] = None
    ge: Optional[StrictInt] = None
    lt: Optional[StrictInt] = None
    le: Optional[StrictInt] = None
    multiple_of: Optional[StrictInt] = Field(None, alias="multipleOf")
    min_digits: Optional[StrictInt] = Field(None, alias="minDigits")
    max_digits: Optional[StrictInt] = Field(None, alias="maxDigits")
    decimal_places: Optional[StrictInt] = Field(None, alias="decimalPlaces")
    regex: Optional[StrictStr] = None
    min_length: Optional[StrictInt] = Field(None, alias="minLength")
    max_length: Optional[StrictInt] = Field(None, alias="maxLength")
    contains: Optional[conlist(Dict[str, Any])] = None
    excludes: Optional[conlist(Dict[str, Any])] = None
    options: Optional[conlist(Dict[str, Any])] = None
    min_items: Optional[StrictInt] = Field(None, alias="minItems")
    max_items: Optional[StrictInt] = Field(None, alias="maxItems")
    keys: Optional[conlist(StrictStr)] = None
    contains_keys: Optional[conlist(StrictStr)] = Field(None, alias="containsKeys")
    excludes_keys: Optional[conlist(StrictStr)] = Field(None, alias="excludesKeys")
    __properties = ["delay", "gt", "ge", "lt", "le", "multipleOf", "minDigits", "maxDigits", "decimalPlaces", "regex", "minLength", "maxLength", "contains", "excludes", "options", "minItems", "maxItems", "keys", "containsKeys", "excludesKeys"]

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
    def from_json(cls, json_str: str) -> V1Validation:
        """Create an instance of V1Validation from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Validation:
        """Create an instance of V1Validation from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Validation.parse_obj(obj)

        _obj = V1Validation.parse_obj({
            "delay": obj.get("delay"),
            "gt": obj.get("gt"),
            "ge": obj.get("ge"),
            "lt": obj.get("lt"),
            "le": obj.get("le"),
            "multiple_of": obj.get("multipleOf"),
            "min_digits": obj.get("minDigits"),
            "max_digits": obj.get("maxDigits"),
            "decimal_places": obj.get("decimalPlaces"),
            "regex": obj.get("regex"),
            "min_length": obj.get("minLength"),
            "max_length": obj.get("maxLength"),
            "contains": obj.get("contains"),
            "excludes": obj.get("excludes"),
            "options": obj.get("options"),
            "min_items": obj.get("minItems"),
            "max_items": obj.get("maxItems"),
            "keys": obj.get("keys"),
            "contains_keys": obj.get("containsKeys"),
            "excludes_keys": obj.get("excludesKeys")
        })
        return _obj

