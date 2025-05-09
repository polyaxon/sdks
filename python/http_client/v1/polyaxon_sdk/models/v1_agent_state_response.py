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


from typing import Any, Dict, Optional
from pydantic import BaseModel, StrictInt
from polyaxon_sdk.models.agent_state_response_agent_state import AgentStateResponseAgentState
from polyaxon_sdk.models.v1_statuses import V1Statuses

class V1AgentStateResponse(BaseModel):
    """
    V1AgentStateResponse
    """
    status: Optional[V1Statuses] = None
    state: Optional[AgentStateResponseAgentState] = None
    live_state: Optional[StrictInt] = None
    compatible_updates: Optional[Dict[str, Any]] = None
    __properties = ["status", "state", "live_state", "compatible_updates"]

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
    def from_json(cls, json_str: str) -> V1AgentStateResponse:
        """Create an instance of V1AgentStateResponse from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of state
        if self.state:
            _dict['state'] = self.state.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1AgentStateResponse:
        """Create an instance of V1AgentStateResponse from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1AgentStateResponse.parse_obj(obj)

        _obj = V1AgentStateResponse.parse_obj({
            "status": obj.get("status"),
            "state": AgentStateResponseAgentState.from_dict(obj.get("state")) if obj.get("state") is not None else None,
            "live_state": obj.get("live_state"),
            "compatible_updates": obj.get("compatible_updates")
        })
        return _obj

