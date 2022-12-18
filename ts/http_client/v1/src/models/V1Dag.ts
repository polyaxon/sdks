// Copyright 2018-2022 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.21.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Component,
    V1ComponentFromJSON,
    V1ComponentFromJSONTyped,
    V1ComponentToJSON,
    V1Environment,
    V1EnvironmentFromJSON,
    V1EnvironmentFromJSONTyped,
    V1EnvironmentToJSON,
    V1Operation,
    V1OperationFromJSON,
    V1OperationFromJSONTyped,
    V1OperationToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Dag
 */
export interface V1Dag {
    /**
     * 
     * @type {string}
     * @memberof V1Dag
     */
    kind?: string;
    /**
     * 
     * @type {Array<V1Operation>}
     * @memberof V1Dag
     */
    operations?: Array<V1Operation>;
    /**
     * 
     * @type {Array<V1Component>}
     * @memberof V1Dag
     */
    components?: Array<V1Component>;
    /**
     * 
     * @type {number}
     * @memberof V1Dag
     */
    concurrency?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1Dag
     */
    earlyStopping?: Array<object>;
    /**
     * 
     * @type {V1Environment}
     * @memberof V1Dag
     */
    environment?: V1Environment;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Dag
     */
    connections?: Array<string>;
    /**
     * Volumes is a list of volumes that can be mounted.
     * @type {Array<object>}
     * @memberof V1Dag
     */
    volumes?: Array<object>;
}

export function V1DagFromJSON(json: any): V1Dag {
    return V1DagFromJSONTyped(json, false);
}

export function V1DagFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Dag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'operations': !exists(json, 'operations') ? undefined : ((json['operations'] as Array<any>).map(V1OperationFromJSON)),
        'components': !exists(json, 'components') ? undefined : ((json['components'] as Array<any>).map(V1ComponentFromJSON)),
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
        'environment': !exists(json, 'environment') ? undefined : V1EnvironmentFromJSON(json['environment']),
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'volumes': !exists(json, 'volumes') ? undefined : json['volumes'],
    };
}

export function V1DagToJSON(value?: V1Dag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'operations': value.operations === undefined ? undefined : ((value.operations as Array<any>).map(V1OperationToJSON)),
        'components': value.components === undefined ? undefined : ((value.components as Array<any>).map(V1ComponentToJSON)),
        'concurrency': value.concurrency,
        'earlyStopping': value.earlyStopping,
        'environment': V1EnvironmentToJSON(value.environment),
        'connections': value.connections,
        'volumes': value.volumes,
    };
}

