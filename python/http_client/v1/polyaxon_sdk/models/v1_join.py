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

    The version of the OpenAPI document: 1.17.1
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


class V1Join(object):
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
        'ref': 'str',
        'query': 'str',
        'sort': 'str',
        'limit': 'int',
        'offset': 'int',
        'params': 'dict(str, V1JoinParam)'
    }

    attribute_map = {
        'ref': 'ref',
        'query': 'query',
        'sort': 'sort',
        'limit': 'limit',
        'offset': 'offset',
        'params': 'params'
    }

    def __init__(self, ref=None, query=None, sort=None, limit=None, offset=None, params=None, local_vars_configuration=None):  # noqa: E501
        """V1Join - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._ref = None
        self._query = None
        self._sort = None
        self._limit = None
        self._offset = None
        self._params = None
        self.discriminator = None

        if ref is not None:
            self.ref = ref
        if query is not None:
            self.query = query
        if sort is not None:
            self.sort = sort
        if limit is not None:
            self.limit = limit
        if offset is not None:
            self.offset = offset
        if params is not None:
            self.params = params

    @property
    def ref(self):
        """Gets the ref of this V1Join.  # noqa: E501


        :return: The ref of this V1Join.  # noqa: E501
        :rtype: str
        """
        return self._ref

    @ref.setter
    def ref(self, ref):
        """Sets the ref of this V1Join.


        :param ref: The ref of this V1Join.  # noqa: E501
        :type ref: str
        """

        self._ref = ref

    @property
    def query(self):
        """Gets the query of this V1Join.  # noqa: E501


        :return: The query of this V1Join.  # noqa: E501
        :rtype: str
        """
        return self._query

    @query.setter
    def query(self, query):
        """Sets the query of this V1Join.


        :param query: The query of this V1Join.  # noqa: E501
        :type query: str
        """

        self._query = query

    @property
    def sort(self):
        """Gets the sort of this V1Join.  # noqa: E501


        :return: The sort of this V1Join.  # noqa: E501
        :rtype: str
        """
        return self._sort

    @sort.setter
    def sort(self, sort):
        """Sets the sort of this V1Join.


        :param sort: The sort of this V1Join.  # noqa: E501
        :type sort: str
        """

        self._sort = sort

    @property
    def limit(self):
        """Gets the limit of this V1Join.  # noqa: E501


        :return: The limit of this V1Join.  # noqa: E501
        :rtype: int
        """
        return self._limit

    @limit.setter
    def limit(self, limit):
        """Sets the limit of this V1Join.


        :param limit: The limit of this V1Join.  # noqa: E501
        :type limit: int
        """

        self._limit = limit

    @property
    def offset(self):
        """Gets the offset of this V1Join.  # noqa: E501


        :return: The offset of this V1Join.  # noqa: E501
        :rtype: int
        """
        return self._offset

    @offset.setter
    def offset(self, offset):
        """Sets the offset of this V1Join.


        :param offset: The offset of this V1Join.  # noqa: E501
        :type offset: int
        """

        self._offset = offset

    @property
    def params(self):
        """Gets the params of this V1Join.  # noqa: E501


        :return: The params of this V1Join.  # noqa: E501
        :rtype: dict(str, V1JoinParam)
        """
        return self._params

    @params.setter
    def params(self, params):
        """Sets the params of this V1Join.


        :param params: The params of this V1Join.  # noqa: E501
        :type params: dict(str, V1JoinParam)
        """

        self._params = params

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
        if not isinstance(other, V1Join):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Join):
            return True

        return self.to_dict() != other.to_dict()
