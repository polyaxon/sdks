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
 * The version of the OpenAPI document: 1.13.0-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MPIJobImplementation,
    MPIJobImplementationFromJSON,
    MPIJobImplementationFromJSONTyped,
    MPIJobImplementationToJSON,
    V1CleanPodPolicy,
    V1CleanPodPolicyFromJSON,
    V1CleanPodPolicyFromJSONTyped,
    V1CleanPodPolicyToJSON,
    V1KFReplica,
    V1KFReplicaFromJSON,
    V1KFReplicaFromJSONTyped,
    V1KFReplicaToJSON,
    V1SchedulingPolicy,
    V1SchedulingPolicyFromJSON,
    V1SchedulingPolicyFromJSONTyped,
    V1SchedulingPolicyToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1MPIJob
 */
export interface V1MPIJob {
    /**
     * 
     * @type {string}
     * @memberof V1MPIJob
     */
    kind?: string;
    /**
     * 
     * @type {V1CleanPodPolicy}
     * @memberof V1MPIJob
     */
    cleanPodPolicy?: V1CleanPodPolicy;
    /**
     * 
     * @type {V1SchedulingPolicy}
     * @memberof V1MPIJob
     */
    schedulingPolicy?: V1SchedulingPolicy;
    /**
     * 
     * @type {string}
     * @memberof V1MPIJob
     */
    sshAuthMountPath?: string;
    /**
     * 
     * @type {MPIJobImplementation}
     * @memberof V1MPIJob
     */
    implementation?: MPIJobImplementation;
    /**
     * 
     * @type {number}
     * @memberof V1MPIJob
     */
    slotsPerWorker?: number;
    /**
     * 
     * @type {V1KFReplica}
     * @memberof V1MPIJob
     */
    template?: V1KFReplica;
    /**
     * 
     * @type {V1KFReplica}
     * @memberof V1MPIJob
     */
    worker?: V1KFReplica;
    /**
     * 
     * @type {V1KFReplica}
     * @memberof V1MPIJob
     */
    launcher?: V1KFReplica;
}

export function V1MPIJobFromJSON(json: any): V1MPIJob {
    return V1MPIJobFromJSONTyped(json, false);
}

export function V1MPIJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MPIJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'cleanPodPolicy': !exists(json, 'cleanPodPolicy') ? undefined : V1CleanPodPolicyFromJSON(json['cleanPodPolicy']),
        'schedulingPolicy': !exists(json, 'schedulingPolicy') ? undefined : V1SchedulingPolicyFromJSON(json['schedulingPolicy']),
        'sshAuthMountPath': !exists(json, 'sshAuthMountPath') ? undefined : json['sshAuthMountPath'],
        'implementation': !exists(json, 'implementation') ? undefined : MPIJobImplementationFromJSON(json['implementation']),
        'slotsPerWorker': !exists(json, 'slotsPerWorker') ? undefined : json['slotsPerWorker'],
        'template': !exists(json, 'template') ? undefined : V1KFReplicaFromJSON(json['template']),
        'worker': !exists(json, 'worker') ? undefined : V1KFReplicaFromJSON(json['worker']),
        'launcher': !exists(json, 'launcher') ? undefined : V1KFReplicaFromJSON(json['launcher']),
    };
}

export function V1MPIJobToJSON(value?: V1MPIJob | null): any {
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
        'sshAuthMountPath': value.sshAuthMountPath,
        'implementation': MPIJobImplementationToJSON(value.implementation),
        'slotsPerWorker': value.slotsPerWorker,
        'template': V1KFReplicaToJSON(value.template),
        'worker': V1KFReplicaToJSON(value.worker),
        'launcher': V1KFReplicaToJSON(value.launcher),
    };
}
