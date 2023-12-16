/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6
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
    Daskjob: 'daskjob',
    Rayjob: 'rayjob',
    Mpijob: 'mpijob',
    Tfjob: 'tfjob',
    Pytorchjob: 'pytorchjob',
    Mxjob: 'mxjob',
    Xgbjob: 'xgbjob',
    Paddlejob: 'paddlejob',
    Matrix: 'matrix',
    Schedule: 'schedule',
    Tuner: 'tuner',
    Watchdog: 'watchdog',
    Notifier: 'notifier',
    Builder: 'builder',
    Cleaner: 'cleaner'
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

