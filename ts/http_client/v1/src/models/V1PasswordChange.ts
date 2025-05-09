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
/**
 *
 * @export
 * @interface V1PasswordChange
 */
export interface V1PasswordChange {
    /**
     *
     * @type {string}
     * @memberof V1PasswordChange
     */
    old_password?: string;
    /**
     *
     * @type {string}
     * @memberof V1PasswordChange
     */
    new_password1?: string;
    /**
     *
     * @type {string}
     * @memberof V1PasswordChange
     */
    new_password2?: string;
}

/**
 * Check if a given object implements the V1PasswordChange interface.
 */
export function instanceOfV1PasswordChange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PasswordChangeFromJSON(json: any): V1PasswordChange {
    return V1PasswordChangeFromJSONTyped(json, false);
}

export function V1PasswordChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PasswordChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'old_password': !exists(json, 'old_password') ? undefined : json['old_password'],
        'new_password1': !exists(json, 'new_password1') ? undefined : json['new_password1'],
        'new_password2': !exists(json, 'new_password2') ? undefined : json['new_password2'],
    };
}

export function V1PasswordChangeToJSON(value?: V1PasswordChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'old_password': value.old_password,
        'new_password1': value.new_password1,
        'new_password2': value.new_password2,
    };
}

