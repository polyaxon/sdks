# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.3.0
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1EventKind(str, Enum):
    """
    V1EventKind
    """

    """
    allowed enum values
    """
    RUN_STATUS_CREATED = 'run_status_created'
    RUN_STATUS_RESUMING = 'run_status_resuming'
    RUN_STATUS_COMPILED = 'run_status_compiled'
    RUN_STATUS_ON_SCHEDULE = 'run_status_on_schedule'
    RUN_STATUS_QUEUED = 'run_status_queued'
    RUN_STATUS_SCHEDULED = 'run_status_scheduled'
    RUN_STATUS_STARTING = 'run_status_starting'
    RUN_STATUS_RUNNING = 'run_status_running'
    RUN_STATUS_PROCESSING = 'run_status_processing'
    RUN_STATUS_STOPPING = 'run_status_stopping'
    RUN_STATUS_FAILED = 'run_status_failed'
    RUN_STATUS_STOPPED = 'run_status_stopped'
    RUN_STATUS_SUCCEEDED = 'run_status_succeeded'
    RUN_STATUS_SKIPPED = 'run_status_skipped'
    RUN_STATUS_WARNING = 'run_status_warning'
    RUN_STATUS_UNSCHEDULABLE = 'run_status_unschedulable'
    RUN_STATUS_UPSTREAM_FAILED = 'run_status_upstream_failed'
    RUN_STATUS_RETRYING = 'run_status_retrying'
    RUN_STATUS_UNKNOWN = 'run_status_unknown'
    RUN_STATUS_DONE = 'run_status_done'
    RUN_APPROVED_ACTOR = 'run_approved_actor'
    RUN_INVALIDATED_ACTOR = 'run_invalidated_actor'
    RUN_NEW_ARTIFACTS = 'run_new_artifacts'
    CONNECTION_GIT_COMMIT = 'connection_git_commit'
    CONNECTION_DATASET_VERSION = 'connection_dataset_version'
    CONNECTION_REGISTRY_IMAGE = 'connection_registry_image'
    ALERT_INFO = 'alert_info'
    ALERT_WARNING = 'alert_warning'
    ALERT_CRITICAL = 'alert_critical'
    MODEL_VERSION_NEW_METRIC = 'model_version_new_metric'
    PROJECT_CUSTOM_EVENT = 'project_custom_event'
    ORG_CUSTOM_EVENT = 'org_custom_event'

