/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.1
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
 * @interface V1Notification
 */
export interface V1Notification {
    /**
     *
     * @type {Array<string>}
     * @memberof V1Notification
     */
    connections?: Array<string>;
    /**
     *
     * @type {V1Statuses}
     * @memberof V1Notification
     */
    trigger?: V1Statuses;
}

/**
 * Check if a given object implements the V1Notification interface.
 */
export function instanceOfV1Notification(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1NotificationFromJSON(json: any): V1Notification {
    return V1NotificationFromJSONTyped(json, false);
}

export function V1NotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Notification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'trigger': !exists(json, 'trigger') ? undefined : V1StatusesFromJSON(json['trigger']),
    };
}

export function V1NotificationToJSON(value?: V1Notification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'connections': value.connections,
        'trigger': V1StatusesToJSON(value.trigger),
    };
}

