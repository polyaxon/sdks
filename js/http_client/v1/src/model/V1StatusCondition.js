/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Statuses from './V1Statuses';

/**
 * The V1StatusCondition model module.
 * @module model/V1StatusCondition
 * @version 2.1.0-rc17
 */
class V1StatusCondition {
    /**
     * Constructs a new <code>V1StatusCondition</code>.
     * @alias module:model/V1StatusCondition
     */
    constructor() {

        V1StatusCondition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1StatusCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1StatusCondition} obj Optional instance to populate.
     * @return {module:model/V1StatusCondition} The populated <code>V1StatusCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1StatusCondition();

            if (data.hasOwnProperty('type')) {
                obj['type'] = V1Statuses.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('last_update_time')) {
                obj['last_update_time'] = ApiClient.convertToType(data['last_update_time'], 'Date');
            }
            if (data.hasOwnProperty('last_transition_time')) {
                obj['last_transition_time'] = ApiClient.convertToType(data['last_transition_time'], 'Date');
            }
            if (data.hasOwnProperty('meta_info')) {
                obj['meta_info'] = ApiClient.convertToType(data['meta_info'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1StatusCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1StatusCondition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1Statuses} type
 */
V1StatusCondition.prototype['type'] = undefined;

/**
 * @member {String} status
 */
V1StatusCondition.prototype['status'] = undefined;

/**
 * @member {String} reason
 */
V1StatusCondition.prototype['reason'] = undefined;

/**
 * @member {String} message
 */
V1StatusCondition.prototype['message'] = undefined;

/**
 * @member {Date} last_update_time
 */
V1StatusCondition.prototype['last_update_time'] = undefined;

/**
 * @member {Date} last_transition_time
 */
V1StatusCondition.prototype['last_transition_time'] = undefined;

/**
 * @member {Object} meta_info
 */
V1StatusCondition.prototype['meta_info'] = undefined;






export default V1StatusCondition;

