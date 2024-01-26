/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1DiffStoppingPolicy model module.
 * @module model/V1DiffStoppingPolicy
 * @version 2.1.0-rc16
 */
class V1DiffStoppingPolicy {
    /**
     * Constructs a new <code>V1DiffStoppingPolicy</code>.
     * Early stopping with diff factor stopping, this policy computes checks runs against the best run and stops those whose performance is worse than the best by the factor defined by the user.
     * @alias module:model/V1DiffStoppingPolicy
     */
    constructor() {

        V1DiffStoppingPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1DiffStoppingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1DiffStoppingPolicy} obj Optional instance to populate.
     * @return {module:model/V1DiffStoppingPolicy} The populated <code>V1DiffStoppingPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DiffStoppingPolicy();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
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
     * Validates the JSON data with respect to <code>V1DiffStoppingPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1DiffStoppingPolicy</code>.
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
 */
V1DiffStoppingPolicy.prototype['kind'] = undefined;

/**
 * @member {Number} percent
 */
V1DiffStoppingPolicy.prototype['percent'] = undefined;

/**
 * Interval/Frequency for applying the policy.
 * @member {Number} evaluationInterval
 */
V1DiffStoppingPolicy.prototype['evaluationInterval'] = undefined;

/**
 * @member {Number} minInterval
 */
V1DiffStoppingPolicy.prototype['minInterval'] = undefined;

/**
 * @member {Number} minSamples
 */
V1DiffStoppingPolicy.prototype['minSamples'] = undefined;






export default V1DiffStoppingPolicy;

