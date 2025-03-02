/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.7.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1RunArtifact from './V1RunArtifact';

/**
 * The V1RunArtifacts model module.
 * @module model/V1RunArtifacts
 * @version 2.7.0-rc0
 */
class V1RunArtifacts {
    /**
     * Constructs a new <code>V1RunArtifacts</code>.
     * @alias module:model/V1RunArtifacts
     */
    constructor() { 
        
        V1RunArtifacts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RunArtifacts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunArtifacts} obj Optional instance to populate.
     * @return {module:model/V1RunArtifacts} The populated <code>V1RunArtifacts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunArtifacts();

            if (data.hasOwnProperty('artifacts')) {
                obj['artifacts'] = ApiClient.convertToType(data['artifacts'], [V1RunArtifact]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1RunArtifacts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1RunArtifacts</code>.
     */
    static validateJSON(data) {
        if (data['artifacts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['artifacts'])) {
                throw new Error("Expected the field `artifacts` to be an array in the JSON data but got " + data['artifacts']);
            }
            // validate the optional field `artifacts` (array)
            for (const item of data['artifacts']) {
                V1RunArtifact.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1RunArtifact>} artifacts
 */
V1RunArtifacts.prototype['artifacts'] = undefined;






export default V1RunArtifacts;

