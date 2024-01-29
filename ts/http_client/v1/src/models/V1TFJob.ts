/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
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
 * @interface V1TFJob
 */
export interface V1TFJob {
    /**
     *
     * @type {string}
     * @memberof V1TFJob
     */
    kind?: string;
    /**
     *
     * @type {V1CleanPodPolicy}
     * @memberof V1TFJob
     */
    cleanPodPolicy?: V1CleanPodPolicy;
    /**
     *
     * @type {V1SchedulingPolicy}
     * @memberof V1TFJob
     */
    schedulingPolicy?: V1SchedulingPolicy;
    /**
     *
     * @type {string}
     * @memberof V1TFJob
     */
    successPolicy?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1TFJob
     */
    enableDynamicWorker?: boolean;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1TFJob
     */
    chief?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1TFJob
     */
    worker?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1TFJob
     */
    ps?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1TFJob
     */
    evaluator?: V1KFReplica;
}

/**
 * Check if a given object implements the V1TFJob interface.
 */
export function instanceOfV1TFJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TFJobFromJSON(json: any): V1TFJob {
    return V1TFJobFromJSONTyped(json, false);
}

export function V1TFJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TFJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'cleanPodPolicy': !exists(json, 'cleanPodPolicy') ? undefined : V1CleanPodPolicyFromJSON(json['cleanPodPolicy']),
        'schedulingPolicy': !exists(json, 'schedulingPolicy') ? undefined : V1SchedulingPolicyFromJSON(json['schedulingPolicy']),
        'successPolicy': !exists(json, 'successPolicy') ? undefined : json['successPolicy'],
        'enableDynamicWorker': !exists(json, 'enableDynamicWorker') ? undefined : json['enableDynamicWorker'],
        'chief': !exists(json, 'chief') ? undefined : V1KFReplicaFromJSON(json['chief']),
        'worker': !exists(json, 'worker') ? undefined : V1KFReplicaFromJSON(json['worker']),
        'ps': !exists(json, 'ps') ? undefined : V1KFReplicaFromJSON(json['ps']),
        'evaluator': !exists(json, 'evaluator') ? undefined : V1KFReplicaFromJSON(json['evaluator']),
    };
}

export function V1TFJobToJSON(value?: V1TFJob | null): any {
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
        'successPolicy': value.successPolicy,
        'enableDynamicWorker': value.enableDynamicWorker,
        'chief': V1KFReplicaToJSON(value.chief),
        'worker': V1KFReplicaToJSON(value.worker),
        'ps': V1KFReplicaToJSON(value.ps),
        'evaluator': V1KFReplicaToJSON(value.evaluator),
    };
}

