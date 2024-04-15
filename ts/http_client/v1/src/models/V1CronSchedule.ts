/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.7
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
 * @interface V1CronSchedule
 */
export interface V1CronSchedule {
    /**
     * 
     * @type {string}
     * @memberof V1CronSchedule
     */
    kind?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1CronSchedule
     */
    startAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1CronSchedule
     */
    endAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof V1CronSchedule
     */
    maxRuns?: number;
    /**
     * 
     * @type {string}
     * @memberof V1CronSchedule
     */
    cron?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1CronSchedule
     */
    dependsOnPast?: boolean;
}

/**
 * Check if a given object implements the V1CronSchedule interface.
 */
export function instanceOfV1CronSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CronScheduleFromJSON(json: any): V1CronSchedule {
    return V1CronScheduleFromJSONTyped(json, false);
}

export function V1CronScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CronSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'startAt': !exists(json, 'startAt') ? undefined : (new Date(json['startAt'])),
        'endAt': !exists(json, 'endAt') ? undefined : (new Date(json['endAt'])),
        'maxRuns': !exists(json, 'maxRuns') ? undefined : json['maxRuns'],
        'cron': !exists(json, 'cron') ? undefined : json['cron'],
        'dependsOnPast': !exists(json, 'dependsOnPast') ? undefined : json['dependsOnPast'],
    };
}

export function V1CronScheduleToJSON(value?: V1CronSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'startAt': value.startAt === undefined ? undefined : (value.startAt.toISOString()),
        'endAt': value.endAt === undefined ? undefined : (value.endAt.toISOString()),
        'maxRuns': value.maxRuns,
        'cron': value.cron,
        'dependsOnPast': value.dependsOnPast,
    };
}

