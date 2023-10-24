/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc54
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Build } from './V1Build';
import {
    V1BuildFromJSON,
    V1BuildFromJSONTyped,
    V1BuildToJSON,
} from './V1Build';
import type { V1Cache } from './V1Cache';
import {
    V1CacheFromJSON,
    V1CacheFromJSONTyped,
    V1CacheToJSON,
} from './V1Cache';
import type { V1Component } from './V1Component';
import {
    V1ComponentFromJSON,
    V1ComponentFromJSONTyped,
    V1ComponentToJSON,
} from './V1Component';
import type { V1EventTrigger } from './V1EventTrigger';
import {
    V1EventTriggerFromJSON,
    V1EventTriggerFromJSONTyped,
    V1EventTriggerToJSON,
} from './V1EventTrigger';
import type { V1Hook } from './V1Hook';
import {
    V1HookFromJSON,
    V1HookFromJSONTyped,
    V1HookToJSON,
} from './V1Hook';
import type { V1Join } from './V1Join';
import {
    V1JoinFromJSON,
    V1JoinFromJSONTyped,
    V1JoinToJSON,
} from './V1Join';
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
import type { V1Plugins } from './V1Plugins';
import {
    V1PluginsFromJSON,
    V1PluginsFromJSONTyped,
    V1PluginsToJSON,
} from './V1Plugins';
import type { V1Template } from './V1Template';
import {
    V1TemplateFromJSON,
    V1TemplateFromJSONTyped,
    V1TemplateToJSON,
} from './V1Template';
import type { V1Termination } from './V1Termination';
import {
    V1TerminationFromJSON,
    V1TerminationFromJSONTyped,
    V1TerminationToJSON,
} from './V1Termination';
import type { V1TriggerPolicy } from './V1TriggerPolicy';
import {
    V1TriggerPolicyFromJSON,
    V1TriggerPolicyFromJSONTyped,
    V1TriggerPolicyToJSON,
} from './V1TriggerPolicy';

/**
 *
 * @export
 * @interface V1Operation
 */
export interface V1Operation {
    /**
     *
     * @type {number}
     * @memberof V1Operation
     */
    version?: number;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Operation
     */
    tags?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Operation
     */
    presets?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    queue?: string;
    /**
     *
     * @type {V1Cache}
     * @memberof V1Operation
     */
    cache?: V1Cache;
    /**
     *
     * @type {V1Termination}
     * @memberof V1Operation
     */
    termination?: V1Termination;
    /**
     *
     * @type {V1Plugins}
     * @memberof V1Operation
     */
    plugins?: V1Plugins;
    /**
     *
     * @type {object}
     * @memberof V1Operation
     */
    schedule?: object;
    /**
     *
     * @type {Array<V1EventTrigger>}
     * @memberof V1Operation
     */
    events?: Array<V1EventTrigger>;
    /**
     *
     * @type {Array<V1Hook>}
     * @memberof V1Operation
     */
    hooks?: Array<V1Hook>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Operation
     */
    dependencies?: Array<string>;
    /**
     *
     * @type {V1TriggerPolicy}
     * @memberof V1Operation
     */
    trigger?: V1TriggerPolicy;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    conditions?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1Operation
     */
    skipOnUpstreamSkip?: boolean;
    /**
     *
     * @type {object}
     * @memberof V1Operation
     */
    matrix?: object;
    /**
     *
     * @type {{ [key: string]: V1Join; }}
     * @memberof V1Operation
     */
    joins?: { [key: string]: V1Join; };
    /**
     *
     * @type {{ [key: string]: V1Param; }}
     * @memberof V1Operation
     */
    params?: { [key: string]: V1Param; };
    /**
     *
     * @type {object}
     * @memberof V1Operation
     */
    runPatch?: object;
    /**
     *
     * @type {V1PatchStrategy}
     * @memberof V1Operation
     */
    patchStrategy?: V1PatchStrategy;
    /**
     *
     * @type {boolean}
     * @memberof V1Operation
     */
    isPreset?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Operation
     */
    isApproved?: boolean;
    /**
     *
     * @type {V1Template}
     * @memberof V1Operation
     */
    template?: V1Template;
    /**
     *
     * @type {V1Build}
     * @memberof V1Operation
     */
    build?: V1Build;
    /**
     *
     * @type {number}
     * @memberof V1Operation
     */
    cost?: number;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    pathRef?: string;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    hubRef?: string;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    dagRef?: string;
    /**
     *
     * @type {string}
     * @memberof V1Operation
     */
    urlRef?: string;
    /**
     *
     * @type {V1Component}
     * @memberof V1Operation
     */
    component?: V1Component;
}

