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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1ServiceAccount model module.
 * @module model/V1ServiceAccount
 * @version 2.8.0
 */
class V1ServiceAccount {
    /**
     * Constructs a new <code>V1ServiceAccount</code>.
     * @alias module:model/V1ServiceAccount
     */
    constructor() {

        V1ServiceAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ServiceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ServiceAccount} obj Optional instance to populate.
     * @return {module:model/V1ServiceAccount} The populated <code>V1ServiceAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ServiceAccount();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ServiceAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ServiceAccount</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['scopes'])) {
            throw new Error("Expected the field `scopes` to be an array in the JSON data but got " + data['scopes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['services'])) {
            throw new Error("Expected the field `services` to be an array in the JSON data but got " + data['services']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1ServiceAccount.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1ServiceAccount.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1ServiceAccount.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1ServiceAccount.prototype['tags'] = undefined;

/**
 * @member {Number} live_state
 */
V1ServiceAccount.prototype['live_state'] = undefined;

/**
 * @member {Date} created_at
 */
V1ServiceAccount.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1ServiceAccount.prototype['updated_at'] = undefined;

/**
 * @member {Array.<String>} scopes
 */
V1ServiceAccount.prototype['scopes'] = undefined;

/**
 * @member {Array.<String>} services
 */
V1ServiceAccount.prototype['services'] = undefined;






export default V1ServiceAccount;

