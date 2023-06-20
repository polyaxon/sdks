/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc20
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1TeamSettings } from './V1TeamSettings';
import {
    V1TeamSettingsFromJSON,
    V1TeamSettingsFromJSONTyped,
    V1TeamSettingsToJSON,
} from './V1TeamSettings';

/**
 *
 * @export
 * @interface V1Team
 */
export interface V1Team {
    /**
     *
     * @type {string}
     * @memberof V1Team
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Team
     */
    name?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Team
     */
    projects?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Team
     */
    component_hubs?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Team
     */
    model_registries?: Array<string>;
    /**
     *
     * @type {V1TeamSettings}
     * @memberof V1Team
     */
    settings?: V1TeamSettings;
    /**
     *
     * @type {Date}
     * @memberof V1Team
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Team
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the V1Team interface.
 */
export function instanceOfV1Team(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TeamFromJSON(json: any): V1Team {
    return V1TeamFromJSONTyped(json, false);
}

export function V1TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Team {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projects': !exists(json, 'projects') ? undefined : json['projects'],
        'component_hubs': !exists(json, 'component_hubs') ? undefined : json['component_hubs'],
        'model_registries': !exists(json, 'model_registries') ? undefined : json['model_registries'],
        'settings': !exists(json, 'settings') ? undefined : V1TeamSettingsFromJSON(json['settings']),
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function V1TeamToJSON(value?: V1Team | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'name': value.name,
        'projects': value.projects,
        'component_hubs': value.component_hubs,
        'model_registries': value.model_registries,
        'settings': V1TeamSettingsToJSON(value.settings),
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}

