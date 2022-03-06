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
 * The version of the OpenAPI document: 1.16.0
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
 * @interface V1Template
 */
export interface V1Template {
    /**
     * 
     * @type {boolean}
     * @memberof V1Template
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1Template
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Template
     */
    fields?: Array<string>;
}

export function V1TemplateFromJSON(json: any): V1Template {
    return V1TemplateFromJSONTyped(json, false);
}

export function V1TemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Template {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
    };
}

export function V1TemplateToJSON(value?: V1Template | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'description': value.description,
        'fields': value.fields,
    };
}

