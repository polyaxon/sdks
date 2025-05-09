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
 * The V1ConnectionResource model module.
 * @module model/V1ConnectionResource
 * @version 2.8.0
 */
class V1ConnectionResource {
    /**
     * Constructs a new <code>V1ConnectionResource</code>.
     * @alias module:model/V1ConnectionResource
     */
    constructor() {

        V1ConnectionResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ConnectionResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ConnectionResource} obj Optional instance to populate.
     * @return {module:model/V1ConnectionResource} The populated <code>V1ConnectionResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ConnectionResource();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mountPath')) {
                obj['mountPath'] = ApiClient.convertToType(data['mountPath'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('defaultMode')) {
                obj['defaultMode'] = ApiClient.convertToType(data['defaultMode'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ConnectionResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ConnectionResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['mountPath'] && !(typeof data['mountPath'] === 'string' || data['mountPath'] instanceof String)) {
            throw new Error("Expected the field `mountPath` to be a primitive type in the JSON string but got " + data['mountPath']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items'])) {
            throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1ConnectionResource.prototype['name'] = undefined;

/**
 * @member {String} mountPath
 */
V1ConnectionResource.prototype['mountPath'] = undefined;

/**
 * @member {Array.<String>} items
 */
V1ConnectionResource.prototype['items'] = undefined;

/**
 * @member {Number} defaultMode
 */
V1ConnectionResource.prototype['defaultMode'] = undefined;






export default V1ConnectionResource;

