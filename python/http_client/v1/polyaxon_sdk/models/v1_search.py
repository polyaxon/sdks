# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.3.1
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
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.search_view import SearchView
from polyaxon_sdk.models.v1_search_spec import V1SearchSpec

class V1Search(BaseModel):
    """
    V1Search
    """
    uuid: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    live_state: Optional[StrictInt] = None
    view: Optional[SearchView] = None
    spec: Optional[V1SearchSpec] = None
    org_level: Optional[StrictBool] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    __properties = ["uuid", "name", "description", "tags", "live_state", "view", "spec", "org_level", "created_at", "updated_at"]

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
    def from_json(cls, json_str: str) -> V1Search:
        """Create an instance of V1Search from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of spec
        if self.spec:
            _dict['spec'] = self.spec.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Search:
        """Create an instance of V1Search from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Search.parse_obj(obj)

        _obj = V1Search.parse_obj({
            "uuid": obj.get("uuid"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "live_state": obj.get("live_state"),
            "view": obj.get("view"),
            "spec": V1SearchSpec.from_dict(obj.get("spec")) if obj.get("spec") is not None else None,
            "org_level": obj.get("org_level"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at")
        })
        return _obj

