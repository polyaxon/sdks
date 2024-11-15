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
import V1JoinParam from './V1JoinParam';

/**
 * The V1Join model module.
 * @module model/V1Join
 * @version 2.5.2
 */
class V1Join {
    /**
     * Constructs a new <code>V1Join</code>.
     * @alias module:model/V1Join
     */
    constructor() {

        V1Join.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Join</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Join} obj Optional instance to populate.
     * @return {module:model/V1Join} The populated <code>V1Join</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Join();

            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1JoinParam});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Join</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Join</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['sort'] && !(typeof data['sort'] === 'string' || data['sort'] instanceof String)) {
            throw new Error("Expected the field `sort` to be a primitive type in the JSON string but got " + data['sort']);
        }

        return true;
    }


}



/**
 * @member {String} ref
 */
V1Join.prototype['ref'] = undefined;

/**
 * @member {String} query
 */
V1Join.prototype['query'] = undefined;

/**
 * @member {String} sort
 */
V1Join.prototype['sort'] = undefined;

/**
 * @member {Number} limit
 */
V1Join.prototype['limit'] = undefined;

/**
 * @member {Number} offset
 */
V1Join.prototype['offset'] = undefined;

/**
 * @member {Object.<String, module:model/V1JoinParam>} params
 */
V1Join.prototype['params'] = undefined;






export default V1Join;

