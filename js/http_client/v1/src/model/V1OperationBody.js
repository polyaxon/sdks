/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ManagedBy from './V1ManagedBy';
import V1RunPending from './V1RunPending';

/**
 * The V1OperationBody model module.
 * @module model/V1OperationBody
 * @version 2.3.1
 */
class V1OperationBody {
    /**
     * Constructs a new <code>V1OperationBody</code>.
     * @alias module:model/V1OperationBody
     */
    constructor() { 
        
        V1OperationBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1OperationBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1OperationBody} obj Optional instance to populate.
     * @return {module:model/V1OperationBody} The populated <code>V1OperationBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1OperationBody();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('is_managed')) {
                obj['is_managed'] = ApiClient.convertToType(data['is_managed'], 'Boolean');
            }
            if (data.hasOwnProperty('managed_by')) {
                obj['managed_by'] = V1ManagedBy.constructFromObject(data['managed_by']);
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = V1RunPending.constructFromObject(data['pending']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('meta_info')) {
                obj['meta_info'] = ApiClient.convertToType(data['meta_info'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1OperationBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1OperationBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }

        return true;
    }


}



/**
 * @member {String} content
 */
V1OperationBody.prototype['content'] = undefined;

/**
 * @member {Boolean} is_managed
 */
V1OperationBody.prototype['is_managed'] = undefined;

/**
 * @member {module:model/V1ManagedBy} managed_by
 */
V1OperationBody.prototype['managed_by'] = undefined;

/**
 * @member {module:model/V1RunPending} pending
 */
V1OperationBody.prototype['pending'] = undefined;

/**
 * @member {String} name
 */
V1OperationBody.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1OperationBody.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1OperationBody.prototype['tags'] = undefined;

/**
 * @member {Object} meta_info
 */
V1OperationBody.prototype['meta_info'] = undefined;






export default V1OperationBody;

