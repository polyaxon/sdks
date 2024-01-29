/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
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
 * @interface V1HpPChoice
 */
export interface V1HpPChoice {
    /**
     *
     * @type {string}
     * @memberof V1HpPChoice
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpPChoice
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpPChoice interface.
 */
export function instanceOfV1HpPChoice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpPChoiceFromJSON(json: any): V1HpPChoice {
    return V1HpPChoiceFromJSONTyped(json, false);
}

export function V1HpPChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpPChoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpPChoiceToJSON(value?: V1HpPChoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'value': value.value,
    };
}

