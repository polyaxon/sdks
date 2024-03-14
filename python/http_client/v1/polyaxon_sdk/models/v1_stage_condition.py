# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.3-rc0
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
from typing import Any, Dict, Optional
from pydantic import BaseModel, StrictStr
from polyaxon_sdk.models.v1_stages import V1Stages

class V1StageCondition(BaseModel):
    """
    V1StageCondition
    """
    type: Optional[V1Stages] = None
    status: Optional[StrictStr] = None
    reason: Optional[StrictStr] = None
    message: Optional[StrictStr] = None
    last_update_time: Optional[datetime] = None
    last_transition_time: Optional[datetime] = None
    meta_info: Optional[Dict[str, Any]] = None
    __properties = ["type", "status", "reason", "message", "last_update_time", "last_transition_time", "meta_info"]

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
    def from_json(cls, json_str: str) -> V1StageCondition:
        """Create an instance of V1StageCondition from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1StageCondition:
        """Create an instance of V1StageCondition from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1StageCondition.parse_obj(obj)

        _obj = V1StageCondition.parse_obj({
            "type": obj.get("type"),
            "status": obj.get("status"),
            "reason": obj.get("reason"),
            "message": obj.get("message"),
            "last_update_time": obj.get("last_update_time"),
            "last_transition_time": obj.get("last_transition_time"),
            "meta_info": obj.get("meta_info")
        })
        return _obj

