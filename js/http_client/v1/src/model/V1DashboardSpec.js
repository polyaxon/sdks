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
import V1SectionSpec from './V1SectionSpec';

/**
 * The V1DashboardSpec model module.
 * @module model/V1DashboardSpec
 * @version 2.1.7
 */
class V1DashboardSpec {
    /**
     * Constructs a new <code>V1DashboardSpec</code>.
     * @alias module:model/V1DashboardSpec
     */
    constructor() { 
        
        V1DashboardSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1DashboardSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1DashboardSpec} obj Optional instance to populate.
     * @return {module:model/V1DashboardSpec} The populated <code>V1DashboardSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DashboardSpec();

            if (data.hasOwnProperty('sections')) {
                obj['sections'] = ApiClient.convertToType(data['sections'], [V1SectionSpec]);
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1DashboardSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1DashboardSpec</code>.
     */
    static validateJSON(data) {
        if (data['sections']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sections'])) {
                throw new Error("Expected the field `sections` to be an array in the JSON data but got " + data['sections']);
            }
            // validate the optional field `sections` (array)
            for (const item of data['sections']) {
                V1SectionSpec.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['xaxis'] && !(typeof data['xaxis'] === 'string' || data['xaxis'] instanceof String)) {
            throw new Error("Expected the field `xaxis` to be a primitive type in the JSON string but got " + data['xaxis']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1SectionSpec>} sections
 */
V1DashboardSpec.prototype['sections'] = undefined;

/**
 * @member {String} xaxis
 */
V1DashboardSpec.prototype['xaxis'] = undefined;

/**
 * @member {Number} smoothing
 */
V1DashboardSpec.prototype['smoothing'] = undefined;

/**
 * @member {Boolean} ignore_outliers
 */
V1DashboardSpec.prototype['ignore_outliers'] = undefined;

/**
 * @member {Number} sample_size
 */
V1DashboardSpec.prototype['sample_size'] = undefined;






export default V1DashboardSpec;

