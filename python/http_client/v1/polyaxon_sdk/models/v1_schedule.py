# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.3
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Optional
from pydantic import BaseModel
from polyaxon_sdk.models.v1_cron_schedule import V1CronSchedule
from polyaxon_sdk.models.v1_date_time_schedule import V1DateTimeSchedule
from polyaxon_sdk.models.v1_interval_schedule import V1IntervalSchedule

class V1Schedule(BaseModel):
    """
    V1Schedule
    """
    cron: Optional[V1CronSchedule] = None
    datetime: Optional[V1DateTimeSchedule] = None
    interval: Optional[V1IntervalSchedule] = None
    __properties = ["cron", "datetime", "interval"]

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
    def from_json(cls, json_str: str) -> V1Schedule:
        """Create an instance of V1Schedule from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of cron
        if self.cron:
            _dict['cron'] = self.cron.to_dict()
        # override the default output from pydantic by calling `to_dict()` of datetime
        if self.datetime:
            _dict['datetime'] = self.datetime.to_dict()
        # override the default output from pydantic by calling `to_dict()` of interval
        if self.interval:
            _dict['interval'] = self.interval.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Schedule:
        """Create an instance of V1Schedule from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Schedule.parse_obj(obj)

        _obj = V1Schedule.parse_obj({
            "cron": V1CronSchedule.from_dict(obj.get("cron")) if obj.get("cron") is not None else None,
            "datetime": V1DateTimeSchedule.from_dict(obj.get("datetime")) if obj.get("datetime") is not None else None,
            "interval": V1IntervalSchedule.from_dict(obj.get("interval")) if obj.get("interval") is not None else None
        })
        return _obj

