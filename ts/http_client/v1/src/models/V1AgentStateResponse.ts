/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AgentStateResponseAgentState } from './AgentStateResponseAgentState';
import {
    AgentStateResponseAgentStateFromJSON,
    AgentStateResponseAgentStateFromJSONTyped,
    AgentStateResponseAgentStateToJSON,
} from './AgentStateResponseAgentState';
import type { V1Statuses } from './V1Statuses';
import {
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './V1Statuses';

/**
 *
 * @export
 * @interface V1AgentStateResponse
 */
export interface V1AgentStateResponse {
    /**
     *
     * @type {V1Statuses}
     * @memberof V1AgentStateResponse
     */
    status?: V1Statuses;
    /**
     *
     * @type {AgentStateResponseAgentState}
     * @memberof V1AgentStateResponse
     */
    state?: AgentStateResponseAgentState;
    /**
     *
     * @type {number}
     * @memberof V1AgentStateResponse
     */
    live_state?: number;
    /**
     *
     * @type {object}
     * @memberof V1AgentStateResponse
     */
    compatible_updates?: object;
}

/**
 * Check if a given object implements the V1AgentStateResponse interface.
 */
export function instanceOfV1AgentStateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AgentStateResponseFromJSON(json: any): V1AgentStateResponse {
    return V1AgentStateResponseFromJSONTyped(json, false);
}

export function V1AgentStateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AgentStateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'status': !exists(json, 'status') ? undefined : V1StatusesFromJSON(json['status']),
        'state': !exists(json, 'state') ? undefined : AgentStateResponseAgentStateFromJSON(json['state']),
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'compatible_updates': !exists(json, 'compatible_updates') ? undefined : json['compatible_updates'],
    };
}

export function V1AgentStateResponseToJSON(value?: V1AgentStateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'status': V1StatusesToJSON(value.status),
        'state': AgentStateResponseAgentStateToJSON(value.state),
        'live_state': value.live_state,
        'compatible_updates': value.compatible_updates,
    };
}

