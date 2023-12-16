# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.6
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, Optional
from pydantic import BaseModel, Field, StrictBool, StrictStr

class V1HostPathConnection(BaseModel):
    """
    V1HostPathConnection
    """
    host_path: Optional[StrictStr] = Field(None, alias="hostPath")
    mount_path: Optional[StrictStr] = Field(None, alias="mountPath")
    read_only: Optional[StrictBool] = Field(None, alias="readOnly")
    kind: Optional[Dict[str, Any]] = None
    __properties = ["hostPath", "mountPath", "readOnly", "kind"]

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
    def from_json(cls, json_str: str) -> V1HostPathConnection:
        """Create an instance of V1HostPathConnection from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1HostPathConnection:
        """Create an instance of V1HostPathConnection from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1HostPathConnection.parse_obj(obj)

        _obj = V1HostPathConnection.parse_obj({
            "host_path": obj.get("hostPath"),
            "mount_path": obj.get("mountPath"),
            "read_only": obj.get("readOnly"),
            "kind": obj.get("kind")
        })
        return _obj

