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

    The version of the OpenAPI document: 2.0.0-rc3
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1ConnectionKind(str, Enum):
    """
    V1ConnectionKind
    """

    """
    allowed enum values
    """
    HOST_PATH = 'host_path'
    VOLUME_CLAIM = 'volume_claim'
    GCS = 'gcs'
    S3 = 's3'
    WASB = 'wasb'
    REGISTRY = 'registry'
    GIT = 'git'
    AWS = 'aws'
    GCP = 'gcp'
    AZURE = 'azure'
    MYSQL = 'mysql'
    POSTGRES = 'postgres'
    ORACLE = 'oracle'
    VERTICA = 'vertica'
    SQLITE = 'sqlite'
    MSSQL = 'mssql'
    REDIS = 'redis'
    PRESTO = 'presto'
    MONGO = 'mongo'
    CASSANDRA = 'cassandra'
    FTP = 'ftp'
    GRPC = 'grpc'
    HDFS = 'hdfs'
    HTTP = 'http'
    PIG_CLI = 'pig_cli'
    HIVE_CLI = 'hive_cli'
    HIVE_METASTORE = 'hive_metastore'
    HIVE_SERVER2 = 'hive_server2'
    JDBC = 'jdbc'
    JENKINS = 'jenkins'
    SAMBA = 'samba'
    SNOWFLAKE = 'snowflake'
    SSH = 'ssh'
    CLOUDANT = 'cloudant'
    DATABRICKS = 'databricks'
    SEGMENT = 'segment'
    SLACK = 'slack'
    DISCORD = 'discord'
    MATTERMOST = 'mattermost'
    PAGERDUTY = 'pagerduty'
    HIPCHAT = 'hipchat'
    WEBHOOK = 'webhook'
    CUSTOM = 'custom'

