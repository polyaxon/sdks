/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc50
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface V1Activity
 */
export interface V1Activity {
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    actor?: string;
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    owner?: string;
    /**
     *
     * @type {Date}
     * @memberof V1Activity
     */
    created_at?: Date;
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    event_action?: string;
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    event_subject?: string;
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    object_name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    object_uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Activity
     */
    object_parent?: string;
}

/**
 * Check if a given object implements the V1Activity interface.
 */
export function instanceOfV1Activity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ActivityFromJSON(json: any): V1Activity {
    return V1ActivityFromJSONTyped(json, false);
}

export function V1ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Activity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'actor': !exists(json, 'actor') ? undefined : json['actor'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'event_action': !exists(json, 'event_action') ? undefined : json['event_action'],
        'event_subject': !exists(json, 'event_subject') ? undefined : json['event_subject'],
        'object_name': !exists(json, 'object_name') ? undefined : json['object_name'],
        'object_uuid': !exists(json, 'object_uuid') ? undefined : json['object_uuid'],
        'object_parent': !exists(json, 'object_parent') ? undefined : json['object_parent'],
    };
}

export function V1ActivityToJSON(value?: V1Activity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'actor': value.actor,
        'owner': value.owner,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'event_action': value.event_action,
        'event_subject': value.event_subject,
        'object_name': value.object_name,
        'object_uuid': value.object_uuid,
        'object_parent': value.object_parent,
    };
}

