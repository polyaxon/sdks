/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ArtifactsType from './V1ArtifactsType';
import V1DockerfileType from './V1DockerfileType';
import V1FileType from './V1FileType';
import V1GitType from './V1GitType';
import V1TensorboardType from './V1TensorboardType';

/**
 * The V1Init model module.
 * @module model/V1Init
 * @version 2.0.0-rc51
 */
class V1Init {
    /**
     * Constructs a new <code>V1Init</code>.
     * @alias module:model/V1Init
     */
    constructor() {

        V1Init.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Init</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Init} obj Optional instance to populate.
     * @return {module:model/V1Init} The populated <code>V1Init</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Init();

            if (data.hasOwnProperty('artifacts')) {
                obj['artifacts'] = V1ArtifactsType.constructFromObject(data['artifacts']);
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], [Object]);
            }
            if (data.hasOwnProperty('git')) {
                obj['git'] = V1GitType.constructFromObject(data['git']);
            }
            if (data.hasOwnProperty('dockerfile')) {
                obj['dockerfile'] = V1DockerfileType.constructFromObject(data['dockerfile']);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = V1FileType.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('tensorboard')) {
                obj['tensorboard'] = V1TensorboardType.constructFromObject(data['tensorboard']);
            }
            if (data.hasOwnProperty('lineageRef')) {
                obj['lineageRef'] = ApiClient.convertToType(data['lineageRef'], 'String');
            }
            if (data.hasOwnProperty('artifactRef')) {
                obj['artifactRef'] = ApiClient.convertToType(data['artifactRef'], 'String');
            }
            if (data.hasOwnProperty('modelRef')) {
                obj['modelRef'] = ApiClient.convertToType(data['modelRef'], 'String');
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Init</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Init</code>.
     */
    static validateJSON(data) {
        // validate the optional field `artifacts`
        if (data['artifacts']) { // data not null
          V1ArtifactsType.validateJSON(data['artifacts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['paths'])) {
            throw new Error("Expected the field `paths` to be an array in the JSON data but got " + data['paths']);
        }
        // validate the optional field `git`
        if (data['git']) { // data not null
          V1GitType.validateJSON(data['git']);
        }
        // validate the optional field `dockerfile`
        if (data['dockerfile']) { // data not null
          V1DockerfileType.validateJSON(data['dockerfile']);
        }
        // validate the optional field `file`
        if (data['file']) { // data not null
          V1FileType.validateJSON(data['file']);
        }
        // validate the optional field `tensorboard`
        if (data['tensorboard']) { // data not null
          V1TensorboardType.validateJSON(data['tensorboard']);
        }
        // ensure the json data is a string
        if (data['lineageRef'] && !(typeof data['lineageRef'] === 'string' || data['lineageRef'] instanceof String)) {
            throw new Error("Expected the field `lineageRef` to be a primitive type in the JSON string but got " + data['lineageRef']);
        }
        // ensure the json data is a string
        if (data['artifactRef'] && !(typeof data['artifactRef'] === 'string' || data['artifactRef'] instanceof String)) {
            throw new Error("Expected the field `artifactRef` to be a primitive type in the JSON string but got " + data['artifactRef']);
        }
        // ensure the json data is a string
        if (data['modelRef'] && !(typeof data['modelRef'] === 'string' || data['modelRef'] instanceof String)) {
            throw new Error("Expected the field `modelRef` to be a primitive type in the JSON string but got " + data['modelRef']);
        }
        // ensure the json data is a string
        if (data['connection'] && !(typeof data['connection'] === 'string' || data['connection'] instanceof String)) {
            throw new Error("Expected the field `connection` to be a primitive type in the JSON string but got " + data['connection']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1ArtifactsType} artifacts
 */
V1Init.prototype['artifacts'] = undefined;

/**
 * @member {Array.<Object>} paths
 */
V1Init.prototype['paths'] = undefined;

/**
 * @member {module:model/V1GitType} git
 */
V1Init.prototype['git'] = undefined;

/**
 * @member {module:model/V1DockerfileType} dockerfile
 */
V1Init.prototype['dockerfile'] = undefined;

/**
 * @member {module:model/V1FileType} file
 */
V1Init.prototype['file'] = undefined;

/**
 * @member {module:model/V1TensorboardType} tensorboard
 */
V1Init.prototype['tensorboard'] = undefined;

/**
 * @member {String} lineageRef
 */
V1Init.prototype['lineageRef'] = undefined;

/**
 * @member {String} artifactRef
 */
V1Init.prototype['artifactRef'] = undefined;

/**
 * @member {String} modelRef
 */
V1Init.prototype['modelRef'] = undefined;

/**
 * @member {String} connection
 */
V1Init.prototype['connection'] = undefined;

/**
 * @member {String} path
 */
V1Init.prototype['path'] = undefined;

/**
 * @member {Object} container
 */
V1Init.prototype['container'] = undefined;






export default V1Init;

