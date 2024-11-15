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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1JoinParam model module.
 * @module model/V1JoinParam
 * @version 2.5.2
 */
class V1JoinParam {
    /**
     * Constructs a new <code>V1JoinParam</code>.
     * @alias module:model/V1JoinParam
     */
    constructor() {

        V1JoinParam.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1JoinParam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1JoinParam} obj Optional instance to populate.
     * @return {module:model/V1JoinParam} The populated <code>V1JoinParam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1JoinParam();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('toInit')) {
                obj['toInit'] = ApiClient.convertToType(data['toInit'], 'Boolean');
            }
            if (data.hasOwnProperty('toEnv')) {
                obj['toEnv'] = ApiClient.convertToType(data['toEnv'], 'String');
            }
            if (data.hasOwnProperty('contextOnly')) {
                obj['contextOnly'] = ApiClient.convertToType(data['contextOnly'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1JoinParam</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1JoinParam</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['connection'] && !(typeof data['connection'] === 'string' || data['connection'] instanceof String)) {
            throw new Error("Expected the field `connection` to be a primitive type in the JSON string but got " + data['connection']);
        }
        // ensure the json data is a string
        if (data['toEnv'] && !(typeof data['toEnv'] === 'string' || data['toEnv'] instanceof String)) {
            throw new Error("Expected the field `toEnv` to be a primitive type in the JSON string but got " + data['toEnv']);
        }

        return true;
    }


}



/**
 * @member {String} value
 */
V1JoinParam.prototype['value'] = undefined;

/**
 * @member {String} connection
 */
V1JoinParam.prototype['connection'] = undefined;

/**
 * @member {Boolean} toInit
 */
V1JoinParam.prototype['toInit'] = undefined;

/**
 * @member {String} toEnv
 */
V1JoinParam.prototype['toEnv'] = undefined;

/**
 * @member {Boolean} contextOnly
 */
V1JoinParam.prototype['contextOnly'] = undefined;






export default V1JoinParam;

