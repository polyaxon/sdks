#!/usr/bin/python
#
# Copyright 2018-2021 Polyaxon, Inc.
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

    The version of the OpenAPI document: 1.13.0-rc2
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


try:
    from inspect import getfullargspec
except ImportError:
    from inspect import getargspec as getfullargspec
import pprint
import re  # noqa: F401
import six

from polyaxon_sdk.configuration import Configuration


class V1TFJob(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'kind': 'str',
        'clean_pod_policy': 'V1CleanPodPolicy',
        'scheduling_policy': 'V1SchedulingPolicy',
        'template': 'V1KFReplica',
        'chief': 'V1KFReplica',
        'worker': 'V1KFReplica',
        'ps': 'V1KFReplica',
        'evaluator': 'V1KFReplica'
    }

    attribute_map = {
        'kind': 'kind',
        'clean_pod_policy': 'cleanPodPolicy',
        'scheduling_policy': 'schedulingPolicy',
        'template': 'template',
        'chief': 'chief',
        'worker': 'worker',
        'ps': 'ps',
        'evaluator': 'evaluator'
    }

    def __init__(self, kind='tfjob', clean_pod_policy=None, scheduling_policy=None, template=None, chief=None, worker=None, ps=None, evaluator=None, local_vars_configuration=None):  # noqa: E501
        """V1TFJob - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._kind = None
        self._clean_pod_policy = None
        self._scheduling_policy = None
        self._template = None
        self._chief = None
        self._worker = None
        self._ps = None
        self._evaluator = None
        self.discriminator = None

        if kind is not None:
            self.kind = kind
        if clean_pod_policy is not None:
            self.clean_pod_policy = clean_pod_policy
        if scheduling_policy is not None:
            self.scheduling_policy = scheduling_policy
        if template is not None:
            self.template = template
        if chief is not None:
            self.chief = chief
        if worker is not None:
            self.worker = worker
        if ps is not None:
            self.ps = ps
        if evaluator is not None:
            self.evaluator = evaluator

    @property
    def kind(self):
        """Gets the kind of this V1TFJob.  # noqa: E501


        :return: The kind of this V1TFJob.  # noqa: E501
        :rtype: str
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1TFJob.


        :param kind: The kind of this V1TFJob.  # noqa: E501
        :type kind: str
        """

        self._kind = kind

    @property
    def clean_pod_policy(self):
        """Gets the clean_pod_policy of this V1TFJob.  # noqa: E501


        :return: The clean_pod_policy of this V1TFJob.  # noqa: E501
        :rtype: V1CleanPodPolicy
        """
        return self._clean_pod_policy

    @clean_pod_policy.setter
    def clean_pod_policy(self, clean_pod_policy):
        """Sets the clean_pod_policy of this V1TFJob.


        :param clean_pod_policy: The clean_pod_policy of this V1TFJob.  # noqa: E501
        :type clean_pod_policy: V1CleanPodPolicy
        """

        self._clean_pod_policy = clean_pod_policy

    @property
    def scheduling_policy(self):
        """Gets the scheduling_policy of this V1TFJob.  # noqa: E501


        :return: The scheduling_policy of this V1TFJob.  # noqa: E501
        :rtype: V1SchedulingPolicy
        """
        return self._scheduling_policy

    @scheduling_policy.setter
    def scheduling_policy(self, scheduling_policy):
        """Sets the scheduling_policy of this V1TFJob.


        :param scheduling_policy: The scheduling_policy of this V1TFJob.  # noqa: E501
        :type scheduling_policy: V1SchedulingPolicy
        """

        self._scheduling_policy = scheduling_policy

    @property
    def template(self):
        """Gets the template of this V1TFJob.  # noqa: E501


        :return: The template of this V1TFJob.  # noqa: E501
        :rtype: V1KFReplica
        """
        return self._template

    @template.setter
    def template(self, template):
        """Sets the template of this V1TFJob.


        :param template: The template of this V1TFJob.  # noqa: E501
        :type template: V1KFReplica
        """

        self._template = template

    @property
    def chief(self):
        """Gets the chief of this V1TFJob.  # noqa: E501


        :return: The chief of this V1TFJob.  # noqa: E501
        :rtype: V1KFReplica
        """
        return self._chief

    @chief.setter
    def chief(self, chief):
        """Sets the chief of this V1TFJob.


        :param chief: The chief of this V1TFJob.  # noqa: E501
        :type chief: V1KFReplica
        """

        self._chief = chief

    @property
    def worker(self):
        """Gets the worker of this V1TFJob.  # noqa: E501


        :return: The worker of this V1TFJob.  # noqa: E501
        :rtype: V1KFReplica
        """
        return self._worker

    @worker.setter
    def worker(self, worker):
        """Sets the worker of this V1TFJob.


        :param worker: The worker of this V1TFJob.  # noqa: E501
        :type worker: V1KFReplica
        """

        self._worker = worker

    @property
    def ps(self):
        """Gets the ps of this V1TFJob.  # noqa: E501


        :return: The ps of this V1TFJob.  # noqa: E501
        :rtype: V1KFReplica
        """
        return self._ps

    @ps.setter
    def ps(self, ps):
        """Sets the ps of this V1TFJob.


        :param ps: The ps of this V1TFJob.  # noqa: E501
        :type ps: V1KFReplica
        """

        self._ps = ps

    @property
    def evaluator(self):
        """Gets the evaluator of this V1TFJob.  # noqa: E501


        :return: The evaluator of this V1TFJob.  # noqa: E501
        :rtype: V1KFReplica
        """
        return self._evaluator

    @evaluator.setter
    def evaluator(self, evaluator):
        """Sets the evaluator of this V1TFJob.


        :param evaluator: The evaluator of this V1TFJob.  # noqa: E501
        :type evaluator: V1KFReplica
        """

        self._evaluator = evaluator

    def to_dict(self, serialize=False):
        """Returns the model properties as a dict"""
        result = {}

        def convert(x):
            if hasattr(x, "to_dict"):
                args = getfullargspec(x.to_dict).args
                if len(args) == 1:
                    return x.to_dict()
                else:
                    return x.to_dict(serialize)
            else:
                return x

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            attr = self.attribute_map.get(attr, attr) if serialize else attr
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: convert(x),
                    value
                ))
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], convert(item[1])),
                    value.items()
                ))
            else:
                result[attr] = convert(value)

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1TFJob):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1TFJob):
            return True

        return self.to_dict() != other.to_dict()