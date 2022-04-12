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


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from polyaxon_sdk.api_client import ApiClient
from polyaxon_sdk.exceptions import (  # noqa: F401
    ApiTypeError,
    ApiValueError
)


class ArtifactsStoresV1Api(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def upload_artifact(self, owner, uuid, uploadfile, **kwargs):  # noqa: E501
        """Upload artifact to a store  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.upload_artifact(owner, uuid, uploadfile, async_req=True)
        >>> result = thread.get()

        :param owner: Owner of the namespace (required)
        :type owner: str
        :param uuid: Unique integer identifier of the entity (required)
        :type uuid: str
        :param uploadfile: The file to upload. (required)
        :type uploadfile: file
        :param path: File path query params.
        :type path: str
        :param overwrite: File path query params.
        :type overwrite: bool
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: None
        """
        kwargs['_return_http_data_only'] = True
        return self.upload_artifact_with_http_info(owner, uuid, uploadfile, **kwargs)  # noqa: E501

    def upload_artifact_with_http_info(self, owner, uuid, uploadfile, **kwargs):  # noqa: E501
        """Upload artifact to a store  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.upload_artifact_with_http_info(owner, uuid, uploadfile, async_req=True)
        >>> result = thread.get()

        :param owner: Owner of the namespace (required)
        :type owner: str
        :param uuid: Unique integer identifier of the entity (required)
        :type uuid: str
        :param uploadfile: The file to upload. (required)
        :type uploadfile: file
        :param path: File path query params.
        :type path: str
        :param overwrite: File path query params.
        :type overwrite: bool
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _return_http_data_only: response data without head status code
                                       and headers
        :type _return_http_data_only: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :type _request_auth: dict, optional
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: None
        """

        local_var_params = locals()

        all_params = [
            'owner',
            'uuid',
            'uploadfile',
            'path',
            'overwrite'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout',
                '_request_auth'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method upload_artifact" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'owner' is set
        if self.api_client.client_side_validation and ('owner' not in local_var_params or  # noqa: E501
                                                        local_var_params['owner'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `owner` when calling `upload_artifact`")  # noqa: E501
        # verify the required parameter 'uuid' is set
        if self.api_client.client_side_validation and ('uuid' not in local_var_params or  # noqa: E501
                                                        local_var_params['uuid'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `uuid` when calling `upload_artifact`")  # noqa: E501
        # verify the required parameter 'uploadfile' is set
        if self.api_client.client_side_validation and ('uploadfile' not in local_var_params or  # noqa: E501
                                                        local_var_params['uploadfile'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `uploadfile` when calling `upload_artifact`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'owner' in local_var_params:
            path_params['owner'] = local_var_params['owner']  # noqa: E501
        if 'uuid' in local_var_params:
            path_params['uuid'] = local_var_params['uuid']  # noqa: E501

        query_params = []
        if 'path' in local_var_params and local_var_params['path'] is not None:  # noqa: E501
            query_params.append(('path', local_var_params['path']))  # noqa: E501
        if 'overwrite' in local_var_params and local_var_params['overwrite'] is not None:  # noqa: E501
            query_params.append(('overwrite', local_var_params['overwrite']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}
        if 'uploadfile' in local_var_params:
            local_var_files['uploadfile'] = local_var_params['uploadfile']  # noqa: E501

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['multipart/form-data'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKey']  # noqa: E501

        response_types_map = {}

        return self.api_client.call_api(
            '/api/v1/catalogs/{owner}/artifacts/{uuid}/upload', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_types_map=response_types_map,
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats,
            _request_auth=local_var_params.get('_request_auth'))
