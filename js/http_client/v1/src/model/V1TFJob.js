/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1CleanPodPolicy from './V1CleanPodPolicy';
import V1KFReplica from './V1KFReplica';
import V1SchedulingPolicy from './V1SchedulingPolicy';

/**
 * The V1TFJob model module.
 * @module model/V1TFJob
 * @version 2.3.1
 */
class V1TFJob {
    /**
     * Constructs a new <code>V1TFJob</code>.
     * @alias module:model/V1TFJob
     */
    constructor() { 
        
        V1TFJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1TFJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1TFJob} obj Optional instance to populate.
     * @return {module:model/V1TFJob} The populated <code>V1TFJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1TFJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('cleanPodPolicy')) {
                obj['cleanPodPolicy'] = V1CleanPodPolicy.constructFromObject(data['cleanPodPolicy']);
            }
            if (data.hasOwnProperty('schedulingPolicy')) {
                obj['schedulingPolicy'] = V1SchedulingPolicy.constructFromObject(data['schedulingPolicy']);
            }
            if (data.hasOwnProperty('successPolicy')) {
                obj['successPolicy'] = ApiClient.convertToType(data['successPolicy'], 'String');
            }
            if (data.hasOwnProperty('enableDynamicWorker')) {
                obj['enableDynamicWorker'] = ApiClient.convertToType(data['enableDynamicWorker'], 'Boolean');
            }
            if (data.hasOwnProperty('chief')) {
                obj['chief'] = V1KFReplica.constructFromObject(data['chief']);
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1KFReplica.constructFromObject(data['worker']);
            }
            if (data.hasOwnProperty('ps')) {
                obj['ps'] = V1KFReplica.constructFromObject(data['ps']);
            }
            if (data.hasOwnProperty('evaluator')) {
                obj['evaluator'] = V1KFReplica.constructFromObject(data['evaluator']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1TFJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1TFJob</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `schedulingPolicy`
        if (data['schedulingPolicy']) { // data not null
          V1SchedulingPolicy.validateJSON(data['schedulingPolicy']);
        }
        // ensure the json data is a string
        if (data['successPolicy'] && !(typeof data['successPolicy'] === 'string' || data['successPolicy'] instanceof String)) {
            throw new Error("Expected the field `successPolicy` to be a primitive type in the JSON string but got " + data['successPolicy']);
        }
        // validate the optional field `chief`
        if (data['chief']) { // data not null
          V1KFReplica.validateJSON(data['chief']);
        }
        // validate the optional field `worker`
        if (data['worker']) { // data not null
          V1KFReplica.validateJSON(data['worker']);
        }
        // validate the optional field `ps`
        if (data['ps']) { // data not null
          V1KFReplica.validateJSON(data['ps']);
        }
        // validate the optional field `evaluator`
        if (data['evaluator']) { // data not null
          V1KFReplica.validateJSON(data['evaluator']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'tfjob'
 */
V1TFJob.prototype['kind'] = 'tfjob';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1TFJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1SchedulingPolicy} schedulingPolicy
 */
V1TFJob.prototype['schedulingPolicy'] = undefined;

/**
 * @member {String} successPolicy
 */
V1TFJob.prototype['successPolicy'] = undefined;

/**
 * @member {Boolean} enableDynamicWorker
 */
V1TFJob.prototype['enableDynamicWorker'] = undefined;

/**
 * @member {module:model/V1KFReplica} chief
 */
V1TFJob.prototype['chief'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1TFJob.prototype['worker'] = undefined;

/**
 * @member {module:model/V1KFReplica} ps
 */
V1TFJob.prototype['ps'] = undefined;

/**
 * @member {module:model/V1KFReplica} evaluator
 */
V1TFJob.prototype['evaluator'] = undefined;






export default V1TFJob;

