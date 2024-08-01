# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.3.1
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

class V1Environment(BaseModel):
    """
    V1Environment
    """
    labels: Optional[Dict[str, StrictStr]] = None
    annotations: Optional[Dict[str, StrictStr]] = None
    node_selector: Optional[Dict[str, StrictStr]] = Field(None, alias="nodeSelector")
    affinity: Optional[Dict[str, Any]] = None
    tolerations: Optional[conlist(Dict[str, Any])] = Field(None, description="Optional Tolerations to apply.")
    node_name: Optional[StrictStr] = Field(None, alias="nodeName", description="Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.")
    service_account_name: Optional[StrictStr] = Field(None, alias="serviceAccountName")
    host_aliases: Optional[conlist(Dict[str, Any])] = Field(None, alias="hostAliases", description="Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec.")
    security_context: Optional[Dict[str, Any]] = Field(None, alias="securityContext")
    image_pull_secrets: Optional[conlist(StrictStr)] = Field(None, alias="imagePullSecrets")
    host_network: Optional[StrictBool] = Field(None, alias="hostNetwork", description="Host networking requested for this workflow pod. Default to false.")
    host_pid: Optional[StrictStr] = Field(None, alias="hostPID", description="Use the host's pid namespace. Default to false.")
    dns_policy: Optional[StrictStr] = Field(None, alias="dnsPolicy", description="Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.")
    dns_config: Optional[Dict[str, Any]] = Field(None, alias="dnsConfig")
    scheduler_name: Optional[StrictStr] = Field(None, alias="schedulerName")
    priority_class_name: Optional[StrictStr] = Field(None, alias="priorityClassName", description="If specified, indicates the pod's priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.")
    priority: Optional[StrictInt] = Field(None, description="The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.")
    restart_policy: Optional[StrictStr] = Field(None, alias="restartPolicy")
    __properties = ["labels", "annotations", "nodeSelector", "affinity", "tolerations", "nodeName", "serviceAccountName", "hostAliases", "securityContext", "imagePullSecrets", "hostNetwork", "hostPID", "dnsPolicy", "dnsConfig", "schedulerName", "priorityClassName", "priority", "restartPolicy"]

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
    def from_json(cls, json_str: str) -> V1Environment:
        """Create an instance of V1Environment from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Environment:
        """Create an instance of V1Environment from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Environment.parse_obj(obj)

        _obj = V1Environment.parse_obj({
            "labels": obj.get("labels"),
            "annotations": obj.get("annotations"),
            "node_selector": obj.get("nodeSelector"),
            "affinity": obj.get("affinity"),
            "tolerations": obj.get("tolerations"),
            "node_name": obj.get("nodeName"),
            "service_account_name": obj.get("serviceAccountName"),
            "host_aliases": obj.get("hostAliases"),
            "security_context": obj.get("securityContext"),
            "image_pull_secrets": obj.get("imagePullSecrets"),
            "host_network": obj.get("hostNetwork"),
            "host_pid": obj.get("hostPID"),
            "dns_policy": obj.get("dnsPolicy"),
            "dns_config": obj.get("dnsConfig"),
            "scheduler_name": obj.get("schedulerName"),
            "priority_class_name": obj.get("priorityClassName"),
            "priority": obj.get("priority"),
            "restart_policy": obj.get("restartPolicy")
        })
        return _obj

