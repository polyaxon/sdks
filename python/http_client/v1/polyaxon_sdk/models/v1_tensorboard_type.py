# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc17
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
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist

class V1TensorboardType(BaseModel):
    """
    V1TensorboardType
    """
    port: Optional[StrictInt] = None
    uuids: Optional[conlist(StrictStr)] = None
    use_names: Optional[StrictBool] = None
    path_prefix: Optional[StrictStr] = None
    plugins: Optional[StrictStr] = None
    __properties = ["port", "uuids", "use_names", "path_prefix", "plugins"]

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
    def from_json(cls, json_str: str) -> V1TensorboardType:
        """Create an instance of V1TensorboardType from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1TensorboardType:
        """Create an instance of V1TensorboardType from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1TensorboardType.parse_obj(obj)

        _obj = V1TensorboardType.parse_obj({
            "port": obj.get("port"),
            "uuids": obj.get("uuids"),
            "use_names": obj.get("use_names"),
            "path_prefix": obj.get("path_prefix"),
            "plugins": obj.get("plugins")
        })
        return _obj
