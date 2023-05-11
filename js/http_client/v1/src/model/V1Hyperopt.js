// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc14
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1HyperoptAlgorithms from './V1HyperoptAlgorithms';
import V1OptimizationMetric from './V1OptimizationMetric';
import V1Tuner from './V1Tuner';

/**
 * The V1Hyperopt model module.
 * @module model/V1Hyperopt
 * @version 2.0.0-rc14
 */
class V1Hyperopt {
    /**
     * Constructs a new <code>V1Hyperopt</code>.
     * @alias module:model/V1Hyperopt
     */
    constructor() {

        V1Hyperopt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Hyperopt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Hyperopt} obj Optional instance to populate.
     * @return {module:model/V1Hyperopt} The populated <code>V1Hyperopt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Hyperopt();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('algorithm')) {
                obj['algorithm'] = V1HyperoptAlgorithms.constructFromObject(data['algorithm']);
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': Object});
            }
            if (data.hasOwnProperty('numRuns')) {
                obj['numRuns'] = ApiClient.convertToType(data['numRuns'], 'Number');
            }
            if (data.hasOwnProperty('maxIterations')) {
                obj['maxIterations'] = ApiClient.convertToType(data['maxIterations'], 'Number');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = V1OptimizationMetric.constructFromObject(data['metric']);
            }
            if (data.hasOwnProperty('seed')) {
                obj['seed'] = ApiClient.convertToType(data['seed'], 'Number');
            }
            if (data.hasOwnProperty('concurrency')) {
                obj['concurrency'] = ApiClient.convertToType(data['concurrency'], 'Number');
            }
            if (data.hasOwnProperty('tuner')) {
                obj['tuner'] = V1Tuner.constructFromObject(data['tuner']);
            }
            if (data.hasOwnProperty('earlyStopping')) {
                obj['earlyStopping'] = ApiClient.convertToType(data['earlyStopping'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Hyperopt</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Hyperopt</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `metric`
        if (data['metric']) { // data not null
          V1OptimizationMetric.validateJSON(data['metric']);
        }
        // validate the optional field `tuner`
        if (data['tuner']) { // data not null
          V1Tuner.validateJSON(data['tuner']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['earlyStopping'])) {
            throw new Error("Expected the field `earlyStopping` to be an array in the JSON data but got " + data['earlyStopping']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'hyperopt'
 */
V1Hyperopt.prototype['kind'] = 'hyperopt';

/**
 * @member {module:model/V1HyperoptAlgorithms} algorithm
 */
V1Hyperopt.prototype['algorithm'] = undefined;

/**
 * @member {Object.<String, Object>} params
 */
V1Hyperopt.prototype['params'] = undefined;

/**
 * @member {Number} numRuns
 */
V1Hyperopt.prototype['numRuns'] = undefined;

/**
 * @member {Number} maxIterations
 */
V1Hyperopt.prototype['maxIterations'] = undefined;

/**
 * @member {module:model/V1OptimizationMetric} metric
 */
V1Hyperopt.prototype['metric'] = undefined;

/**
 * @member {Number} seed
 */
V1Hyperopt.prototype['seed'] = undefined;

/**
 * @member {Number} concurrency
 */
V1Hyperopt.prototype['concurrency'] = undefined;

/**
 * @member {module:model/V1Tuner} tuner
 */
V1Hyperopt.prototype['tuner'] = undefined;

/**
 * @member {Array.<Object>} earlyStopping
 */
V1Hyperopt.prototype['earlyStopping'] = undefined;






export default V1Hyperopt;

