// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 2.0.0-rc4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Environment } from './V1Environment';
import {
    V1EnvironmentFromJSON,
    V1EnvironmentFromJSONTyped,
    V1EnvironmentToJSON,
} from './V1Environment';
import type { V1Init } from './V1Init';
import {
    V1InitFromJSON,
    V1InitFromJSONTyped,
    V1InitToJSON,
} from './V1Init';

/**
 *
 * @export
 * @interface V1Service
 */
export interface V1Service {
    /**
     *
     * @type {string}
     * @memberof V1Service
     */
    kind?: string;
    /**
     *
     * @type {V1Environment}
     * @memberof V1Service
     */
    environment?: V1Environment;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Service
     */
    connections?: Array<string>;
    /**
     * Volumes is a list of volumes that can be mounted.
     * @type {Array<object>}
     * @memberof V1Service
     */
    volumes?: Array<object>;
    /**
     *
     * @type {Array<V1Init>}
     * @memberof V1Service
     */
    init?: Array<V1Init>;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Service
     */
    sidecars?: Array<object>;
    /**
     *
     * @type {object}
     * @memberof V1Service
     */
    container?: object;
    /**
     *
     * @type {Array<number>}
     * @memberof V1Service
     */
    ports?: Array<number>;
    /**
     * Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/).
     * Default is false, the service shoud handle a base url.
     * @type {boolean}
     * @memberof V1Service
     */
    rewritePath?: boolean;
    /**
     * Optional flag to signal to Polyaxon that this service should not go through Polyaxon's auth
     * Default is false, the service will be controlled by Polyaxon's auth.
     * @type {boolean}
     * @memberof V1Service
     */
    isExternal?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1Service
     */
    replicas?: number;
}

/**
 * Check if a given object implements the V1Service interface.
 */
export function instanceOfV1Service(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ServiceFromJSON(json: any): V1Service {
    return V1ServiceFromJSONTyped(json, false);
}

export function V1ServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Service {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'environment': !exists(json, 'environment') ? undefined : V1EnvironmentFromJSON(json['environment']),
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'volumes': !exists(json, 'volumes') ? undefined : json['volumes'],
        'init': !exists(json, 'init') ? undefined : ((json['init'] as Array<any>).map(V1InitFromJSON)),
        'sidecars': !exists(json, 'sidecars') ? undefined : json['sidecars'],
        'container': !exists(json, 'container') ? undefined : json['container'],
        'ports': !exists(json, 'ports') ? undefined : json['ports'],
        'rewritePath': !exists(json, 'rewritePath') ? undefined : json['rewritePath'],
        'isExternal': !exists(json, 'isExternal') ? undefined : json['isExternal'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
    };
}

export function V1ServiceToJSON(value?: V1Service | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'environment': V1EnvironmentToJSON(value.environment),
        'connections': value.connections,
        'volumes': value.volumes,
        'init': value.init === undefined ? undefined : ((value.init as Array<any>).map(V1InitToJSON)),
        'sidecars': value.sidecars,
        'container': value.container,
        'ports': value.ports,
        'rewritePath': value.rewritePath,
        'isExternal': value.isExternal,
        'replicas': value.replicas,
    };
}

