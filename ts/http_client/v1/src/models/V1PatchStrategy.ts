/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * - replace: Replaces the keys
 *  - isnull: Only set the keys if they do not exist or if they are null
 *  - post_merge: Merge the all keys and replace by new one
 *  - pre_merge: Merge the all keys and keep old ones
 * @export
 */
export const V1PatchStrategy = {
    Replace: 'replace',
    Isnull: 'isnull',
    PostMerge: 'post_merge',
    PreMerge: 'pre_merge'
} as const;
export type V1PatchStrategy = typeof V1PatchStrategy[keyof typeof V1PatchStrategy];


export function V1PatchStrategyFromJSON(json: any): V1PatchStrategy {
    return V1PatchStrategyFromJSONTyped(json, false);
}

export function V1PatchStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PatchStrategy {
    return json as V1PatchStrategy;
}

export function V1PatchStrategyToJSON(value?: V1PatchStrategy | null): any {
    return value as any;
}

