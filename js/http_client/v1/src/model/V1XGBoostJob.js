/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc10
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
 * The V1XGBoostJob model module.
 * @module model/V1XGBoostJob
 * @version 2.1.0-rc10
 */
class V1XGBoostJob {
    /**
     * Constructs a new <code>V1XGBoostJob</code>.
     * @alias module:model/V1XGBoostJob
     */
    constructor() {

        V1XGBoostJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1XGBoostJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1XGBoostJob} obj Optional instance to populate.
     * @return {module:model/V1XGBoostJob} The populated <code>V1XGBoostJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1XGBoostJob();

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
     * Validates the JSON data with respect to <code>V1XGBoostJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1XGBoostJob</code>.
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
 * @default 'xgboostjob'
 */
V1XGBoostJob.prototype['kind'] = 'xgboostjob';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1XGBoostJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1SchedulingPolicy} schedulingPolicy
 */
V1XGBoostJob.prototype['schedulingPolicy'] = undefined;

/**
 * @member {module:model/V1KFReplica} master
 */
V1XGBoostJob.prototype['master'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1XGBoostJob.prototype['worker'] = undefined;






export default V1XGBoostJob;

