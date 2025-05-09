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


from typing import List, Optional
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_section_spec import V1SectionSpec

class V1DashboardSpec(BaseModel):
    """
    V1DashboardSpec
    """
    sections: Optional[conlist(V1SectionSpec)] = None
    xaxis: Optional[StrictStr] = None
    smoothing: Optional[StrictInt] = None
    ignore_outliers: Optional[StrictBool] = None
    sample_size: Optional[StrictInt] = None
    __properties = ["sections", "xaxis", "smoothing", "ignore_outliers", "sample_size"]

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
    def from_json(cls, json_str: str) -> V1DashboardSpec:
        """Create an instance of V1DashboardSpec from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in sections (list)
        _items = []
        if self.sections:
            for _item in self.sections:
                if _item:
                    _items.append(_item.to_dict())
            _dict['sections'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1DashboardSpec:
        """Create an instance of V1DashboardSpec from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1DashboardSpec.parse_obj(obj)

        _obj = V1DashboardSpec.parse_obj({
            "sections": [V1SectionSpec.from_dict(_item) for _item in obj.get("sections")] if obj.get("sections") is not None else None,
            "xaxis": obj.get("xaxis"),
            "smoothing": obj.get("smoothing"),
            "ignore_outliers": obj.get("ignore_outliers"),
            "sample_size": obj.get("sample_size")
        })
        return _obj

