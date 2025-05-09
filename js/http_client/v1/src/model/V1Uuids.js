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
 * The V1Uuids model module.
 * @module model/V1Uuids
 * @version 2.8.0
 */
class V1Uuids {
    /**
     * Constructs a new <code>V1Uuids</code>.
     * @alias module:model/V1Uuids
     */
    constructor() {

        V1Uuids.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Uuids</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Uuids} obj Optional instance to populate.
     * @return {module:model/V1Uuids} The populated <code>V1Uuids</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Uuids();

            if (data.hasOwnProperty('uuids')) {
                obj['uuids'] = ApiClient.convertToType(data['uuids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Uuids</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Uuids</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['uuids'])) {
            throw new Error("Expected the field `uuids` to be an array in the JSON data but got " + data['uuids']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} uuids
 */
V1Uuids.prototype['uuids'] = undefined;






export default V1Uuids;

