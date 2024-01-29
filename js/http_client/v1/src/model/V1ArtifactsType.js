/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1ArtifactsType model module.
 * @module model/V1ArtifactsType
 * @version 2.1.0-rc17
 */
class V1ArtifactsType {
    /**
     * Constructs a new <code>V1ArtifactsType</code>.
     * @alias module:model/V1ArtifactsType
     */
    constructor() {

        V1ArtifactsType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ArtifactsType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ArtifactsType} obj Optional instance to populate.
     * @return {module:model/V1ArtifactsType} The populated <code>V1ArtifactsType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ArtifactsType();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [Object]);
            }
            if (data.hasOwnProperty('dirs')) {
                obj['dirs'] = ApiClient.convertToType(data['dirs'], [Object]);
            }
            if (data.hasOwnProperty('workers')) {
                obj['workers'] = ApiClient.convertToType(data['workers'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ArtifactsType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ArtifactsType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['files'])) {
            throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dirs'])) {
            throw new Error("Expected the field `dirs` to be an array in the JSON data but got " + data['dirs']);
        }

        return true;
    }


}



/**
 * @member {Array.<Object>} files
 */
V1ArtifactsType.prototype['files'] = undefined;

/**
 * @member {Array.<Object>} dirs
 */
V1ArtifactsType.prototype['dirs'] = undefined;

/**
 * @member {Number} workers
 */
V1ArtifactsType.prototype['workers'] = undefined;






export default V1ArtifactsType;

