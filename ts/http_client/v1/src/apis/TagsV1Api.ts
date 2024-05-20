/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.2.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RuntimeError,
  V1EntitiesTags,
  V1ListTagsResponse,
  V1Tag,
} from '../models';
import {
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1EntitiesTagsFromJSON,
    V1EntitiesTagsToJSON,
    V1ListTagsResponseFromJSON,
    V1ListTagsResponseToJSON,
    V1TagFromJSON,
    V1TagToJSON,
} from '../models';

export interface CreateTagRequest {
    owner: string;
    body: V1Tag;
}

export interface DeleteTagRequest {
    owner: string;
    uuid: string;
    cascade?: boolean;
}

export interface GetTagRequest {
    owner: string;
    uuid: string;
}

export interface ListTagsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface LoadTagsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface PatchTagRequest {
    owner: string;
    tagUuid: string;
    body: V1Tag;
}

export interface SyncTagsRequest {
    owner: string;
    body: V1EntitiesTags;
}

export interface UpdateTagRequest {
    owner: string;
    tagUuid: string;
    body: V1Tag;
}

/**
 * 
 */
export class TagsV1Api extends runtime.BaseAPI {

    /**
     * Create tag
     */
    async createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Tag>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createTag.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/tags`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1TagToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TagFromJSON(jsonValue));
    }

    /**
     * Create tag
     */
    async createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Tag> {
        const response = await this.createTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete tag
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteTag.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.cascade !== undefined) {
            queryParameters['cascade'] = requestParameters.cascade;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/tags/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete tag
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTagRaw(requestParameters, initOverrides);
    }

    /**
     * Get tag
     */
    async getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Tag>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getTag.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/tags/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TagFromJSON(jsonValue));
    }

    /**
     * Get tag
     */
    async getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Tag> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List tags
     */
    async listTagsRaw(requestParameters: ListTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListTagsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listTags.');
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
            path: `/api/v1/orgs/{owner}/tags`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListTagsResponseFromJSON(jsonValue));
    }

    /**
     * List tags
     */
    async listTags(requestParameters: ListTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListTagsResponse> {
        const response = await this.listTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Load tags
     */
    async loadTagsRaw(requestParameters: LoadTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling loadTags.');
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
            path: `/api/v1/orgs/{owner}/tags/load`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Load tags
     */
    async loadTags(requestParameters: LoadTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.loadTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch tag
     */
    async patchTagRaw(requestParameters: PatchTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Tag>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchTag.');
        }

        if (requestParameters.tagUuid === null || requestParameters.tagUuid === undefined) {
            throw new runtime.RequiredError('tagUuid','Required parameter requestParameters.tagUuid was null or undefined when calling patchTag.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/tags/{tag.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"tag.uuid"}}`, encodeURIComponent(String(requestParameters.tagUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1TagToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TagFromJSON(jsonValue));
    }

    /**
     * Patch tag
     */
    async patchTag(requestParameters: PatchTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Tag> {
        const response = await this.patchTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sync tags
     */
    async syncTagsRaw(requestParameters: SyncTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling syncTags.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling syncTags.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/tags/sync`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1EntitiesTagsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sync tags
     */
    async syncTags(requestParameters: SyncTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.syncTagsRaw(requestParameters, initOverrides);
    }

    /**
     * Update tag
     */
    async updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Tag>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateTag.');
        }

        if (requestParameters.tagUuid === null || requestParameters.tagUuid === undefined) {
            throw new runtime.RequiredError('tagUuid','Required parameter requestParameters.tagUuid was null or undefined when calling updateTag.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/tags/{tag.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"tag.uuid"}}`, encodeURIComponent(String(requestParameters.tagUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1TagToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TagFromJSON(jsonValue));
    }

    /**
     * Update tag
     */
    async updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Tag> {
        const response = await this.updateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
