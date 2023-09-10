/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc39
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
     * @type {number}
     * @memberof V1MPIJob
     */
    slotsPerWorker?: number;
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

/**
 * Check if a given object implements the V1MPIJob interface.
 */
export function instanceOfV1MPIJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
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
        'slotsPerWorker': !exists(json, 'slotsPerWorker') ? undefined : json['slotsPerWorker'],
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
        'slotsPerWorker': value.slotsPerWorker,
        'worker': V1KFReplicaToJSON(value.worker),
        'launcher': V1KFReplicaToJSON(value.launcher),
    };
}

