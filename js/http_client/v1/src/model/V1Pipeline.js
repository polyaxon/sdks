/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1PipelineKind from './V1PipelineKind';

/**
 * The V1Pipeline model module.
 * @module model/V1Pipeline
 * @version 2.1.0
 */
class V1Pipeline {
    /**
     * Constructs a new <code>V1Pipeline</code>.
     * @alias module:model/V1Pipeline
     */
    constructor() {

        V1Pipeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Pipeline} obj Optional instance to populate.
     * @return {module:model/V1Pipeline} The populated <code>V1Pipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Pipeline();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1PipelineKind.constructFromObject(data['kind']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Pipeline</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Pipeline</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Pipeline.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Pipeline.prototype['name'] = undefined;

/**
 * @member {module:model/V1PipelineKind} kind
 */
V1Pipeline.prototype['kind'] = undefined;






export default V1Pipeline;

