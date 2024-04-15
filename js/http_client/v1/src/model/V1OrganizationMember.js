/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1OrganizationMember model module.
 * @module model/V1OrganizationMember
 * @version 2.1.7
 */
class V1OrganizationMember {
    /**
     * Constructs a new <code>V1OrganizationMember</code>.
     * @alias module:model/V1OrganizationMember
     */
    constructor() { 
        
        V1OrganizationMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1OrganizationMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1OrganizationMember} obj Optional instance to populate.
     * @return {module:model/V1OrganizationMember} The populated <code>V1OrganizationMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1OrganizationMember();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('user_email')) {
                obj['user_email'] = ApiClient.convertToType(data['user_email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
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
     * Validates the JSON data with respect to <code>V1OrganizationMember</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1OrganizationMember</code>.
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
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }

        return true;
    }


}



/**
 * @member {String} user
 */
V1OrganizationMember.prototype['user'] = undefined;

/**
 * @member {String} user_email
 */
V1OrganizationMember.prototype['user_email'] = undefined;

/**
 * @member {String} role
 */
V1OrganizationMember.prototype['role'] = undefined;

/**
 * @member {String} kind
 */
V1OrganizationMember.prototype['kind'] = undefined;

/**
 * @member {Date} created_at
 */
V1OrganizationMember.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1OrganizationMember.prototype['updated_at'] = undefined;






export default V1OrganizationMember;

