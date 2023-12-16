/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1OptimizationMetric } from './V1OptimizationMetric';
import {
    V1OptimizationMetricFromJSON,
    V1OptimizationMetricFromJSONTyped,
    V1OptimizationMetricToJSON,
} from './V1OptimizationMetric';
import type { V1Tuner } from './V1Tuner';
import {
    V1TunerFromJSON,
    V1TunerFromJSONTyped,
    V1TunerToJSON,
} from './V1Tuner';

/**
 *
 * @export
 * @interface V1Bayes
 */
export interface V1Bayes {
    /**
     *
     * @type {string}
     * @memberof V1Bayes
     */
    kind?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof V1Bayes
     */
    params?: { [key: string]: object; };
    /**
     *
     * @type {number}
     * @memberof V1Bayes
     */
    numInitialRuns?: number;
    /**
     *
     * @type {number}
     * @memberof V1Bayes
     */
    maxIterations?: number;
    /**
     *
     * @type {object}
     * @memberof V1Bayes
     */
    utilityFunction?: object;
    /**
     *
     * @type {V1OptimizationMetric}
     * @memberof V1Bayes
     */
    metric?: V1OptimizationMetric;
    /**
     *
     * @type {number}
     * @memberof V1Bayes
     */
    seed?: number;
    /**
     *
     * @type {number}
     * @memberof V1Bayes
     */
    concurrency?: number;
    /**
     *
     * @type {V1Tuner}
     * @memberof V1Bayes
     */
    tuner?: V1Tuner;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Bayes
     */
    earlyStopping?: Array<object>;
}

/**
 * Check if a given object implements the V1Bayes interface.
 */
export function instanceOfV1Bayes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1BayesFromJSON(json: any): V1Bayes {
    return V1BayesFromJSONTyped(json, false);
}

export function V1BayesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Bayes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'numInitialRuns': !exists(json, 'numInitialRuns') ? undefined : json['numInitialRuns'],
        'maxIterations': !exists(json, 'maxIterations') ? undefined : json['maxIterations'],
        'utilityFunction': !exists(json, 'utilityFunction') ? undefined : json['utilityFunction'],
        'metric': !exists(json, 'metric') ? undefined : V1OptimizationMetricFromJSON(json['metric']),
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'tuner': !exists(json, 'tuner') ? undefined : V1TunerFromJSON(json['tuner']),
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
    };
}

export function V1BayesToJSON(value?: V1Bayes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'params': value.params,
        'numInitialRuns': value.numInitialRuns,
        'maxIterations': value.maxIterations,
        'utilityFunction': value.utilityFunction,
        'metric': V1OptimizationMetricToJSON(value.metric),
        'seed': value.seed,
        'concurrency': value.concurrency,
        'tuner': V1TunerToJSON(value.tuner),
        'earlyStopping': value.earlyStopping,
    };
}

