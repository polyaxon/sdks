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
 * The version of the OpenAPI document: 1.13.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1DagRef from './V1DagRef';
import V1HubRef from './V1HubRef';
import V1PathRef from './V1PathRef';
import V1UrlRef from './V1UrlRef';

/**
 * The V1Reference model module.
 * @module model/V1Reference
 * @version 1.13.0
 */
class V1Reference {
    /**
     * Constructs a new <code>V1Reference</code>.
     * @alias module:model/V1Reference
     */
    constructor() { 
        
        V1Reference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Reference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Reference} obj Optional instance to populate.
     * @return {module:model/V1Reference} The populated <code>V1Reference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Reference();

            if (data.hasOwnProperty('hubRef')) {
                obj['hubRef'] = V1HubRef.constructFromObject(data['hubRef']);
            }
            if (data.hasOwnProperty('dagRef')) {
                obj['dagRef'] = V1DagRef.constructFromObject(data['dagRef']);
            }
            if (data.hasOwnProperty('urlRef')) {
                obj['urlRef'] = V1UrlRef.constructFromObject(data['urlRef']);
            }
            if (data.hasOwnProperty('pathRef')) {
                obj['pathRef'] = V1PathRef.constructFromObject(data['pathRef']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1HubRef} hubRef
 */
V1Reference.prototype['hubRef'] = undefined;

/**
 * @member {module:model/V1DagRef} dagRef
 */
V1Reference.prototype['dagRef'] = undefined;

/**
 * @member {module:model/V1UrlRef} urlRef
 */
V1Reference.prototype['urlRef'] = undefined;

/**
 * @member {module:model/V1PathRef} pathRef
 */
V1Reference.prototype['pathRef'] = undefined;






export default V1Reference;

