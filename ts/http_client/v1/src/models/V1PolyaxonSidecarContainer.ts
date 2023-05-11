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
 * The version of the OpenAPI document: 2.0.0-rc14
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
 * @interface V1PolyaxonSidecarContainer
 */
export interface V1PolyaxonSidecarContainer {
    /**
     *
     * @type {string}
     * @memberof V1PolyaxonSidecarContainer
     */
    image?: string;
    /**
     *
     * @type {string}
     * @memberof V1PolyaxonSidecarContainer
     */
    imageTag?: string;
    /**
     *
     * @type {string}
     * @memberof V1PolyaxonSidecarContainer
     */
    imagePullPolicy?: string;
    /**
     *
     * @type {number}
     * @memberof V1PolyaxonSidecarContainer
     */
    sleepInterval?: number;
    /**
     *
     * @type {number}
     * @memberof V1PolyaxonSidecarContainer
     */
    syncInterval?: number;
    /**
     *
     * @type {boolean}
     * @memberof V1PolyaxonSidecarContainer
     */
    monitorLogs?: boolean;
    /**
     *
     * @type {object}
     * @memberof V1PolyaxonSidecarContainer
     */
    resources?: object;
}

/**
 * Check if a given object implements the V1PolyaxonSidecarContainer interface.
 */
export function instanceOfV1PolyaxonSidecarContainer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PolyaxonSidecarContainerFromJSON(json: any): V1PolyaxonSidecarContainer {
    return V1PolyaxonSidecarContainerFromJSONTyped(json, false);
}

export function V1PolyaxonSidecarContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PolyaxonSidecarContainer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'image': !exists(json, 'image') ? undefined : json['image'],
        'imageTag': !exists(json, 'imageTag') ? undefined : json['imageTag'],
        'imagePullPolicy': !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
        'sleepInterval': !exists(json, 'sleepInterval') ? undefined : json['sleepInterval'],
        'syncInterval': !exists(json, 'syncInterval') ? undefined : json['syncInterval'],
        'monitorLogs': !exists(json, 'monitorLogs') ? undefined : json['monitorLogs'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
    };
}

export function V1PolyaxonSidecarContainerToJSON(value?: V1PolyaxonSidecarContainer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'image': value.image,
        'imageTag': value.imageTag,
        'imagePullPolicy': value.imagePullPolicy,
        'sleepInterval': value.sleepInterval,
        'syncInterval': value.syncInterval,
        'monitorLogs': value.monitorLogs,
        'resources': value.resources,
    };
}

