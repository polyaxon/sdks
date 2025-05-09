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
import type { V1RunEdgeLineage } from './V1RunEdgeLineage';
import {
    V1RunEdgeLineageFromJSON,
    V1RunEdgeLineageFromJSONTyped,
    V1RunEdgeLineageToJSON,
} from './V1RunEdgeLineage';

/**
 *
 * @export
 * @interface V1RunEdgesGraph
 */
export interface V1RunEdgesGraph {
    /**
     *
     * @type {Array<V1RunEdgeLineage>}
     * @memberof V1RunEdgesGraph
     */
    edges?: Array<V1RunEdgeLineage>;
}

/**
 * Check if a given object implements the V1RunEdgesGraph interface.
 */
export function instanceOfV1RunEdgesGraph(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RunEdgesGraphFromJSON(json: any): V1RunEdgesGraph {
    return V1RunEdgesGraphFromJSONTyped(json, false);
}

export function V1RunEdgesGraphFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunEdgesGraph {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'edges': !exists(json, 'edges') ? undefined : ((json['edges'] as Array<any>).map(V1RunEdgeLineageFromJSON)),
    };
}

export function V1RunEdgesGraphToJSON(value?: V1RunEdgesGraph | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'edges': value.edges === undefined ? undefined : ((value.edges as Array<any>).map(V1RunEdgeLineageToJSON)),
    };
}

