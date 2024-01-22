/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc10
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
 * @interface V1GridSearch
 */
export interface V1GridSearch {
    /**
     *
     * @type {string}
     * @memberof V1GridSearch
     */
    kind?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof V1GridSearch
     */
    params?: { [key: string]: object; };
    /**
     *
     * @type {number}
     * @memberof V1GridSearch
     */
    numRuns?: number;
    /**
     *
     * @type {number}
     * @memberof V1GridSearch
     */
    seed?: number;
    /**
     *
     * @type {number}
     * @memberof V1GridSearch
     */
    concurrency?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof V1GridSearch
     */
    earlyStopping?: Array<object>;
}

/**
 * Check if a given object implements the V1GridSearch interface.
 */
export function instanceOfV1GridSearch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1GridSearchFromJSON(json: any): V1GridSearch {
    return V1GridSearchFromJSONTyped(json, false);
}

export function V1GridSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GridSearch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'numRuns': !exists(json, 'numRuns') ? undefined : json['numRuns'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
    };
}

export function V1GridSearchToJSON(value?: V1GridSearch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'params': value.params,
        'numRuns': value.numRuns,
        'seed': value.seed,
        'concurrency': value.concurrency,
        'earlyStopping': value.earlyStopping,
    };
}

