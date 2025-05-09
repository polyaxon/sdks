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
import type { V1RunReferenceCatalog } from './V1RunReferenceCatalog';
import {
    V1RunReferenceCatalogFromJSON,
    V1RunReferenceCatalogFromJSONTyped,
    V1RunReferenceCatalogToJSON,
} from './V1RunReferenceCatalog';
import type { V1SettingsCatalog } from './V1SettingsCatalog';
import {
    V1SettingsCatalogFromJSON,
    V1SettingsCatalogFromJSONTyped,
    V1SettingsCatalogToJSON,
} from './V1SettingsCatalog';

/**
 *
 * @export
 * @interface V1RunSettings
 */
export interface V1RunSettings {
    /**
     *
     * @type {string}
     * @memberof V1RunSettings
     */
    namespace?: string;
    /**
     *
     * @type {V1SettingsCatalog}
     * @memberof V1RunSettings
     */
    agent?: V1SettingsCatalog;
    /**
     *
     * @type {V1SettingsCatalog}
     * @memberof V1RunSettings
     */
    queue?: V1SettingsCatalog;
    /**
     *
     * @type {V1SettingsCatalog}
     * @memberof V1RunSettings
     */
    artifacts_store?: V1SettingsCatalog;
    /**
     *
     * @type {object}
     * @memberof V1RunSettings
     */
    tensorboard?: object;
    /**
     *
     * @type {object}
     * @memberof V1RunSettings
     */
    build?: object;
    /**
     *
     * @type {object}
     * @memberof V1RunSettings
     */
    component?: object;
    /**
     *
     * @type {Array<V1RunReferenceCatalog>}
     * @memberof V1RunSettings
     */
    models?: Array<V1RunReferenceCatalog>;
    /**
     *
     * @type {Array<V1RunReferenceCatalog>}
     * @memberof V1RunSettings
     */
    artifacts?: Array<V1RunReferenceCatalog>;
}

/**
 * Check if a given object implements the V1RunSettings interface.
 */
export function instanceOfV1RunSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RunSettingsFromJSON(json: any): V1RunSettings {
    return V1RunSettingsFromJSONTyped(json, false);
}

export function V1RunSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'agent': !exists(json, 'agent') ? undefined : V1SettingsCatalogFromJSON(json['agent']),
        'queue': !exists(json, 'queue') ? undefined : V1SettingsCatalogFromJSON(json['queue']),
        'artifacts_store': !exists(json, 'artifacts_store') ? undefined : V1SettingsCatalogFromJSON(json['artifacts_store']),
        'tensorboard': !exists(json, 'tensorboard') ? undefined : json['tensorboard'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'component': !exists(json, 'component') ? undefined : json['component'],
        'models': !exists(json, 'models') ? undefined : ((json['models'] as Array<any>).map(V1RunReferenceCatalogFromJSON)),
        'artifacts': !exists(json, 'artifacts') ? undefined : ((json['artifacts'] as Array<any>).map(V1RunReferenceCatalogFromJSON)),
    };
}

export function V1RunSettingsToJSON(value?: V1RunSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'namespace': value.namespace,
        'agent': V1SettingsCatalogToJSON(value.agent),
        'queue': V1SettingsCatalogToJSON(value.queue),
        'artifacts_store': V1SettingsCatalogToJSON(value.artifacts_store),
        'tensorboard': value.tensorboard,
        'build': value.build,
        'component': value.component,
        'models': value.models === undefined ? undefined : ((value.models as Array<any>).map(V1RunReferenceCatalogToJSON)),
        'artifacts': value.artifacts === undefined ? undefined : ((value.artifacts as Array<any>).map(V1RunReferenceCatalogToJSON)),
    };
}

