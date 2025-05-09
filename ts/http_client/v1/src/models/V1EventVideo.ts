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
 * @interface V1EventVideo
 */
export interface V1EventVideo {
    /**
     * Height of the video.
     * @type {number}
     * @memberof V1EventVideo
     */
    height?: number;
    /**
     * Width of the video.
     * @type {number}
     * @memberof V1EventVideo
     */
    width?: number;
    /**
     *
     * @type {number}
     * @memberof V1EventVideo
     */
    colorspace?: number;
    /**
     *
     * @type {string}
     * @memberof V1EventVideo
     */
    path?: string;
    /**
     *
     * @type {string}
     * @memberof V1EventVideo
     */
    content_type?: string;
}

/**
 * Check if a given object implements the V1EventVideo interface.
 */
export function instanceOfV1EventVideo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventVideoFromJSON(json: any): V1EventVideo {
    return V1EventVideoFromJSONTyped(json, false);
}

export function V1EventVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventVideo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'height': !exists(json, 'height') ? undefined : json['height'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'colorspace': !exists(json, 'colorspace') ? undefined : json['colorspace'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'content_type': !exists(json, 'content_type') ? undefined : json['content_type'],
    };
}

export function V1EventVideoToJSON(value?: V1EventVideo | null): any {
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
        'content_type': value.content_type,
    };
}

