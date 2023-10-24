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
 * The V1Installation model module.
 * @module model/V1Installation
 * @version 2.0.0-rc54
 */
class V1Installation {
    /**
     * Constructs a new <code>V1Installation</code>.
     * @alias module:model/V1Installation
     */
    constructor() {

        V1Installation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Installation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Installation} obj Optional instance to populate.
     * @return {module:model/V1Installation} The populated <code>V1Installation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Installation();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('dist')) {
                obj['dist'] = ApiClient.convertToType(data['dist'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('hmac')) {
                obj['hmac'] = ApiClient.convertToType(data['hmac'], 'String');
            }
            if (data.hasOwnProperty('auth')) {
                obj['auth'] = ApiClient.convertToType(data['auth'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Installation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Installation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['dist'] && !(typeof data['dist'] === 'string' || data['dist'] instanceof String)) {
            throw new Error("Expected the field `dist` to be a primitive type in the JSON string but got " + data['dist']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['hmac'] && !(typeof data['hmac'] === 'string' || data['hmac'] instanceof String)) {
            throw new Error("Expected the field `hmac` to be a primitive type in the JSON string but got " + data['hmac']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['auth'])) {
            throw new Error("Expected the field `auth` to be an array in the JSON data but got " + data['auth']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
V1Installation.prototype['key'] = undefined;

/**
 * @member {String} version
 */
V1Installation.prototype['version'] = undefined;

/**
 * @member {String} dist
 */
V1Installation.prototype['dist'] = undefined;

/**
 * @member {String} host
 */
V1Installation.prototype['host'] = undefined;

/**
 * @member {String} hmac
 */
V1Installation.prototype['hmac'] = undefined;

/**
 * @member {Array.<String>} auth
 */
V1Installation.prototype['auth'] = undefined;






export default V1Installation;

