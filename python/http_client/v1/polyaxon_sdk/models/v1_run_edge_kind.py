# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.5.0
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1RunEdgeKind(str, Enum):
    """
    V1RunEdgeKind
    """

    """
    allowed enum values
    """
    ACTION = 'action'
    EVENT = 'event'
    HOOK = 'hook'
    DAG = 'dag'
    JOIN = 'join'
    RUN = 'run'
    TB = 'tb'
    BUILD = 'build'
    MANUAL = 'manual'

