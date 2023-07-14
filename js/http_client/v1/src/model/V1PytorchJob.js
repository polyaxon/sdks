/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
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
 * The V1PytorchJob model module.
 * @module model/V1PytorchJob
 * @version 2.0.0-rc26
 */
class V1PytorchJob {
    /**
     * Constructs a new <code>V1PytorchJob</code>.
     * @alias module:model/V1PytorchJob
     */
    constructor() { 
        
        V1PytorchJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PytorchJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PytorchJob} obj Optional instance to populate.
     * @return {module:model/V1PytorchJob} The populated <code>V1PytorchJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PytorchJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('cleanPodPolicy')) {
                obj['cleanPodPolicy'] = V1CleanPodPolicy.constructFromObject(data['cleanPodPolicy']);
            }
            if (data.hasOwnProperty('schedulingPolicy')) {
                obj['schedulingPolicy'] = V1SchedulingPolicy.constructFromObject(data['schedulingPolicy']);
            }
            if (data.hasOwnProperty('master')) {
                obj['master'] = V1KFReplica.constructFromObject(data['master']);
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1KFReplica.constructFromObject(data['worker']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1PytorchJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1PytorchJob</code>.
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
        // validate the optional field `master`
        if (data['master']) { // data not null
          V1KFReplica.validateJSON(data['master']);
        }
        // validate the optional field `worker`
        if (data['worker']) { // data not null
          V1KFReplica.validateJSON(data['worker']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'pytorchjob'
 */
V1PytorchJob.prototype['kind'] = 'pytorchjob';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1PytorchJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1SchedulingPolicy} schedulingPolicy
 */
V1PytorchJob.prototype['schedulingPolicy'] = undefined;

/**
 * @member {module:model/V1KFReplica} master
 */
V1PytorchJob.prototype['master'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1PytorchJob.prototype['worker'] = undefined;






export default V1PytorchJob;

