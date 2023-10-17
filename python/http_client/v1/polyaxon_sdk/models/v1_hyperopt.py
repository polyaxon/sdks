# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc51
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
from polyaxon_sdk.models.v1_hyperopt_algorithms import V1HyperoptAlgorithms
from polyaxon_sdk.models.v1_optimization_metric import V1OptimizationMetric
from polyaxon_sdk.models.v1_tuner import V1Tuner

class V1Hyperopt(BaseModel):
    """
    V1Hyperopt
    """
    kind: Optional[StrictStr] = 'hyperopt'
    algorithm: Optional[V1HyperoptAlgorithms] = None
    params: Optional[Dict[str, Dict[str, Any]]] = None
    num_runs: Optional[StrictInt] = Field(None, alias="numRuns")
    max_iterations: Optional[StrictInt] = Field(None, alias="maxIterations")
    metric: Optional[V1OptimizationMetric] = None
    seed: Optional[StrictInt] = None
    concurrency: Optional[StrictInt] = None
    tuner: Optional[V1Tuner] = None
    early_stopping: Optional[conlist(Dict[str, Any])] = Field(None, alias="earlyStopping")
    __properties = ["kind", "algorithm", "params", "numRuns", "maxIterations", "metric", "seed", "concurrency", "tuner", "earlyStopping"]

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
    def from_json(cls, json_str: str) -> V1Hyperopt:
        """Create an instance of V1Hyperopt from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of metric
        if self.metric:
            _dict['metric'] = self.metric.to_dict()
        # override the default output from pydantic by calling `to_dict()` of tuner
        if self.tuner:
            _dict['tuner'] = self.tuner.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Hyperopt:
        """Create an instance of V1Hyperopt from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Hyperopt.parse_obj(obj)

        _obj = V1Hyperopt.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'hyperopt',
            "algorithm": obj.get("algorithm"),
            "params": obj.get("params"),
            "num_runs": obj.get("numRuns"),
            "max_iterations": obj.get("maxIterations"),
            "metric": V1OptimizationMetric.from_dict(obj.get("metric")) if obj.get("metric") is not None else None,
            "seed": obj.get("seed"),
            "concurrency": obj.get("concurrency"),
            "tuner": V1Tuner.from_dict(obj.get("tuner")) if obj.get("tuner") is not None else None,
            "early_stopping": obj.get("earlyStopping")
        })
        return _obj

