/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
export const V1EventSpanKind = {
    Llm: 'llm',
    Chain: 'chain',
    Agent: 'agent',
    Tool: 'tool',
    Embedding: 'embedding',
    Retriever: 'retriever'
} as const;
export type V1EventSpanKind = typeof V1EventSpanKind[keyof typeof V1EventSpanKind];


export function V1EventSpanKindFromJSON(json: any): V1EventSpanKind {
    return V1EventSpanKindFromJSONTyped(json, false);
}

export function V1EventSpanKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventSpanKind {
    return json as V1EventSpanKind;
}

export function V1EventSpanKindToJSON(value?: V1EventSpanKind | null): any {
    return value as any;
}

