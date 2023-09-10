/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc39
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1TeamMember } from './V1TeamMember';
import {
    V1TeamMemberFromJSON,
    V1TeamMemberFromJSONTyped,
    V1TeamMemberToJSON,
} from './V1TeamMember';

/**
 *
 * @export
 * @interface V1ListTeamMembersResponse
 */
export interface V1ListTeamMembersResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListTeamMembersResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1TeamMember>}
     * @memberof V1ListTeamMembersResponse
     */
    results?: Array<V1TeamMember>;
    /**
     *
     * @type {string}
     * @memberof V1ListTeamMembersResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListTeamMembersResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListTeamMembersResponse interface.
 */
export function instanceOfV1ListTeamMembersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListTeamMembersResponseFromJSON(json: any): V1ListTeamMembersResponse {
    return V1ListTeamMembersResponseFromJSONTyped(json, false);
}

export function V1ListTeamMembersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListTeamMembersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1TeamMemberFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListTeamMembersResponseToJSON(value?: V1ListTeamMembersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1TeamMemberToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

