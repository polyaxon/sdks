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
import type { V1StageCondition } from './V1StageCondition';
import {
    V1StageConditionFromJSON,
    V1StageConditionFromJSONTyped,
    V1StageConditionToJSON,
} from './V1StageCondition';
import type { V1Stages } from './V1Stages';
import {
    V1StagesFromJSON,
    V1StagesFromJSONTyped,
    V1StagesToJSON,
} from './V1Stages';

/**
 * 
 * @export
 * @interface V1Stage
 */
export interface V1Stage {
    /**
     * 
     * @type {string}
     * @memberof V1Stage
     */
    uuid?: string;
    /**
     * 
     * @type {V1Stages}
     * @memberof V1Stage
     */
    stage?: V1Stages;
    /**
     * 
     * @type {Array<V1StageCondition>}
     * @memberof V1Stage
     */
    stage_conditions?: Array<V1StageCondition>;
}

/**
 * Check if a given object implements the V1Stage interface.
 */
export function instanceOfV1Stage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1StageFromJSON(json: any): V1Stage {
    return V1StageFromJSONTyped(json, false);
}

export function V1StageFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Stage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'stage': !exists(json, 'stage') ? undefined : V1StagesFromJSON(json['stage']),
        'stage_conditions': !exists(json, 'stage_conditions') ? undefined : ((json['stage_conditions'] as Array<any>).map(V1StageConditionFromJSON)),
    };
}

export function V1StageToJSON(value?: V1Stage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'stage': V1StagesToJSON(value.stage),
        'stage_conditions': value.stage_conditions === undefined ? undefined : ((value.stage_conditions as Array<any>).map(V1StageConditionToJSON)),
    };
}

