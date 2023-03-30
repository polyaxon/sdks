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


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1ArtifactKind(str, Enum):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    allowed enum values
    """

    MODEL = 'model'
    AUDIO = 'audio'
    VIDEO = 'video'
    HISTOGRAM = 'histogram'
    IMAGE = 'image'
    TENSOR = 'tensor'
    DATAFRAME = 'dataframe'
    CHART = 'chart'
    CSV = 'csv'
    TSV = 'tsv'
    PSV = 'psv'
    SSV = 'ssv'
    METRIC = 'metric'
    ENV = 'env'
    HTML = 'html'
    TEXT = 'text'
    FILE = 'file'
    DIR = 'dir'
    DOCKERFILE = 'dockerfile'
    DOCKER_IMAGE = 'docker_image'
    DATA = 'data'
    CODEREF = 'coderef'
    TABLE = 'table'
    TENSORBOARD = 'tensorboard'
    CURVE = 'curve'
    CONFUSION = 'confusion'
    ANALYSIS = 'analysis'
    ITERATION = 'iteration'
    MARKDOWN = 'markdown'
    SYSTEM = 'system'
    ARTIFACT = 'artifact'

