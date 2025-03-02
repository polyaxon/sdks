/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1UserAccess from './V1UserAccess';

/**
 * The V1Policy model module.
 * @module model/V1Policy
 * @version 2.7.0
 */
class V1Policy {
    /**
     * Constructs a new <code>V1Policy</code>.
     * @alias module:model/V1Policy
     */
    constructor() {

        V1Policy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Policy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Policy} obj Optional instance to populate.
     * @return {module:model/V1Policy} The populated <code>V1Policy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Policy();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('excluded_features')) {
                obj['excluded_features'] = ApiClient.convertToType(data['excluded_features'], ['String']);
            }
            if (data.hasOwnProperty('excluded_runtimes')) {
                obj['excluded_runtimes'] = ApiClient.convertToType(data['excluded_runtimes'], ['String']);
            }
            if (data.hasOwnProperty('archived_deletion_interval')) {
                obj['archived_deletion_interval'] = ApiClient.convertToType(data['archived_deletion_interval'], 'Number');
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('default_presets')) {
                obj['default_presets'] = ApiClient.convertToType(data['default_presets'], ['String']);
            }
            if (data.hasOwnProperty('default_presets_ordered')) {
                obj['default_presets_ordered'] = ApiClient.convertToType(data['default_presets_ordered'], ['String']);
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('queues')) {
                obj['queues'] = ApiClient.convertToType(data['queues'], ['String']);
            }
            if (data.hasOwnProperty('agents')) {
                obj['agents'] = ApiClient.convertToType(data['agents'], ['String']);
            }
            if (data.hasOwnProperty('namespaces')) {
                obj['namespaces'] = ApiClient.convertToType(data['namespaces'], ['String']);
            }
            if (data.hasOwnProperty('user_accesses')) {
                obj['user_accesses'] = ApiClient.convertToType(data['user_accesses'], [V1UserAccess]);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], ['String']);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], ['String']);
            }
            if (data.hasOwnProperty('connected_projects')) {
                obj['connected_projects'] = ApiClient.convertToType(data['connected_projects'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Policy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Policy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['excluded_features'])) {
            throw new Error("Expected the field `excluded_features` to be an array in the JSON data but got " + data['excluded_features']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excluded_runtimes'])) {
            throw new Error("Expected the field `excluded_runtimes` to be an array in the JSON data but got " + data['excluded_runtimes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['default_presets'])) {
            throw new Error("Expected the field `default_presets` to be an array in the JSON data but got " + data['default_presets']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['default_presets_ordered'])) {
            throw new Error("Expected the field `default_presets_ordered` to be an array in the JSON data but got " + data['default_presets_ordered']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['presets'])) {
            throw new Error("Expected the field `presets` to be an array in the JSON data but got " + data['presets']);
        }
        // ensure the json data is a string
        if (data['queue'] && !(typeof data['queue'] === 'string' || data['queue'] instanceof String)) {
            throw new Error("Expected the field `queue` to be a primitive type in the JSON string but got " + data['queue']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['queues'])) {
            throw new Error("Expected the field `queues` to be an array in the JSON data but got " + data['queues']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['agents'])) {
            throw new Error("Expected the field `agents` to be an array in the JSON data but got " + data['agents']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['namespaces'])) {
            throw new Error("Expected the field `namespaces` to be an array in the JSON data but got " + data['namespaces']);
        }
        if (data['user_accesses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['user_accesses'])) {
                throw new Error("Expected the field `user_accesses` to be an array in the JSON data but got " + data['user_accesses']);
            }
            // validate the optional field `user_accesses` (array)
            for (const item of data['user_accesses']) {
                V1UserAccess.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['teams'])) {
            throw new Error("Expected the field `teams` to be an array in the JSON data but got " + data['teams']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['projects'])) {
            throw new Error("Expected the field `projects` to be an array in the JSON data but got " + data['projects']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connected_projects'])) {
            throw new Error("Expected the field `connected_projects` to be an array in the JSON data but got " + data['connected_projects']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Policy.prototype['uuid'] = undefined;

/**
 * @member {String} owner
 */
V1Policy.prototype['owner'] = undefined;

/**
 * @member {String} name
 */
V1Policy.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Policy.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Policy.prototype['tags'] = undefined;

/**
 * @member {Date} created_at
 */
V1Policy.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Policy.prototype['updated_at'] = undefined;

/**
 * @member {Array.<String>} excluded_features
 */
V1Policy.prototype['excluded_features'] = undefined;

/**
 * @member {Array.<String>} excluded_runtimes
 */
V1Policy.prototype['excluded_runtimes'] = undefined;

/**
 * @member {Number} archived_deletion_interval
 */
V1Policy.prototype['archived_deletion_interval'] = undefined;

/**
 * @member {Array.<String>} connections
 */
V1Policy.prototype['connections'] = undefined;

/**
 * @member {Array.<String>} default_presets
 */
V1Policy.prototype['default_presets'] = undefined;

/**
 * @member {Array.<String>} default_presets_ordered
 */
V1Policy.prototype['default_presets_ordered'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1Policy.prototype['presets'] = undefined;

/**
 * @member {String} queue
 */
V1Policy.prototype['queue'] = undefined;

/**
 * @member {Array.<String>} queues
 */
V1Policy.prototype['queues'] = undefined;

/**
 * @member {Array.<String>} agents
 */
V1Policy.prototype['agents'] = undefined;

/**
 * @member {Array.<String>} namespaces
 */
V1Policy.prototype['namespaces'] = undefined;

/**
 * @member {Array.<module:model/V1UserAccess>} user_accesses
 */
V1Policy.prototype['user_accesses'] = undefined;

/**
 * @member {Array.<String>} teams
 */
V1Policy.prototype['teams'] = undefined;

/**
 * @member {Array.<String>} projects
 */
V1Policy.prototype['projects'] = undefined;

/**
 * @member {Array.<String>} connected_projects
 */
V1Policy.prototype['connected_projects'] = undefined;






export default V1Policy;

