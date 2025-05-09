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


from typing import Any, Dict, List, Optional
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist

class V1SectionSpec(BaseModel):
    """
    V1SectionSpec
    """
    name: Optional[StrictStr] = None
    is_minimized: Optional[StrictBool] = None
    is_frozen: Optional[StrictBool] = None
    columns: Optional[StrictInt] = None
    height: Optional[StrictInt] = None
    xaxis: Optional[StrictStr] = None
    smoothing: Optional[StrictInt] = None
    ignore_outliers: Optional[StrictBool] = None
    sample_size: Optional[StrictInt] = None
    widgets: Optional[conlist(Dict[str, Any])] = None
    page_index: Optional[StrictInt] = None
    page_size: Optional[StrictInt] = None
    __properties = ["name", "is_minimized", "is_frozen", "columns", "height", "xaxis", "smoothing", "ignore_outliers", "sample_size", "widgets", "page_index", "page_size"]

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
    def from_json(cls, json_str: str) -> V1SectionSpec:
        """Create an instance of V1SectionSpec from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1SectionSpec:
        """Create an instance of V1SectionSpec from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1SectionSpec.parse_obj(obj)

        _obj = V1SectionSpec.parse_obj({
            "name": obj.get("name"),
            "is_minimized": obj.get("is_minimized"),
            "is_frozen": obj.get("is_frozen"),
            "columns": obj.get("columns"),
            "height": obj.get("height"),
            "xaxis": obj.get("xaxis"),
            "smoothing": obj.get("smoothing"),
            "ignore_outliers": obj.get("ignore_outliers"),
            "sample_size": obj.get("sample_size"),
            "widgets": obj.get("widgets"),
            "page_index": obj.get("page_index"),
            "page_size": obj.get("page_size")
        })
        return _obj

