/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.2-rc0
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
export const V1CloningKind = {
    Copy: 'copy',
    Restart: 'restart',
    Cache: 'cache'
} as const;
export type V1CloningKind = typeof V1CloningKind[keyof typeof V1CloningKind];


export function V1CloningKindFromJSON(json: any): V1CloningKind {
    return V1CloningKindFromJSONTyped(json, false);
}

export function V1CloningKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CloningKind {
    return json as V1CloningKind;
}

export function V1CloningKindToJSON(value?: V1CloningKind | null): any {
    return value as any;
}

