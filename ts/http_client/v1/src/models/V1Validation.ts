/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc30
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface V1Validation
 */
export interface V1Validation {
    /**
     *
     * @type {boolean}
     * @memberof V1Validation
     */
    delay?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    gt?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    ge?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    lt?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    le?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    multipleOf?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    minDigits?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    maxDigits?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    decimalPlaces?: number;
    /**
     *
     * @type {string}
     * @memberof V1Validation
     */
    regex?: string;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    minLength?: number;
    /**
     *
     * @type {number}
     * @memberof V1Validation
     */
    maxLength?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Validation
     */
    contains?: Array<object>;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Validation
     */
    excludes?: Array<object>;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Validation
     */
    options?: Array<object>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Validation
     */
    keys?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Validation
     */
    containsKeys?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Validation
     */
    excludesKeys?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Validation
     */
    keysRegex?: Array<string>;
}

/**
 * Check if a given object implements the V1Validation interface.
 */
export function instanceOfV1Validation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ValidationFromJSON(json: any): V1Validation {
    return V1ValidationFromJSONTyped(json, false);
}

export function V1ValidationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Validation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'delay': !exists(json, 'delay') ? undefined : json['delay'],
        'gt': !exists(json, 'gt') ? undefined : json['gt'],
        'ge': !exists(json, 'ge') ? undefined : json['ge'],
        'lt': !exists(json, 'lt') ? undefined : json['lt'],
        'le': !exists(json, 'le') ? undefined : json['le'],
        'multipleOf': !exists(json, 'multipleOf') ? undefined : json['multipleOf'],
        'minDigits': !exists(json, 'minDigits') ? undefined : json['minDigits'],
        'maxDigits': !exists(json, 'maxDigits') ? undefined : json['maxDigits'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'regex': !exists(json, 'regex') ? undefined : json['regex'],
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'contains': !exists(json, 'contains') ? undefined : json['contains'],
        'excludes': !exists(json, 'excludes') ? undefined : json['excludes'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'keys': !exists(json, 'keys') ? undefined : json['keys'],
        'containsKeys': !exists(json, 'containsKeys') ? undefined : json['containsKeys'],
        'excludesKeys': !exists(json, 'excludesKeys') ? undefined : json['excludesKeys'],
        'keysRegex': !exists(json, 'keysRegex') ? undefined : json['keysRegex'],
    };
}

export function V1ValidationToJSON(value?: V1Validation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'delay': value.delay,
        'gt': value.gt,
        'ge': value.ge,
        'lt': value.lt,
        'le': value.le,
        'multipleOf': value.multipleOf,
        'minDigits': value.minDigits,
        'maxDigits': value.maxDigits,
        'decimalPlaces': value.decimalPlaces,
        'regex': value.regex,
        'minLength': value.minLength,
        'maxLength': value.maxLength,
        'contains': value.contains,
        'excludes': value.excludes,
        'options': value.options,
        'keys': value.keys,
        'containsKeys': value.containsKeys,
        'excludesKeys': value.excludesKeys,
        'keysRegex': value.keysRegex,
    };
}

