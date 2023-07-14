/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
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
export const V1RunKind = {
    Job: 'job',
    Service: 'service',
    Dag: 'dag',
    Sparkjob: 'sparkjob',
    Daskjob: 'daskjob',
    Rayjob: 'rayjob',
    Mpijob: 'mpijob',
    Tfjob: 'tfjob',
    Pytorchjob: 'pytorchjob',
    Paddlejob: 'paddlejob',
    Mxjob: 'mxjob',
    Xgbjob: 'xgbjob',
    Matrix: 'matrix',
    Schedule: 'schedule',
    Tuner: 'tuner',
    Watchdog: 'watchdog',
    Notifier: 'notifier',
    Cleaner: 'cleaner',
    Builder: 'builder'
} as const;
export type V1RunKind = typeof V1RunKind[keyof typeof V1RunKind];


export function V1RunKindFromJSON(json: any): V1RunKind {
    return V1RunKindFromJSONTyped(json, false);
}

export function V1RunKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunKind {
    return json as V1RunKind;
}

export function V1RunKindToJSON(value?: V1RunKind | null): any {
    return value as any;
}

