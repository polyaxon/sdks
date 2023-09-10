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


/**
 *
 * @export
 */
export const V1RunPending = {
    Approval: 'approval',
    Upload: 'upload',
    Cache: 'cache',
    Build: 'build'
} as const;
export type V1RunPending = typeof V1RunPending[keyof typeof V1RunPending];


export function V1RunPendingFromJSON(json: any): V1RunPending {
    return V1RunPendingFromJSONTyped(json, false);
}

export function V1RunPendingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunPending {
    return json as V1RunPending;
}

export function V1RunPendingToJSON(value?: V1RunPending | null): any {
    return value as any;
}

