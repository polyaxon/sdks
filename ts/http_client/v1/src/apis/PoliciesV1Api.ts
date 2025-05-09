/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RuntimeError,
  V1ListPoliciesResponse,
  V1Policy,
} from '../models';
import {
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListPoliciesResponseFromJSON,
    V1ListPoliciesResponseToJSON,
    V1PolicyFromJSON,
    V1PolicyToJSON,
} from '../models';

export interface CreatePolicyRequest {
    owner: string;
    body: V1Policy;
}

export interface DeletePolicyRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface GetPolicyRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface ListPoliciesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface ListPolicyNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface PatchPolicyRequest {
    owner: string;
    policyUuid: string;
    body: V1Policy;
}

export interface UpdatePolicyRequest {
    owner: string;
    policyUuid: string;
    body: V1Policy;
}

/**
 *
 */
export class PoliciesV1Api extends runtime.BaseAPI {

    /**
     * Create Policy
     */
    async createPolicyRaw(requestParameters: CreatePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Policy>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createPolicy.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createPolicy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/policies`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1PolicyToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PolicyFromJSON(jsonValue));
    }

    /**
     * Create Policy
     */
    async createPolicy(requestParameters: CreatePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Policy> {
        const response = await this.createPolicyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete scheduling preset
     */
    async deletePolicyRaw(requestParameters: DeletePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deletePolicy.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deletePolicy.');
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
            path: `/api/v1/orgs/{owner}/policies/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete scheduling preset
     */
    async deletePolicy(requestParameters: DeletePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePolicyRaw(requestParameters, initOverrides);
    }

    /**
     * Get Policy
     */
    async getPolicyRaw(requestParameters: GetPolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Policy>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getPolicy.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getPolicy.');
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
            path: `/api/v1/orgs/{owner}/policies/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PolicyFromJSON(jsonValue));
    }

    /**
     * Get Policy
     */
    async getPolicy(requestParameters: GetPolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Policy> {
        const response = await this.getPolicyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Policies
     */
    async listPoliciesRaw(requestParameters: ListPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListPoliciesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listPolicies.');
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
            path: `/api/v1/orgs/{owner}/policies`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListPoliciesResponseFromJSON(jsonValue));
    }

    /**
     * List Policies
     */
    async listPolicies(requestParameters: ListPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListPoliciesResponse> {
        const response = await this.listPoliciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List scheduling policies names
     */
    async listPolicyNamesRaw(requestParameters: ListPolicyNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListPoliciesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listPolicyNames.');
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
            path: `/api/v1/orgs/{owner}/policies/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListPoliciesResponseFromJSON(jsonValue));
    }

    /**
     * List scheduling policies names
     */
    async listPolicyNames(requestParameters: ListPolicyNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListPoliciesResponse> {
        const response = await this.listPolicyNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch Policy
     */
    async patchPolicyRaw(requestParameters: PatchPolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Policy>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchPolicy.');
        }

        if (requestParameters.policyUuid === null || requestParameters.policyUuid === undefined) {
            throw new runtime.RequiredError('policyUuid','Required parameter requestParameters.policyUuid was null or undefined when calling patchPolicy.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchPolicy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/policies/{policy.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"policy.uuid"}}`, encodeURIComponent(String(requestParameters.policyUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1PolicyToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PolicyFromJSON(jsonValue));
    }

    /**
     * Patch Policy
     */
    async patchPolicy(requestParameters: PatchPolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Policy> {
        const response = await this.patchPolicyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Policy
     */
    async updatePolicyRaw(requestParameters: UpdatePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Policy>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updatePolicy.');
        }

        if (requestParameters.policyUuid === null || requestParameters.policyUuid === undefined) {
            throw new runtime.RequiredError('policyUuid','Required parameter requestParameters.policyUuid was null or undefined when calling updatePolicy.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePolicy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/policies/{policy.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"policy.uuid"}}`, encodeURIComponent(String(requestParameters.policyUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1PolicyToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1PolicyFromJSON(jsonValue));
    }

    /**
     * Update Policy
     */
    async updatePolicy(requestParameters: UpdatePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Policy> {
        const response = await this.updatePolicyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
