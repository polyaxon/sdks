/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc0
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
 * The V1EntityNotificationBody model module.
 * @module model/V1EntityNotificationBody
 * @version 2.1.3-rc0
 */
class V1EntityNotificationBody {
    /**
     * Constructs a new <code>V1EntityNotificationBody</code>.
     * @alias module:model/V1EntityNotificationBody
     */
    constructor() { 
        
        V1EntityNotificationBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1EntityNotificationBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EntityNotificationBody} obj Optional instance to populate.
     * @return {module:model/V1EntityNotificationBody} The populated <code>V1EntityNotificationBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EntityNotificationBody();

            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = V1StatusCondition.constructFromObject(data['condition']);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EntityNotificationBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EntityNotificationBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          V1StatusCondition.validateJSON(data['condition']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }

        return true;
    }


}



/**
 * @member {String} namespace
 */
V1EntityNotificationBody.prototype['namespace'] = undefined;

/**
 * @member {String} owner
 */
V1EntityNotificationBody.prototype['owner'] = undefined;

/**
 * @member {String} project
 */
V1EntityNotificationBody.prototype['project'] = undefined;

/**
 * @member {String} uuid
 */
V1EntityNotificationBody.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1EntityNotificationBody.prototype['name'] = undefined;

/**
 * @member {module:model/V1StatusCondition} condition
 */
V1EntityNotificationBody.prototype['condition'] = undefined;

/**
 * @member {Array.<String>} connections
 */
V1EntityNotificationBody.prototype['connections'] = undefined;






export default V1EntityNotificationBody;

