/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1HpChoice } from './V1HpChoice';
import {
    V1HpChoiceFromJSON,
    V1HpChoiceFromJSONTyped,
    V1HpChoiceToJSON,
} from './V1HpChoice';
import type { V1HpDateRange } from './V1HpDateRange';
import {
    V1HpDateRangeFromJSON,
    V1HpDateRangeFromJSONTyped,
    V1HpDateRangeToJSON,
} from './V1HpDateRange';
import type { V1HpDateTimeRange } from './V1HpDateTimeRange';
import {
    V1HpDateTimeRangeFromJSON,
    V1HpDateTimeRangeFromJSONTyped,
    V1HpDateTimeRangeToJSON,
} from './V1HpDateTimeRange';
import type { V1HpGeomSpace } from './V1HpGeomSpace';
import {
    V1HpGeomSpaceFromJSON,
    V1HpGeomSpaceFromJSONTyped,
    V1HpGeomSpaceToJSON,
} from './V1HpGeomSpace';
import type { V1HpLinSpace } from './V1HpLinSpace';
import {
    V1HpLinSpaceFromJSON,
    V1HpLinSpaceFromJSONTyped,
    V1HpLinSpaceToJSON,
} from './V1HpLinSpace';
import type { V1HpLogNormal } from './V1HpLogNormal';
import {
    V1HpLogNormalFromJSON,
    V1HpLogNormalFromJSONTyped,
    V1HpLogNormalToJSON,
} from './V1HpLogNormal';
import type { V1HpLogSpace } from './V1HpLogSpace';
import {
    V1HpLogSpaceFromJSON,
    V1HpLogSpaceFromJSONTyped,
    V1HpLogSpaceToJSON,
} from './V1HpLogSpace';
import type { V1HpLogUniform } from './V1HpLogUniform';
import {
    V1HpLogUniformFromJSON,
    V1HpLogUniformFromJSONTyped,
    V1HpLogUniformToJSON,
} from './V1HpLogUniform';
import type { V1HpNormal } from './V1HpNormal';
import {
    V1HpNormalFromJSON,
    V1HpNormalFromJSONTyped,
    V1HpNormalToJSON,
} from './V1HpNormal';
import type { V1HpPChoice } from './V1HpPChoice';
import {
    V1HpPChoiceFromJSON,
    V1HpPChoiceFromJSONTyped,
    V1HpPChoiceToJSON,
} from './V1HpPChoice';
import type { V1HpQLogNormal } from './V1HpQLogNormal';
import {
    V1HpQLogNormalFromJSON,
    V1HpQLogNormalFromJSONTyped,
    V1HpQLogNormalToJSON,
} from './V1HpQLogNormal';
import type { V1HpQLogUniform } from './V1HpQLogUniform';
import {
    V1HpQLogUniformFromJSON,
    V1HpQLogUniformFromJSONTyped,
    V1HpQLogUniformToJSON,
} from './V1HpQLogUniform';
import type { V1HpQNormal } from './V1HpQNormal';
import {
    V1HpQNormalFromJSON,
    V1HpQNormalFromJSONTyped,
    V1HpQNormalToJSON,
} from './V1HpQNormal';
import type { V1HpQUniform } from './V1HpQUniform';
import {
    V1HpQUniformFromJSON,
    V1HpQUniformFromJSONTyped,
    V1HpQUniformToJSON,
} from './V1HpQUniform';
import type { V1HpRange } from './V1HpRange';
import {
    V1HpRangeFromJSON,
    V1HpRangeFromJSONTyped,
    V1HpRangeToJSON,
} from './V1HpRange';
import type { V1HpUniform } from './V1HpUniform';
import {
    V1HpUniformFromJSON,
    V1HpUniformFromJSONTyped,
    V1HpUniformToJSON,
} from './V1HpUniform';

/**
 *
 * @export
 * @interface V1HpParams
 */
