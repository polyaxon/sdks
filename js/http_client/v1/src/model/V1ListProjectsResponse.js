/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Project from './V1Project';

/**
 * The V1ListProjectsResponse model module.
 * @module model/V1ListProjectsResponse
 * @version 2.0.0-rc26
 */
class V1ListProjectsResponse {
    /**
     * Constructs a new <code>V1ListProjectsResponse</code>.
     * @alias module:model/V1ListProjectsResponse
     */
    constructor() { 
        
        V1ListProjectsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ListProjectsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ListProjectsResponse} obj Optional instance to populate.
     * @return {module:model/V1ListProjectsResponse} The populated <code>V1ListProjectsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ListProjectsResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [V1Project]);
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
     * Validates the JSON data with respect to <code>V1ListProjectsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ListProjectsResponse</code>.
     */
    static validateJSON(data) {
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                V1Project.validateJSON(item);
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
V1ListProjectsResponse.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/V1Project>} results
 */
V1ListProjectsResponse.prototype['results'] = undefined;

/**
 * @member {String} previous
 */
V1ListProjectsResponse.prototype['previous'] = undefined;

/**
 * @member {String} next
 */
V1ListProjectsResponse.prototype['next'] = undefined;






export default V1ListProjectsResponse;

