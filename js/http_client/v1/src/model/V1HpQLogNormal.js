/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1HpQLogNormal model module.
 * @module model/V1HpQLogNormal
 * @version 2.6.1
 */
class V1HpQLogNormal {
    /**
     * Constructs a new <code>V1HpQLogNormal</code>.
     * @alias module:model/V1HpQLogNormal
     */
    constructor() {

        V1HpQLogNormal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1HpQLogNormal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1HpQLogNormal} obj Optional instance to populate.
     * @return {module:model/V1HpQLogNormal} The populated <code>V1HpQLogNormal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HpQLogNormal();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1HpQLogNormal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1HpQLogNormal</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'qlognormal'
 */
V1HpQLogNormal.prototype['kind'] = 'qlognormal';

/**
 * @member {Object} value
 */
V1HpQLogNormal.prototype['value'] = undefined;






export default V1HpQLogNormal;

