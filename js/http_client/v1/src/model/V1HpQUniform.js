/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1HpQUniform model module.
 * @module model/V1HpQUniform
 * @version 2.1.2
 */
class V1HpQUniform {
    /**
     * Constructs a new <code>V1HpQUniform</code>.
     * @alias module:model/V1HpQUniform
     */
    constructor() {

        V1HpQUniform.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1HpQUniform</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1HpQUniform} obj Optional instance to populate.
     * @return {module:model/V1HpQUniform} The populated <code>V1HpQUniform</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HpQUniform();

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
     * Validates the JSON data with respect to <code>V1HpQUniform</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1HpQUniform</code>.
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
 * @default 'quniform'
 */
V1HpQUniform.prototype['kind'] = 'quniform';

/**
 * @member {Object} value
 */
V1HpQUniform.prototype['value'] = undefined;






export default V1HpQUniform;

