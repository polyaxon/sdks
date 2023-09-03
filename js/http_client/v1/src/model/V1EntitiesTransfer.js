/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc38
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1EntitiesTransfer model module.
 * @module model/V1EntitiesTransfer
 * @version 2.0.0-rc38
 */
class V1EntitiesTransfer {
    /**
     * Constructs a new <code>V1EntitiesTransfer</code>.
     * @alias module:model/V1EntitiesTransfer
     */
    constructor() {

        V1EntitiesTransfer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EntitiesTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EntitiesTransfer} obj Optional instance to populate.
     * @return {module:model/V1EntitiesTransfer} The populated <code>V1EntitiesTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EntitiesTransfer();

            if (data.hasOwnProperty('uuids')) {
                obj['uuids'] = ApiClient.convertToType(data['uuids'], ['String']);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EntitiesTransfer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EntitiesTransfer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['uuids'])) {
            throw new Error("Expected the field `uuids` to be an array in the JSON data but got " + data['uuids']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} uuids
 */
V1EntitiesTransfer.prototype['uuids'] = undefined;

/**
 * @member {String} project
 */
V1EntitiesTransfer.prototype['project'] = undefined;






export default V1EntitiesTransfer;

