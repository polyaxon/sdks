# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.5.2
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
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr

class V1Organization(BaseModel):
    """
    V1Organization
    """
    user: Optional[StrictStr] = None
    user_email: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    is_public: Optional[StrictBool] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    support_revoke_at: Optional[datetime] = None
    expiration: Optional[StrictInt] = None
    role: Optional[StrictStr] = None
    queue: Optional[StrictStr] = None
    preset: Optional[StrictStr] = None
    is_cloud_viewable: Optional[StrictBool] = None
    archived_deletion_interval: Optional[StrictInt] = None
    auth: Optional[Dict[str, Any]] = None
    plan: Optional[Dict[str, Any]] = None
    usage: Optional[Dict[str, Any]] = None
    __properties = ["user", "user_email", "name", "is_public", "created_at", "updated_at", "support_revoke_at", "expiration", "role", "queue", "preset", "is_cloud_viewable", "archived_deletion_interval", "auth", "plan", "usage"]

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
    def from_json(cls, json_str: str) -> V1Organization:
        """Create an instance of V1Organization from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Organization:
        """Create an instance of V1Organization from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Organization.parse_obj(obj)

        _obj = V1Organization.parse_obj({
            "user": obj.get("user"),
            "user_email": obj.get("user_email"),
            "name": obj.get("name"),
            "is_public": obj.get("is_public"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "support_revoke_at": obj.get("support_revoke_at"),
            "expiration": obj.get("expiration"),
            "role": obj.get("role"),
            "queue": obj.get("queue"),
            "preset": obj.get("preset"),
            "is_cloud_viewable": obj.get("is_cloud_viewable"),
            "archived_deletion_interval": obj.get("archived_deletion_interval"),
            "auth": obj.get("auth"),
            "plan": obj.get("plan"),
            "usage": obj.get("usage")
        })
        return _obj

