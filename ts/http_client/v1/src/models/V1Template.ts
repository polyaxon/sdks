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
 * @interface V1Template
 */
export interface V1Template {
    /**
     *
     * @type {boolean}
     * @memberof V1Template
     */
    enabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1Template
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Template
     */
    fields?: Array<string>;
}

/**
 * Check if a given object implements the V1Template interface.
 */
export function instanceOfV1Template(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TemplateFromJSON(json: any): V1Template {
    return V1TemplateFromJSONTyped(json, false);
}

export function V1TemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Template {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
    };
}

export function V1TemplateToJSON(value?: V1Template | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'enabled': value.enabled,
        'description': value.description,
        'fields': value.fields,
    };
}

