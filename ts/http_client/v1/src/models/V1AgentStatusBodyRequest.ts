/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc54
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1StatusCondition } from './V1StatusCondition';
import {
    V1StatusConditionFromJSON,
    V1StatusConditionFromJSONTyped,
    V1StatusConditionToJSON,
} from './V1StatusCondition';

/**
 *
 * @export
 * @interface V1AgentStatusBodyRequest
 */
export interface V1AgentStatusBodyRequest {
    /**
     *
     * @type {string}
     * @memberof V1AgentStatusBodyRequest
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof V1AgentStatusBodyRequest
     */
    uuid?: string;
    /**
     *
     * @type {V1StatusCondition}
     * @memberof V1AgentStatusBodyRequest
     */
    condition?: V1StatusCondition;
}

/**
 * Check if a given object implements the V1AgentStatusBodyRequest interface.
 */
export function instanceOfV1AgentStatusBodyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AgentStatusBodyRequestFromJSON(json: any): V1AgentStatusBodyRequest {
    return V1AgentStatusBodyRequestFromJSONTyped(json, false);
}

export function V1AgentStatusBodyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AgentStatusBodyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'condition': !exists(json, 'condition') ? undefined : V1StatusConditionFromJSON(json['condition']),
    };
}

export function V1AgentStatusBodyRequestToJSON(value?: V1AgentStatusBodyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'owner': value.owner,
        'uuid': value.uuid,
        'condition': V1StatusConditionToJSON(value.condition),
    };
}

