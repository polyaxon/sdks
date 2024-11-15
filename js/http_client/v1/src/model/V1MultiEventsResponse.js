/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1MultiEventsResponse model module.
 * @module model/V1MultiEventsResponse
 * @version 2.5.2
 */
class V1MultiEventsResponse {
    /**
     * Constructs a new <code>V1MultiEventsResponse</code>.
     * @alias module:model/V1MultiEventsResponse
     */
    constructor() {

        V1MultiEventsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1MultiEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1MultiEventsResponse} obj Optional instance to populate.
     * @return {module:model/V1MultiEventsResponse} The populated <code>V1MultiEventsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1MultiEventsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1MultiEventsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1MultiEventsResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} data
 */
V1MultiEventsResponse.prototype['data'] = undefined;






export default V1MultiEventsResponse;

