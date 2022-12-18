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


class V1RunSettings(object):
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
        'namespace': 'str',
        'agent': 'V1SettingsCatalog',
        'queue': 'V1SettingsCatalog',
        'artifacts_store': 'V1SettingsCatalog',
        'tensorboard': 'object',
        'build': 'object',
        'component': 'object',
        'models': 'list[V1RunReferenceCatalog]',
        'artifacts': 'list[V1RunReferenceCatalog]'
    }

    attribute_map = {
        'namespace': 'namespace',
        'agent': 'agent',
        'queue': 'queue',
        'artifacts_store': 'artifacts_store',
        'tensorboard': 'tensorboard',
        'build': 'build',
        'component': 'component',
        'models': 'models',
        'artifacts': 'artifacts'
    }

    def __init__(self, namespace=None, agent=None, queue=None, artifacts_store=None, tensorboard=None, build=None, component=None, models=None, artifacts=None, local_vars_configuration=None):  # noqa: E501
        """V1RunSettings - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._namespace = None
        self._agent = None
        self._queue = None
        self._artifacts_store = None
        self._tensorboard = None
        self._build = None
        self._component = None
        self._models = None
        self._artifacts = None
        self.discriminator = None

        if namespace is not None:
            self.namespace = namespace
        if agent is not None:
            self.agent = agent
        if queue is not None:
            self.queue = queue
        if artifacts_store is not None:
            self.artifacts_store = artifacts_store
        if tensorboard is not None:
            self.tensorboard = tensorboard
        if build is not None:
            self.build = build
        if component is not None:
            self.component = component
        if models is not None:
            self.models = models
        if artifacts is not None:
            self.artifacts = artifacts

    @property
    def namespace(self):
        """Gets the namespace of this V1RunSettings.  # noqa: E501


        :return: The namespace of this V1RunSettings.  # noqa: E501
        :rtype: str
        """
        return self._namespace

    @namespace.setter
    def namespace(self, namespace):
        """Sets the namespace of this V1RunSettings.


        :param namespace: The namespace of this V1RunSettings.  # noqa: E501
        :type namespace: str
        """

        self._namespace = namespace

    @property
    def agent(self):
        """Gets the agent of this V1RunSettings.  # noqa: E501


        :return: The agent of this V1RunSettings.  # noqa: E501
        :rtype: V1SettingsCatalog
        """
        return self._agent

    @agent.setter
    def agent(self, agent):
        """Sets the agent of this V1RunSettings.


        :param agent: The agent of this V1RunSettings.  # noqa: E501
        :type agent: V1SettingsCatalog
        """

        self._agent = agent

    @property
    def queue(self):
        """Gets the queue of this V1RunSettings.  # noqa: E501


        :return: The queue of this V1RunSettings.  # noqa: E501
        :rtype: V1SettingsCatalog
        """
        return self._queue

    @queue.setter
    def queue(self, queue):
        """Sets the queue of this V1RunSettings.


        :param queue: The queue of this V1RunSettings.  # noqa: E501
        :type queue: V1SettingsCatalog
        """

        self._queue = queue

    @property
    def artifacts_store(self):
        """Gets the artifacts_store of this V1RunSettings.  # noqa: E501


        :return: The artifacts_store of this V1RunSettings.  # noqa: E501
        :rtype: V1SettingsCatalog
        """
        return self._artifacts_store

    @artifacts_store.setter
    def artifacts_store(self, artifacts_store):
        """Sets the artifacts_store of this V1RunSettings.


        :param artifacts_store: The artifacts_store of this V1RunSettings.  # noqa: E501
        :type artifacts_store: V1SettingsCatalog
        """

        self._artifacts_store = artifacts_store

    @property
    def tensorboard(self):
        """Gets the tensorboard of this V1RunSettings.  # noqa: E501


        :return: The tensorboard of this V1RunSettings.  # noqa: E501
        :rtype: object
        """
        return self._tensorboard

    @tensorboard.setter
    def tensorboard(self, tensorboard):
        """Sets the tensorboard of this V1RunSettings.


        :param tensorboard: The tensorboard of this V1RunSettings.  # noqa: E501
        :type tensorboard: object
        """

        self._tensorboard = tensorboard

    @property
    def build(self):
        """Gets the build of this V1RunSettings.  # noqa: E501


        :return: The build of this V1RunSettings.  # noqa: E501
        :rtype: object
        """
        return self._build

    @build.setter
    def build(self, build):
        """Sets the build of this V1RunSettings.


        :param build: The build of this V1RunSettings.  # noqa: E501
        :type build: object
        """

        self._build = build

    @property
    def component(self):
        """Gets the component of this V1RunSettings.  # noqa: E501


        :return: The component of this V1RunSettings.  # noqa: E501
        :rtype: object
        """
        return self._component

    @component.setter
    def component(self, component):
        """Sets the component of this V1RunSettings.


        :param component: The component of this V1RunSettings.  # noqa: E501
        :type component: object
        """

        self._component = component

    @property
    def models(self):
        """Gets the models of this V1RunSettings.  # noqa: E501


        :return: The models of this V1RunSettings.  # noqa: E501
        :rtype: list[V1RunReferenceCatalog]
        """
        return self._models

    @models.setter
    def models(self, models):
        """Sets the models of this V1RunSettings.


        :param models: The models of this V1RunSettings.  # noqa: E501
        :type models: list[V1RunReferenceCatalog]
        """

        self._models = models

    @property
    def artifacts(self):
        """Gets the artifacts of this V1RunSettings.  # noqa: E501


        :return: The artifacts of this V1RunSettings.  # noqa: E501
        :rtype: list[V1RunReferenceCatalog]
        """
        return self._artifacts

    @artifacts.setter
    def artifacts(self, artifacts):
        """Sets the artifacts of this V1RunSettings.


        :param artifacts: The artifacts of this V1RunSettings.  # noqa: E501
        :type artifacts: list[V1RunReferenceCatalog]
        """

        self._artifacts = artifacts

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
        if not isinstance(other, V1RunSettings):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1RunSettings):
            return True

        return self.to_dict() != other.to_dict()
