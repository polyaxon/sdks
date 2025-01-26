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
 * The V1AnalyticsSpec model module.
 * @module model/V1AnalyticsSpec
 * @version 2.6.1
 */
class V1AnalyticsSpec {
    /**
     * Constructs a new <code>V1AnalyticsSpec</code>.
     * @alias module:model/V1AnalyticsSpec
     */
    constructor() {

        V1AnalyticsSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1AnalyticsSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AnalyticsSpec} obj Optional instance to populate.
     * @return {module:model/V1AnalyticsSpec} The populated <code>V1AnalyticsSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AnalyticsSpec();

            if (data.hasOwnProperty('view')) {
                obj['view'] = ApiClient.convertToType(data['view'], 'String');
            }
            if (data.hasOwnProperty('trunc')) {
                obj['trunc'] = ApiClient.convertToType(data['trunc'], 'String');
            }
            if (data.hasOwnProperty('groupby')) {
                obj['groupby'] = ApiClient.convertToType(data['groupby'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AnalyticsSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AnalyticsSpec</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['view'] && !(typeof data['view'] === 'string' || data['view'] instanceof String)) {
            throw new Error("Expected the field `view` to be a primitive type in the JSON string but got " + data['view']);
        }
        // ensure the json data is a string
        if (data['trunc'] && !(typeof data['trunc'] === 'string' || data['trunc'] instanceof String)) {
            throw new Error("Expected the field `trunc` to be a primitive type in the JSON string but got " + data['trunc']);
        }
        // ensure the json data is a string
        if (data['groupby'] && !(typeof data['groupby'] === 'string' || data['groupby'] instanceof String)) {
            throw new Error("Expected the field `groupby` to be a primitive type in the JSON string but got " + data['groupby']);
        }
        // ensure the json data is a string
        if (data['frequency'] && !(typeof data['frequency'] === 'string' || data['frequency'] instanceof String)) {
            throw new Error("Expected the field `frequency` to be a primitive type in the JSON string but got " + data['frequency']);
        }

        return true;
    }


}



/**
 * @member {String} view
 */
V1AnalyticsSpec.prototype['view'] = undefined;

/**
 * @member {String} trunc
 */
V1AnalyticsSpec.prototype['trunc'] = undefined;

/**
 * @member {String} groupby
 */
V1AnalyticsSpec.prototype['groupby'] = undefined;

/**
 * @member {String} frequency
 */
V1AnalyticsSpec.prototype['frequency'] = undefined;






export default V1AnalyticsSpec;

