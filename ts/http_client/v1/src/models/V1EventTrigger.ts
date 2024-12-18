/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.5.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1EventKind } from './V1EventKind';
import {
    V1EventKindFromJSON,
    V1EventKindFromJSONTyped,
    V1EventKindToJSON,
} from './V1EventKind';

/**
 * 
 * @export
 * @interface V1EventTrigger
 */
export interface V1EventTrigger {
    /**
     * 
     * @type {Array<V1EventKind>}
     * @memberof V1EventTrigger
     */
    kinds?: Array<V1EventKind>;
    /**
     * 
     * @type {string}
     * @memberof V1EventTrigger
     */
    ref?: string;
}

/**
 * Check if a given object implements the V1EventTrigger interface.
 */
export function instanceOfV1EventTrigger(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventTriggerFromJSON(json: any): V1EventTrigger {
    return V1EventTriggerFromJSONTyped(json, false);
}

export function V1EventTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventTrigger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kinds': !exists(json, 'kinds') ? undefined : ((json['kinds'] as Array<any>).map(V1EventKindFromJSON)),
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
    };
}

export function V1EventTriggerToJSON(value?: V1EventTrigger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kinds': value.kinds === undefined ? undefined : ((value.kinds as Array<any>).map(V1EventKindToJSON)),
        'ref': value.ref,
    };
}

