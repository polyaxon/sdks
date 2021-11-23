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

    The version of the OpenAPI document: 1.13.0-rc3
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


class V1ComponentHub(object):
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
        'uuid': 'str',
        'owner': 'str',
        'name': 'str',
        'description': 'str',
        'tags': 'list[str]',
        'is_public': 'bool',
        'bookmarked': 'bool',
        'live_state': 'int',
        'created_at': 'datetime',
        'updated_at': 'datetime',
        'readme': 'str',
        'settings': 'V1ComponentHubSettings',
        'role': 'str'
    }

    attribute_map = {
        'uuid': 'uuid',
        'owner': 'owner',
        'name': 'name',
        'description': 'description',
        'tags': 'tags',
        'is_public': 'is_public',
        'bookmarked': 'bookmarked',
        'live_state': 'live_state',
        'created_at': 'created_at',
        'updated_at': 'updated_at',
        'readme': 'readme',
        'settings': 'settings',
        'role': 'role'
    }

    def __init__(self, uuid=None, owner=None, name=None, description=None, tags=None, is_public=None, bookmarked=None, live_state=None, created_at=None, updated_at=None, readme=None, settings=None, role=None, local_vars_configuration=None):  # noqa: E501
        """V1ComponentHub - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._uuid = None
        self._owner = None
        self._name = None
        self._description = None
        self._tags = None
        self._is_public = None
        self._bookmarked = None
        self._live_state = None
        self._created_at = None
        self._updated_at = None
        self._readme = None
        self._settings = None
        self._role = None
        self.discriminator = None

        if uuid is not None:
            self.uuid = uuid
        if owner is not None:
            self.owner = owner
        if name is not None:
            self.name = name
        if description is not None:
            self.description = description
        if tags is not None:
            self.tags = tags
        if is_public is not None:
            self.is_public = is_public
        if bookmarked is not None:
            self.bookmarked = bookmarked
        if live_state is not None:
            self.live_state = live_state
        if created_at is not None:
            self.created_at = created_at
        if updated_at is not None:
            self.updated_at = updated_at
        if readme is not None:
            self.readme = readme
        if settings is not None:
            self.settings = settings
        if role is not None:
            self.role = role

    @property
    def uuid(self):
        """Gets the uuid of this V1ComponentHub.  # noqa: E501


        :return: The uuid of this V1ComponentHub.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this V1ComponentHub.


        :param uuid: The uuid of this V1ComponentHub.  # noqa: E501
        :type uuid: str
        """

        self._uuid = uuid

    @property
    def owner(self):
        """Gets the owner of this V1ComponentHub.  # noqa: E501


        :return: The owner of this V1ComponentHub.  # noqa: E501
        :rtype: str
        """
        return self._owner

    @owner.setter
    def owner(self, owner):
        """Sets the owner of this V1ComponentHub.


        :param owner: The owner of this V1ComponentHub.  # noqa: E501
        :type owner: str
        """

        self._owner = owner

    @property
    def name(self):
        """Gets the name of this V1ComponentHub.  # noqa: E501


        :return: The name of this V1ComponentHub.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1ComponentHub.


        :param name: The name of this V1ComponentHub.  # noqa: E501
        :type name: str
        """

        self._name = name

    @property
    def description(self):
        """Gets the description of this V1ComponentHub.  # noqa: E501


        :return: The description of this V1ComponentHub.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this V1ComponentHub.


        :param description: The description of this V1ComponentHub.  # noqa: E501
        :type description: str
        """

        self._description = description

    @property
    def tags(self):
        """Gets the tags of this V1ComponentHub.  # noqa: E501


        :return: The tags of this V1ComponentHub.  # noqa: E501
        :rtype: list[str]
        """
        return self._tags

    @tags.setter
    def tags(self, tags):
        """Sets the tags of this V1ComponentHub.


        :param tags: The tags of this V1ComponentHub.  # noqa: E501
        :type tags: list[str]
        """

        self._tags = tags

    @property
    def is_public(self):
        """Gets the is_public of this V1ComponentHub.  # noqa: E501


        :return: The is_public of this V1ComponentHub.  # noqa: E501
        :rtype: bool
        """
        return self._is_public

    @is_public.setter
    def is_public(self, is_public):
        """Sets the is_public of this V1ComponentHub.


        :param is_public: The is_public of this V1ComponentHub.  # noqa: E501
        :type is_public: bool
        """

        self._is_public = is_public

    @property
    def bookmarked(self):
        """Gets the bookmarked of this V1ComponentHub.  # noqa: E501


        :return: The bookmarked of this V1ComponentHub.  # noqa: E501
        :rtype: bool
        """
        return self._bookmarked

    @bookmarked.setter
    def bookmarked(self, bookmarked):
        """Sets the bookmarked of this V1ComponentHub.


        :param bookmarked: The bookmarked of this V1ComponentHub.  # noqa: E501
        :type bookmarked: bool
        """

        self._bookmarked = bookmarked

    @property
    def live_state(self):
        """Gets the live_state of this V1ComponentHub.  # noqa: E501


        :return: The live_state of this V1ComponentHub.  # noqa: E501
        :rtype: int
        """
        return self._live_state

    @live_state.setter
    def live_state(self, live_state):
        """Sets the live_state of this V1ComponentHub.


        :param live_state: The live_state of this V1ComponentHub.  # noqa: E501
        :type live_state: int
        """

        self._live_state = live_state

    @property
    def created_at(self):
        """Gets the created_at of this V1ComponentHub.  # noqa: E501


        :return: The created_at of this V1ComponentHub.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this V1ComponentHub.


        :param created_at: The created_at of this V1ComponentHub.  # noqa: E501
        :type created_at: datetime
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this V1ComponentHub.  # noqa: E501


        :return: The updated_at of this V1ComponentHub.  # noqa: E501
        :rtype: datetime
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this V1ComponentHub.


        :param updated_at: The updated_at of this V1ComponentHub.  # noqa: E501
        :type updated_at: datetime
        """

        self._updated_at = updated_at

    @property
    def readme(self):
        """Gets the readme of this V1ComponentHub.  # noqa: E501


        :return: The readme of this V1ComponentHub.  # noqa: E501
        :rtype: str
        """
        return self._readme

    @readme.setter
    def readme(self, readme):
        """Sets the readme of this V1ComponentHub.


        :param readme: The readme of this V1ComponentHub.  # noqa: E501
        :type readme: str
        """

        self._readme = readme

    @property
    def settings(self):
        """Gets the settings of this V1ComponentHub.  # noqa: E501


        :return: The settings of this V1ComponentHub.  # noqa: E501
        :rtype: V1ComponentHubSettings
        """
        return self._settings

    @settings.setter
    def settings(self, settings):
        """Sets the settings of this V1ComponentHub.


        :param settings: The settings of this V1ComponentHub.  # noqa: E501
        :type settings: V1ComponentHubSettings
        """

        self._settings = settings

    @property
    def role(self):
        """Gets the role of this V1ComponentHub.  # noqa: E501


        :return: The role of this V1ComponentHub.  # noqa: E501
        :rtype: str
        """
        return self._role

    @role.setter
    def role(self, role):
        """Sets the role of this V1ComponentHub.


        :param role: The role of this V1ComponentHub.  # noqa: E501
        :type role: str
        """

        self._role = role

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
        if not isinstance(other, V1ComponentHub):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1ComponentHub):
            return True

        return self.to_dict() != other.to_dict()
