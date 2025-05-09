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


from typing import Any, Dict, Optional
from pydantic import BaseModel, Field, StrictBool, StrictInt, StrictStr

class V1PolyaxonSidecarContainer(BaseModel):
    """
    V1PolyaxonSidecarContainer
    """
    image: Optional[StrictStr] = None
    image_tag: Optional[StrictStr] = Field(None, alias="imageTag")
    image_pull_policy: Optional[StrictStr] = Field(None, alias="imagePullPolicy")
    sleep_interval: Optional[StrictInt] = Field(None, alias="sleepInterval")
    sync_interval: Optional[StrictInt] = Field(None, alias="syncInterval")
    monitor_logs: Optional[StrictBool] = Field(None, alias="monitorLogs")
    monitor_spec: Optional[StrictBool] = Field(None, alias="monitorSpec")
    resources: Optional[Dict[str, Any]] = None
    __properties = ["image", "imageTag", "imagePullPolicy", "sleepInterval", "syncInterval", "monitorLogs", "monitorSpec", "resources"]

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
    def from_json(cls, json_str: str) -> V1PolyaxonSidecarContainer:
        """Create an instance of V1PolyaxonSidecarContainer from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1PolyaxonSidecarContainer:
        """Create an instance of V1PolyaxonSidecarContainer from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1PolyaxonSidecarContainer.parse_obj(obj)

        _obj = V1PolyaxonSidecarContainer.parse_obj({
            "image": obj.get("image"),
            "image_tag": obj.get("imageTag"),
            "image_pull_policy": obj.get("imagePullPolicy"),
            "sleep_interval": obj.get("sleepInterval"),
            "sync_interval": obj.get("syncInterval"),
            "monitor_logs": obj.get("monitorLogs"),
            "monitor_spec": obj.get("monitorSpec"),
            "resources": obj.get("resources")
        })
        return _obj

