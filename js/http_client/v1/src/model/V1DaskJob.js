/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1DaskReplica from './V1DaskReplica';

/**
 * The V1DaskJob model module.
 * @module model/V1DaskJob
 * @version 2.1.0-rc16
 */
class V1DaskJob {
    /**
     * Constructs a new <code>V1DaskJob</code>.
     * @alias module:model/V1DaskJob
     */
    constructor() {

        V1DaskJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1DaskJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1DaskJob} obj Optional instance to populate.
     * @return {module:model/V1DaskJob} The populated <code>V1DaskJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DaskJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('job')) {
                obj['job'] = V1DaskReplica.constructFromObject(data['job']);
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1DaskReplica.constructFromObject(data['worker']);
            }
            if (data.hasOwnProperty('scheduler')) {
                obj['scheduler'] = V1DaskReplica.constructFromObject(data['scheduler']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1DaskJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1DaskJob</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `job`
        if (data['job']) { // data not null
          V1DaskReplica.validateJSON(data['job']);
        }
        // validate the optional field `worker`
        if (data['worker']) { // data not null
          V1DaskReplica.validateJSON(data['worker']);
        }
        // validate the optional field `scheduler`
        if (data['scheduler']) { // data not null
          V1DaskReplica.validateJSON(data['scheduler']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'daskjob'
 */
V1DaskJob.prototype['kind'] = 'daskjob';

/**
 * @member {module:model/V1DaskReplica} job
 */
V1DaskJob.prototype['job'] = undefined;

/**
 * @member {module:model/V1DaskReplica} worker
 */
V1DaskJob.prototype['worker'] = undefined;

/**
 * @member {module:model/V1DaskReplica} scheduler
 */
V1DaskJob.prototype['scheduler'] = undefined;






export default V1DaskJob;

