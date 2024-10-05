/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
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
 * @version 2.5.0
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
            if (data.hasOwnProperty('is_frozen')) {
                obj['is_frozen'] = ApiClient.convertToType(data['is_frozen'], 'Boolean');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('xaxis')) {
                obj['xaxis'] = ApiClient.convertToType(data['xaxis'], 'String');
            }
            if (data.hasOwnProperty('smoothing')) {
                obj['smoothing'] = ApiClient.convertToType(data['smoothing'], 'Number');
            }
            if (data.hasOwnProperty('ignore_outliers')) {
                obj['ignore_outliers'] = ApiClient.convertToType(data['ignore_outliers'], 'Boolean');
            }
            if (data.hasOwnProperty('sample_size')) {
                obj['sample_size'] = ApiClient.convertToType(data['sample_size'], 'Number');
            }
            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = ApiClient.convertToType(data['widgets'], [Object]);
            }
            if (data.hasOwnProperty('page_index')) {
                obj['page_index'] = ApiClient.convertToType(data['page_index'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
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
        // ensure the json data is a string
        if (data['xaxis'] && !(typeof data['xaxis'] === 'string' || data['xaxis'] instanceof String)) {
            throw new Error("Expected the field `xaxis` to be a primitive type in the JSON string but got " + data['xaxis']);
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
 * @member {Boolean} is_frozen
 */
V1SectionSpec.prototype['is_frozen'] = undefined;

/**
 * @member {Number} columns
 */
V1SectionSpec.prototype['columns'] = undefined;

/**
 * @member {Number} height
 */
V1SectionSpec.prototype['height'] = undefined;

/**
 * @member {String} xaxis
 */
V1SectionSpec.prototype['xaxis'] = undefined;

/**
 * @member {Number} smoothing
 */
V1SectionSpec.prototype['smoothing'] = undefined;

/**
 * @member {Boolean} ignore_outliers
 */
V1SectionSpec.prototype['ignore_outliers'] = undefined;

/**
 * @member {Number} sample_size
 */
V1SectionSpec.prototype['sample_size'] = undefined;

/**
 * @member {Array.<Object>} widgets
 */
V1SectionSpec.prototype['widgets'] = undefined;

/**
 * @member {Number} page_index
 */
V1SectionSpec.prototype['page_index'] = undefined;

/**
 * @member {Number} page_size
 */
V1SectionSpec.prototype['page_size'] = undefined;






export default V1SectionSpec;

