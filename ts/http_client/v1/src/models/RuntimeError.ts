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
import type { ProtobufAny } from './ProtobufAny';
import {
    ProtobufAnyFromJSON,
    ProtobufAnyFromJSONTyped,
    ProtobufAnyToJSON,
} from './ProtobufAny';

/**
 *
 * @export
 * @interface RuntimeError
 */
export interface RuntimeError {
    /**
     *
     * @type {string}
     * @memberof RuntimeError
     */
    error?: string;
    /**
     *
     * @type {number}
     * @memberof RuntimeError
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof RuntimeError
     */
    message?: string;
    /**
     *
     * @type {Array<ProtobufAny>}
     * @memberof RuntimeError
     */
    details?: Array<ProtobufAny>;
}

/**
 * Check if a given object implements the RuntimeError interface.
 */
export function instanceOfRuntimeError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RuntimeErrorFromJSON(json: any): RuntimeError {
    return RuntimeErrorFromJSONTyped(json, false);
}

export function RuntimeErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'error': !exists(json, 'error') ? undefined : json['error'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ProtobufAnyFromJSON)),
    };
}

export function RuntimeErrorToJSON(value?: RuntimeError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'error': value.error,
        'code': value.code,
        'message': value.message,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ProtobufAnyToJSON)),
    };
}

