# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc54
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
from polyaxon_sdk.models.v1_bayes import V1Bayes
from polyaxon_sdk.models.v1_grid_search import V1GridSearch
from polyaxon_sdk.models.v1_hyperband import V1Hyperband
from polyaxon_sdk.models.v1_hyperopt import V1Hyperopt
from polyaxon_sdk.models.v1_iterative import V1Iterative
from polyaxon_sdk.models.v1_mapping import V1Mapping
from polyaxon_sdk.models.v1_random_search import V1RandomSearch

class V1Matrix(BaseModel):
    """
    V1Matrix
    """
    random: Optional[V1RandomSearch] = None
    grid: Optional[V1GridSearch] = None
    hyperband: Optional[V1Hyperband] = None
    bayes: Optional[V1Bayes] = None
    hyperopt: Optional[V1Hyperopt] = None
    iterative: Optional[V1Iterative] = None
    mapping: Optional[V1Mapping] = None
    __properties = ["random", "grid", "hyperband", "bayes", "hyperopt", "iterative", "mapping"]

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
    def from_json(cls, json_str: str) -> V1Matrix:
        """Create an instance of V1Matrix from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of random
        if self.random:
            _dict['random'] = self.random.to_dict()
        # override the default output from pydantic by calling `to_dict()` of grid
        if self.grid:
            _dict['grid'] = self.grid.to_dict()
        # override the default output from pydantic by calling `to_dict()` of hyperband
        if self.hyperband:
            _dict['hyperband'] = self.hyperband.to_dict()
        # override the default output from pydantic by calling `to_dict()` of bayes
        if self.bayes:
            _dict['bayes'] = self.bayes.to_dict()
        # override the default output from pydantic by calling `to_dict()` of hyperopt
        if self.hyperopt:
            _dict['hyperopt'] = self.hyperopt.to_dict()
        # override the default output from pydantic by calling `to_dict()` of iterative
        if self.iterative:
            _dict['iterative'] = self.iterative.to_dict()
        # override the default output from pydantic by calling `to_dict()` of mapping
        if self.mapping:
            _dict['mapping'] = self.mapping.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Matrix:
        """Create an instance of V1Matrix from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Matrix.parse_obj(obj)

        _obj = V1Matrix.parse_obj({
            "random": V1RandomSearch.from_dict(obj.get("random")) if obj.get("random") is not None else None,
            "grid": V1GridSearch.from_dict(obj.get("grid")) if obj.get("grid") is not None else None,
            "hyperband": V1Hyperband.from_dict(obj.get("hyperband")) if obj.get("hyperband") is not None else None,
            "bayes": V1Bayes.from_dict(obj.get("bayes")) if obj.get("bayes") is not None else None,
            "hyperopt": V1Hyperopt.from_dict(obj.get("hyperopt")) if obj.get("hyperopt") is not None else None,
            "iterative": V1Iterative.from_dict(obj.get("iterative")) if obj.get("iterative") is not None else None,
            "mapping": V1Mapping.from_dict(obj.get("mapping")) if obj.get("mapping") is not None else None
        })
        return _obj

