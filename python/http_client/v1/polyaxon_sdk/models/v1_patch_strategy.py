# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.8.0
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1PatchStrategy(str, Enum):
    """
    - replace: Replaces the keys  - isnull: Only set the keys if they do not exist or if they are null  - post_merge: Merge the all keys and replace by new one  - pre_merge: Merge the all keys and keep old ones
    """

    """
    allowed enum values
    """
    REPLACE = 'replace'
    ISNULL = 'isnull'
    POST_MERGE = 'post_merge'
    PRE_MERGE = 'pre_merge'

