/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
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
 * @interface V1AnalyticsSpec
 */
export interface V1AnalyticsSpec {
    /**
     *
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    view?: string;
    /**
     *
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    trunc?: string;
    /**
     *
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    groupby?: string;
    /**
     *
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    frequency?: string;
}

/**
 * Check if a given object implements the V1AnalyticsSpec interface.
 */
export function instanceOfV1AnalyticsSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AnalyticsSpecFromJSON(json: any): V1AnalyticsSpec {
    return V1AnalyticsSpecFromJSONTyped(json, false);
}

export function V1AnalyticsSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnalyticsSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'view': !exists(json, 'view') ? undefined : json['view'],
        'trunc': !exists(json, 'trunc') ? undefined : json['trunc'],
        'groupby': !exists(json, 'groupby') ? undefined : json['groupby'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
    };
}

export function V1AnalyticsSpecToJSON(value?: V1AnalyticsSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'view': value.view,
        'trunc': value.trunc,
        'groupby': value.groupby,
        'frequency': value.frequency,
    };
}

