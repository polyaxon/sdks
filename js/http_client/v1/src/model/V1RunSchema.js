/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Dag from './V1Dag';
import V1Dask from './V1Dask';
import V1Flink from './V1Flink';
import V1Job from './V1Job';
import V1MPIJob from './V1MPIJob';
import V1MXJob from './V1MXJob';
import V1PaddleJob from './V1PaddleJob';
import V1PytorchJob from './V1PytorchJob';
import V1Ray from './V1Ray';
import V1Service from './V1Service';
import V1Spark from './V1Spark';
import V1TFJob from './V1TFJob';
import V1XGBoostJob from './V1XGBoostJob';

/**
 * The V1RunSchema model module.
 * @module model/V1RunSchema
 * @version 2.0.0-rc16
 */
class V1RunSchema {
    /**
     * Constructs a new <code>V1RunSchema</code>.
     * @alias module:model/V1RunSchema
     */
    constructor() {

        V1RunSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1RunSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunSchema} obj Optional instance to populate.
     * @return {module:model/V1RunSchema} The populated <code>V1RunSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunSchema();

            if (data.hasOwnProperty('job')) {
                obj['job'] = V1Job.constructFromObject(data['job']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = V1Service.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('dag')) {
                obj['dag'] = V1Dag.constructFromObject(data['dag']);
            }
            if (data.hasOwnProperty('tfJob')) {
                obj['tfJob'] = V1TFJob.constructFromObject(data['tfJob']);
            }
            if (data.hasOwnProperty('pytorchJob')) {
                obj['pytorchJob'] = V1PytorchJob.constructFromObject(data['pytorchJob']);
            }
            if (data.hasOwnProperty('mpiJob')) {
                obj['mpiJob'] = V1MPIJob.constructFromObject(data['mpiJob']);
            }
            if (data.hasOwnProperty('mxJob')) {
                obj['mxJob'] = V1MXJob.constructFromObject(data['mxJob']);
            }
            if (data.hasOwnProperty('xgboostJob')) {
                obj['xgboostJob'] = V1XGBoostJob.constructFromObject(data['xgboostJob']);
            }
            if (data.hasOwnProperty('paddleJob')) {
                obj['paddleJob'] = V1PaddleJob.constructFromObject(data['paddleJob']);
            }
            if (data.hasOwnProperty('dask')) {
                obj['dask'] = V1Dask.constructFromObject(data['dask']);
            }
            if (data.hasOwnProperty('spark')) {
                obj['spark'] = V1Spark.constructFromObject(data['spark']);
            }
            if (data.hasOwnProperty('flink')) {
                obj['flink'] = V1Flink.constructFromObject(data['flink']);
            }
            if (data.hasOwnProperty('ruy')) {
                obj['ruy'] = V1Ray.constructFromObject(data['ruy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1RunSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1RunSchema</code>.
     */
    static validateJSON(data) {
        // validate the optional field `job`
        if (data['job']) { // data not null
          V1Job.validateJSON(data['job']);
        }
        // validate the optional field `service`
        if (data['service']) { // data not null
          V1Service.validateJSON(data['service']);
        }
        // validate the optional field `dag`
        if (data['dag']) { // data not null
          V1Dag.validateJSON(data['dag']);
        }
        // validate the optional field `tfJob`
        if (data['tfJob']) { // data not null
          V1TFJob.validateJSON(data['tfJob']);
        }
        // validate the optional field `pytorchJob`
        if (data['pytorchJob']) { // data not null
          V1PytorchJob.validateJSON(data['pytorchJob']);
        }
        // validate the optional field `mpiJob`
        if (data['mpiJob']) { // data not null
          V1MPIJob.validateJSON(data['mpiJob']);
        }
        // validate the optional field `mxJob`
        if (data['mxJob']) { // data not null
          V1MXJob.validateJSON(data['mxJob']);
        }
        // validate the optional field `xgboostJob`
        if (data['xgboostJob']) { // data not null
          V1XGBoostJob.validateJSON(data['xgboostJob']);
        }
        // validate the optional field `paddleJob`
        if (data['paddleJob']) { // data not null
          V1PaddleJob.validateJSON(data['paddleJob']);
        }
        // validate the optional field `dask`
        if (data['dask']) { // data not null
          V1Dask.validateJSON(data['dask']);
        }
        // validate the optional field `spark`
        if (data['spark']) { // data not null
          V1Spark.validateJSON(data['spark']);
        }
        // validate the optional field `flink`
        if (data['flink']) { // data not null
          V1Flink.validateJSON(data['flink']);
        }
        // validate the optional field `ruy`
        if (data['ruy']) { // data not null
          V1Ray.validateJSON(data['ruy']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1Job} job
 */
V1RunSchema.prototype['job'] = undefined;

/**
 * @member {module:model/V1Service} service
 */
V1RunSchema.prototype['service'] = undefined;

/**
 * @member {module:model/V1Dag} dag
 */
V1RunSchema.prototype['dag'] = undefined;

/**
 * @member {module:model/V1TFJob} tfJob
 */
V1RunSchema.prototype['tfJob'] = undefined;

/**
 * @member {module:model/V1PytorchJob} pytorchJob
 */
V1RunSchema.prototype['pytorchJob'] = undefined;

/**
 * @member {module:model/V1MPIJob} mpiJob
 */
V1RunSchema.prototype['mpiJob'] = undefined;

/**
 * @member {module:model/V1MXJob} mxJob
 */
V1RunSchema.prototype['mxJob'] = undefined;

/**
 * @member {module:model/V1XGBoostJob} xgboostJob
 */
V1RunSchema.prototype['xgboostJob'] = undefined;

/**
 * @member {module:model/V1PaddleJob} paddleJob
 */
V1RunSchema.prototype['paddleJob'] = undefined;

/**
 * @member {module:model/V1Dask} dask
 */
V1RunSchema.prototype['dask'] = undefined;

/**
 * @member {module:model/V1Spark} spark
 */
V1RunSchema.prototype['spark'] = undefined;

/**
 * @member {module:model/V1Flink} flink
 */
V1RunSchema.prototype['flink'] = undefined;

/**
 * @member {module:model/V1Ray} ruy
 */
V1RunSchema.prototype['ruy'] = undefined;






export default V1RunSchema;

