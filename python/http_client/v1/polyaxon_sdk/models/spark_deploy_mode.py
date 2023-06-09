# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc17
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class SparkDeployMode(str, Enum):
    """
    SparkDeployMode
    """

    """
    allowed enum values
    """
    CLUSTER = 'cluster'
    CLIENT = 'client'
    IN_CLUSTER_CLIENT = 'in_cluster_client'

