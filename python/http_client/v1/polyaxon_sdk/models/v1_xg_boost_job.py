#!/usr/bin/python
#
# Copyright 2018-2023 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.22.0
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Optional
from pydantic import BaseModel, Field, StrictStr
from polyaxon_sdk.models.v1_clean_pod_policy import V1CleanPodPolicy
from polyaxon_sdk.models.v1_kf_replica import V1KFReplica
from polyaxon_sdk.models.v1_scheduling_policy import V1SchedulingPolicy

class V1XGBoostJob(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    kind: Optional[StrictStr] = 'xgboost_job'
    clean_pod_policy: Optional[V1CleanPodPolicy] = Field(None, alias="cleanPodPolicy")
    scheduling_policy: Optional[V1SchedulingPolicy] = Field(None, alias="schedulingPolicy")
    master: Optional[V1KFReplica] = None
    worker: Optional[V1KFReplica] = None
    __properties = ["kind", "cleanPodPolicy", "schedulingPolicy", "master", "worker"]

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
    def from_json(cls, json_str: str) -> V1XGBoostJob:
        """Create an instance of V1XGBoostJob from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of scheduling_policy
        if self.scheduling_policy:
            _dict['schedulingPolicy'] = self.scheduling_policy.to_dict()
        # override the default output from pydantic by calling `to_dict()` of master
        if self.master:
            _dict['master'] = self.master.to_dict()
        # override the default output from pydantic by calling `to_dict()` of worker
        if self.worker:
            _dict['worker'] = self.worker.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1XGBoostJob:
        """Create an instance of V1XGBoostJob from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1XGBoostJob.parse_obj(obj)

        _obj = V1XGBoostJob.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'xgboost_job',
            "clean_pod_policy": obj.get("cleanPodPolicy"),
            "scheduling_policy": V1SchedulingPolicy.from_dict(obj.get("schedulingPolicy")) if obj.get("schedulingPolicy") is not None else None,
            "master": V1KFReplica.from_dict(obj.get("master")) if obj.get("master") is not None else None,
            "worker": V1KFReplica.from_dict(obj.get("worker")) if obj.get("worker") is not None else None
        })
        return _obj

