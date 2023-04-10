#!/usr/bin/python
#
# Copyright 2018-2023 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc3
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
from pydantic import BaseModel, Field, StrictInt, StrictStr, conlist

class V1K8sResourceSchema(BaseModel):
    """
    V1K8sResourceSchema
    """
    name: Optional[StrictStr] = None
    mount_path: Optional[StrictStr] = Field(None, alias="mountPath")
    items: Optional[conlist(StrictStr)] = None
    default_mode: Optional[StrictInt] = Field(None, alias="defaultMode")
    __properties = ["name", "mountPath", "items", "defaultMode"]

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
    def from_json(cls, json_str: str) -> V1K8sResourceSchema:
        """Create an instance of V1K8sResourceSchema from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1K8sResourceSchema:
        """Create an instance of V1K8sResourceSchema from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1K8sResourceSchema.parse_obj(obj)

        _obj = V1K8sResourceSchema.parse_obj({
            "name": obj.get("name"),
            "mount_path": obj.get("mountPath"),
            "items": obj.get("items"),
            "default_mode": obj.get("defaultMode")
        })
        return _obj

