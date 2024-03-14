/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc0
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
export const V1RunEdgeKind = {
    Action: 'action',
    Event: 'event',
    Hook: 'hook',
    Dag: 'dag',
    Join: 'join',
    Run: 'run',
    Tb: 'tb',
    Build: 'build',
    Manual: 'manual'
} as const;
export type V1RunEdgeKind = typeof V1RunEdgeKind[keyof typeof V1RunEdgeKind];


export function V1RunEdgeKindFromJSON(json: any): V1RunEdgeKind {
    return V1RunEdgeKindFromJSONTyped(json, false);
}

export function V1RunEdgeKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunEdgeKind {
    return json as V1RunEdgeKind;
}

export function V1RunEdgeKindToJSON(value?: V1RunEdgeKind | null): any {
    return value as any;
}

