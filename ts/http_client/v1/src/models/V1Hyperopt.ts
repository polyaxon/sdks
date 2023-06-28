/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc23
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1HyperoptAlgorithms } from './V1HyperoptAlgorithms';
import {
    V1HyperoptAlgorithmsFromJSON,
    V1HyperoptAlgorithmsFromJSONTyped,
    V1HyperoptAlgorithmsToJSON,
} from './V1HyperoptAlgorithms';
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
 * @interface V1Hyperopt
 */
export interface V1Hyperopt {
    /**
     *
     * @type {string}
     * @memberof V1Hyperopt
     */
    kind?: string;
    /**
     *
     * @type {V1HyperoptAlgorithms}
     * @memberof V1Hyperopt
     */
    algorithm?: V1HyperoptAlgorithms;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof V1Hyperopt
     */
    params?: { [key: string]: object; };
    /**
     *
     * @type {number}
     * @memberof V1Hyperopt
     */
    numRuns?: number;
    /**
     *
     * @type {number}
     * @memberof V1Hyperopt
     */
    maxIterations?: number;
    /**
     *
     * @type {V1OptimizationMetric}
     * @memberof V1Hyperopt
     */
    metric?: V1OptimizationMetric;
    /**
     *
     * @type {number}
     * @memberof V1Hyperopt
     */
    seed?: number;
    /**
     *
     * @type {number}
     * @memberof V1Hyperopt
     */
    concurrency?: number;
    /**
     *
     * @type {V1Tuner}
     * @memberof V1Hyperopt
     */
    tuner?: V1Tuner;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Hyperopt
     */
    earlyStopping?: Array<object>;
}

/**
 * Check if a given object implements the V1Hyperopt interface.
 */
export function instanceOfV1Hyperopt(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HyperoptFromJSON(json: any): V1Hyperopt {
    return V1HyperoptFromJSONTyped(json, false);
}

export function V1HyperoptFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Hyperopt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'algorithm': !exists(json, 'algorithm') ? undefined : V1HyperoptAlgorithmsFromJSON(json['algorithm']),
        'params': !exists(json, 'params') ? undefined : json['params'],
        'numRuns': !exists(json, 'numRuns') ? undefined : json['numRuns'],
        'maxIterations': !exists(json, 'maxIterations') ? undefined : json['maxIterations'],
        'metric': !exists(json, 'metric') ? undefined : V1OptimizationMetricFromJSON(json['metric']),
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'tuner': !exists(json, 'tuner') ? undefined : V1TunerFromJSON(json['tuner']),
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
    };
}

export function V1HyperoptToJSON(value?: V1Hyperopt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'algorithm': V1HyperoptAlgorithmsToJSON(value.algorithm),
        'params': value.params,
        'numRuns': value.numRuns,
        'maxIterations': value.maxIterations,
        'metric': V1OptimizationMetricToJSON(value.metric),
        'seed': value.seed,
        'concurrency': value.concurrency,
        'tuner': V1TunerToJSON(value.tuner),
        'earlyStopping': value.earlyStopping,
    };
}

