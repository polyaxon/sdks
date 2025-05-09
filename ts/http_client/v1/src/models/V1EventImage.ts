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
 * @interface V1EventImage
 */
export interface V1EventImage {
    /**
     * Height of the image.
     * @type {number}
     * @memberof V1EventImage
     */
    height?: number;
    /**
     * Width of the image.
     * @type {number}
     * @memberof V1EventImage
     */
    width?: number;
    /**
     *
     * @type {number}
     * @memberof V1EventImage
     */
    colorspace?: number;
    /**
     *
     * @type {string}
     * @memberof V1EventImage
     */
    path?: string;
}

/**
 * Check if a given object implements the V1EventImage interface.
 */
export function instanceOfV1EventImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventImageFromJSON(json: any): V1EventImage {
    return V1EventImageFromJSONTyped(json, false);
}

export function V1EventImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'height': !exists(json, 'height') ? undefined : json['height'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'colorspace': !exists(json, 'colorspace') ? undefined : json['colorspace'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function V1EventImageToJSON(value?: V1EventImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'height': value.height,
        'width': value.width,
        'colorspace': value.colorspace,
        'path': value.path,
    };
}

