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
import type { SearchView } from './SearchView';
import {
    SearchViewFromJSON,
    SearchViewFromJSONTyped,
    SearchViewToJSON,
} from './SearchView';
import type { V1SearchSpec } from './V1SearchSpec';
import {
    V1SearchSpecFromJSON,
    V1SearchSpecFromJSONTyped,
    V1SearchSpecToJSON,
} from './V1SearchSpec';

/**
 *
 * @export
 * @interface V1Search
 */
export interface V1Search {
    /**
     *
     * @type {string}
     * @memberof V1Search
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Search
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Search
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Search
     */
    tags?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof V1Search
     */
    live_state?: number;
    /**
     *
     * @type {SearchView}
     * @memberof V1Search
     */
    view?: SearchView;
    /**
     *
     * @type {V1SearchSpec}
     * @memberof V1Search
     */
    spec?: V1SearchSpec;
    /**
     *
     * @type {boolean}
     * @memberof V1Search
     */
    org_level?: boolean;
    /**
     *
     * @type {Date}
     * @memberof V1Search
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Search
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the V1Search interface.
 */
export function instanceOfV1Search(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SearchFromJSON(json: any): V1Search {
    return V1SearchFromJSONTyped(json, false);
}

export function V1SearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Search {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'view': !exists(json, 'view') ? undefined : SearchViewFromJSON(json['view']),
        'spec': !exists(json, 'spec') ? undefined : V1SearchSpecFromJSON(json['spec']),
        'org_level': !exists(json, 'org_level') ? undefined : json['org_level'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function V1SearchToJSON(value?: V1Search | null): any {
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
        'view': SearchViewToJSON(value.view),
        'spec': V1SearchSpecToJSON(value.spec),
        'org_level': value.org_level,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}

