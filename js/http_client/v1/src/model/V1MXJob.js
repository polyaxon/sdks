/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MXJobMode from './MXJobMode';
import V1CleanPodPolicy from './V1CleanPodPolicy';
import V1KFReplica from './V1KFReplica';
import V1SchedulingPolicy from './V1SchedulingPolicy';

/**
 * The V1MXJob model module.
 * @module model/V1MXJob
 * @version 2.8.0
 */
class V1MXJob {
    /**
     * Constructs a new <code>V1MXJob</code>.
     * @alias module:model/V1MXJob
     */
    constructor() {

        V1MXJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1MXJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1MXJob} obj Optional instance to populate.
     * @return {module:model/V1MXJob} The populated <code>V1MXJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1MXJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('cleanPodPolicy')) {
                obj['cleanPodPolicy'] = V1CleanPodPolicy.constructFromObject(data['cleanPodPolicy']);
            }
            if (data.hasOwnProperty('schedulingPolicy')) {
                obj['schedulingPolicy'] = V1SchedulingPolicy.constructFromObject(data['schedulingPolicy']);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = MXJobMode.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('scheduler')) {
                obj['scheduler'] = V1KFReplica.constructFromObject(data['scheduler']);
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = V1KFReplica.constructFromObject(data['server']);
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1KFReplica.constructFromObject(data['worker']);
            }
            if (data.hasOwnProperty('tuner_tracker')) {
                obj['tuner_tracker'] = V1KFReplica.constructFromObject(data['tuner_tracker']);
            }
            if (data.hasOwnProperty('tuner_server')) {
                obj['tuner_server'] = V1KFReplica.constructFromObject(data['tuner_server']);
            }
            if (data.hasOwnProperty('tuner')) {
                obj['tuner'] = V1KFReplica.constructFromObject(data['tuner']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1MXJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1MXJob</code>.
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
        // validate the optional field `scheduler`
        if (data['scheduler']) { // data not null
          V1KFReplica.validateJSON(data['scheduler']);
        }
        // validate the optional field `server`
        if (data['server']) { // data not null
          V1KFReplica.validateJSON(data['server']);
        }
        // validate the optional field `worker`
        if (data['worker']) { // data not null
          V1KFReplica.validateJSON(data['worker']);
        }
        // validate the optional field `tuner_tracker`
        if (data['tuner_tracker']) { // data not null
          V1KFReplica.validateJSON(data['tuner_tracker']);
        }
        // validate the optional field `tuner_server`
        if (data['tuner_server']) { // data not null
          V1KFReplica.validateJSON(data['tuner_server']);
        }
        // validate the optional field `tuner`
        if (data['tuner']) { // data not null
          V1KFReplica.validateJSON(data['tuner']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'mxjob'
 */
V1MXJob.prototype['kind'] = 'mxjob';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1MXJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1SchedulingPolicy} schedulingPolicy
 */
V1MXJob.prototype['schedulingPolicy'] = undefined;

/**
 * @member {module:model/MXJobMode} mode
 */
V1MXJob.prototype['mode'] = undefined;

/**
 * @member {module:model/V1KFReplica} scheduler
 */
V1MXJob.prototype['scheduler'] = undefined;

/**
 * @member {module:model/V1KFReplica} server
 */
V1MXJob.prototype['server'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1MXJob.prototype['worker'] = undefined;

/**
 * @member {module:model/V1KFReplica} tuner_tracker
 */
V1MXJob.prototype['tuner_tracker'] = undefined;

/**
 * @member {module:model/V1KFReplica} tuner_server
 */
V1MXJob.prototype['tuner_server'] = undefined;

/**
 * @member {module:model/V1KFReplica} tuner
 */
V1MXJob.prototype['tuner'] = undefined;






export default V1MXJob;

