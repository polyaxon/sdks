// Copyright 2018-2022 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.21.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Bayes from './V1Bayes';
import V1GridSearch from './V1GridSearch';
import V1Hyperband from './V1Hyperband';
import V1Hyperopt from './V1Hyperopt';
import V1Iterative from './V1Iterative';
import V1Mapping from './V1Mapping';
import V1RandomSearch from './V1RandomSearch';

/**
 * The V1Matrix model module.
 * @module model/V1Matrix
 * @version 1.21.0
 */
class V1Matrix {
    /**
     * Constructs a new <code>V1Matrix</code>.
     * @alias module:model/V1Matrix
     */
    constructor() { 
        
        V1Matrix.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Matrix</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Matrix} obj Optional instance to populate.
     * @return {module:model/V1Matrix} The populated <code>V1Matrix</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Matrix();

            if (data.hasOwnProperty('random')) {
                obj['random'] = V1RandomSearch.constructFromObject(data['random']);
            }
            if (data.hasOwnProperty('grid')) {
                obj['grid'] = V1GridSearch.constructFromObject(data['grid']);
            }
            if (data.hasOwnProperty('hyperband')) {
                obj['hyperband'] = V1Hyperband.constructFromObject(data['hyperband']);
            }
            if (data.hasOwnProperty('bayes')) {
                obj['bayes'] = V1Bayes.constructFromObject(data['bayes']);
            }
            if (data.hasOwnProperty('hyperopt')) {
                obj['hyperopt'] = V1Hyperopt.constructFromObject(data['hyperopt']);
            }
            if (data.hasOwnProperty('iterative')) {
                obj['iterative'] = V1Iterative.constructFromObject(data['iterative']);
            }
            if (data.hasOwnProperty('mapping')) {
                obj['mapping'] = V1Mapping.constructFromObject(data['mapping']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1RandomSearch} random
 */
V1Matrix.prototype['random'] = undefined;

/**
 * @member {module:model/V1GridSearch} grid
 */
V1Matrix.prototype['grid'] = undefined;

/**
 * @member {module:model/V1Hyperband} hyperband
 */
V1Matrix.prototype['hyperband'] = undefined;

/**
 * @member {module:model/V1Bayes} bayes
 */
V1Matrix.prototype['bayes'] = undefined;

/**
 * @member {module:model/V1Hyperopt} hyperopt
 */
V1Matrix.prototype['hyperopt'] = undefined;

/**
 * @member {module:model/V1Iterative} iterative
 */
V1Matrix.prototype['iterative'] = undefined;

/**
 * @member {module:model/V1Mapping} mapping
 */
V1Matrix.prototype['mapping'] = undefined;






export default V1Matrix;

