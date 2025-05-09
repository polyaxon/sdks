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
import V1EventKind from './V1EventKind';

/**
 * The V1EventTrigger model module.
 * @module model/V1EventTrigger
 * @version 2.8.0
 */
class V1EventTrigger {
    /**
     * Constructs a new <code>V1EventTrigger</code>.
     * @alias module:model/V1EventTrigger
     */
    constructor() {

        V1EventTrigger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EventTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventTrigger} obj Optional instance to populate.
     * @return {module:model/V1EventTrigger} The populated <code>V1EventTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventTrigger();

            if (data.hasOwnProperty('kinds')) {
                obj['kinds'] = ApiClient.convertToType(data['kinds'], [V1EventKind]);
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventTrigger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventTrigger</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['kinds'])) {
            throw new Error("Expected the field `kinds` to be an array in the JSON data but got " + data['kinds']);
        }
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1EventKind>} kinds
 */
V1EventTrigger.prototype['kinds'] = undefined;

/**
 * @member {String} ref
 */
V1EventTrigger.prototype['ref'] = undefined;






export default V1EventTrigger;

