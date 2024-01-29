/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1ProjectUserAccess model module.
 * @module model/V1ProjectUserAccess
 * @version 2.1.0-rc17
 */
class V1ProjectUserAccess {
    /**
     * Constructs a new <code>V1ProjectUserAccess</code>.
     * @alias module:model/V1ProjectUserAccess
     */
    constructor() {

        V1ProjectUserAccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ProjectUserAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ProjectUserAccess} obj Optional instance to populate.
     * @return {module:model/V1ProjectUserAccess} The populated <code>V1ProjectUserAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ProjectUserAccess();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('preset')) {
                obj['preset'] = ApiClient.convertToType(data['preset'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ProjectUserAccess</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ProjectUserAccess</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['queue'] && !(typeof data['queue'] === 'string' || data['queue'] instanceof String)) {
            throw new Error("Expected the field `queue` to be a primitive type in the JSON string but got " + data['queue']);
        }
        // ensure the json data is a string
        if (data['preset'] && !(typeof data['preset'] === 'string' || data['preset'] instanceof String)) {
            throw new Error("Expected the field `preset` to be a primitive type in the JSON string but got " + data['preset']);
        }

        return true;
    }


}



/**
 * @member {String} user
 */
V1ProjectUserAccess.prototype['user'] = undefined;

/**
 * @member {String} queue
 */
V1ProjectUserAccess.prototype['queue'] = undefined;

/**
 * @member {String} preset
 */
V1ProjectUserAccess.prototype['preset'] = undefined;






export default V1ProjectUserAccess;

