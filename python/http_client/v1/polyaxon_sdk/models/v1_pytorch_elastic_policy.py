# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.0-rc17
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
from pydantic import BaseModel, Field, StrictBool, StrictInt, StrictStr, conlist

class V1PytorchElasticPolicy(BaseModel):
    """
    V1PytorchElasticPolicy
    """
    min_replicas: Optional[StrictInt] = Field(None, alias="minReplicas", description="minReplicas is the lower limit for the number of replicas to which the training job can scale down.")
    max_replicas: Optional[StrictInt] = Field(None, alias="maxReplicas", description="upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas, defaults to null.")
    rdvz_backend: Optional[StrictStr] = Field(None, alias="rdvzBackend")
    rdvz_port: Optional[StrictInt] = Field(None, alias="rdvzPort")
    rdvz_host: Optional[StrictStr] = Field(None, alias="rdvzHost")
    rdvz_id: Optional[StrictStr] = Field(None, alias="rdvzId")
    rdvz_conf: Optional[conlist(Dict[str, Any])] = Field(None, alias="rdvzConf", description="RDZVConf contains additional rendezvous configuration (<key1>=<value1>,<key2>=<value2>,...).")
    standalone: Optional[StrictBool] = Field(None, description="Start a local standalone rendezvous backend that is represented by a C10d TCP store on port 29400. Useful when launching single-node, multi-worker job. If specified --rdzv_backend, --rdzv_endpoint, --rdzv_id are auto-assigned; any explicitly set values are ignored.")
    n_proc_per_node: Optional[StrictInt] = Field(None, alias="nProcPerNode", description="Number of workers per node; supported values: [auto, cpu, gpu, int]. Deprecated: This API is deprecated in v1.7+ Use .spec.nprocPerNode instead.")
    max_restarts: Optional[StrictInt] = Field(None, alias="maxRestarts")
    metrics: Optional[conlist(Dict[str, Any])] = Field(None, alias="Metrics", description="Metrics contains the specifications which are used to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated with multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the HPA will not be created.")
    __properties = ["minReplicas", "maxReplicas", "rdvzBackend", "rdvzPort", "rdvzHost", "rdvzId", "rdvzConf", "standalone", "nProcPerNode", "maxRestarts", "Metrics"]

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
    def from_json(cls, json_str: str) -> V1PytorchElasticPolicy:
        """Create an instance of V1PytorchElasticPolicy from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1PytorchElasticPolicy:
        """Create an instance of V1PytorchElasticPolicy from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1PytorchElasticPolicy.parse_obj(obj)

        _obj = V1PytorchElasticPolicy.parse_obj({
            "min_replicas": obj.get("minReplicas"),
            "max_replicas": obj.get("maxReplicas"),
            "rdvz_backend": obj.get("rdvzBackend"),
            "rdvz_port": obj.get("rdvzPort"),
            "rdvz_host": obj.get("rdvzHost"),
            "rdvz_id": obj.get("rdvzId"),
            "rdvz_conf": obj.get("rdvzConf"),
            "standalone": obj.get("standalone"),
            "n_proc_per_node": obj.get("nProcPerNode"),
            "max_restarts": obj.get("maxRestarts"),
            "metrics": obj.get("Metrics")
        })
        return _obj

