# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.0
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
from pydantic import BaseModel, StrictBool

class AgentStateResponseAgentState(BaseModel):
    """
    AgentStateResponseAgentState
    """
    schedules: Optional[Dict[str, Any]] = None
    hooks: Optional[Dict[str, Any]] = None
    watchdogs: Optional[Dict[str, Any]] = None
    tuners: Optional[Dict[str, Any]] = None
    queued: Optional[Dict[str, Any]] = None
    stopping: Optional[Dict[str, Any]] = None
    deleting: Optional[Dict[str, Any]] = None
    apply: Optional[Dict[str, Any]] = None
    checks: Optional[Dict[str, Any]] = None
    full: Optional[StrictBool] = None
    __properties = ["schedules", "hooks", "watchdogs", "tuners", "queued", "stopping", "deleting", "apply", "checks", "full"]

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
    def from_json(cls, json_str: str) -> AgentStateResponseAgentState:
        """Create an instance of AgentStateResponseAgentState from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> AgentStateResponseAgentState:
        """Create an instance of AgentStateResponseAgentState from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return AgentStateResponseAgentState.parse_obj(obj)

        _obj = AgentStateResponseAgentState.parse_obj({
            "schedules": obj.get("schedules"),
            "hooks": obj.get("hooks"),
            "watchdogs": obj.get("watchdogs"),
            "tuners": obj.get("tuners"),
            "queued": obj.get("queued"),
            "stopping": obj.get("stopping"),
            "deleting": obj.get("deleting"),
            "apply": obj.get("apply"),
            "checks": obj.get("checks"),
            "full": obj.get("full")
        })
        return _obj

