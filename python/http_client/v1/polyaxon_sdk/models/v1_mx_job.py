# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.2-rc0
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
from pydantic import BaseModel, Field, StrictStr
from polyaxon_sdk.models.mx_job_mode import MXJobMode
from polyaxon_sdk.models.v1_clean_pod_policy import V1CleanPodPolicy
from polyaxon_sdk.models.v1_kf_replica import V1KFReplica
from polyaxon_sdk.models.v1_scheduling_policy import V1SchedulingPolicy

class V1MXJob(BaseModel):
    """
    V1MXJob
    """
    kind: Optional[StrictStr] = 'mxjob'
    clean_pod_policy: Optional[V1CleanPodPolicy] = Field(None, alias="cleanPodPolicy")
    scheduling_policy: Optional[V1SchedulingPolicy] = Field(None, alias="schedulingPolicy")
    mode: Optional[MXJobMode] = None
    scheduler: Optional[V1KFReplica] = None
    server: Optional[V1KFReplica] = None
    worker: Optional[V1KFReplica] = None
    tuner_tracker: Optional[V1KFReplica] = None
    tuner_server: Optional[V1KFReplica] = None
    tuner: Optional[V1KFReplica] = None
    __properties = ["kind", "cleanPodPolicy", "schedulingPolicy", "mode", "scheduler", "server", "worker", "tuner_tracker", "tuner_server", "tuner"]

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
    def from_json(cls, json_str: str) -> V1MXJob:
        """Create an instance of V1MXJob from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of scheduler
        if self.scheduler:
            _dict['scheduler'] = self.scheduler.to_dict()
        # override the default output from pydantic by calling `to_dict()` of server
        if self.server:
            _dict['server'] = self.server.to_dict()
        # override the default output from pydantic by calling `to_dict()` of worker
        if self.worker:
            _dict['worker'] = self.worker.to_dict()
        # override the default output from pydantic by calling `to_dict()` of tuner_tracker
        if self.tuner_tracker:
            _dict['tuner_tracker'] = self.tuner_tracker.to_dict()
        # override the default output from pydantic by calling `to_dict()` of tuner_server
        if self.tuner_server:
            _dict['tuner_server'] = self.tuner_server.to_dict()
        # override the default output from pydantic by calling `to_dict()` of tuner
        if self.tuner:
            _dict['tuner'] = self.tuner.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1MXJob:
        """Create an instance of V1MXJob from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1MXJob.parse_obj(obj)

        _obj = V1MXJob.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'mxjob',
            "clean_pod_policy": obj.get("cleanPodPolicy"),
            "scheduling_policy": V1SchedulingPolicy.from_dict(obj.get("schedulingPolicy")) if obj.get("schedulingPolicy") is not None else None,
            "mode": obj.get("mode"),
            "scheduler": V1KFReplica.from_dict(obj.get("scheduler")) if obj.get("scheduler") is not None else None,
            "server": V1KFReplica.from_dict(obj.get("server")) if obj.get("server") is not None else None,
            "worker": V1KFReplica.from_dict(obj.get("worker")) if obj.get("worker") is not None else None,
            "tuner_tracker": V1KFReplica.from_dict(obj.get("tuner_tracker")) if obj.get("tuner_tracker") is not None else None,
            "tuner_server": V1KFReplica.from_dict(obj.get("tuner_server")) if obj.get("tuner_server") is not None else None,
            "tuner": V1KFReplica.from_dict(obj.get("tuner")) if obj.get("tuner") is not None else None
        })
        return _obj

