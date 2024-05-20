/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.2.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Param from './V1Param';

/**
 * The V1Tuner model module.
 * @module model/V1Tuner
 * @version 2.2.0-rc0
 */
class V1Tuner {
    /**
     * Constructs a new <code>V1Tuner</code>.
     * @alias module:model/V1Tuner
     */
    constructor() { 
        
        V1Tuner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Tuner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Tuner} obj Optional instance to populate.
     * @return {module:model/V1Tuner} The populated <code>V1Tuner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Tuner();

            if (data.hasOwnProperty('hubRef')) {
                obj['hubRef'] = ApiClient.convertToType(data['hubRef'], 'String');
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1Param});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Tuner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Tuner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hubRef'] && !(typeof data['hubRef'] === 'string' || data['hubRef'] instanceof String)) {
            throw new Error("Expected the field `hubRef` to be a primitive type in the JSON string but got " + data['hubRef']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['presets'])) {
            throw new Error("Expected the field `presets` to be an array in the JSON data but got " + data['presets']);
        }
        // ensure the json data is a string
        if (data['queue'] && !(typeof data['queue'] === 'string' || data['queue'] instanceof String)) {
            throw new Error("Expected the field `queue` to be a primitive type in the JSON string but got " + data['queue']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }

        return true;
    }


}



/**
 * @member {String} hubRef
 */
V1Tuner.prototype['hubRef'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1Tuner.prototype['presets'] = undefined;

/**
 * @member {String} queue
 */
V1Tuner.prototype['queue'] = undefined;

/**
 * @member {String} namespace
 */
V1Tuner.prototype['namespace'] = undefined;

/**
 * @member {Object.<String, module:model/V1Param>} params
 */
V1Tuner.prototype['params'] = undefined;






export default V1Tuner;