/**
 * Check if a given object implements the V1Operation interface.
 */
export function instanceOfV1Operation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1OperationFromJSON(json: any): V1Operation {
    return V1OperationFromJSONTyped(json, false);
}

export function V1OperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Operation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'version': !exists(json, 'version') ? undefined : json['version'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'presets': !exists(json, 'presets') ? undefined : json['presets'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'cache': !exists(json, 'cache') ? undefined : V1CacheFromJSON(json['cache']),
        'termination': !exists(json, 'termination') ? undefined : V1TerminationFromJSON(json['termination']),
        'plugins': !exists(json, 'plugins') ? undefined : V1PluginsFromJSON(json['plugins']),
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(V1EventTriggerFromJSON)),
        'hooks': !exists(json, 'hooks') ? undefined : ((json['hooks'] as Array<any>).map(V1HookFromJSON)),
        'dependencies': !exists(json, 'dependencies') ? undefined : json['dependencies'],
        'trigger': !exists(json, 'trigger') ? undefined : V1TriggerPolicyFromJSON(json['trigger']),
        'conditions': !exists(json, 'conditions') ? undefined : json['conditions'],
        'skipOnUpstreamSkip': !exists(json, 'skipOnUpstreamSkip') ? undefined : json['skipOnUpstreamSkip'],
        'matrix': !exists(json, 'matrix') ? undefined : json['matrix'],
        'joins': !exists(json, 'joins') ? undefined : (mapValues(json['joins'], V1JoinFromJSON)),
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1ParamFromJSON)),
        'runPatch': !exists(json, 'runPatch') ? undefined : json['runPatch'],
        'patchStrategy': !exists(json, 'patchStrategy') ? undefined : V1PatchStrategyFromJSON(json['patchStrategy']),
        'isPreset': !exists(json, 'isPreset') ? undefined : json['isPreset'],
        'isApproved': !exists(json, 'isApproved') ? undefined : json['isApproved'],
        'template': !exists(json, 'template') ? undefined : V1TemplateFromJSON(json['template']),
        'build': !exists(json, 'build') ? undefined : V1BuildFromJSON(json['build']),
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'pathRef': !exists(json, 'pathRef') ? undefined : json['pathRef'],
        'hubRef': !exists(json, 'hubRef') ? undefined : json['hubRef'],
        'dagRef': !exists(json, 'dagRef') ? undefined : json['dagRef'],
        'urlRef': !exists(json, 'urlRef') ? undefined : json['urlRef'],
        'component': !exists(json, 'component') ? undefined : V1ComponentFromJSON(json['component']),
    };
}

export function V1OperationToJSON(value?: V1Operation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'version': value.version,
        'kind': value.kind,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'presets': value.presets,
        'queue': value.queue,
        'cache': V1CacheToJSON(value.cache),
        'termination': V1TerminationToJSON(value.termination),
        'plugins': V1PluginsToJSON(value.plugins),
        'schedule': value.schedule,
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(V1EventTriggerToJSON)),
        'hooks': value.hooks === undefined ? undefined : ((value.hooks as Array<any>).map(V1HookToJSON)),
        'dependencies': value.dependencies,
        'trigger': V1TriggerPolicyToJSON(value.trigger),
        'conditions': value.conditions,
        'skipOnUpstreamSkip': value.skipOnUpstreamSkip,
        'matrix': value.matrix,
        'joins': value.joins === undefined ? undefined : (mapValues(value.joins, V1JoinToJSON)),
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1ParamToJSON)),
        'runPatch': value.runPatch,
        'patchStrategy': V1PatchStrategyToJSON(value.patchStrategy),
        'isPreset': value.isPreset,
        'isApproved': value.isApproved,
        'template': V1TemplateToJSON(value.template),
        'build': V1BuildToJSON(value.build),
        'cost': value.cost,
        'pathRef': value.pathRef,
        'hubRef': value.hubRef,
        'dagRef': value.dagRef,
        'urlRef': value.urlRef,
        'component': V1ComponentToJSON(value.component),
    };
}

