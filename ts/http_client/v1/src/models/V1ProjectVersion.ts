/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ProjectVersionKind } from './V1ProjectVersionKind';
import {
    V1ProjectVersionKindFromJSON,
    V1ProjectVersionKindFromJSONTyped,
    V1ProjectVersionKindToJSON,
} from './V1ProjectVersionKind';
import type { V1StageCondition } from './V1StageCondition';
import {
    V1StageConditionFromJSON,
    V1StageConditionFromJSONTyped,
    V1StageConditionToJSON,
} from './V1StageCondition';
import type { V1Stages } from './V1Stages';
import {
    V1StagesFromJSON,
    V1StagesFromJSONTyped,
    V1StagesToJSON,
} from './V1Stages';

/**
 * 
 * @export
 * @interface V1ProjectVersion
 */
export interface V1ProjectVersion {
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ProjectVersion
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    connection?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    run?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ProjectVersion
     */
    artifacts?: Array<string>;
    /**
     * Extra information related to the run, lineage, artifacts, ...
     * @type {object}
     * @memberof V1ProjectVersion
     */
    meta_info?: object;
    /**
     * 
     * @type {Date}
     * @memberof V1ProjectVersion
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1ProjectVersion
     */
    updated_at?: Date;
    /**
     * 
     * @type {V1Stages}
     * @memberof V1ProjectVersion
     */
    stage?: V1Stages;
    /**
     * 
     * @type {V1ProjectVersionKind}
     * @memberof V1ProjectVersion
     */
    kind?: V1ProjectVersionKind;
    /**
     * 
     * @type {Array<V1StageCondition>}
     * @memberof V1ProjectVersion
     */
    stage_conditions?: Array<V1StageCondition>;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    readme?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectVersion
     */
    role?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1ProjectVersion
     */
    contributors?: Array<object>;
}

/**
 * Check if a given object implements the V1ProjectVersion interface.
 */
export function instanceOfV1ProjectVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ProjectVersionFromJSON(json: any): V1ProjectVersion {
    return V1ProjectVersionFromJSONTyped(json, false);
}

export function V1ProjectVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProjectVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'run': !exists(json, 'run') ? undefined : json['run'],
        'artifacts': !exists(json, 'artifacts') ? undefined : json['artifacts'],
        'meta_info': !exists(json, 'meta_info') ? undefined : json['meta_info'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'stage': !exists(json, 'stage') ? undefined : V1StagesFromJSON(json['stage']),
        'kind': !exists(json, 'kind') ? undefined : V1ProjectVersionKindFromJSON(json['kind']),
        'stage_conditions': !exists(json, 'stage_conditions') ? undefined : ((json['stage_conditions'] as Array<any>).map(V1StageConditionFromJSON)),
        'content': !exists(json, 'content') ? undefined : json['content'],
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'contributors': !exists(json, 'contributors') ? undefined : json['contributors'],
    };
}

export function V1ProjectVersionToJSON(value?: V1ProjectVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'owner': value.owner,
        'project': value.project,
        'connection': value.connection,
        'run': value.run,
        'artifacts': value.artifacts,
        'meta_info': value.meta_info,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'stage': V1StagesToJSON(value.stage),
        'kind': V1ProjectVersionKindToJSON(value.kind),
        'stage_conditions': value.stage_conditions === undefined ? undefined : ((value.stage_conditions as Array<any>).map(V1StageConditionToJSON)),
        'content': value.content,
        'readme': value.readme,
        'state': value.state,
        'role': value.role,
        'contributors': value.contributors,
    };
}

