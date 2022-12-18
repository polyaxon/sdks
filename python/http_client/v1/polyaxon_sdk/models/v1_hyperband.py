#!/usr/bin/python
#
# Copyright 2018-2022 Polyaxon, Inc.
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

    The version of the OpenAPI document: 1.21.0
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


class V1Hyperband(object):
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
        'params': 'dict(str, object)',
        'max_iterations': 'int',
        'eta': 'int',
        'resource': 'V1OptimizationResource',
        'metric': 'V1OptimizationMetric',
        'resume': 'bool',
        'seed': 'int',
        'concurrency': 'int',
        'tuner': 'V1Tuner',
        'early_stopping': 'list[object]'
    }

    attribute_map = {
        'kind': 'kind',
        'params': 'params',
        'max_iterations': 'maxIterations',
        'eta': 'eta',
        'resource': 'resource',
        'metric': 'metric',
        'resume': 'resume',
        'seed': 'seed',
        'concurrency': 'concurrency',
        'tuner': 'tuner',
        'early_stopping': 'earlyStopping'
    }

    def __init__(self, kind='hyperband', params=None, max_iterations=None, eta=None, resource=None, metric=None, resume=None, seed=None, concurrency=None, tuner=None, early_stopping=None, local_vars_configuration=None):  # noqa: E501
        """V1Hyperband - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._kind = None
        self._params = None
        self._max_iterations = None
        self._eta = None
        self._resource = None
        self._metric = None
        self._resume = None
        self._seed = None
        self._concurrency = None
        self._tuner = None
        self._early_stopping = None
        self.discriminator = None

        if kind is not None:
            self.kind = kind
        if params is not None:
            self.params = params
        if max_iterations is not None:
            self.max_iterations = max_iterations
        if eta is not None:
            self.eta = eta
        if resource is not None:
            self.resource = resource
        if metric is not None:
            self.metric = metric
        if resume is not None:
            self.resume = resume
        if seed is not None:
            self.seed = seed
        if concurrency is not None:
            self.concurrency = concurrency
        if tuner is not None:
            self.tuner = tuner
        if early_stopping is not None:
            self.early_stopping = early_stopping

    @property
    def kind(self):
        """Gets the kind of this V1Hyperband.  # noqa: E501


        :return: The kind of this V1Hyperband.  # noqa: E501
        :rtype: str
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1Hyperband.


        :param kind: The kind of this V1Hyperband.  # noqa: E501
        :type kind: str
        """

        self._kind = kind

    @property
    def params(self):
        """Gets the params of this V1Hyperband.  # noqa: E501


        :return: The params of this V1Hyperband.  # noqa: E501
        :rtype: dict(str, object)
        """
        return self._params

    @params.setter
    def params(self, params):
        """Sets the params of this V1Hyperband.


        :param params: The params of this V1Hyperband.  # noqa: E501
        :type params: dict(str, object)
        """

        self._params = params

    @property
    def max_iterations(self):
        """Gets the max_iterations of this V1Hyperband.  # noqa: E501


        :return: The max_iterations of this V1Hyperband.  # noqa: E501
        :rtype: int
        """
        return self._max_iterations

    @max_iterations.setter
    def max_iterations(self, max_iterations):
        """Sets the max_iterations of this V1Hyperband.


        :param max_iterations: The max_iterations of this V1Hyperband.  # noqa: E501
        :type max_iterations: int
        """

        self._max_iterations = max_iterations

    @property
    def eta(self):
        """Gets the eta of this V1Hyperband.  # noqa: E501


        :return: The eta of this V1Hyperband.  # noqa: E501
        :rtype: int
        """
        return self._eta

    @eta.setter
    def eta(self, eta):
        """Sets the eta of this V1Hyperband.


        :param eta: The eta of this V1Hyperband.  # noqa: E501
        :type eta: int
        """

        self._eta = eta

    @property
    def resource(self):
        """Gets the resource of this V1Hyperband.  # noqa: E501


        :return: The resource of this V1Hyperband.  # noqa: E501
        :rtype: V1OptimizationResource
        """
        return self._resource

    @resource.setter
    def resource(self, resource):
        """Sets the resource of this V1Hyperband.


        :param resource: The resource of this V1Hyperband.  # noqa: E501
        :type resource: V1OptimizationResource
        """

        self._resource = resource

    @property
    def metric(self):
        """Gets the metric of this V1Hyperband.  # noqa: E501


        :return: The metric of this V1Hyperband.  # noqa: E501
        :rtype: V1OptimizationMetric
        """
        return self._metric

    @metric.setter
    def metric(self, metric):
        """Sets the metric of this V1Hyperband.


        :param metric: The metric of this V1Hyperband.  # noqa: E501
        :type metric: V1OptimizationMetric
        """

        self._metric = metric

    @property
    def resume(self):
        """Gets the resume of this V1Hyperband.  # noqa: E501


        :return: The resume of this V1Hyperband.  # noqa: E501
        :rtype: bool
        """
        return self._resume

    @resume.setter
    def resume(self, resume):
        """Sets the resume of this V1Hyperband.


        :param resume: The resume of this V1Hyperband.  # noqa: E501
        :type resume: bool
        """

        self._resume = resume

    @property
    def seed(self):
        """Gets the seed of this V1Hyperband.  # noqa: E501


        :return: The seed of this V1Hyperband.  # noqa: E501
        :rtype: int
        """
        return self._seed

    @seed.setter
    def seed(self, seed):
        """Sets the seed of this V1Hyperband.


        :param seed: The seed of this V1Hyperband.  # noqa: E501
        :type seed: int
        """

        self._seed = seed

    @property
    def concurrency(self):
        """Gets the concurrency of this V1Hyperband.  # noqa: E501


        :return: The concurrency of this V1Hyperband.  # noqa: E501
        :rtype: int
        """
        return self._concurrency

    @concurrency.setter
    def concurrency(self, concurrency):
        """Sets the concurrency of this V1Hyperband.


        :param concurrency: The concurrency of this V1Hyperband.  # noqa: E501
        :type concurrency: int
        """

        self._concurrency = concurrency

    @property
    def tuner(self):
        """Gets the tuner of this V1Hyperband.  # noqa: E501


        :return: The tuner of this V1Hyperband.  # noqa: E501
        :rtype: V1Tuner
        """
        return self._tuner

    @tuner.setter
    def tuner(self, tuner):
        """Sets the tuner of this V1Hyperband.


        :param tuner: The tuner of this V1Hyperband.  # noqa: E501
        :type tuner: V1Tuner
        """

        self._tuner = tuner

    @property
    def early_stopping(self):
        """Gets the early_stopping of this V1Hyperband.  # noqa: E501


        :return: The early_stopping of this V1Hyperband.  # noqa: E501
        :rtype: list[object]
        """
        return self._early_stopping

    @early_stopping.setter
    def early_stopping(self, early_stopping):
        """Sets the early_stopping of this V1Hyperband.


        :param early_stopping: The early_stopping of this V1Hyperband.  # noqa: E501
        :type early_stopping: list[object]
        """

        self._early_stopping = early_stopping

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
        if not isinstance(other, V1Hyperband):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Hyperband):
            return True

        return self.to_dict() != other.to_dict()
