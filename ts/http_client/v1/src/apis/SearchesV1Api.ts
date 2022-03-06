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
 * The version of the OpenAPI document: 1.16.0
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
    V1ListSearchesResponse,
    V1ListSearchesResponseFromJSON,
    V1ListSearchesResponseToJSON,
    V1Search,
    V1SearchFromJSON,
    V1SearchToJSON,
} from '../models';

export interface CreateSearchRequest {
    owner: string;
    body: V1Search;
}

export interface DeleteSearchRequest {
    owner: string;
    uuid: string;
}

export interface GetSearchRequest {
    owner: string;
    uuid: string;
}

export interface ListSearchNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface ListSearchesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface PatchSearchRequest {
    owner: string;
    searchUuid: string;
    body: V1Search;
}

export interface UpdateSearchRequest {
    owner: string;
    searchUuid: string;
    body: V1Search;
}

/**
 * 
 */
export class SearchesV1Api extends runtime.BaseAPI {

    /**
     * Create search
     */
    async createSearchRaw(requestParameters: CreateSearchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createSearch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createSearch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/searches`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1SearchToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Create search
     */
    async createSearch(requestParameters: CreateSearchRequest, initOverrides?: RequestInit): Promise<V1Search> {
        const response = await this.createSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete search
     */
    async deleteSearchRaw(requestParameters: DeleteSearchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteSearch.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteSearch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/searches/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete search
     */
    async deleteSearch(requestParameters: DeleteSearchRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteSearchRaw(requestParameters, initOverrides);
    }

    /**
     * Get search
     */
    async getSearchRaw(requestParameters: GetSearchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getSearch.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getSearch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/searches/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Get search
     */
    async getSearch(requestParameters: GetSearchRequest, initOverrides?: RequestInit): Promise<V1Search> {
        const response = await this.getSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List search names
     */
    async listSearchNamesRaw(requestParameters: ListSearchNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListSearchesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listSearchNames.');
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
            path: `/api/v1/orgs/{owner}/searches/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListSearchesResponseFromJSON(jsonValue));
    }

    /**
     * List search names
     */
    async listSearchNames(requestParameters: ListSearchNamesRequest, initOverrides?: RequestInit): Promise<V1ListSearchesResponse> {
        const response = await this.listSearchNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List searches
     */
    async listSearchesRaw(requestParameters: ListSearchesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListSearchesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listSearches.');
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
            path: `/api/v1/orgs/{owner}/searches`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListSearchesResponseFromJSON(jsonValue));
    }

    /**
     * List searches
     */
    async listSearches(requestParameters: ListSearchesRequest, initOverrides?: RequestInit): Promise<V1ListSearchesResponse> {
        const response = await this.listSearchesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch search
     */
    async patchSearchRaw(requestParameters: PatchSearchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchSearch.');
        }

        if (requestParameters.searchUuid === null || requestParameters.searchUuid === undefined) {
            throw new runtime.RequiredError('searchUuid','Required parameter requestParameters.searchUuid was null or undefined when calling patchSearch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchSearch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/searches/{search.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"search.uuid"}}`, encodeURIComponent(String(requestParameters.searchUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1SearchToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Patch search
     */
    async patchSearch(requestParameters: PatchSearchRequest, initOverrides?: RequestInit): Promise<V1Search> {
        const response = await this.patchSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update search
     */
    async updateSearchRaw(requestParameters: UpdateSearchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateSearch.');
        }

        if (requestParameters.searchUuid === null || requestParameters.searchUuid === undefined) {
            throw new runtime.RequiredError('searchUuid','Required parameter requestParameters.searchUuid was null or undefined when calling updateSearch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateSearch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/searches/{search.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"search.uuid"}}`, encodeURIComponent(String(requestParameters.searchUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1SearchToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Update search
     */
    async updateSearch(requestParameters: UpdateSearchRequest, initOverrides?: RequestInit): Promise<V1Search> {
        const response = await this.updateSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
