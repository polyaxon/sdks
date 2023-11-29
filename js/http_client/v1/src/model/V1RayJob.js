/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1RayReplica from './V1RayReplica';

/**
 * The V1RayJob model module.
 * @module model/V1RayJob
 * @version 2.0.3
 */
class V1RayJob {
    /**
     * Constructs a new <code>V1RayJob</code>.
     * @alias module:model/V1RayJob
     */
    constructor() { 
        
        V1RayJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RayJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RayJob} obj Optional instance to populate.
     * @return {module:model/V1RayJob} The populated <code>V1RayJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RayJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('entrypoint')) {
                obj['entrypoint'] = ApiClient.convertToType(data['entrypoint'], 'String');
            }
            if (data.hasOwnProperty('runtimeEnv')) {
                obj['runtimeEnv'] = ApiClient.convertToType(data['runtimeEnv'], Object);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('rayVersion')) {
                obj['rayVersion'] = ApiClient.convertToType(data['rayVersion'], 'String');
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = V1RayReplica.constructFromObject(data['head']);
            }
            if (data.hasOwnProperty('workers')) {
                obj['workers'] = ApiClient.convertToType(data['workers'], [V1RayReplica]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1RayJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1RayJob</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['entrypoint'] && !(typeof data['entrypoint'] === 'string' || data['entrypoint'] instanceof String)) {
            throw new Error("Expected the field `entrypoint` to be a primitive type in the JSON string but got " + data['entrypoint']);
        }
        // ensure the json data is a string
        if (data['rayVersion'] && !(typeof data['rayVersion'] === 'string' || data['rayVersion'] instanceof String)) {
            throw new Error("Expected the field `rayVersion` to be a primitive type in the JSON string but got " + data['rayVersion']);
        }
        // validate the optional field `head`
        if (data['head']) { // data not null
          V1RayReplica.validateJSON(data['head']);
        }
        if (data['workers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['workers'])) {
                throw new Error("Expected the field `workers` to be an array in the JSON data but got " + data['workers']);
            }
            // validate the optional field `workers` (array)
            for (const item of data['workers']) {
                V1RayReplica.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'rayjob'
 */
V1RayJob.prototype['kind'] = 'rayjob';

/**
 * @member {String} entrypoint
 */
V1RayJob.prototype['entrypoint'] = undefined;

/**
 * @member {Object} runtimeEnv
 */
V1RayJob.prototype['runtimeEnv'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
V1RayJob.prototype['metadata'] = undefined;

/**
 * @member {String} rayVersion
 */
V1RayJob.prototype['rayVersion'] = undefined;

/**
 * @member {module:model/V1RayReplica} head
 */
V1RayJob.prototype['head'] = undefined;

/**
 * @member {Array.<module:model/V1RayReplica>} workers
 */
V1RayJob.prototype['workers'] = undefined;






export default V1RayJob;

