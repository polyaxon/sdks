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
import V1SectionSpec from './V1SectionSpec';

/**
 * The V1DashboardSpec model module.
 * @module model/V1DashboardSpec
 * @version 2.0.0-rc38
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

        return true;
    }


}



/**
 * @member {Array.<module:model/V1SectionSpec>} sections
 */
V1DashboardSpec.prototype['sections'] = undefined;






export default V1DashboardSpec;