export interface V1HpParams {
    /**
     *
     * @type {V1HpChoice}
     * @memberof V1HpParams
     */
    choice?: V1HpChoice;
    /**
     *
     * @type {V1HpPChoice}
     * @memberof V1HpParams
     */
    pchoice?: V1HpPChoice;
    /**
     *
     * @type {V1HpRange}
     * @memberof V1HpParams
     */
    range?: V1HpRange;
    /**
     *
     * @type {V1HpLinSpace}
     * @memberof V1HpParams
     */
    linspace?: V1HpLinSpace;
    /**
     *
     * @type {V1HpLogSpace}
     * @memberof V1HpParams
     */
    logspace?: V1HpLogSpace;
    /**
     *
     * @type {V1HpGeomSpace}
     * @memberof V1HpParams
     */
    geomspace?: V1HpGeomSpace;
    /**
     *
     * @type {V1HpUniform}
     * @memberof V1HpParams
     */
    uniform?: V1HpUniform;
    /**
     *
     * @type {V1HpQUniform}
     * @memberof V1HpParams
     */
    quniform?: V1HpQUniform;
    /**
     *
     * @type {V1HpLogUniform}
     * @memberof V1HpParams
     */
    loguniform?: V1HpLogUniform;
    /**
     *
     * @type {V1HpQLogUniform}
     * @memberof V1HpParams
     */
    qloguniform?: V1HpQLogUniform;
    /**
     *
     * @type {V1HpNormal}
     * @memberof V1HpParams
     */
    normal?: V1HpNormal;
    /**
     *
     * @type {V1HpQNormal}
     * @memberof V1HpParams
     */
    qnormal?: V1HpQNormal;
    /**
     *
     * @type {V1HpLogNormal}
     * @memberof V1HpParams
     */
    lognormal?: V1HpLogNormal;
    /**
     *
     * @type {V1HpQLogNormal}
     * @memberof V1HpParams
     */
    qlognormal?: V1HpQLogNormal;
    /**
     *
     * @type {V1HpDateRange}
     * @memberof V1HpParams
     */
    daterange?: V1HpDateRange;
    /**
     *
     * @type {V1HpDateTimeRange}
     * @memberof V1HpParams
     */
    datetimerange?: V1HpDateTimeRange;
}

/**
 * Check if a given object implements the V1HpParams interface.
 */
export function instanceOfV1HpParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpParamsFromJSON(json: any): V1HpParams {
    return V1HpParamsFromJSONTyped(json, false);
}

export function V1HpParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'choice': !exists(json, 'choice') ? undefined : V1HpChoiceFromJSON(json['choice']),
        'pchoice': !exists(json, 'pchoice') ? undefined : V1HpPChoiceFromJSON(json['pchoice']),
        'range': !exists(json, 'range') ? undefined : V1HpRangeFromJSON(json['range']),
        'linspace': !exists(json, 'linspace') ? undefined : V1HpLinSpaceFromJSON(json['linspace']),
        'logspace': !exists(json, 'logspace') ? undefined : V1HpLogSpaceFromJSON(json['logspace']),
        'geomspace': !exists(json, 'geomspace') ? undefined : V1HpGeomSpaceFromJSON(json['geomspace']),
        'uniform': !exists(json, 'uniform') ? undefined : V1HpUniformFromJSON(json['uniform']),
        'quniform': !exists(json, 'quniform') ? undefined : V1HpQUniformFromJSON(json['quniform']),
        'loguniform': !exists(json, 'loguniform') ? undefined : V1HpLogUniformFromJSON(json['loguniform']),
        'qloguniform': !exists(json, 'qloguniform') ? undefined : V1HpQLogUniformFromJSON(json['qloguniform']),
        'normal': !exists(json, 'normal') ? undefined : V1HpNormalFromJSON(json['normal']),
        'qnormal': !exists(json, 'qnormal') ? undefined : V1HpQNormalFromJSON(json['qnormal']),
        'lognormal': !exists(json, 'lognormal') ? undefined : V1HpLogNormalFromJSON(json['lognormal']),
        'qlognormal': !exists(json, 'qlognormal') ? undefined : V1HpQLogNormalFromJSON(json['qlognormal']),
        'daterange': !exists(json, 'daterange') ? undefined : V1HpDateRangeFromJSON(json['daterange']),
        'datetimerange': !exists(json, 'datetimerange') ? undefined : V1HpDateTimeRangeFromJSON(json['datetimerange']),
    };
}

export function V1HpParamsToJSON(value?: V1HpParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'choice': V1HpChoiceToJSON(value.choice),
        'pchoice': V1HpPChoiceToJSON(value.pchoice),
        'range': V1HpRangeToJSON(value.range),
        'linspace': V1HpLinSpaceToJSON(value.linspace),
        'logspace': V1HpLogSpaceToJSON(value.logspace),
        'geomspace': V1HpGeomSpaceToJSON(value.geomspace),
        'uniform': V1HpUniformToJSON(value.uniform),
        'quniform': V1HpQUniformToJSON(value.quniform),
        'loguniform': V1HpLogUniformToJSON(value.loguniform),
        'qloguniform': V1HpQLogUniformToJSON(value.qloguniform),
        'normal': V1HpNormalToJSON(value.normal),
        'qnormal': V1HpQNormalToJSON(value.qnormal),
        'lognormal': V1HpLogNormalToJSON(value.lognormal),
        'qlognormal': V1HpQLogNormalToJSON(value.qlognormal),
        'daterange': V1HpDateRangeToJSON(value.daterange),
        'datetimerange': V1HpDateTimeRangeToJSON(value.datetimerange),
    };
}

