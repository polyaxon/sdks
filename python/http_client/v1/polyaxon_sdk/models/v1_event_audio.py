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

    The version of the OpenAPI document: 1.13.0
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


class V1EventAudio(object):
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
        'sample_rate': 'float',
        'num_channels': 'int',
        'length_frames': 'int',
        'content_type': 'str',
        'path': 'str'
    }

    attribute_map = {
        'sample_rate': 'sample_rate',
        'num_channels': 'num_channels',
        'length_frames': 'length_frames',
        'content_type': 'content_type',
        'path': 'path'
    }

    def __init__(self, sample_rate=None, num_channels=None, length_frames=None, content_type=None, path=None, local_vars_configuration=None):  # noqa: E501
        """V1EventAudio - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._sample_rate = None
        self._num_channels = None
        self._length_frames = None
        self._content_type = None
        self._path = None
        self.discriminator = None

        if sample_rate is not None:
            self.sample_rate = sample_rate
        if num_channels is not None:
            self.num_channels = num_channels
        if length_frames is not None:
            self.length_frames = length_frames
        if content_type is not None:
            self.content_type = content_type
        if path is not None:
            self.path = path

    @property
    def sample_rate(self):
        """Gets the sample_rate of this V1EventAudio.  # noqa: E501

        Sample rate of the audio in Hz.  # noqa: E501

        :return: The sample_rate of this V1EventAudio.  # noqa: E501
        :rtype: float
        """
        return self._sample_rate

    @sample_rate.setter
    def sample_rate(self, sample_rate):
        """Sets the sample_rate of this V1EventAudio.

        Sample rate of the audio in Hz.  # noqa: E501

        :param sample_rate: The sample_rate of this V1EventAudio.  # noqa: E501
        :type sample_rate: float
        """

        self._sample_rate = sample_rate

    @property
    def num_channels(self):
        """Gets the num_channels of this V1EventAudio.  # noqa: E501

        Number of channels of audio.  # noqa: E501

        :return: The num_channels of this V1EventAudio.  # noqa: E501
        :rtype: int
        """
        return self._num_channels

    @num_channels.setter
    def num_channels(self, num_channels):
        """Sets the num_channels of this V1EventAudio.

        Number of channels of audio.  # noqa: E501

        :param num_channels: The num_channels of this V1EventAudio.  # noqa: E501
        :type num_channels: int
        """

        self._num_channels = num_channels

    @property
    def length_frames(self):
        """Gets the length_frames of this V1EventAudio.  # noqa: E501

        Length of the audio in frames (samples per channel).  # noqa: E501

        :return: The length_frames of this V1EventAudio.  # noqa: E501
        :rtype: int
        """
        return self._length_frames

    @length_frames.setter
    def length_frames(self, length_frames):
        """Sets the length_frames of this V1EventAudio.

        Length of the audio in frames (samples per channel).  # noqa: E501

        :param length_frames: The length_frames of this V1EventAudio.  # noqa: E501
        :type length_frames: int
        """

        self._length_frames = length_frames

    @property
    def content_type(self):
        """Gets the content_type of this V1EventAudio.  # noqa: E501


        :return: The content_type of this V1EventAudio.  # noqa: E501
        :rtype: str
        """
        return self._content_type

    @content_type.setter
    def content_type(self, content_type):
        """Sets the content_type of this V1EventAudio.


        :param content_type: The content_type of this V1EventAudio.  # noqa: E501
        :type content_type: str
        """

        self._content_type = content_type

    @property
    def path(self):
        """Gets the path of this V1EventAudio.  # noqa: E501


        :return: The path of this V1EventAudio.  # noqa: E501
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this V1EventAudio.


        :param path: The path of this V1EventAudio.  # noqa: E501
        :type path: str
        """

        self._path = path

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
        if not isinstance(other, V1EventAudio):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1EventAudio):
            return True

        return self.to_dict() != other.to_dict()
