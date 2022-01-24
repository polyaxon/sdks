// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.14.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Bayes,
    V1BayesFromJSON,
    V1BayesFromJSONTyped,
    V1BayesToJSON,
    V1GridSearch,
    V1GridSearchFromJSON,
    V1GridSearchFromJSONTyped,
    V1GridSearchToJSON,
    V1Hyperband,
    V1HyperbandFromJSON,
    V1HyperbandFromJSONTyped,
    V1HyperbandToJSON,
    V1Hyperopt,
    V1HyperoptFromJSON,
    V1HyperoptFromJSONTyped,
    V1HyperoptToJSON,
    V1Iterative,
    V1IterativeFromJSON,
    V1IterativeFromJSONTyped,
    V1IterativeToJSON,
    V1Mapping,
    V1MappingFromJSON,
    V1MappingFromJSONTyped,
    V1MappingToJSON,
    V1RandomSearch,
    V1RandomSearchFromJSON,
    V1RandomSearchFromJSONTyped,
    V1RandomSearchToJSON,
} from './';

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

