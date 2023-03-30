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
 * The version of the OpenAPI document: 1.22.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1CleanPodPolicy } from './V1CleanPodPolicy';
import {
    V1CleanPodPolicyFromJSON,
    V1CleanPodPolicyFromJSONTyped,
    V1CleanPodPolicyToJSON,
} from './V1CleanPodPolicy';
import type { V1KFReplica } from './V1KFReplica';
import {
    V1KFReplicaFromJSON,
    V1KFReplicaFromJSONTyped,
    V1KFReplicaToJSON,
} from './V1KFReplica';
import type { V1SchedulingPolicy } from './V1SchedulingPolicy';
import {
    V1SchedulingPolicyFromJSON,
    V1SchedulingPolicyFromJSONTyped,
    V1SchedulingPolicyToJSON,
} from './V1SchedulingPolicy';

/**
 * 
 * @export
 * @interface V1XGBoostJob
 */
export interface V1XGBoostJob {
    /**
     * 
     * @type {string}
     * @memberof V1XGBoostJob
     */
    kind?: string;
    /**
     * 
     * @type {V1CleanPodPolicy}
     * @memberof V1XGBoostJob
     */
    cleanPodPolicy?: V1CleanPodPolicy;
    /**
     * 
     * @type {V1SchedulingPolicy}
     * @memberof V1XGBoostJob
     */
    schedulingPolicy?: V1SchedulingPolicy;
    /**
     * 
     * @type {V1KFReplica}
     * @memberof V1XGBoostJob
     */
    master?: V1KFReplica;
    /**
     * 
     * @type {V1KFReplica}
     * @memberof V1XGBoostJob
     */
    worker?: V1KFReplica;
}

/**
 * Check if a given object implements the V1XGBoostJob interface.
 */
export function instanceOfV1XGBoostJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1XGBoostJobFromJSON(json: any): V1XGBoostJob {
    return V1XGBoostJobFromJSONTyped(json, false);
}

export function V1XGBoostJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1XGBoostJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'cleanPodPolicy': !exists(json, 'cleanPodPolicy') ? undefined : V1CleanPodPolicyFromJSON(json['cleanPodPolicy']),
        'schedulingPolicy': !exists(json, 'schedulingPolicy') ? undefined : V1SchedulingPolicyFromJSON(json['schedulingPolicy']),
        'master': !exists(json, 'master') ? undefined : V1KFReplicaFromJSON(json['master']),
        'worker': !exists(json, 'worker') ? undefined : V1KFReplicaFromJSON(json['worker']),
    };
}

export function V1XGBoostJobToJSON(value?: V1XGBoostJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'cleanPodPolicy': V1CleanPodPolicyToJSON(value.cleanPodPolicy),
        'schedulingPolicy': V1SchedulingPolicyToJSON(value.schedulingPolicy),
        'master': V1KFReplicaToJSON(value.master),
        'worker': V1KFReplicaToJSON(value.worker),
    };
}

