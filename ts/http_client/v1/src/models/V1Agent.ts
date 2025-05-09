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

import { exists, mapValues } from '../runtime';
import type { V1StatusCondition } from './V1StatusCondition';
import {
    V1StatusConditionFromJSON,
    V1StatusConditionFromJSONTyped,
    V1StatusConditionToJSON,
} from './V1StatusCondition';
import type { V1Statuses } from './V1Statuses';
import {
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './V1Statuses';

/**
 *
 * @export
 * @interface V1Agent
 */
export interface V1Agent {
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Agent
     */
    tags?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof V1Agent
     */
    live_state?: number;
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    namespace?: string;
    /**
     *
     * @type {object}
     * @memberof V1Agent
     */
    version_api?: object;
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    version?: string;
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    content?: string;
    /**
     *
     * @type {Date}
     * @memberof V1Agent
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Agent
     */
    updated_at?: Date;
    /**
     *
     * @type {V1Statuses}
     * @memberof V1Agent
     */
    status?: V1Statuses;
    /**
     *
     * @type {Array<V1StatusCondition>}
     * @memberof V1Agent
     */
    status_conditions?: Array<V1StatusCondition>;
    /**
     *
     * @type {boolean}
     * @memberof V1Agent
     */
    is_replica?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Agent
     */
    is_ui_managed?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1Agent
     */
    hostname?: string;
    /**
     *
     * @type {object}
     * @memberof V1Agent
     */
    settings?: object;
    /**
     *
     * @type {object}
     * @memberof V1Agent
     */
    stats?: object;
}

/**
 * Check if a given object implements the V1Agent interface.
 */
export function instanceOfV1Agent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AgentFromJSON(json: any): V1Agent {
    return V1AgentFromJSONTyped(json, false);
}

export function V1AgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Agent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'version_api': !exists(json, 'version_api') ? undefined : json['version_api'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'status': !exists(json, 'status') ? undefined : V1StatusesFromJSON(json['status']),
        'status_conditions': !exists(json, 'status_conditions') ? undefined : ((json['status_conditions'] as Array<any>).map(V1StatusConditionFromJSON)),
        'is_replica': !exists(json, 'is_replica') ? undefined : json['is_replica'],
        'is_ui_managed': !exists(json, 'is_ui_managed') ? undefined : json['is_ui_managed'],
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'settings': !exists(json, 'settings') ? undefined : json['settings'],
        'stats': !exists(json, 'stats') ? undefined : json['stats'],
    };
}

export function V1AgentToJSON(value?: V1Agent | null): any {
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
        'live_state': value.live_state,
        'namespace': value.namespace,
        'version_api': value.version_api,
        'version': value.version,
        'content': value.content,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'status': V1StatusesToJSON(value.status),
        'status_conditions': value.status_conditions === undefined ? undefined : ((value.status_conditions as Array<any>).map(V1StatusConditionToJSON)),
        'is_replica': value.is_replica,
        'is_ui_managed': value.is_ui_managed,
        'hostname': value.hostname,
        'settings': value.settings,
        'stats': value.stats,
    };
}

