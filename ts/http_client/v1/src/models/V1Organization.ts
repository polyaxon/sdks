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
 * @interface V1Organization
 */
export interface V1Organization {
    /**
     *
     * @type {string}
     * @memberof V1Organization
     */
    user?: string;
    /**
     *
     * @type {string}
     * @memberof V1Organization
     */
    user_email?: string;
    /**
     *
     * @type {string}
     * @memberof V1Organization
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1Organization
     */
    is_public?: boolean;
    /**
     *
     * @type {Date}
     * @memberof V1Organization
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Organization
     */
    updated_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Organization
     */
    support_revoke_at?: Date;
    /**
     *
     * @type {number}
     * @memberof V1Organization
     */
    expiration?: number;
    /**
     *
     * @type {string}
     * @memberof V1Organization
     */
    role?: string;
    /**
     *
     * @type {string}
     * @memberof V1Organization
     */
    queue?: string;
    /**
     *
     * @type {string}
     * @memberof V1Organization
     */
    preset?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1Organization
     */
    is_cloud_viewable?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1Organization
     */
    archived_deletion_interval?: number;
    /**
     *
     * @type {object}
     * @memberof V1Organization
     */
    auth?: object;
    /**
     *
     * @type {object}
     * @memberof V1Organization
     */
    plan?: object;
    /**
     *
     * @type {object}
     * @memberof V1Organization
     */
    usage?: object;
}

/**
 * Check if a given object implements the V1Organization interface.
 */
export function instanceOfV1Organization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1OrganizationFromJSON(json: any): V1Organization {
    return V1OrganizationFromJSONTyped(json, false);
}

export function V1OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'user': !exists(json, 'user') ? undefined : json['user'],
        'user_email': !exists(json, 'user_email') ? undefined : json['user_email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'is_public': !exists(json, 'is_public') ? undefined : json['is_public'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'support_revoke_at': !exists(json, 'support_revoke_at') ? undefined : (new Date(json['support_revoke_at'])),
        'expiration': !exists(json, 'expiration') ? undefined : json['expiration'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'preset': !exists(json, 'preset') ? undefined : json['preset'],
        'is_cloud_viewable': !exists(json, 'is_cloud_viewable') ? undefined : json['is_cloud_viewable'],
        'archived_deletion_interval': !exists(json, 'archived_deletion_interval') ? undefined : json['archived_deletion_interval'],
        'auth': !exists(json, 'auth') ? undefined : json['auth'],
        'plan': !exists(json, 'plan') ? undefined : json['plan'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
    };
}

export function V1OrganizationToJSON(value?: V1Organization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'user': value.user,
        'user_email': value.user_email,
        'name': value.name,
        'is_public': value.is_public,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'support_revoke_at': value.support_revoke_at === undefined ? undefined : (value.support_revoke_at.toISOString()),
        'expiration': value.expiration,
        'role': value.role,
        'queue': value.queue,
        'preset': value.preset,
        'is_cloud_viewable': value.is_cloud_viewable,
        'archived_deletion_interval': value.archived_deletion_interval,
        'auth': value.auth,
        'plan': value.plan,
        'usage': value.usage,
    };
}

