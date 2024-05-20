# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.2.0-rc0
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
from pydantic import BaseModel, Field
from polyaxon_sdk.models.v1_bucket_connection import V1BucketConnection
from polyaxon_sdk.models.v1_claim_connection import V1ClaimConnection
from polyaxon_sdk.models.v1_git_connection import V1GitConnection
from polyaxon_sdk.models.v1_host_connection import V1HostConnection
from polyaxon_sdk.models.v1_host_path_connection import V1HostPathConnection

class V1ConnectionSchema(BaseModel):
    """
    V1ConnectionSchema
    """
    bucket_connection: Optional[V1BucketConnection] = Field(None, alias="bucketConnection")
    host_path_connection: Optional[V1HostPathConnection] = Field(None, alias="hostPathConnection")
    claim_connection: Optional[V1ClaimConnection] = Field(None, alias="claimConnection")
    host_connection: Optional[V1HostConnection] = Field(None, alias="hostConnection")
    git_connection: Optional[V1GitConnection] = Field(None, alias="gitConnection")
    __properties = ["bucketConnection", "hostPathConnection", "claimConnection", "hostConnection", "gitConnection"]

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
    def from_json(cls, json_str: str) -> V1ConnectionSchema:
        """Create an instance of V1ConnectionSchema from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of bucket_connection
        if self.bucket_connection:
            _dict['bucketConnection'] = self.bucket_connection.to_dict()
        # override the default output from pydantic by calling `to_dict()` of host_path_connection
        if self.host_path_connection:
            _dict['hostPathConnection'] = self.host_path_connection.to_dict()
        # override the default output from pydantic by calling `to_dict()` of claim_connection
        if self.claim_connection:
            _dict['claimConnection'] = self.claim_connection.to_dict()
        # override the default output from pydantic by calling `to_dict()` of host_connection
        if self.host_connection:
            _dict['hostConnection'] = self.host_connection.to_dict()
        # override the default output from pydantic by calling `to_dict()` of git_connection
        if self.git_connection:
            _dict['gitConnection'] = self.git_connection.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1ConnectionSchema:
        """Create an instance of V1ConnectionSchema from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1ConnectionSchema.parse_obj(obj)

        _obj = V1ConnectionSchema.parse_obj({
            "bucket_connection": V1BucketConnection.from_dict(obj.get("bucketConnection")) if obj.get("bucketConnection") is not None else None,
            "host_path_connection": V1HostPathConnection.from_dict(obj.get("hostPathConnection")) if obj.get("hostPathConnection") is not None else None,
            "claim_connection": V1ClaimConnection.from_dict(obj.get("claimConnection")) if obj.get("claimConnection") is not None else None,
            "host_connection": V1HostConnection.from_dict(obj.get("hostConnection")) if obj.get("hostConnection") is not None else None,
            "git_connection": V1GitConnection.from_dict(obj.get("gitConnection")) if obj.get("gitConnection") is not None else None
        })
        return _obj

