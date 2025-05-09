/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
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
export const V1EventKind = {
    RunStatusCreated: 'run_status_created',
    RunStatusResuming: 'run_status_resuming',
    RunStatusCompiled: 'run_status_compiled',
    RunStatusOnSchedule: 'run_status_on_schedule',
    RunStatusQueued: 'run_status_queued',
    RunStatusScheduled: 'run_status_scheduled',
    RunStatusStarting: 'run_status_starting',
    RunStatusRunning: 'run_status_running',
    RunStatusProcessing: 'run_status_processing',
    RunStatusStopping: 'run_status_stopping',
    RunStatusFailed: 'run_status_failed',
    RunStatusStopped: 'run_status_stopped',
    RunStatusSucceeded: 'run_status_succeeded',
    RunStatusSkipped: 'run_status_skipped',
    RunStatusWarning: 'run_status_warning',
    RunStatusUnschedulable: 'run_status_unschedulable',
    RunStatusUpstreamFailed: 'run_status_upstream_failed',
    RunStatusRetrying: 'run_status_retrying',
    RunStatusUnknown: 'run_status_unknown',
    RunStatusDone: 'run_status_done',
    RunApprovedActor: 'run_approved_actor',
    RunInvalidatedActor: 'run_invalidated_actor',
    RunNewArtifacts: 'run_new_artifacts',
    ConnectionGitCommit: 'connection_git_commit',
    ConnectionDatasetVersion: 'connection_dataset_version',
    ConnectionRegistryImage: 'connection_registry_image',
    AlertInfo: 'alert_info',
    AlertWarning: 'alert_warning',
    AlertCritical: 'alert_critical',
    ModelVersionNewMetric: 'model_version_new_metric',
    ProjectCustomEvent: 'project_custom_event',
    OrgCustomEvent: 'org_custom_event'
} as const;
export type V1EventKind = typeof V1EventKind[keyof typeof V1EventKind];


export function V1EventKindFromJSON(json: any): V1EventKind {
    return V1EventKindFromJSONTyped(json, false);
}

export function V1EventKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventKind {
    return json as V1EventKind;
}

export function V1EventKindToJSON(value?: V1EventKind | null): any {
    return value as any;
}

