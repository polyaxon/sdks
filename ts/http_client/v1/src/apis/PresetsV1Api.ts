// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 2.0.0-rc4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RuntimeError,
  V1ListPresetsResponse,
  V1Preset,
} from '../models';
import {
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListPresetsResponseFromJSON,
    V1ListPresetsResponseToJSON,
    V1PresetFromJSON,
    V1PresetToJSON,
} from '../models';

export interface CreatePresetRequest {
    owner: string;
    body: V1Preset;
}

export interface DeletePresetRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface GetPresetRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface ListPresetNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface ListPresetsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface PatchPresetRequest {
    owner: string;
    presetUuid: string;
    body: V1Preset;
}

export interface UpdatePresetRequest {
    owner: string;
    presetUuid: string;
    body: V1Preset;
}

/**
 * 
 */
export class PresetsV1Api extends runtime.BaseAPI {

    /**
     * Create scheduling presets
     */
    async createPresetRaw(requestParameters: CreatePresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Preset>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createPreset.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createPreset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/presets`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1PresetToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PresetFromJSON(jsonValue));
    }

    /**
     * Create scheduling presets
     */
    async createPreset(requestParameters: CreatePresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Preset> {
        const response = await this.createPresetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete scheduling preset
     */
    async deletePresetRaw(requestParameters: DeletePresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deletePreset.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deletePreset.');
        }

        const queryParameters: any = {};

        if (requestParameters.entity !== undefined) {
            queryParameters['entity'] = requestParameters.entity;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/presets/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete scheduling preset
     */
    async deletePreset(requestParameters: DeletePresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePresetRaw(requestParameters, initOverrides);
    }

    /**
     * Get scheduling preset
     */
    async getPresetRaw(requestParameters: GetPresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Preset>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getPreset.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getPreset.');
        }

        const queryParameters: any = {};

        if (requestParameters.entity !== undefined) {
            queryParameters['entity'] = requestParameters.entity;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/presets/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PresetFromJSON(jsonValue));
    }

    /**
     * Get scheduling preset
     */
    async getPreset(requestParameters: GetPresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Preset> {
        const response = await this.getPresetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List scheduling presets names
     */
    async listPresetNamesRaw(requestParameters: ListPresetNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListPresetsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listPresetNames.');
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
            path: `/api/v1/orgs/{owner}/presets/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListPresetsResponseFromJSON(jsonValue));
    }

    /**
     * List scheduling presets names
     */
    async listPresetNames(requestParameters: ListPresetNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListPresetsResponse> {
        const response = await this.listPresetNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List scheduling presets
     */
    async listPresetsRaw(requestParameters: ListPresetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListPresetsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listPresets.');
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
            path: `/api/v1/orgs/{owner}/presets`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListPresetsResponseFromJSON(jsonValue));
    }

    /**
     * List scheduling presets
     */
    async listPresets(requestParameters: ListPresetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListPresetsResponse> {
        const response = await this.listPresetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch scheduling preset
     */
    async patchPresetRaw(requestParameters: PatchPresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Preset>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchPreset.');
        }

        if (requestParameters.presetUuid === null || requestParameters.presetUuid === undefined) {
            throw new runtime.RequiredError('presetUuid','Required parameter requestParameters.presetUuid was null or undefined when calling patchPreset.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchPreset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/presets/{preset.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"preset.uuid"}}`, encodeURIComponent(String(requestParameters.presetUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1PresetToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PresetFromJSON(jsonValue));
    }

    /**
     * Patch scheduling preset
     */
    async patchPreset(requestParameters: PatchPresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Preset> {
        const response = await this.patchPresetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update scheduling preset
     */
    async updatePresetRaw(requestParameters: UpdatePresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Preset>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updatePreset.');
        }

        if (requestParameters.presetUuid === null || requestParameters.presetUuid === undefined) {
            throw new runtime.RequiredError('presetUuid','Required parameter requestParameters.presetUuid was null or undefined when calling updatePreset.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePreset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/presets/{preset.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"preset.uuid"}}`, encodeURIComponent(String(requestParameters.presetUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1PresetToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PresetFromJSON(jsonValue));
    }

    /**
     * Update scheduling preset
     */
    async updatePreset(requestParameters: UpdatePresetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Preset> {
        const response = await this.updatePresetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
