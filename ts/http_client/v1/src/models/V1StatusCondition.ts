/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Statuses } from './V1Statuses';
import {
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './V1Statuses';

/**
 *
 * @export
 * @interface V1StatusCondition
 */
export interface V1StatusCondition {
    /**
     *
     * @type {V1Statuses}
     * @memberof V1StatusCondition
     */
    type?: V1Statuses;
    /**
     *
     * @type {string}
     * @memberof V1StatusCondition
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof V1StatusCondition
     */
    reason?: string;
    /**
     *
     * @type {string}
     * @memberof V1StatusCondition
     */
    message?: string;
    /**
     *
     * @type {Date}
     * @memberof V1StatusCondition
     */
    last_update_time?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1StatusCondition
     */
    last_transition_time?: Date;
    /**
     *
     * @type {object}
     * @memberof V1StatusCondition
     */
    meta_info?: object;
}

/**
 * Check if a given object implements the V1StatusCondition interface.
 */
export function instanceOfV1StatusCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1StatusConditionFromJSON(json: any): V1StatusCondition {
    return V1StatusConditionFromJSONTyped(json, false);
}

export function V1StatusConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatusCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'type': !exists(json, 'type') ? undefined : V1StatusesFromJSON(json['type']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'last_update_time': !exists(json, 'last_update_time') ? undefined : (new Date(json['last_update_time'])),
        'last_transition_time': !exists(json, 'last_transition_time') ? undefined : (new Date(json['last_transition_time'])),
        'meta_info': !exists(json, 'meta_info') ? undefined : json['meta_info'],
    };
}

export function V1StatusConditionToJSON(value?: V1StatusCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'type': V1StatusesToJSON(value.type),
        'status': value.status,
        'reason': value.reason,
        'message': value.message,
        'last_update_time': value.last_update_time === undefined ? undefined : (value.last_update_time.toISOString()),
        'last_transition_time': value.last_transition_time === undefined ? undefined : (value.last_transition_time.toISOString()),
        'meta_info': value.meta_info,
    };
}

