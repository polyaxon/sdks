/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.2
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
 * @interface V1EventAudio
 */
export interface V1EventAudio {
    /**
     * Sample rate of the audio in Hz.
     * @type {number}
     * @memberof V1EventAudio
     */
    sample_rate?: number;
    /**
     * Number of channels of audio.
     * @type {number}
     * @memberof V1EventAudio
     */
    num_channels?: number;
    /**
     * Length of the audio in frames (samples per channel).
     * @type {number}
     * @memberof V1EventAudio
     */
    length_frames?: number;
    /**
     *
     * @type {string}
     * @memberof V1EventAudio
     */
    content_type?: string;
    /**
     *
     * @type {string}
     * @memberof V1EventAudio
     */
    path?: string;
}

/**
 * Check if a given object implements the V1EventAudio interface.
 */
export function instanceOfV1EventAudio(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventAudioFromJSON(json: any): V1EventAudio {
    return V1EventAudioFromJSONTyped(json, false);
}

export function V1EventAudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventAudio {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'sample_rate': !exists(json, 'sample_rate') ? undefined : json['sample_rate'],
        'num_channels': !exists(json, 'num_channels') ? undefined : json['num_channels'],
        'length_frames': !exists(json, 'length_frames') ? undefined : json['length_frames'],
        'content_type': !exists(json, 'content_type') ? undefined : json['content_type'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function V1EventAudioToJSON(value?: V1EventAudio | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'sample_rate': value.sample_rate,
        'num_channels': value.num_channels,
        'length_frames': value.length_frames,
        'content_type': value.content_type,
        'path': value.path,
    };
}

