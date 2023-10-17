/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1StageCondition from './V1StageCondition';

/**
 * The V1EntityStageBodyRequest model module.
 * @module model/V1EntityStageBodyRequest
 * @version 2.0.0-rc51
 */
class V1EntityStageBodyRequest {
    /**
     * Constructs a new <code>V1EntityStageBodyRequest</code>.
     * @alias module:model/V1EntityStageBodyRequest
     */
    constructor() {

        V1EntityStageBodyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EntityStageBodyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EntityStageBodyRequest} obj Optional instance to populate.
     * @return {module:model/V1EntityStageBodyRequest} The populated <code>V1EntityStageBodyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EntityStageBodyRequest();

            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = V1StageCondition.constructFromObject(data['condition']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EntityStageBodyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EntityStageBodyRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['entity'] && !(typeof data['entity'] === 'string' || data['entity'] instanceof String)) {
            throw new Error("Expected the field `entity` to be a primitive type in the JSON string but got " + data['entity']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          V1StageCondition.validateJSON(data['condition']);
        }

        return true;
    }


}



/**
 * @member {String} owner
 */
V1EntityStageBodyRequest.prototype['owner'] = undefined;

/**
 * @member {String} entity
 */
V1EntityStageBodyRequest.prototype['entity'] = undefined;

/**
 * @member {String} kind
 */
V1EntityStageBodyRequest.prototype['kind'] = undefined;

/**
 * @member {String} name
 */
V1EntityStageBodyRequest.prototype['name'] = undefined;

/**
 * @member {module:model/V1StageCondition} condition
 */
V1EntityStageBodyRequest.prototype['condition'] = undefined;






export default V1EntityStageBodyRequest;

