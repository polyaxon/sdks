/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc23
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
export const V1ProjectVersionKind = {
    Component: 'component',
    Model: 'model',
    Artifact: 'artifact'
} as const;
export type V1ProjectVersionKind = typeof V1ProjectVersionKind[keyof typeof V1ProjectVersionKind];


export function V1ProjectVersionKindFromJSON(json: any): V1ProjectVersionKind {
    return V1ProjectVersionKindFromJSONTyped(json, false);
}

export function V1ProjectVersionKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProjectVersionKind {
    return json as V1ProjectVersionKind;
}

export function V1ProjectVersionKindToJSON(value?: V1ProjectVersionKind | null): any {
    return value as any;
}

