/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
 * @interface V1DateTimeSchedule
 */
export interface V1DateTimeSchedule {
    /**
     *
     * @type {string}
     * @memberof V1DateTimeSchedule
     */
    kind?: string;
    /**
     *
     * @type {Date}
     * @memberof V1DateTimeSchedule
     */
    startAt?: Date;
}

/**
 * Check if a given object implements the V1DateTimeSchedule interface.
 */
export function instanceOfV1DateTimeSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1DateTimeScheduleFromJSON(json: any): V1DateTimeSchedule {
    return V1DateTimeScheduleFromJSONTyped(json, false);
}

export function V1DateTimeScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DateTimeSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'startAt': !exists(json, 'startAt') ? undefined : (new Date(json['startAt'])),
    };
}

export function V1DateTimeScheduleToJSON(value?: V1DateTimeSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'startAt': value.startAt === undefined ? undefined : (value.startAt.toISOString()),
    };
}

