# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.0-rc16
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field, StrictInt, conlist

class V1PaddleElasticPolic(BaseModel):
    """
    V1PaddleElasticPolic
    """
    min_replicas: Optional[StrictInt] = Field(None, alias="minReplicas")
    max_replicas: Optional[StrictInt] = Field(None, alias="maxReplicas")
    max_restarts: Optional[StrictInt] = Field(None, alias="maxRestarts")
    metrics: Optional[conlist(Dict[str, Any])] = None
    __properties = ["minReplicas", "maxReplicas", "maxRestarts", "metrics"]

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
    def from_json(cls, json_str: str) -> V1PaddleElasticPolic:
        """Create an instance of V1PaddleElasticPolic from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1PaddleElasticPolic:
        """Create an instance of V1PaddleElasticPolic from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1PaddleElasticPolic.parse_obj(obj)

        _obj = V1PaddleElasticPolic.parse_obj({
            "min_replicas": obj.get("minReplicas"),
            "max_replicas": obj.get("maxReplicas"),
            "max_restarts": obj.get("maxRestarts"),
            "metrics": obj.get("metrics")
        })
        return _obj

