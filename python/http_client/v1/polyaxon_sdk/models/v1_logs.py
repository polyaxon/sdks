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
from pydantic import BaseModel, StrictStr, conlist
from polyaxon_sdk.models.v1_log import V1Log

class V1Logs(BaseModel):
    """
    V1Logs
    """
    logs: Optional[conlist(V1Log)] = None
    last_time: Optional[datetime] = None
    last_file: Optional[StrictStr] = None
    files: Optional[conlist(StrictStr)] = None
    __properties = ["logs", "last_time", "last_file", "files"]

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
    def from_json(cls, json_str: str) -> V1Logs:
        """Create an instance of V1Logs from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in logs (list)
        _items = []
        if self.logs:
            for _item in self.logs:
                if _item:
                    _items.append(_item.to_dict())
            _dict['logs'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Logs:
        """Create an instance of V1Logs from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Logs.parse_obj(obj)

        _obj = V1Logs.parse_obj({
            "logs": [V1Log.from_dict(_item) for _item in obj.get("logs")] if obj.get("logs") is not None else None,
            "last_time": obj.get("last_time"),
            "last_file": obj.get("last_file"),
            "files": obj.get("files")
        })
        return _obj

