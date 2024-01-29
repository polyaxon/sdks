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
 * The V1Notification model module.
 * @module model/V1Notification
 * @version 2.1.0-rc17
 */
class V1Notification {
    /**
     * Constructs a new <code>V1Notification</code>.
     * @alias module:model/V1Notification
     */
    constructor() {

        V1Notification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Notification} obj Optional instance to populate.
     * @return {module:model/V1Notification} The populated <code>V1Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Notification();

            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = V1Statuses.constructFromObject(data['trigger']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Notification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Notification</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} connections
 */
V1Notification.prototype['connections'] = undefined;

/**
 * @member {module:model/V1Statuses} trigger
 */
V1Notification.prototype['trigger'] = undefined;






export default V1Notification;

