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
import V1StatusCondition from './V1StatusCondition';
import V1Statuses from './V1Statuses';

/**
 * The V1Agent model module.
 * @module model/V1Agent
 * @version 2.5.2
 */
class V1Agent {
    /**
     * Constructs a new <code>V1Agent</code>.
     * @alias module:model/V1Agent
     */
    constructor() {

        V1Agent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Agent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Agent} obj Optional instance to populate.
     * @return {module:model/V1Agent} The populated <code>V1Agent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Agent();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
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
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('version_api')) {
                obj['version_api'] = ApiClient.convertToType(data['version_api'], Object);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1Statuses.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('status_conditions')) {
                obj['status_conditions'] = ApiClient.convertToType(data['status_conditions'], [V1StatusCondition]);
            }
            if (data.hasOwnProperty('is_replica')) {
                obj['is_replica'] = ApiClient.convertToType(data['is_replica'], 'Boolean');
            }
            if (data.hasOwnProperty('is_ui_managed')) {
                obj['is_ui_managed'] = ApiClient.convertToType(data['is_ui_managed'], 'Boolean');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], Object);
            }
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiClient.convertToType(data['stats'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Agent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Agent</code>.
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
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        if (data['status_conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['status_conditions'])) {
                throw new Error("Expected the field `status_conditions` to be an array in the JSON data but got " + data['status_conditions']);
            }
            // validate the optional field `status_conditions` (array)
            for (const item of data['status_conditions']) {
                V1StatusCondition.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['hostname'] && !(typeof data['hostname'] === 'string' || data['hostname'] instanceof String)) {
            throw new Error("Expected the field `hostname` to be a primitive type in the JSON string but got " + data['hostname']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Agent.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Agent.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Agent.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Agent.prototype['tags'] = undefined;

/**
 * @member {Number} live_state
 */
V1Agent.prototype['live_state'] = undefined;

/**
 * @member {String} namespace
 */
V1Agent.prototype['namespace'] = undefined;

/**
 * @member {Object} version_api
 */
V1Agent.prototype['version_api'] = undefined;

/**
 * @member {String} version
 */
V1Agent.prototype['version'] = undefined;

/**
 * @member {String} content
 */
V1Agent.prototype['content'] = undefined;

/**
 * @member {Date} created_at
 */
V1Agent.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Agent.prototype['updated_at'] = undefined;

/**
 * @member {module:model/V1Statuses} status
 */
V1Agent.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/V1StatusCondition>} status_conditions
 */
V1Agent.prototype['status_conditions'] = undefined;

/**
 * @member {Boolean} is_replica
 */
V1Agent.prototype['is_replica'] = undefined;

/**
 * @member {Boolean} is_ui_managed
 */
V1Agent.prototype['is_ui_managed'] = undefined;

/**
 * @member {String} hostname
 */
V1Agent.prototype['hostname'] = undefined;

/**
 * @member {Object} settings
 */
V1Agent.prototype['settings'] = undefined;

/**
 * @member {Object} stats
 */
V1Agent.prototype['stats'] = undefined;






export default V1Agent;

