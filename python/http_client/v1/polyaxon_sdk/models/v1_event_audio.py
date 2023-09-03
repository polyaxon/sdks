# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc38
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
from pydantic import BaseModel, Field, StrictFloat, StrictInt, StrictStr

class V1EventAudio(BaseModel):
    """
    V1EventAudio
    """
    sample_rate: Optional[StrictFloat] = Field(None, description="Sample rate of the audio in Hz.")
    num_channels: Optional[StrictInt] = Field(None, description="Number of channels of audio.")
    length_frames: Optional[StrictInt] = Field(None, description="Length of the audio in frames (samples per channel).")
    content_type: Optional[StrictStr] = None
    path: Optional[StrictStr] = None
    __properties = ["sample_rate", "num_channels", "length_frames", "content_type", "path"]

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
    def from_json(cls, json_str: str) -> V1EventAudio:
        """Create an instance of V1EventAudio from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1EventAudio:
        """Create an instance of V1EventAudio from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1EventAudio.parse_obj(obj)

        _obj = V1EventAudio.parse_obj({
            "sample_rate": obj.get("sample_rate"),
            "num_channels": obj.get("num_channels"),
            "length_frames": obj.get("length_frames"),
            "content_type": obj.get("content_type"),
            "path": obj.get("path")
        })
        return _obj

