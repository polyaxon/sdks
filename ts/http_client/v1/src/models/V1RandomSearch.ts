/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
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
 * @interface V1RandomSearch
 */
export interface V1RandomSearch {
    /**
     *
     * @type {string}
     * @memberof V1RandomSearch
     */
    kind?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof V1RandomSearch
     */
    params?: { [key: string]: object; };
    /**
     *
     * @type {number}
     * @memberof V1RandomSearch
     */
    numRuns?: number;
    /**
     *
     * @type {number}
     * @memberof V1RandomSearch
     */
    seed?: number;
    /**
     *
     * @type {number}
     * @memberof V1RandomSearch
     */
    concurrency?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof V1RandomSearch
     */
    earlyStopping?: Array<object>;
}

/**
 * Check if a given object implements the V1RandomSearch interface.
 */
export function instanceOfV1RandomSearch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RandomSearchFromJSON(json: any): V1RandomSearch {
    return V1RandomSearchFromJSONTyped(json, false);
}

export function V1RandomSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RandomSearch {
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

export function V1RandomSearchToJSON(value?: V1RandomSearch | null): any {
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

