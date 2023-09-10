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
export const V1Statuses = {
    Created: 'created',
    Resuming: 'resuming',
    OnSchedule: 'on_schedule',
    Compiled: 'compiled',
    Queued: 'queued',
    Scheduled: 'scheduled',
    Starting: 'starting',
    Running: 'running',
    Processing: 'processing',
    Stopping: 'stopping',
    Failed: 'failed',
    Stopped: 'stopped',
    Succeeded: 'succeeded',
    Skipped: 'skipped',
    Warning: 'warning',
    Unschedulable: 'unschedulable',
    UpstreamFailed: 'upstream_failed',
    Retrying: 'retrying',
    Unknown: 'unknown',
    Done: 'done'
} as const;
export type V1Statuses = typeof V1Statuses[keyof typeof V1Statuses];


export function V1StatusesFromJSON(json: any): V1Statuses {
    return V1StatusesFromJSONTyped(json, false);
}

export function V1StatusesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Statuses {
    return json as V1Statuses;
}

export function V1StatusesToJSON(value?: V1Statuses | null): any {
    return value as any;
}

