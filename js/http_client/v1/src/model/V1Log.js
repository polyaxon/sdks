/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc54
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Log model module.
 * @module model/V1Log
 * @version 2.0.0-rc54
 */
class V1Log {
    /**
     * Constructs a new <code>V1Log</code>.
     * @alias module:model/V1Log
     */
    constructor() {

        V1Log.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Log</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Log} obj Optional instance to populate.
     * @return {module:model/V1Log} The populated <code>V1Log</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Log();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('node')) {
                obj['node'] = ApiClient.convertToType(data['node'], 'String');
            }
            if (data.hasOwnProperty('pod')) {
                obj['pod'] = ApiClient.convertToType(data['pod'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Log</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Log</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['node'] && !(typeof data['node'] === 'string' || data['node'] instanceof String)) {
            throw new Error("Expected the field `node` to be a primitive type in the JSON string but got " + data['node']);
        }
        // ensure the json data is a string
        if (data['pod'] && !(typeof data['pod'] === 'string' || data['pod'] instanceof String)) {
            throw new Error("Expected the field `pod` to be a primitive type in the JSON string but got " + data['pod']);
        }
        // ensure the json data is a string
        if (data['container'] && !(typeof data['container'] === 'string' || data['container'] instanceof String)) {
            throw new Error("Expected the field `container` to be a primitive type in the JSON string but got " + data['container']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {Date} timestamp
 */
V1Log.prototype['timestamp'] = undefined;

/**
 * @member {String} node
 */
V1Log.prototype['node'] = undefined;

/**
 * @member {String} pod
 */
V1Log.prototype['pod'] = undefined;

/**
 * @member {String} container
 */
V1Log.prototype['container'] = undefined;

/**
 * @member {String} value
 */
V1Log.prototype['value'] = undefined;






export default V1Log;

