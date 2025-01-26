/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1SettingsCatalog } from './V1SettingsCatalog';
import {
    V1SettingsCatalogFromJSON,
    V1SettingsCatalogFromJSONTyped,
    V1SettingsCatalogToJSON,
} from './V1SettingsCatalog';

/**
 *
 * @export
 * @interface V1PresetSettings
 */
export interface V1PresetSettings {
    /**
     *
     * @type {Array<V1SettingsCatalog>}
     * @memberof V1PresetSettings
     */
    projects?: Array<V1SettingsCatalog>;
    /**
     *
     * @type {Array<V1SettingsCatalog>}
     * @memberof V1PresetSettings
     */
    runs?: Array<V1SettingsCatalog>;
}

/**
 * Check if a given object implements the V1PresetSettings interface.
 */
export function instanceOfV1PresetSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PresetSettingsFromJSON(json: any): V1PresetSettings {
    return V1PresetSettingsFromJSONTyped(json, false);
}

export function V1PresetSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PresetSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(V1SettingsCatalogFromJSON)),
        'runs': !exists(json, 'runs') ? undefined : ((json['runs'] as Array<any>).map(V1SettingsCatalogFromJSON)),
    };
}

export function V1PresetSettingsToJSON(value?: V1PresetSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(V1SettingsCatalogToJSON)),
        'runs': value.runs === undefined ? undefined : ((value.runs as Array<any>).map(V1SettingsCatalogToJSON)),
    };
}

