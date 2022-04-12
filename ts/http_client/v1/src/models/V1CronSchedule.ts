// Copyright 2018-2022 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.17.1
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

