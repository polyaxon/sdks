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

/**
 * The V1Organization model module.
 * @module model/V1Organization
 * @version 2.8.0
 */
class V1Organization {
    /**
     * Constructs a new <code>V1Organization</code>.
     * @alias module:model/V1Organization
     */
    constructor() {

        V1Organization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Organization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Organization} obj Optional instance to populate.
     * @return {module:model/V1Organization} The populated <code>V1Organization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Organization();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('user_email')) {
                obj['user_email'] = ApiClient.convertToType(data['user_email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('support_revoke_at')) {
                obj['support_revoke_at'] = ApiClient.convertToType(data['support_revoke_at'], 'Date');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Number');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('default_presets')) {
                obj['default_presets'] = ApiClient.convertToType(data['default_presets'], ['String']);
            }
            if (data.hasOwnProperty('default_presets_ordered')) {
                obj['default_presets_ordered'] = ApiClient.convertToType(data['default_presets_ordered'], ['String']);
            }
            if (data.hasOwnProperty('is_cloud_viewable')) {
                obj['is_cloud_viewable'] = ApiClient.convertToType(data['is_cloud_viewable'], 'Boolean');
            }
            if (data.hasOwnProperty('archived_deletion_interval')) {
                obj['archived_deletion_interval'] = ApiClient.convertToType(data['archived_deletion_interval'], 'Number');
            }
            if (data.hasOwnProperty('auth')) {
                obj['auth'] = ApiClient.convertToType(data['auth'], Object);
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ApiClient.convertToType(data['plan'], Object);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = ApiClient.convertToType(data['usage'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Organization</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Organization</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['user_email'] && !(typeof data['user_email'] === 'string' || data['user_email'] instanceof String)) {
            throw new Error("Expected the field `user_email` to be a primitive type in the JSON string but got " + data['user_email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['queue'] && !(typeof data['queue'] === 'string' || data['queue'] instanceof String)) {
            throw new Error("Expected the field `queue` to be a primitive type in the JSON string but got " + data['queue']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['default_presets'])) {
            throw new Error("Expected the field `default_presets` to be an array in the JSON data but got " + data['default_presets']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['default_presets_ordered'])) {
            throw new Error("Expected the field `default_presets_ordered` to be an array in the JSON data but got " + data['default_presets_ordered']);
        }

        return true;
    }


}



/**
 * @member {String} user
 */
V1Organization.prototype['user'] = undefined;

/**
 * @member {String} user_email
 */
V1Organization.prototype['user_email'] = undefined;

/**
 * @member {String} name
 */
V1Organization.prototype['name'] = undefined;

/**
 * @member {Boolean} is_public
 */
V1Organization.prototype['is_public'] = undefined;

/**
 * @member {Date} created_at
 */
V1Organization.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Organization.prototype['updated_at'] = undefined;

/**
 * @member {Date} support_revoke_at
 */
V1Organization.prototype['support_revoke_at'] = undefined;

/**
 * @member {Number} expiration
 */
V1Organization.prototype['expiration'] = undefined;

/**
 * @member {String} role
 */
V1Organization.prototype['role'] = undefined;

/**
 * @member {String} queue
 */
V1Organization.prototype['queue'] = undefined;

/**
 * @member {Array.<String>} default_presets
 */
V1Organization.prototype['default_presets'] = undefined;

/**
 * @member {Array.<String>} default_presets_ordered
 */
V1Organization.prototype['default_presets_ordered'] = undefined;

/**
 * @member {Boolean} is_cloud_viewable
 */
V1Organization.prototype['is_cloud_viewable'] = undefined;

/**
 * @member {Number} archived_deletion_interval
 */
V1Organization.prototype['archived_deletion_interval'] = undefined;

/**
 * @member {Object} auth
 */
V1Organization.prototype['auth'] = undefined;

/**
 * @member {Object} plan
 */
V1Organization.prototype['plan'] = undefined;

/**
 * @member {Object} usage
 */
V1Organization.prototype['usage'] = undefined;






export default V1Organization;

