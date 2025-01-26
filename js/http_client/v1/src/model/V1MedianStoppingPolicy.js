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
 * The V1MedianStoppingPolicy model module.
 * @module model/V1MedianStoppingPolicy
 * @version 2.6.1
 */
class V1MedianStoppingPolicy {
    /**
     * Constructs a new <code>V1MedianStoppingPolicy</code>.
     * Early stopping with median stopping, this policy computes running medians across all runs and stops those whose best performance is worse than the median of the running runs.
     * @alias module:model/V1MedianStoppingPolicy
     */
    constructor() {

        V1MedianStoppingPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1MedianStoppingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1MedianStoppingPolicy} obj Optional instance to populate.
     * @return {module:model/V1MedianStoppingPolicy} The populated <code>V1MedianStoppingPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1MedianStoppingPolicy();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('evaluationInterval')) {
                obj['evaluationInterval'] = ApiClient.convertToType(data['evaluationInterval'], 'Number');
            }
            if (data.hasOwnProperty('minInterval')) {
                obj['minInterval'] = ApiClient.convertToType(data['minInterval'], 'Number');
            }
            if (data.hasOwnProperty('minSamples')) {
                obj['minSamples'] = ApiClient.convertToType(data['minSamples'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1MedianStoppingPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1MedianStoppingPolicy</code>.
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
 * @default 'median'
 */
V1MedianStoppingPolicy.prototype['kind'] = 'median';

/**
 * Interval/Frequency for applying the policy.
 * @member {Number} evaluationInterval
 */
V1MedianStoppingPolicy.prototype['evaluationInterval'] = undefined;

/**
 * @member {Number} minInterval
 */
V1MedianStoppingPolicy.prototype['minInterval'] = undefined;

/**
 * @member {Number} minSamples
 */
V1MedianStoppingPolicy.prototype['minSamples'] = undefined;






export default V1MedianStoppingPolicy;

