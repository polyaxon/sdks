/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc17
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
export const V1SparkType = {
    Java: 'java',
    Scala: 'scala',
    Python: 'python',
    R: 'r'
} as const;
export type V1SparkType = typeof V1SparkType[keyof typeof V1SparkType];


export function V1SparkTypeFromJSON(json: any): V1SparkType {
    return V1SparkTypeFromJSONTyped(json, false);
}

export function V1SparkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SparkType {
    return json as V1SparkType;
}

export function V1SparkTypeToJSON(value?: V1SparkType | null): any {
    return value as any;
}

