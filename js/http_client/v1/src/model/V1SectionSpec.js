/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc20
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1SectionSpec model module.
 * @module model/V1SectionSpec
 * @version 2.0.0-rc20
 */
class V1SectionSpec {
    /**
     * Constructs a new <code>V1SectionSpec</code>.
     * @alias module:model/V1SectionSpec
     */
    constructor() {

        V1SectionSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1SectionSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1SectionSpec} obj Optional instance to populate.
     * @return {module:model/V1SectionSpec} The populated <code>V1SectionSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SectionSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_minimized')) {
                obj['is_minimized'] = ApiClient.convertToType(data['is_minimized'], 'Boolean');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = ApiClient.convertToType(data['widgets'], [Object]);
            }
            if (data.hasOwnProperty('pageIndex')) {
                obj['pageIndex'] = ApiClient.convertToType(data['pageIndex'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1SectionSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1SectionSpec</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['widgets'])) {
            throw new Error("Expected the field `widgets` to be an array in the JSON data but got " + data['widgets']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1SectionSpec.prototype['name'] = undefined;

/**
 * @member {Boolean} is_minimized
 */
V1SectionSpec.prototype['is_minimized'] = undefined;

/**
 * @member {Number} columns
 */
V1SectionSpec.prototype['columns'] = undefined;

/**
 * @member {Number} height
 */
V1SectionSpec.prototype['height'] = undefined;

/**
 * @member {Array.<Object>} widgets
 */
V1SectionSpec.prototype['widgets'] = undefined;

/**
 * @member {Number} pageIndex
 */
V1SectionSpec.prototype['pageIndex'] = undefined;

/**
 * @member {Number} pageSize
 */
V1SectionSpec.prototype['pageSize'] = undefined;






export default V1SectionSpec;

