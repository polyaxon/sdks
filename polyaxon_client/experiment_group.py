# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

from polyaxon_schemas.experiment import ExperimentConfig
from polyaxon_client.base import PolyaxonClient
from polyaxon_client.exceptions import PolyaxonException


class ExperimentGroupClient(PolyaxonClient):
    """Client to get experiments for a group from the server"""
    ENDPOINT = "/experiment_groups"

    def list_experiments(self, experiment_group_uuid, page=1):
        """Fetch list of experiments related to this experiment group."""
        request_url = self._build_url(self._get_http_url(), experiment_group_uuid, 'experiments')

        try:
            response = self.get(request_url, params=self.get_page(page=page))
            experiments_dict = response.json()
            return [ExperimentConfig.from_dict(experiment)
                    for experiment in experiments_dict.get("results", [])]
        except PolyaxonException as e:
            self.handle_exception(e=e, log_message='Error while retrieving experiments')
            return []