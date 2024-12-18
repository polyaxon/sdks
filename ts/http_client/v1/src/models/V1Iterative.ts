/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.5.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Tuner } from './V1Tuner';
import {
    V1TunerFromJSON,
    V1TunerFromJSONTyped,
    V1TunerToJSON,
} from './V1Tuner';

/**
 * 
 * @export
 * @interface V1Iterative
 */
export interface V1Iterative {
    /**
     * 
     * @type {string}
     * @memberof V1Iterative
     */
    kind?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof V1Iterative
     */
    params?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof V1Iterative
     */
    maxIterations?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Iterative
     */
    seed?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Iterative
     */
    concurrency?: number;
    /**
     * 
     * @type {V1Tuner}
     * @memberof V1Iterative
     */
    tuner?: V1Tuner;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1Iterative
     */
    earlyStopping?: Array<object>;
}

/**
 * Check if a given object implements the V1Iterative interface.
 */
export function instanceOfV1Iterative(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1IterativeFromJSON(json: any): V1Iterative {
    return V1IterativeFromJSONTyped(json, false);
}

export function V1IterativeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Iterative {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'maxIterations': !exists(json, 'maxIterations') ? undefined : json['maxIterations'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'tuner': !exists(json, 'tuner') ? undefined : V1TunerFromJSON(json['tuner']),
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
    };
}

export function V1IterativeToJSON(value?: V1Iterative | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'params': value.params,
        'maxIterations': value.maxIterations,
        'seed': value.seed,
        'concurrency': value.concurrency,
        'tuner': V1TunerToJSON(value.tuner),
        'earlyStopping': value.earlyStopping,
    };
}

