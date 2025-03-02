/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.7.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1OrganizationMember } from './V1OrganizationMember';
import {
    V1OrganizationMemberFromJSON,
    V1OrganizationMemberFromJSONTyped,
    V1OrganizationMemberToJSON,
} from './V1OrganizationMember';

/**
 * 
 * @export
 * @interface V1ListOrganizationMembersResponse
 */
export interface V1ListOrganizationMembersResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListOrganizationMembersResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1OrganizationMember>}
     * @memberof V1ListOrganizationMembersResponse
     */
    results?: Array<V1OrganizationMember>;
    /**
     * 
     * @type {string}
     * @memberof V1ListOrganizationMembersResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListOrganizationMembersResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListOrganizationMembersResponse interface.
 */
export function instanceOfV1ListOrganizationMembersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListOrganizationMembersResponseFromJSON(json: any): V1ListOrganizationMembersResponse {
    return V1ListOrganizationMembersResponseFromJSONTyped(json, false);
}

export function V1ListOrganizationMembersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListOrganizationMembersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1OrganizationMemberFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListOrganizationMembersResponseToJSON(value?: V1ListOrganizationMembersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1OrganizationMemberToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

