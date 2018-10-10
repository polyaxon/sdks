# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

import json
import os

from polyaxon_client.tracking.base import ensure_in_custer


def get_data_paths():
    """
    The data paths dictionary that yu mounted for the job/experiment.
    {'data1': '/data/1/', 'data-foo': '/data/foo'}
    """
    ensure_in_custer()
    data_path = os.getenv('POLYAXON_RUN_DATA_PATHS', None)
    try:
        return json.loads(data_path) if data_path else None
    except (ValueError, TypeError):
        print('Could get data paths, '
              'please make sure this is running inside a polyaxon job.')
        return None


def get_base_outputs_path():
    """
    The bae outputs path generated
    """
    return os.getenv('POLYAXON_BASE_OUTPUTS_PATH', None)


def get_outputs_path():
    """
    The outputs path generated by polyaxon based on the hierarchy of the experiment:
    Experiment:
        `user/project/group/experiment/files`
    Jobs:
        `user/project/jobs/files`
    """
    ensure_in_custer()
    return os.getenv('POLYAXON_RUN_OUTPUTS_PATH', None)


def get_outputs_refs_paths():
    """
    The references outputs paths requested by the user,
    the order follows the order specified by the user:
    {
        'jobs': [
            `user/project/job12/files`,
        ],
        'experiments': [
            `user/project/group/experiment1/files`,
            `user/project/experiment100/files`
        ]
    }
    """
    ensure_in_custer()
    outputs_refs = os.getenv('POLYAXON_REFS_OUTPUTS_PATHS', None)
    try:
        return json.loads(outputs_refs) if outputs_refs else None
    except (ValueError, TypeError):
        print('Could get outputs refs paths, '
              'please make sure this is running inside a polyaxon job.')
        return None


def get_log_level():
    """If set on the polyaxonfile it will return the log level."""
    ensure_in_custer()
    return os.getenv('POLYAXON_LOG_LEVEL', None)
