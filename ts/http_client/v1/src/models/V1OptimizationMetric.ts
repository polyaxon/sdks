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
import type { V1Optimization } from './V1Optimization';
import {
    V1OptimizationFromJSON,
    V1OptimizationFromJSONTyped,
    V1OptimizationToJSON,
} from './V1Optimization';

/**
 *
 * @export
 * @interface V1OptimizationMetric
 */
export interface V1OptimizationMetric {
    /**
     *
     * @type {string}
     * @memberof V1OptimizationMetric
     */
    name?: string;
    /**
     *
     * @type {V1Optimization}
     * @memberof V1OptimizationMetric
     */
    optimization?: V1Optimization;
}

/**
 * Check if a given object implements the V1OptimizationMetric interface.
 */
export function instanceOfV1OptimizationMetric(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1OptimizationMetricFromJSON(json: any): V1OptimizationMetric {
    return V1OptimizationMetricFromJSONTyped(json, false);
}

export function V1OptimizationMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1OptimizationMetric {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'optimization': !exists(json, 'optimization') ? undefined : V1OptimizationFromJSON(json['optimization']),
    };
}

export function V1OptimizationMetricToJSON(value?: V1OptimizationMetric | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'optimization': V1OptimizationToJSON(value.optimization),
    };
}

