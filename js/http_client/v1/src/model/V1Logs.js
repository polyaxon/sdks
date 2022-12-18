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
import V1Log from './V1Log';

/**
 * The V1Logs model module.
 * @module model/V1Logs
 * @version 1.21.0
 */
class V1Logs {
    /**
     * Constructs a new <code>V1Logs</code>.
     * @alias module:model/V1Logs
     */
    constructor() { 
        
        V1Logs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Logs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Logs} obj Optional instance to populate.
     * @return {module:model/V1Logs} The populated <code>V1Logs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Logs();

            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [V1Log]);
            }
            if (data.hasOwnProperty('last_time')) {
                obj['last_time'] = ApiClient.convertToType(data['last_time'], 'Date');
            }
            if (data.hasOwnProperty('last_file')) {
                obj['last_file'] = ApiClient.convertToType(data['last_file'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/V1Log>} logs
 */
V1Logs.prototype['logs'] = undefined;

/**
 * @member {Date} last_time
 */
V1Logs.prototype['last_time'] = undefined;

/**
 * @member {String} last_file
 */
V1Logs.prototype['last_file'] = undefined;

/**
 * @member {Array.<String>} files
 */
V1Logs.prototype['files'] = undefined;






export default V1Logs;

