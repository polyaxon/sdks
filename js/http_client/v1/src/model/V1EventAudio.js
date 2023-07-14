/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1EventAudio model module.
 * @module model/V1EventAudio
 * @version 2.0.0-rc26
 */
class V1EventAudio {
    /**
     * Constructs a new <code>V1EventAudio</code>.
     * @alias module:model/V1EventAudio
     */
    constructor() { 
        
        V1EventAudio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1EventAudio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventAudio} obj Optional instance to populate.
     * @return {module:model/V1EventAudio} The populated <code>V1EventAudio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventAudio();

            if (data.hasOwnProperty('sample_rate')) {
                obj['sample_rate'] = ApiClient.convertToType(data['sample_rate'], 'Number');
            }
            if (data.hasOwnProperty('num_channels')) {
                obj['num_channels'] = ApiClient.convertToType(data['num_channels'], 'Number');
            }
            if (data.hasOwnProperty('length_frames')) {
                obj['length_frames'] = ApiClient.convertToType(data['length_frames'], 'Number');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventAudio</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventAudio</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content_type'] && !(typeof data['content_type'] === 'string' || data['content_type'] instanceof String)) {
            throw new Error("Expected the field `content_type` to be a primitive type in the JSON string but got " + data['content_type']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}



/**
 * Sample rate of the audio in Hz.
 * @member {Number} sample_rate
 */
V1EventAudio.prototype['sample_rate'] = undefined;

/**
 * Number of channels of audio.
 * @member {Number} num_channels
 */
V1EventAudio.prototype['num_channels'] = undefined;

/**
 * Length of the audio in frames (samples per channel).
 * @member {Number} length_frames
 */
V1EventAudio.prototype['length_frames'] = undefined;

/**
 * @member {String} content_type
 */
V1EventAudio.prototype['content_type'] = undefined;

/**
 * @member {String} path
 */
V1EventAudio.prototype['path'] = undefined;






export default V1EventAudio;

