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

    The version of the OpenAPI document: 1.15.0
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


class V1FileType(object):
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
        'content': 'str',
        'filename': 'str',
        'chmod': 'str',
        'kind': 'str'
    }

    attribute_map = {
        'content': 'content',
        'filename': 'filename',
        'chmod': 'chmod',
        'kind': 'kind'
    }

    def __init__(self, content=None, filename=None, chmod=None, kind=None, local_vars_configuration=None):  # noqa: E501
        """V1FileType - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._content = None
        self._filename = None
        self._chmod = None
        self._kind = None
        self.discriminator = None

        if content is not None:
            self.content = content
        if filename is not None:
            self.filename = filename
        if chmod is not None:
            self.chmod = chmod
        if kind is not None:
            self.kind = kind

    @property
    def content(self):
        """Gets the content of this V1FileType.  # noqa: E501


        :return: The content of this V1FileType.  # noqa: E501
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this V1FileType.


        :param content: The content of this V1FileType.  # noqa: E501
        :type content: str
        """

        self._content = content

    @property
    def filename(self):
        """Gets the filename of this V1FileType.  # noqa: E501


        :return: The filename of this V1FileType.  # noqa: E501
        :rtype: str
        """
        return self._filename

    @filename.setter
    def filename(self, filename):
        """Sets the filename of this V1FileType.


        :param filename: The filename of this V1FileType.  # noqa: E501
        :type filename: str
        """

        self._filename = filename

    @property
    def chmod(self):
        """Gets the chmod of this V1FileType.  # noqa: E501


        :return: The chmod of this V1FileType.  # noqa: E501
        :rtype: str
        """
        return self._chmod

    @chmod.setter
    def chmod(self, chmod):
        """Sets the chmod of this V1FileType.


        :param chmod: The chmod of this V1FileType.  # noqa: E501
        :type chmod: str
        """

        self._chmod = chmod

    @property
    def kind(self):
        """Gets the kind of this V1FileType.  # noqa: E501


        :return: The kind of this V1FileType.  # noqa: E501
        :rtype: str
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1FileType.


        :param kind: The kind of this V1FileType.  # noqa: E501
        :type kind: str
        """

        self._kind = kind

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
        if not isinstance(other, V1FileType):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1FileType):
            return True

        return self.to_dict() != other.to_dict()
