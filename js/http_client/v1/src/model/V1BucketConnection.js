/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1BucketConnection model module.
 * @module model/V1BucketConnection
 * @version 2.6.1
 */
class V1BucketConnection {
    /**
     * Constructs a new <code>V1BucketConnection</code>.
     * @alias module:model/V1BucketConnection
     */
    constructor() {

        V1BucketConnection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1BucketConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1BucketConnection} obj Optional instance to populate.
     * @return {module:model/V1BucketConnection} The populated <code>V1BucketConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1BucketConnection();

            if (data.hasOwnProperty('bucket')) {
                obj['bucket'] = ApiClient.convertToType(data['bucket'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1BucketConnection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1BucketConnection</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['bucket'] && !(typeof data['bucket'] === 'string' || data['bucket'] instanceof String)) {
            throw new Error("Expected the field `bucket` to be a primitive type in the JSON string but got " + data['bucket']);
        }

        return true;
    }


}



/**
 * @member {String} bucket
 */
V1BucketConnection.prototype['bucket'] = undefined;






export default V1BucketConnection;

