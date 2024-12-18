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
import type { V1Cache } from './V1Cache';
import {
    V1CacheFromJSON,
    V1CacheFromJSONTyped,
    V1CacheToJSON,
} from './V1Cache';
import type { V1Param } from './V1Param';
import {
    V1ParamFromJSON,
    V1ParamFromJSONTyped,
    V1ParamToJSON,
} from './V1Param';
import type { V1PatchStrategy } from './V1PatchStrategy';
import {
    V1PatchStrategyFromJSON,
    V1PatchStrategyFromJSONTyped,
    V1PatchStrategyToJSON,
} from './V1PatchStrategy';

/**
 * 
 * @export
 * @interface V1Build
 */
export interface V1Build {
    /**
     * 
     * @type {string}
     * @memberof V1Build
     */
    hubRef?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Build
     */
    connection?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Build
     */
    presets?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1Build
     */
    queue?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Build
     */
    namespace?: string;
    /**
     * 
     * @type {V1Cache}
     * @memberof V1Build
     */
    cache?: V1Cache;
    /**
     * 
     * @type {{ [key: string]: V1Param; }}
     * @memberof V1Build
     */
    params?: { [key: string]: V1Param; };
    /**
     * 
     * @type {object}
     * @memberof V1Build
     */
    runPatch?: object;
    /**
     * 
     * @type {V1PatchStrategy}
     * @memberof V1Build
     */
    patchStrategy?: V1PatchStrategy;
}

/**
 * Check if a given object implements the V1Build interface.
 */
export function instanceOfV1Build(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1BuildFromJSON(json: any): V1Build {
    return V1BuildFromJSONTyped(json, false);
}

export function V1BuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Build {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hubRef': !exists(json, 'hubRef') ? undefined : json['hubRef'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'presets': !exists(json, 'presets') ? undefined : json['presets'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'cache': !exists(json, 'cache') ? undefined : V1CacheFromJSON(json['cache']),
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1ParamFromJSON)),
        'runPatch': !exists(json, 'runPatch') ? undefined : json['runPatch'],
        'patchStrategy': !exists(json, 'patchStrategy') ? undefined : V1PatchStrategyFromJSON(json['patchStrategy']),
    };
}

export function V1BuildToJSON(value?: V1Build | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hubRef': value.hubRef,
        'connection': value.connection,
        'presets': value.presets,
        'queue': value.queue,
        'namespace': value.namespace,
        'cache': V1CacheToJSON(value.cache),
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1ParamToJSON)),
        'runPatch': value.runPatch,
        'patchStrategy': V1PatchStrategyToJSON(value.patchStrategy),
    };
}

