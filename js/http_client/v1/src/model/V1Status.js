/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.2.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1StatusCondition from './V1StatusCondition';
import V1Statuses from './V1Statuses';

/**
 * The V1Status model module.
 * @module model/V1Status
 * @version 2.2.0-rc0
 */
class V1Status {
    /**
     * Constructs a new <code>V1Status</code>.
     * @alias module:model/V1Status
     */
    constructor() { 
        
        V1Status.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Status} obj Optional instance to populate.
     * @return {module:model/V1Status} The populated <code>V1Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Status();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1Statuses.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('status_conditions')) {
                obj['status_conditions'] = ApiClient.convertToType(data['status_conditions'], [V1StatusCondition]);
            }
            if (data.hasOwnProperty('meta_info')) {
                obj['meta_info'] = ApiClient.convertToType(data['meta_info'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Status</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Status</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        if (data['status_conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['status_conditions'])) {
                throw new Error("Expected the field `status_conditions` to be an array in the JSON data but got " + data['status_conditions']);
            }
            // validate the optional field `status_conditions` (array)
            for (const item of data['status_conditions']) {
                V1StatusCondition.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Status.prototype['uuid'] = undefined;

/**
 * @member {module:model/V1Statuses} status
 */
V1Status.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/V1StatusCondition>} status_conditions
 */
V1Status.prototype['status_conditions'] = undefined;

/**
 * @member {Object} meta_info
 */
V1Status.prototype['meta_info'] = undefined;






export default V1Status;

