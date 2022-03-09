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

    The version of the OpenAPI document: 1.16.1
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


class V1Schedule(object):
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
        'cron': 'V1CronSchedule',
        'datetime': 'V1DateTimeSchedule',
        'interval': 'V1IntervalSchedule'
    }

    attribute_map = {
        'cron': 'cron',
        'datetime': 'datetime',
        'interval': 'interval'
    }

    def __init__(self, cron=None, datetime=None, interval=None, local_vars_configuration=None):  # noqa: E501
        """V1Schedule - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._cron = None
        self._datetime = None
        self._interval = None
        self.discriminator = None

        if cron is not None:
            self.cron = cron
        if datetime is not None:
            self.datetime = datetime
        if interval is not None:
            self.interval = interval

    @property
    def cron(self):
        """Gets the cron of this V1Schedule.  # noqa: E501


        :return: The cron of this V1Schedule.  # noqa: E501
        :rtype: V1CronSchedule
        """
        return self._cron

    @cron.setter
    def cron(self, cron):
        """Sets the cron of this V1Schedule.


        :param cron: The cron of this V1Schedule.  # noqa: E501
        :type cron: V1CronSchedule
        """

        self._cron = cron

    @property
    def datetime(self):
        """Gets the datetime of this V1Schedule.  # noqa: E501


        :return: The datetime of this V1Schedule.  # noqa: E501
        :rtype: V1DateTimeSchedule
        """
        return self._datetime

    @datetime.setter
    def datetime(self, datetime):
        """Sets the datetime of this V1Schedule.


        :param datetime: The datetime of this V1Schedule.  # noqa: E501
        :type datetime: V1DateTimeSchedule
        """

        self._datetime = datetime

    @property
    def interval(self):
        """Gets the interval of this V1Schedule.  # noqa: E501


        :return: The interval of this V1Schedule.  # noqa: E501
        :rtype: V1IntervalSchedule
        """
        return self._interval

    @interval.setter
    def interval(self, interval):
        """Sets the interval of this V1Schedule.


        :param interval: The interval of this V1Schedule.  # noqa: E501
        :type interval: V1IntervalSchedule
        """

        self._interval = interval

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
        if not isinstance(other, V1Schedule):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Schedule):
            return True

        return self.to_dict() != other.to_dict()
