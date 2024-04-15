/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Cache model module.
 * @module model/V1Cache
 * @version 2.1.7
 */
class V1Cache {
    /**
     * Constructs a new <code>V1Cache</code>.
     * @alias module:model/V1Cache
     */
    constructor() { 
        
        V1Cache.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Cache</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Cache} obj Optional instance to populate.
     * @return {module:model/V1Cache} The populated <code>V1Cache</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Cache();

            if (data.hasOwnProperty('disable')) {
                obj['disable'] = ApiClient.convertToType(data['disable'], 'Boolean');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('io')) {
                obj['io'] = ApiClient.convertToType(data['io'], ['String']);
            }
            if (data.hasOwnProperty('sections')) {
                obj['sections'] = ApiClient.convertToType(data['sections'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Cache</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Cache</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['io'])) {
            throw new Error("Expected the field `io` to be an array in the JSON data but got " + data['io']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sections'])) {
            throw new Error("Expected the field `sections` to be an array in the JSON data but got " + data['sections']);
        }

        return true;
    }


}



/**
 * @member {Boolean} disable
 */
V1Cache.prototype['disable'] = undefined;

/**
 * @member {Number} ttl
 */
V1Cache.prototype['ttl'] = undefined;

/**
 * @member {Array.<String>} io
 */
V1Cache.prototype['io'] = undefined;

/**
 * @member {Array.<String>} sections
 */
V1Cache.prototype['sections'] = undefined;






export default V1Cache;

