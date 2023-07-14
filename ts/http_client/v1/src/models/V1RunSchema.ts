/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import type { V1Dag } from './V1Dag';
import {
    V1DagFromJSON,
    V1DagFromJSONTyped,
    V1DagToJSON,
} from './V1Dag';
import type { V1DaskJob } from './V1DaskJob';
import {
    V1DaskJobFromJSON,
    V1DaskJobFromJSONTyped,
    V1DaskJobToJSON,
} from './V1DaskJob';
import type { V1Job } from './V1Job';
import {
    V1JobFromJSON,
    V1JobFromJSONTyped,
    V1JobToJSON,
} from './V1Job';
import type { V1MPIJob } from './V1MPIJob';
import {
    V1MPIJobFromJSON,
    V1MPIJobFromJSONTyped,
    V1MPIJobToJSON,
} from './V1MPIJob';
import type { V1MXJob } from './V1MXJob';
import {
    V1MXJobFromJSON,
    V1MXJobFromJSONTyped,
    V1MXJobToJSON,
} from './V1MXJob';
import type { V1PaddleJob } from './V1PaddleJob';
import {
    V1PaddleJobFromJSON,
    V1PaddleJobFromJSONTyped,
    V1PaddleJobToJSON,
} from './V1PaddleJob';
import type { V1PytorchJob } from './V1PytorchJob';
import {
    V1PytorchJobFromJSON,
    V1PytorchJobFromJSONTyped,
    V1PytorchJobToJSON,
} from './V1PytorchJob';
import type { V1RayJob } from './V1RayJob';
import {
    V1RayJobFromJSON,
    V1RayJobFromJSONTyped,
    V1RayJobToJSON,
} from './V1RayJob';
import type { V1Service } from './V1Service';
import {
    V1ServiceFromJSON,
    V1ServiceFromJSONTyped,
    V1ServiceToJSON,
} from './V1Service';
import type { V1SparkJob } from './V1SparkJob';
import {
    V1SparkJobFromJSON,
    V1SparkJobFromJSONTyped,
    V1SparkJobToJSON,
} from './V1SparkJob';
import type { V1TFJob } from './V1TFJob';
import {
    V1TFJobFromJSON,
    V1TFJobFromJSONTyped,
    V1TFJobToJSON,
} from './V1TFJob';
import type { V1XGBoostJob } from './V1XGBoostJob';
import {
    V1XGBoostJobFromJSON,
    V1XGBoostJobFromJSONTyped,
    V1XGBoostJobToJSON,
} from './V1XGBoostJob';

/**
 * 
 * @export
 * @interface V1RunSchema
 */
export interface V1RunSchema {
    /**
     * 
     * @type {V1Job}
     * @memberof V1RunSchema
     */
    job?: V1Job;
    /**
     * 
     * @type {V1Service}
     * @memberof V1RunSchema
     */
    service?: V1Service;
    /**
     * 
     * @type {V1Dag}
     * @memberof V1RunSchema
     */
    dag?: V1Dag;
    /**
     * 
     * @type {V1TFJob}
     * @memberof V1RunSchema
     */
    tfJob?: V1TFJob;
    /**
     * 
     * @type {V1PytorchJob}
     * @memberof V1RunSchema
     */
    pytorchJob?: V1PytorchJob;
    /**
     * 
     * @type {V1MPIJob}
     * @memberof V1RunSchema
     */
    mpiJob?: V1MPIJob;
    /**
     * 
     * @type {V1MXJob}
     * @memberof V1RunSchema
     */
    mxJob?: V1MXJob;
    /**
     * 
     * @type {V1XGBoostJob}
     * @memberof V1RunSchema
     */
    xgboostJob?: V1XGBoostJob;
    /**
     * 
     * @type {V1PaddleJob}
     * @memberof V1RunSchema
     */
    paddleJob?: V1PaddleJob;
    /**
     * 
     * @type {V1DaskJob}
     * @memberof V1RunSchema
     */
    daskJob?: V1DaskJob;
    /**
     * 
     * @type {V1SparkJob}
     * @memberof V1RunSchema
     */
    sparkJob?: V1SparkJob;
    /**
     * 
     * @type {V1RayJob}
     * @memberof V1RunSchema
     */
    rayJob?: V1RayJob;
}

/**
 * Check if a given object implements the V1RunSchema interface.
 */
export function instanceOfV1RunSchema(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RunSchemaFromJSON(json: any): V1RunSchema {
    return V1RunSchemaFromJSONTyped(json, false);
}

export function V1RunSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'job': !exists(json, 'job') ? undefined : V1JobFromJSON(json['job']),
        'service': !exists(json, 'service') ? undefined : V1ServiceFromJSON(json['service']),
        'dag': !exists(json, 'dag') ? undefined : V1DagFromJSON(json['dag']),
        'tfJob': !exists(json, 'tfJob') ? undefined : V1TFJobFromJSON(json['tfJob']),
        'pytorchJob': !exists(json, 'pytorchJob') ? undefined : V1PytorchJobFromJSON(json['pytorchJob']),
        'mpiJob': !exists(json, 'mpiJob') ? undefined : V1MPIJobFromJSON(json['mpiJob']),
        'mxJob': !exists(json, 'mxJob') ? undefined : V1MXJobFromJSON(json['mxJob']),
        'xgboostJob': !exists(json, 'xgboostJob') ? undefined : V1XGBoostJobFromJSON(json['xgboostJob']),
        'paddleJob': !exists(json, 'paddleJob') ? undefined : V1PaddleJobFromJSON(json['paddleJob']),
        'daskJob': !exists(json, 'daskJob') ? undefined : V1DaskJobFromJSON(json['daskJob']),
        'sparkJob': !exists(json, 'sparkJob') ? undefined : V1SparkJobFromJSON(json['sparkJob']),
        'rayJob': !exists(json, 'rayJob') ? undefined : V1RayJobFromJSON(json['rayJob']),
    };
}

export function V1RunSchemaToJSON(value?: V1RunSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'job': V1JobToJSON(value.job),
        'service': V1ServiceToJSON(value.service),
        'dag': V1DagToJSON(value.dag),
        'tfJob': V1TFJobToJSON(value.tfJob),
        'pytorchJob': V1PytorchJobToJSON(value.pytorchJob),
        'mpiJob': V1MPIJobToJSON(value.mpiJob),
        'mxJob': V1MXJobToJSON(value.mxJob),
        'xgboostJob': V1XGBoostJobToJSON(value.xgboostJob),
        'paddleJob': V1PaddleJobToJSON(value.paddleJob),
        'daskJob': V1DaskJobToJSON(value.daskJob),
        'sparkJob': V1SparkJobToJSON(value.sparkJob),
        'rayJob': V1RayJobToJSON(value.rayJob),
    };
}

