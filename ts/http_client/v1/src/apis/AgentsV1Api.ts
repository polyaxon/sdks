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
    V1Agent,
    V1AgentFromJSON,
    V1AgentToJSON,
    V1AgentStateResponse,
    V1AgentStateResponseFromJSON,
    V1AgentStateResponseToJSON,
    V1AgentStatusBodyRequest,
    V1AgentStatusBodyRequestFromJSON,
    V1AgentStatusBodyRequestToJSON,
    V1ListAgentsResponse,
    V1ListAgentsResponseFromJSON,
    V1ListAgentsResponseToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
    V1Token,
    V1TokenFromJSON,
    V1TokenToJSON,
} from '../models';

export interface CreateAgentRequest {
    owner: string;
    body: V1Agent;
}

export interface CreateAgentStatusRequest {
    owner: string;
    uuid: string;
    body: V1AgentStatusBodyRequest;
}

export interface DeleteAgentRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface GetAgentRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface GetAgentConfigRequest {
    owner: string;
    uuid: string;
    entity?: string;
}

export interface GetAgentStateRequest {
    owner: string;
    uuid: string;
}

export interface GetAgentTokenRequest {
    owner: string;
    uuid: string;
}

export interface ListAgentNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface ListAgentsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    bookmarks?: boolean;
    mode?: string;
    noPage?: boolean;
}

export interface PatchAgentRequest {
    owner: string;
    agentUuid: string;
    body: V1Agent;
}

export interface PatchAgentTokenRequest {
    owner: string;
    entity: string;
    body: V1Token;
}

export interface SyncAgentRequest {
    owner: string;
    agentUuid: string;
    body: V1Agent;
}

export interface UpdateAgentRequest {
    owner: string;
    agentUuid: string;
    body: V1Agent;
}

export interface UpdateAgentConfigRequest {
    owner: string;
    agentUuid: string;
    body: V1Agent;
}

export interface UpdateAgentTokenRequest {
    owner: string;
    entity: string;
    body: V1Token;
}

/**
 * 
 */
export class AgentsV1Api extends runtime.BaseAPI {

    /**
     * Create agent
     */
    async createAgentRaw(requestParameters: CreateAgentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Agent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createAgent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAgent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1AgentToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
    }

