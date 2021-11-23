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
 * The version of the OpenAPI document: 1.13.0-rc3
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
 * @interface V1PolyaxonInitContainer
 */
export interface V1PolyaxonInitContainer {
    /**
     * 
     * @type {string}
     * @memberof V1PolyaxonInitContainer
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PolyaxonInitContainer
     */
    imageTag?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PolyaxonInitContainer
     */
    imagePullPolicy?: string;
    /**
     * 
     * @type {object}
     * @memberof V1PolyaxonInitContainer
     */
    resources?: object;
}

export function V1PolyaxonInitContainerFromJSON(json: any): V1PolyaxonInitContainer {
    return V1PolyaxonInitContainerFromJSONTyped(json, false);
}

export function V1PolyaxonInitContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PolyaxonInitContainer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': !exists(json, 'image') ? undefined : json['image'],
        'imageTag': !exists(json, 'imageTag') ? undefined : json['imageTag'],
        'imagePullPolicy': !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
    };
}

export function V1PolyaxonInitContainerToJSON(value?: V1PolyaxonInitContainer | null): any {
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
        'resources': value.resources,
    };
}

