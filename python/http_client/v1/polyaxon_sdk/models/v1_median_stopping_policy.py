# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.6.1
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
from pydantic import BaseModel, Field, StrictInt, StrictStr

class V1MedianStoppingPolicy(BaseModel):
    """
    Early stopping with median stopping, this policy computes running medians across all runs and stops those whose best performance is worse than the median of the running runs.
    """
    kind: Optional[StrictStr] = 'median'
    evaluation_interval: Optional[StrictInt] = Field(None, alias="evaluationInterval", description="Interval/Frequency for applying the policy.")
    min_interval: Optional[StrictInt] = Field(None, alias="minInterval")
    min_samples: Optional[StrictInt] = Field(None, alias="minSamples")
    __properties = ["kind", "evaluationInterval", "minInterval", "minSamples"]

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
    def from_json(cls, json_str: str) -> V1MedianStoppingPolicy:
        """Create an instance of V1MedianStoppingPolicy from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1MedianStoppingPolicy:
        """Create an instance of V1MedianStoppingPolicy from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1MedianStoppingPolicy.parse_obj(obj)

        _obj = V1MedianStoppingPolicy.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'median',
            "evaluation_interval": obj.get("evaluationInterval"),
            "min_interval": obj.get("minInterval"),
            "min_samples": obj.get("minSamples")
        })
        return _obj

