/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc40
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1RayReplica } from './V1RayReplica';
import {
    V1RayReplicaFromJSON,
    V1RayReplicaFromJSONTyped,
    V1RayReplicaToJSON,
} from './V1RayReplica';

/**
 *
 * @export
 * @interface V1RayJob
 */
export interface V1RayJob {
    /**
     *
     * @type {string}
     * @memberof V1RayJob
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1RayJob
     */
    entrypoint?: string;
    /**
     *
     * @type {object}
     * @memberof V1RayJob
     */
    runtimeEnv?: object;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof V1RayJob
     */
    metadata?: { [key: string]: string; };
    /**
     *
     * @type {string}
     * @memberof V1RayJob
     */
    rayVersion?: string;
    /**
     *
     * @type {V1RayReplica}
     * @memberof V1RayJob
     */
    head?: V1RayReplica;
    /**
     *
     * @type {Array<V1RayReplica>}
     * @memberof V1RayJob
     */
    workers?: Array<V1RayReplica>;
}

/**
 * Check if a given object implements the V1RayJob interface.
 */
export function instanceOfV1RayJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RayJobFromJSON(json: any): V1RayJob {
    return V1RayJobFromJSONTyped(json, false);
}

export function V1RayJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RayJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'entrypoint': !exists(json, 'entrypoint') ? undefined : json['entrypoint'],
        'runtimeEnv': !exists(json, 'runtimeEnv') ? undefined : json['runtimeEnv'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'rayVersion': !exists(json, 'rayVersion') ? undefined : json['rayVersion'],
        'head': !exists(json, 'head') ? undefined : V1RayReplicaFromJSON(json['head']),
        'workers': !exists(json, 'workers') ? undefined : ((json['workers'] as Array<any>).map(V1RayReplicaFromJSON)),
    };
}

export function V1RayJobToJSON(value?: V1RayJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'entrypoint': value.entrypoint,
        'runtimeEnv': value.runtimeEnv,
        'metadata': value.metadata,
        'rayVersion': value.rayVersion,
        'head': V1RayReplicaToJSON(value.head),
        'workers': value.workers === undefined ? undefined : ((value.workers as Array<any>).map(V1RayReplicaToJSON)),
    };
}
