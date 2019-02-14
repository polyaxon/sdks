# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

import json
import os

from polyaxon_client import settings
from polyaxon_client.exceptions import PolyaxonClientException
from polyaxon_client.tracking.base import BaseTracker
from polyaxon_client.tracking.in_cluster import ensure_in_custer


class Job(BaseTracker):
    def __init__(self,
                 project=None,
                 job_id=None,
                 job_type=None,
                 client=None,
                 track_logs=True,
                 track_code=True,
                 track_env=True,
                 outputs_store=None):
        if settings.NO_OP:
            return

        if project is None and settings.IN_CLUSTER:
            job_info = self.get_job_info()
            project = job_info['project_name']
            job_id = job_info['job_name'].split('.')[-1]
            job_type = job_info['job_name'].split('.')[-2]

        super(Job, self).__init__(project=project,
                                  client=client,
                                  track_logs=track_logs,
                                  track_code=track_code,
                                  track_env=track_env,
                                  outputs_store=outputs_store)
        self.job_id = job_id
        self.job_type = job_type
        self.job = None
        self.last_status = None

    def get_data(self):
        if settings.NO_OP:
            return

        if self.job_type == 'jobs':
            self._data = self.client_backend.get_job(
                username=self.username,
                project_name=self.project_name,
                job_id=self.job_id)
            return
        elif self.job_type == 'builds':
            self._data = self.client_backend.get_build(
                username=self.username,
                project_name=self.project_name,
                job_id=self.job_id)
            return
        raise PolyaxonClientException('Job type {} not supported'.format(self.job_type))

    @property
    def client_backend(self):
        if settings.NO_OP:
            return None

        if self.job_type == 'jobs':
            return self.client.job
        elif self.job_type == 'builds':
            return self.client.build_job
        raise PolyaxonClientException('Job type {} not supported'.format(self.job_type))

    def _set_health_url(self):
        if settings.NO_OP:
            return

        health_url = self.client_backend.get_heartbeat_url(
            username=self.username,
            project_name=self.project_name,
            job_id=self.job_id)
        self.client.set_health_check(url=health_url)

    @staticmethod
    def get_job_info():
        """Returns information about the job:
            * project_name
            * job_name
            * project_uuid
            * job_uuid
            * role
            * type
            * app
        """
        if settings.NO_OP:
            return None

        ensure_in_custer()

        info = os.getenv('POLYAXON_JOB_INFO', None)
        try:
            return json.loads(info) if info else None
        except (ValueError, TypeError):
            print('Could get experiment info, '
                  'please make sure this is running inside a polyaxon job.')
            return None

    def log_status(self, status, message=None, traceback=None):
        if settings.NO_OP:
            return

        self.client_backend.create_status(username=self.username,
                                          project_name=self.project_name,
                                          job_id=self.job_id,
                                          status=status,
                                          message=message,
                                          traceback=traceback,
                                          background=True)
