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
from pydantic import BaseModel, Field, StrictStr
from polyaxon_sdk.models.v1_optimization import V1Optimization

class V1MetricEarlyStopping(BaseModel):
    """
    MetricEarlyStoppingSchema specification Early stopping based on metric config.
    """
    kind: Optional[StrictStr] = 'metric_early_stopping'
    metric: Optional[StrictStr] = Field(None, description="Metric name to use for early stopping.")
    value: Optional[StrictStr] = Field(None, description="Metric value to use for the condition.")
    optimization: Optional[V1Optimization] = None
    policy: Optional[Dict[str, Any]] = None
    __properties = ["kind", "metric", "value", "optimization", "policy"]

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
    def from_json(cls, json_str: str) -> V1MetricEarlyStopping:
        """Create an instance of V1MetricEarlyStopping from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1MetricEarlyStopping:
        """Create an instance of V1MetricEarlyStopping from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1MetricEarlyStopping.parse_obj(obj)

        _obj = V1MetricEarlyStopping.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'metric_early_stopping',
            "metric": obj.get("metric"),
            "value": obj.get("value"),
            "optimization": obj.get("optimization"),
            "policy": obj.get("policy")
        })
        return _obj

