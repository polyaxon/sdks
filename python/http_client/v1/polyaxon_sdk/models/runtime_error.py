# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc24
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
from pydantic import BaseModel, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.protobuf_any import ProtobufAny

class RuntimeError(BaseModel):
    """
    RuntimeError
    """
    error: Optional[StrictStr] = None
    code: Optional[StrictInt] = None
    message: Optional[StrictStr] = None
    details: Optional[conlist(ProtobufAny)] = None
    __properties = ["error", "code", "message", "details"]

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
    def from_json(cls, json_str: str) -> RuntimeError:
        """Create an instance of RuntimeError from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in details (list)
        _items = []
        if self.details:
            for _item in self.details:
                if _item:
                    _items.append(_item.to_dict())
            _dict['details'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> RuntimeError:
        """Create an instance of RuntimeError from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return RuntimeError.parse_obj(obj)

        _obj = RuntimeError.parse_obj({
            "error": obj.get("error"),
            "code": obj.get("code"),
            "message": obj.get("message"),
            "details": [ProtobufAny.from_dict(_item) for _item in obj.get("details")] if obj.get("details") is not None else None
        })
        return _obj

