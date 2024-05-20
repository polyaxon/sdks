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

/**
 * The V1Queue model module.
 * @module model/V1Queue
 * @version 2.2.0-rc0
 */
class V1Queue {
    /**
     * Constructs a new <code>V1Queue</code>.
     * @alias module:model/V1Queue
     */
    constructor() { 
        
        V1Queue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Queue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Queue} obj Optional instance to populate.
     * @return {module:model/V1Queue} The populated <code>V1Queue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Queue();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('agent')) {
                obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
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
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('concurrency')) {
                obj['concurrency'] = ApiClient.convertToType(data['concurrency'], 'Number');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = ApiClient.convertToType(data['quota'], 'String');
            }
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiClient.convertToType(data['stats'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Queue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Queue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['agent'] && !(typeof data['agent'] === 'string' || data['agent'] instanceof String)) {
            throw new Error("Expected the field `agent` to be a primitive type in the JSON string but got " + data['agent']);
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
        // ensure the json data is a string
        if (data['resource'] && !(typeof data['resource'] === 'string' || data['resource'] instanceof String)) {
            throw new Error("Expected the field `resource` to be a primitive type in the JSON string but got " + data['resource']);
        }
        // ensure the json data is a string
        if (data['quota'] && !(typeof data['quota'] === 'string' || data['quota'] instanceof String)) {
            throw new Error("Expected the field `quota` to be a primitive type in the JSON string but got " + data['quota']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Queue.prototype['uuid'] = undefined;

/**
 * @member {String} agent
 */
V1Queue.prototype['agent'] = undefined;

/**
 * @member {String} name
 */
V1Queue.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Queue.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Queue.prototype['tags'] = undefined;

/**
 * @member {Number} priority
 */
V1Queue.prototype['priority'] = undefined;

/**
 * @member {Number} concurrency
 */
V1Queue.prototype['concurrency'] = undefined;

/**
 * @member {String} resource
 */
V1Queue.prototype['resource'] = undefined;

/**
 * @member {String} quota
 */
V1Queue.prototype['quota'] = undefined;

/**
 * @member {Object} stats
 */
V1Queue.prototype['stats'] = undefined;

/**
 * @member {Date} created_at
 */
V1Queue.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Queue.prototype['updated_at'] = undefined;






export default V1Queue;

