// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.15.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ConnectionResponse,
    V1ConnectionResponseFromJSON,
    V1ConnectionResponseToJSON,
    V1ListConnectionsResponse,
    V1ListConnectionsResponseFromJSON,
    V1ListConnectionsResponseToJSON,
} from '../models';

export interface CreateConnectionRequest {
    owner: string;
    body: V1ConnectionResponse;
}

export interface DeleteConnectionRequest {
    owner: string;
    uuid: string;
}

export interface GetConnectionRequest {
    owner: string;
    uuid: string;
}

export interface ListConnectionNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface ListConnectionsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface PatchConnectionRequest {
    owner: string;
    connectionUuid: string;
    body: V1ConnectionResponse;
}

export interface UpdateConnectionRequest {
    owner: string;
    connectionUuid: string;
    body: V1ConnectionResponse;
}

/**
 * 
 */
export class ConnectionsV1Api extends runtime.BaseAPI {

    /**
     * Create connection
     */
    async createConnectionRaw(requestParameters: CreateConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ConnectionResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createConnection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1ConnectionResponseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ConnectionResponseFromJSON(jsonValue));
    }

    /**
     * Create connection
     */
    async createConnection(requestParameters: CreateConnectionRequest, initOverrides?: RequestInit): Promise<V1ConnectionResponse> {
        const response = await this.createConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete connection
     */
    async deleteConnectionRaw(requestParameters: DeleteConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteConnection.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete connection
     */
    async deleteConnection(requestParameters: DeleteConnectionRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteConnectionRaw(requestParameters, initOverrides);
    }

    /**
     * Get connection
     */
    async getConnectionRaw(requestParameters: GetConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ConnectionResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getConnection.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ConnectionResponseFromJSON(jsonValue));
    }

    /**
     * Get connection
     */
    async getConnection(requestParameters: GetConnectionRequest, initOverrides?: RequestInit): Promise<V1ConnectionResponse> {
        const response = await this.getConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List connections names
     */
    async listConnectionNamesRaw(requestParameters: ListConnectionNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListConnectionsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listConnectionNames.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.bookmarks !== undefined) {
            queryParameters['bookmarks'] = requestParameters.bookmarks;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        if (requestParameters.noPage !== undefined) {
            queryParameters['no_page'] = requestParameters.noPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListConnectionsResponseFromJSON(jsonValue));
    }

    /**
     * List connections names
     */
    async listConnectionNames(requestParameters: ListConnectionNamesRequest, initOverrides?: RequestInit): Promise<V1ListConnectionsResponse> {
        const response = await this.listConnectionNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List connections
     */
    async listConnectionsRaw(requestParameters: ListConnectionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListConnectionsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listConnections.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.bookmarks !== undefined) {
            queryParameters['bookmarks'] = requestParameters.bookmarks;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        if (requestParameters.noPage !== undefined) {
            queryParameters['no_page'] = requestParameters.noPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListConnectionsResponseFromJSON(jsonValue));
    }

    /**
     * List connections
     */
    async listConnections(requestParameters: ListConnectionsRequest, initOverrides?: RequestInit): Promise<V1ListConnectionsResponse> {
        const response = await this.listConnectionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch connection
     */
    async patchConnectionRaw(requestParameters: PatchConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ConnectionResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchConnection.');
        }

        if (requestParameters.connectionUuid === null || requestParameters.connectionUuid === undefined) {
            throw new runtime.RequiredError('connectionUuid','Required parameter requestParameters.connectionUuid was null or undefined when calling patchConnection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections/{connection.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"connection.uuid"}}`, encodeURIComponent(String(requestParameters.connectionUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1ConnectionResponseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ConnectionResponseFromJSON(jsonValue));
    }

    /**
     * Patch connection
     */
    async patchConnection(requestParameters: PatchConnectionRequest, initOverrides?: RequestInit): Promise<V1ConnectionResponse> {
        const response = await this.patchConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update connection
     */
    async updateConnectionRaw(requestParameters: UpdateConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ConnectionResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateConnection.');
        }

        if (requestParameters.connectionUuid === null || requestParameters.connectionUuid === undefined) {
            throw new runtime.RequiredError('connectionUuid','Required parameter requestParameters.connectionUuid was null or undefined when calling updateConnection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/connections/{connection.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"connection.uuid"}}`, encodeURIComponent(String(requestParameters.connectionUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1ConnectionResponseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ConnectionResponseFromJSON(jsonValue));
    }

    /**
     * Update connection
     */
    async updateConnection(requestParameters: UpdateConnectionRequest, initOverrides?: RequestInit): Promise<V1ConnectionResponse> {
        const response = await this.updateConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
