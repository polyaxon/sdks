// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.15.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Cache from './V1Cache';
import V1Param from './V1Param';
import V1PatchStrategy from './V1PatchStrategy';

/**
 * The V1Build model module.
 * @module model/V1Build
 * @version 1.15.0
 */
class V1Build {
    /**
     * Constructs a new <code>V1Build</code>.
     * @alias module:model/V1Build
     */
    constructor() { 
        
        V1Build.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Build</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Build} obj Optional instance to populate.
     * @return {module:model/V1Build} The populated <code>V1Build</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Build();

            if (data.hasOwnProperty('hubRef')) {
                obj['hubRef'] = ApiClient.convertToType(data['hubRef'], 'String');
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = V1Cache.constructFromObject(data['cache']);
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1Param});
            }
            if (data.hasOwnProperty('runPatch')) {
                obj['runPatch'] = ApiClient.convertToType(data['runPatch'], Object);
            }
            if (data.hasOwnProperty('patchStrategy')) {
                obj['patchStrategy'] = V1PatchStrategy.constructFromObject(data['patchStrategy']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} hubRef
 */
V1Build.prototype['hubRef'] = undefined;

/**
 * @member {String} connection
 */
V1Build.prototype['connection'] = undefined;

/**
 * @member {String} queue
 */
V1Build.prototype['queue'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1Build.prototype['presets'] = undefined;

/**
 * @member {module:model/V1Cache} cache
 */
V1Build.prototype['cache'] = undefined;

/**
 * @member {Object.<String, module:model/V1Param>} params
 */
V1Build.prototype['params'] = undefined;

/**
 * @member {Object} runPatch
 */
V1Build.prototype['runPatch'] = undefined;

/**
 * @member {module:model/V1PatchStrategy} patchStrategy
 */
V1Build.prototype['patchStrategy'] = undefined;






export default V1Build;

