/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc38
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
 * @interface V1Installation
 */
export interface V1Installation {
    /**
     *
     * @type {string}
     * @memberof V1Installation
     */
    key?: string;
    /**
     *
     * @type {string}
     * @memberof V1Installation
     */
    version?: string;
    /**
     *
     * @type {string}
     * @memberof V1Installation
     */
    dist?: string;
    /**
     *
     * @type {string}
     * @memberof V1Installation
     */
    host?: string;
    /**
     *
     * @type {string}
     * @memberof V1Installation
     */
    hmac?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Installation
     */
    auth?: Array<string>;
}

/**
 * Check if a given object implements the V1Installation interface.
 */
export function instanceOfV1Installation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1InstallationFromJSON(json: any): V1Installation {
    return V1InstallationFromJSONTyped(json, false);
}

export function V1InstallationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Installation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'key': !exists(json, 'key') ? undefined : json['key'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'dist': !exists(json, 'dist') ? undefined : json['dist'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'hmac': !exists(json, 'hmac') ? undefined : json['hmac'],
        'auth': !exists(json, 'auth') ? undefined : json['auth'],
    };
}

export function V1InstallationToJSON(value?: V1Installation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'key': value.key,
        'version': value.version,
        'dist': value.dist,
        'host': value.host,
        'hmac': value.hmac,
        'auth': value.auth,
    };
}

