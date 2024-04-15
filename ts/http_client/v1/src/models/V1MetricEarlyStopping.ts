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
import type { V1Optimization } from './V1Optimization';
import {
    V1OptimizationFromJSON,
    V1OptimizationFromJSONTyped,
    V1OptimizationToJSON,
} from './V1Optimization';

/**
 * MetricEarlyStoppingSchema specification
 * Early stopping based on metric config.
 * @export
 * @interface V1MetricEarlyStopping
 */
export interface V1MetricEarlyStopping {
    /**
     * 
     * @type {string}
     * @memberof V1MetricEarlyStopping
     */
    kind?: string;
    /**
     * Metric name to use for early stopping.
     * @type {string}
     * @memberof V1MetricEarlyStopping
     */
    metric?: string;
    /**
     * Metric value to use for the condition.
     * @type {string}
     * @memberof V1MetricEarlyStopping
     */
    value?: string;
    /**
     * 
     * @type {V1Optimization}
     * @memberof V1MetricEarlyStopping
     */
    optimization?: V1Optimization;
    /**
     * 
     * @type {object}
     * @memberof V1MetricEarlyStopping
     */
    policy?: object;
}

/**
 * Check if a given object implements the V1MetricEarlyStopping interface.
 */
export function instanceOfV1MetricEarlyStopping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1MetricEarlyStoppingFromJSON(json: any): V1MetricEarlyStopping {
    return V1MetricEarlyStoppingFromJSONTyped(json, false);
}

export function V1MetricEarlyStoppingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MetricEarlyStopping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metric': !exists(json, 'metric') ? undefined : json['metric'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'optimization': !exists(json, 'optimization') ? undefined : V1OptimizationFromJSON(json['optimization']),
        'policy': !exists(json, 'policy') ? undefined : json['policy'],
    };
}

export function V1MetricEarlyStoppingToJSON(value?: V1MetricEarlyStopping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'metric': value.metric,
        'value': value.value,
        'optimization': V1OptimizationToJSON(value.optimization),
        'policy': value.policy,
    };
}