    /**
     * Create agent
     */
    async createAgent(requestParameters: CreateAgentRequest, initOverrides?: RequestInit): Promise<V1Agent> {
        const response = await this.createAgentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create new agent status
     */
    async createAgentStatusRaw(requestParameters: CreateAgentStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createAgentStatus.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling createAgentStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAgentStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{uuid}/statuses`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1AgentStatusBodyRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * Create new agent status
     */
    async createAgentStatus(requestParameters: CreateAgentStatusRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.createAgentStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete agent
     */
    async deleteAgentRaw(requestParameters: DeleteAgentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteAgent.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteAgent.');
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
            path: `/api/v1/orgs/{owner}/agents/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete agent
     */
    async deleteAgent(requestParameters: DeleteAgentRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteAgentRaw(requestParameters, initOverrides);
    }

    /**
     * Get agent
     */
    async getAgentRaw(requestParameters: GetAgentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Agent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getAgent.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getAgent.');
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
            path: `/api/v1/orgs/{owner}/agents/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
    }

    /**
     * Get agent
     */
    async getAgent(requestParameters: GetAgentRequest, initOverrides?: RequestInit): Promise<V1Agent> {
        const response = await this.getAgentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get agent config
     */
    async getAgentConfigRaw(requestParameters: GetAgentConfigRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Agent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getAgentConfig.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getAgentConfig.');
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
            path: `/api/v1/orgs/{owner}/agents/{uuid}/config`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
    }

    /**
     * Get agent config
     */
    async getAgentConfig(requestParameters: GetAgentConfigRequest, initOverrides?: RequestInit): Promise<V1Agent> {
        const response = await this.getAgentConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get State (queues/runs)
     */
    async getAgentStateRaw(requestParameters: GetAgentStateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1AgentStateResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getAgentState.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getAgentState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{uuid}/state`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentStateResponseFromJSON(jsonValue));
    }

    /**
     * Get State (queues/runs)
     */
    async getAgentState(requestParameters: GetAgentStateRequest, initOverrides?: RequestInit): Promise<V1AgentStateResponse> {
        const response = await this.getAgentStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get agent token
     */
    async getAgentTokenRaw(requestParameters: GetAgentTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getAgentToken.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getAgentToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{uuid}/token`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Get agent token
     */
    async getAgentToken(requestParameters: GetAgentTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.getAgentTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List agents names
     */
    async listAgentNamesRaw(requestParameters: ListAgentNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListAgentsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listAgentNames.');
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
            path: `/api/v1/orgs/{owner}/agents/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListAgentsResponseFromJSON(jsonValue));
    }

    /**
     * List agents names
     */
    async listAgentNames(requestParameters: ListAgentNamesRequest, initOverrides?: RequestInit): Promise<V1ListAgentsResponse> {
        const response = await this.listAgentNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List agents
     */
    async listAgentsRaw(requestParameters: ListAgentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListAgentsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listAgents.');
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
            path: `/api/v1/orgs/{owner}/agents`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListAgentsResponseFromJSON(jsonValue));
    }

    /**
     * List agents
     */
    async listAgents(requestParameters: ListAgentsRequest, initOverrides?: RequestInit): Promise<V1ListAgentsResponse> {
        const response = await this.listAgentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch agent
     */
    async patchAgentRaw(requestParameters: PatchAgentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Agent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchAgent.');
        }

        if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
            throw new runtime.RequiredError('agentUuid','Required parameter requestParameters.agentUuid was null or undefined when calling patchAgent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAgent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1AgentToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
    }

    /**
     * Patch agent
     */
    async patchAgent(requestParameters: PatchAgentRequest, initOverrides?: RequestInit): Promise<V1Agent> {
        const response = await this.patchAgentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch agent token
     */
    async patchAgentTokenRaw(requestParameters: PatchAgentTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchAgentToken.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling patchAgentToken.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAgentToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{entity}/token`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1TokenToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Patch agent token
     */
    async patchAgentToken(requestParameters: PatchAgentTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.patchAgentTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sync agent
     */
    async syncAgentRaw(requestParameters: SyncAgentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling syncAgent.');
        }

        if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
            throw new runtime.RequiredError('agentUuid','Required parameter requestParameters.agentUuid was null or undefined when calling syncAgent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling syncAgent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent.uuid}/sync`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1AgentToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sync agent
     */
    async syncAgent(requestParameters: SyncAgentRequest, initOverrides?: RequestInit): Promise<void> {
        await this.syncAgentRaw(requestParameters, initOverrides);
    }

    /**
     * Update agent
     */
    async updateAgentRaw(requestParameters: UpdateAgentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Agent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateAgent.');
        }

        if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
            throw new runtime.RequiredError('agentUuid','Required parameter requestParameters.agentUuid was null or undefined when calling updateAgent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateAgent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1AgentToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
    }

    /**
     * Update agent
     */
    async updateAgent(requestParameters: UpdateAgentRequest, initOverrides?: RequestInit): Promise<V1Agent> {
        const response = await this.updateAgentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update agent config
     */
    async updateAgentConfigRaw(requestParameters: UpdateAgentConfigRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Agent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateAgentConfig.');
        }

        if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
            throw new runtime.RequiredError('agentUuid','Required parameter requestParameters.agentUuid was null or undefined when calling updateAgentConfig.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateAgentConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent.uuid}/config`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1AgentToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
    }

    /**
     * Update agent config
     */
    async updateAgentConfig(requestParameters: UpdateAgentConfigRequest, initOverrides?: RequestInit): Promise<V1Agent> {
        const response = await this.updateAgentConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update agent token
     */
    async updateAgentTokenRaw(requestParameters: UpdateAgentTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateAgentToken.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling updateAgentToken.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateAgentToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{entity}/token`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1TokenToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Update agent token
     */
    async updateAgentToken(requestParameters: UpdateAgentTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.updateAgentTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
