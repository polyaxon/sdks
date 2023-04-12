// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 2.0.0-rc7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1AnalyticsSpec } from './V1AnalyticsSpec';
import {
    V1AnalyticsSpecFromJSON,
    V1AnalyticsSpecFromJSONTyped,
    V1AnalyticsSpecToJSON,
} from './V1AnalyticsSpec';
import type { V1DashboardSpec } from './V1DashboardSpec';
import {
    V1DashboardSpecFromJSON,
    V1DashboardSpecFromJSONTyped,
    V1DashboardSpecToJSON,
} from './V1DashboardSpec';

/**
 *
 * @export
 * @interface V1SearchSpec
 */
export interface V1SearchSpec {
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    query?: string;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    sort?: string;
    /**
     *
     * @type {number}
     * @memberof V1SearchSpec
     */
    limit?: number;
    /**
     *
     * @type {number}
     * @memberof V1SearchSpec
     */
    offset?: number;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    groupby?: string;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    columns?: string;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    layout?: string;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    sections?: string;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    compares?: string;
    /**
     *
     * @type {string}
     * @memberof V1SearchSpec
     */
    heat?: string;
    /**
     *
     * @type {V1DashboardSpec}
     * @memberof V1SearchSpec
     */
    events?: V1DashboardSpec;
    /**
     *
     * @type {object}
     * @memberof V1SearchSpec
     */
    histograms?: object;
    /**
     *
     * @type {object}
     * @memberof V1SearchSpec
     */
    trends?: object;
    /**
     *
     * @type {V1AnalyticsSpec}
     * @memberof V1SearchSpec
     */
    analytics?: V1AnalyticsSpec;
}

/**
 * Check if a given object implements the V1SearchSpec interface.
 */
export function instanceOfV1SearchSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SearchSpecFromJSON(json: any): V1SearchSpec {
    return V1SearchSpecFromJSONTyped(json, false);
}

export function V1SearchSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SearchSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'query': !exists(json, 'query') ? undefined : json['query'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'groupby': !exists(json, 'groupby') ? undefined : json['groupby'],
        'columns': !exists(json, 'columns') ? undefined : json['columns'],
        'layout': !exists(json, 'layout') ? undefined : json['layout'],
        'sections': !exists(json, 'sections') ? undefined : json['sections'],
        'compares': !exists(json, 'compares') ? undefined : json['compares'],
        'heat': !exists(json, 'heat') ? undefined : json['heat'],
        'events': !exists(json, 'events') ? undefined : V1DashboardSpecFromJSON(json['events']),
        'histograms': !exists(json, 'histograms') ? undefined : json['histograms'],
        'trends': !exists(json, 'trends') ? undefined : json['trends'],
        'analytics': !exists(json, 'analytics') ? undefined : V1AnalyticsSpecFromJSON(json['analytics']),
    };
}

export function V1SearchSpecToJSON(value?: V1SearchSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'query': value.query,
        'sort': value.sort,
        'limit': value.limit,
        'offset': value.offset,
        'groupby': value.groupby,
        'columns': value.columns,
        'layout': value.layout,
        'sections': value.sections,
        'compares': value.compares,
        'heat': value.heat,
        'events': V1DashboardSpecToJSON(value.events),
        'histograms': value.histograms,
        'trends': value.trends,
        'analytics': V1AnalyticsSpecToJSON(value.analytics),
    };
}

