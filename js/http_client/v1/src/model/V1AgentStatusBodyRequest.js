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
import V1StatusCondition from './V1StatusCondition';

/**
 * The V1AgentStatusBodyRequest model module.
 * @module model/V1AgentStatusBodyRequest
 * @version 2.8.0
 */
class V1AgentStatusBodyRequest {
    /**
     * Constructs a new <code>V1AgentStatusBodyRequest</code>.
     * @alias module:model/V1AgentStatusBodyRequest
     */
    constructor() {

        V1AgentStatusBodyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1AgentStatusBodyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AgentStatusBodyRequest} obj Optional instance to populate.
     * @return {module:model/V1AgentStatusBodyRequest} The populated <code>V1AgentStatusBodyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AgentStatusBodyRequest();

            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = V1StatusCondition.constructFromObject(data['condition']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AgentStatusBodyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AgentStatusBodyRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          V1StatusCondition.validateJSON(data['condition']);
        }

        return true;
    }


}



/**
 * @member {String} owner
 */
V1AgentStatusBodyRequest.prototype['owner'] = undefined;

/**
 * @member {String} uuid
 */
V1AgentStatusBodyRequest.prototype['uuid'] = undefined;

/**
 * @member {module:model/V1StatusCondition} condition
 */
V1AgentStatusBodyRequest.prototype['condition'] = undefined;






export default V1AgentStatusBodyRequest;

