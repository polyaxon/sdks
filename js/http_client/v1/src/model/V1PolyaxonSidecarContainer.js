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
 * The V1PolyaxonSidecarContainer model module.
 * @module model/V1PolyaxonSidecarContainer
 * @version 2.1.0-rc17
 */
class V1PolyaxonSidecarContainer {
    /**
     * Constructs a new <code>V1PolyaxonSidecarContainer</code>.
     * @alias module:model/V1PolyaxonSidecarContainer
     */
    constructor() {

        V1PolyaxonSidecarContainer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1PolyaxonSidecarContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PolyaxonSidecarContainer} obj Optional instance to populate.
     * @return {module:model/V1PolyaxonSidecarContainer} The populated <code>V1PolyaxonSidecarContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PolyaxonSidecarContainer();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageTag')) {
                obj['imageTag'] = ApiClient.convertToType(data['imageTag'], 'String');
            }
            if (data.hasOwnProperty('imagePullPolicy')) {
                obj['imagePullPolicy'] = ApiClient.convertToType(data['imagePullPolicy'], 'String');
            }
            if (data.hasOwnProperty('sleepInterval')) {
                obj['sleepInterval'] = ApiClient.convertToType(data['sleepInterval'], 'Number');
            }
            if (data.hasOwnProperty('syncInterval')) {
                obj['syncInterval'] = ApiClient.convertToType(data['syncInterval'], 'Number');
            }
            if (data.hasOwnProperty('monitorLogs')) {
                obj['monitorLogs'] = ApiClient.convertToType(data['monitorLogs'], 'Boolean');
            }
            if (data.hasOwnProperty('monitorSpec')) {
                obj['monitorSpec'] = ApiClient.convertToType(data['monitorSpec'], 'Boolean');
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1PolyaxonSidecarContainer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1PolyaxonSidecarContainer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['imageTag'] && !(typeof data['imageTag'] === 'string' || data['imageTag'] instanceof String)) {
            throw new Error("Expected the field `imageTag` to be a primitive type in the JSON string but got " + data['imageTag']);
        }
        // ensure the json data is a string
        if (data['imagePullPolicy'] && !(typeof data['imagePullPolicy'] === 'string' || data['imagePullPolicy'] instanceof String)) {
            throw new Error("Expected the field `imagePullPolicy` to be a primitive type in the JSON string but got " + data['imagePullPolicy']);
        }

        return true;
    }


}



/**
 * @member {String} image
 */
V1PolyaxonSidecarContainer.prototype['image'] = undefined;

/**
 * @member {String} imageTag
 */
V1PolyaxonSidecarContainer.prototype['imageTag'] = undefined;

/**
 * @member {String} imagePullPolicy
 */
V1PolyaxonSidecarContainer.prototype['imagePullPolicy'] = undefined;

/**
 * @member {Number} sleepInterval
 */
V1PolyaxonSidecarContainer.prototype['sleepInterval'] = undefined;

/**
 * @member {Number} syncInterval
 */
V1PolyaxonSidecarContainer.prototype['syncInterval'] = undefined;

/**
 * @member {Boolean} monitorLogs
 */
V1PolyaxonSidecarContainer.prototype['monitorLogs'] = undefined;

/**
 * @member {Boolean} monitorSpec
 */
V1PolyaxonSidecarContainer.prototype['monitorSpec'] = undefined;

/**
 * @member {Object} resources
 */
V1PolyaxonSidecarContainer.prototype['resources'] = undefined;






export default V1PolyaxonSidecarContainer;

