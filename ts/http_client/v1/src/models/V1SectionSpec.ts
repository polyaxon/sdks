/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
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
 * @interface V1SectionSpec
 */
export interface V1SectionSpec {
    /**
     *
     * @type {string}
     * @memberof V1SectionSpec
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1SectionSpec
     */
    is_minimized?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1SectionSpec
     */
    is_frozen?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1SectionSpec
     */
    columns?: number;
    /**
     *
     * @type {number}
     * @memberof V1SectionSpec
     */
    height?: number;
    /**
     *
     * @type {string}
     * @memberof V1SectionSpec
     */
    xaxis?: string;
    /**
     *
     * @type {number}
     * @memberof V1SectionSpec
     */
    smoothing?: number;
    /**
     *
     * @type {boolean}
     * @memberof V1SectionSpec
     */
    ignore_outliers?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1SectionSpec
     */
    sample_size?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof V1SectionSpec
     */
    widgets?: Array<object>;
    /**
     *
     * @type {number}
     * @memberof V1SectionSpec
     */
    page_index?: number;
    /**
     *
     * @type {number}
     * @memberof V1SectionSpec
     */
    page_size?: number;
}

/**
 * Check if a given object implements the V1SectionSpec interface.
 */
export function instanceOfV1SectionSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SectionSpecFromJSON(json: any): V1SectionSpec {
    return V1SectionSpecFromJSONTyped(json, false);
}

export function V1SectionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SectionSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'is_minimized': !exists(json, 'is_minimized') ? undefined : json['is_minimized'],
        'is_frozen': !exists(json, 'is_frozen') ? undefined : json['is_frozen'],
        'columns': !exists(json, 'columns') ? undefined : json['columns'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'xaxis': !exists(json, 'xaxis') ? undefined : json['xaxis'],
        'smoothing': !exists(json, 'smoothing') ? undefined : json['smoothing'],
        'ignore_outliers': !exists(json, 'ignore_outliers') ? undefined : json['ignore_outliers'],
        'sample_size': !exists(json, 'sample_size') ? undefined : json['sample_size'],
        'widgets': !exists(json, 'widgets') ? undefined : json['widgets'],
        'page_index': !exists(json, 'page_index') ? undefined : json['page_index'],
        'page_size': !exists(json, 'page_size') ? undefined : json['page_size'],
    };
}

export function V1SectionSpecToJSON(value?: V1SectionSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'is_minimized': value.is_minimized,
        'is_frozen': value.is_frozen,
        'columns': value.columns,
        'height': value.height,
        'xaxis': value.xaxis,
        'smoothing': value.smoothing,
        'ignore_outliers': value.ignore_outliers,
        'sample_size': value.sample_size,
        'widgets': value.widgets,
        'page_index': value.page_index,
        'page_size': value.page_size,
    };
}

