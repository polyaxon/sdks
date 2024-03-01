# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.2
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
from polyaxon_sdk.models.v1_component import V1Component
from polyaxon_sdk.models.v1_environment import V1Environment
from polyaxon_sdk.models.v1_operation import V1Operation

class V1Dag(BaseModel):
    """
    V1Dag
    """
    kind: Optional[StrictStr] = 'dag'
    operations: Optional[conlist(V1Operation)] = None
    components: Optional[conlist(V1Component)] = None
    concurrency: Optional[StrictInt] = None
    early_stopping: Optional[conlist(Dict[str, Any])] = Field(None, alias="earlyStopping")
    environment: Optional[V1Environment] = None
    connections: Optional[conlist(StrictStr)] = None
    volumes: Optional[conlist(Dict[str, Any])] = Field(None, description="Volumes is a list of volumes that can be mounted.")
    __properties = ["kind", "operations", "components", "concurrency", "earlyStopping", "environment", "connections", "volumes"]

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
    def from_json(cls, json_str: str) -> V1Dag:
        """Create an instance of V1Dag from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in operations (list)
        _items = []
        if self.operations:
            for _item in self.operations:
                if _item:
                    _items.append(_item.to_dict())
            _dict['operations'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in components (list)
        _items = []
        if self.components:
            for _item in self.components:
                if _item:
                    _items.append(_item.to_dict())
            _dict['components'] = _items
        # override the default output from pydantic by calling `to_dict()` of environment
        if self.environment:
            _dict['environment'] = self.environment.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Dag:
        """Create an instance of V1Dag from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Dag.parse_obj(obj)

        _obj = V1Dag.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'dag',
            "operations": [V1Operation.from_dict(_item) for _item in obj.get("operations")] if obj.get("operations") is not None else None,
            "components": [V1Component.from_dict(_item) for _item in obj.get("components")] if obj.get("components") is not None else None,
            "concurrency": obj.get("concurrency"),
            "early_stopping": obj.get("earlyStopping"),
            "environment": V1Environment.from_dict(obj.get("environment")) if obj.get("environment") is not None else None,
            "connections": obj.get("connections"),
            "volumes": obj.get("volumes")
        })
        return _obj

