/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Bayes } from './V1Bayes';
import {
    V1BayesFromJSON,
    V1BayesFromJSONTyped,
    V1BayesToJSON,
} from './V1Bayes';
import type { V1GridSearch } from './V1GridSearch';
import {
    V1GridSearchFromJSON,
    V1GridSearchFromJSONTyped,
    V1GridSearchToJSON,
} from './V1GridSearch';
import type { V1Hyperband } from './V1Hyperband';
import {
    V1HyperbandFromJSON,
    V1HyperbandFromJSONTyped,
    V1HyperbandToJSON,
} from './V1Hyperband';
import type { V1Hyperopt } from './V1Hyperopt';
import {
    V1HyperoptFromJSON,
    V1HyperoptFromJSONTyped,
    V1HyperoptToJSON,
} from './V1Hyperopt';
import type { V1Iterative } from './V1Iterative';
import {
    V1IterativeFromJSON,
    V1IterativeFromJSONTyped,
    V1IterativeToJSON,
} from './V1Iterative';
import type { V1Mapping } from './V1Mapping';
import {
    V1MappingFromJSON,
    V1MappingFromJSONTyped,
    V1MappingToJSON,
} from './V1Mapping';
import type { V1RandomSearch } from './V1RandomSearch';
import {
    V1RandomSearchFromJSON,
    V1RandomSearchFromJSONTyped,
    V1RandomSearchToJSON,
} from './V1RandomSearch';

/**
 *
 * @export
 * @interface V1Matrix
 */
export interface V1Matrix {
    /**
     *
     * @type {V1RandomSearch}
     * @memberof V1Matrix
     */
    random?: V1RandomSearch;
    /**
     *
     * @type {V1GridSearch}
     * @memberof V1Matrix
     */
    grid?: V1GridSearch;
    /**
     *
     * @type {V1Hyperband}
     * @memberof V1Matrix
     */
    hyperband?: V1Hyperband;
    /**
     *
     * @type {V1Bayes}
     * @memberof V1Matrix
     */
    bayes?: V1Bayes;
    /**
     *
     * @type {V1Hyperopt}
     * @memberof V1Matrix
     */
    hyperopt?: V1Hyperopt;
    /**
     *
     * @type {V1Iterative}
     * @memberof V1Matrix
     */
    iterative?: V1Iterative;
    /**
     *
     * @type {V1Mapping}
     * @memberof V1Matrix
     */
    mapping?: V1Mapping;
}

/**
 * Check if a given object implements the V1Matrix interface.
 */
export function instanceOfV1Matrix(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1MatrixFromJSON(json: any): V1Matrix {
    return V1MatrixFromJSONTyped(json, false);
}

export function V1MatrixFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Matrix {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'random': !exists(json, 'random') ? undefined : V1RandomSearchFromJSON(json['random']),
        'grid': !exists(json, 'grid') ? undefined : V1GridSearchFromJSON(json['grid']),
        'hyperband': !exists(json, 'hyperband') ? undefined : V1HyperbandFromJSON(json['hyperband']),
        'bayes': !exists(json, 'bayes') ? undefined : V1BayesFromJSON(json['bayes']),
        'hyperopt': !exists(json, 'hyperopt') ? undefined : V1HyperoptFromJSON(json['hyperopt']),
        'iterative': !exists(json, 'iterative') ? undefined : V1IterativeFromJSON(json['iterative']),
        'mapping': !exists(json, 'mapping') ? undefined : V1MappingFromJSON(json['mapping']),
    };
}

export function V1MatrixToJSON(value?: V1Matrix | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'random': V1RandomSearchToJSON(value.random),
        'grid': V1GridSearchToJSON(value.grid),
        'hyperband': V1HyperbandToJSON(value.hyperband),
        'bayes': V1BayesToJSON(value.bayes),
        'hyperopt': V1HyperoptToJSON(value.hyperopt),
        'iterative': V1IterativeToJSON(value.iterative),
        'mapping': V1MappingToJSON(value.mapping),
    };
}

