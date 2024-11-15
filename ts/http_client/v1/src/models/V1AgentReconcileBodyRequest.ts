/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.2
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
 * @interface V1AgentReconcileBodyRequest
 */
export interface V1AgentReconcileBodyRequest {
    /**
     *
     * @type {string}
     * @memberof V1AgentReconcileBodyRequest
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof V1AgentReconcileBodyRequest
     */
    uuid?: string;
    /**
     *
     * @type {object}
     * @memberof V1AgentReconcileBodyRequest
     */
    reconcile?: object;
}

/**
 * Check if a given object implements the V1AgentReconcileBodyRequest interface.
 */
export function instanceOfV1AgentReconcileBodyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AgentReconcileBodyRequestFromJSON(json: any): V1AgentReconcileBodyRequest {
    return V1AgentReconcileBodyRequestFromJSONTyped(json, false);
}

export function V1AgentReconcileBodyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AgentReconcileBodyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'reconcile': !exists(json, 'reconcile') ? undefined : json['reconcile'],
    };
}

export function V1AgentReconcileBodyRequestToJSON(value?: V1AgentReconcileBodyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'owner': value.owner,
        'uuid': value.uuid,
        'reconcile': value.reconcile,
    };
}

