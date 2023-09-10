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
export const V1PipelineKind = {
    Dag: 'dag',
    Matrix: 'matrix'
} as const;
export type V1PipelineKind = typeof V1PipelineKind[keyof typeof V1PipelineKind];


export function V1PipelineKindFromJSON(json: any): V1PipelineKind {
    return V1PipelineKindFromJSONTyped(json, false);
}

export function V1PipelineKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PipelineKind {
    return json as V1PipelineKind;
}

export function V1PipelineKindToJSON(value?: V1PipelineKind | null): any {
    return value as any;
}

