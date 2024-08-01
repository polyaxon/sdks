/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Version } from './V1Version';
import {
    V1VersionFromJSON,
    V1VersionFromJSONTyped,
    V1VersionToJSON,
} from './V1Version';

/**
 * 
 * @export
 * @interface V1Compatibility
 */
export interface V1Compatibility {
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    cli?: V1Version;
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    platform?: V1Version;
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    agent?: V1Version;
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    ui?: V1Version;
}

/**
 * Check if a given object implements the V1Compatibility interface.
 */
export function instanceOfV1Compatibility(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CompatibilityFromJSON(json: any): V1Compatibility {
    return V1CompatibilityFromJSONTyped(json, false);
}

export function V1CompatibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Compatibility {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cli': !exists(json, 'cli') ? undefined : V1VersionFromJSON(json['cli']),
        'platform': !exists(json, 'platform') ? undefined : V1VersionFromJSON(json['platform']),
        'agent': !exists(json, 'agent') ? undefined : V1VersionFromJSON(json['agent']),
        'ui': !exists(json, 'ui') ? undefined : V1VersionFromJSON(json['ui']),
    };
}

export function V1CompatibilityToJSON(value?: V1Compatibility | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cli': V1VersionToJSON(value.cli),
        'platform': V1VersionToJSON(value.platform),
        'agent': V1VersionToJSON(value.agent),
        'ui': V1VersionToJSON(value.ui),
    };
}

