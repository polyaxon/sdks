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


from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr, conlist

class V1GridSearch(BaseModel):
    """
    V1GridSearch
    """
    kind: Optional[StrictStr] = 'grid'
    params: Optional[Dict[str, Dict[str, Any]]] = None
    num_runs: Optional[StrictInt] = Field(None, alias="numRuns")
    seed: Optional[StrictInt] = None
    concurrency: Optional[StrictInt] = None
    early_stopping: Optional[conlist(Dict[str, Any])] = Field(None, alias="earlyStopping")
    __properties = ["kind", "params", "numRuns", "seed", "concurrency", "earlyStopping"]

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
    def from_json(cls, json_str: str) -> V1GridSearch:
        """Create an instance of V1GridSearch from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1GridSearch:
        """Create an instance of V1GridSearch from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1GridSearch.parse_obj(obj)

        _obj = V1GridSearch.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'grid',
            "params": obj.get("params"),
            "num_runs": obj.get("numRuns"),
            "seed": obj.get("seed"),
            "concurrency": obj.get("concurrency"),
            "early_stopping": obj.get("earlyStopping")
        })
        return _obj

