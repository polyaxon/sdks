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
import V1Search from './V1Search';

/**
 * The V1ListSearchesResponse model module.
 * @module model/V1ListSearchesResponse
 * @version 2.8.0
 */
class V1ListSearchesResponse {
    /**
     * Constructs a new <code>V1ListSearchesResponse</code>.
     * @alias module:model/V1ListSearchesResponse
     */
    constructor() {

        V1ListSearchesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ListSearchesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ListSearchesResponse} obj Optional instance to populate.
     * @return {module:model/V1ListSearchesResponse} The populated <code>V1ListSearchesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ListSearchesResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [V1Search]);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ListSearchesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ListSearchesResponse</code>.
     */
    static validateJSON(data) {
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                V1Search.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['previous'] && !(typeof data['previous'] === 'string' || data['previous'] instanceof String)) {
            throw new Error("Expected the field `previous` to be a primitive type in the JSON string but got " + data['previous']);
        }
        // ensure the json data is a string
        if (data['next'] && !(typeof data['next'] === 'string' || data['next'] instanceof String)) {
            throw new Error("Expected the field `next` to be a primitive type in the JSON string but got " + data['next']);
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
V1ListSearchesResponse.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/V1Search>} results
 */
V1ListSearchesResponse.prototype['results'] = undefined;

/**
 * @member {String} previous
 */
V1ListSearchesResponse.prototype['previous'] = undefined;

/**
 * @member {String} next
 */
V1ListSearchesResponse.prototype['next'] = undefined;






export default V1ListSearchesResponse;

