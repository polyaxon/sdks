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
 * The version of the OpenAPI document: 1.15.0
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
 * @interface V1OwnerSubEntityResourceRequestByUid
 */
export interface V1OwnerSubEntityResourceRequestByUid {
    /**
     * 
     * @type {string}
     * @memberof V1OwnerSubEntityResourceRequestByUid
     */
    owner?: string;
    /**
     * Entity: project name, hub name, registry name, ...
     * @type {string}
     * @memberof V1OwnerSubEntityResourceRequestByUid
     */
    entity?: string;
    /**
     * 
     * @type {string}
     * @memberof V1OwnerSubEntityResourceRequestByUid
     */
    uuid?: string;
}

export function V1OwnerSubEntityResourceRequestByUidFromJSON(json: any): V1OwnerSubEntityResourceRequestByUid {
    return V1OwnerSubEntityResourceRequestByUidFromJSONTyped(json, false);
}

export function V1OwnerSubEntityResourceRequestByUidFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1OwnerSubEntityResourceRequestByUid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function V1OwnerSubEntityResourceRequestByUidToJSON(value?: V1OwnerSubEntityResourceRequestByUid | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owner': value.owner,
        'entity': value.entity,
        'uuid': value.uuid,
    };
}

