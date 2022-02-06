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
/**
* Enum class SearchView.
* @enum {}
* @readonly
*/
export default class SearchView {
    
        /**
         * value: "any"
         * @const
         */
        "any" = "any";

    
        /**
         * value: "runs"
         * @const
         */
        "runs" = "runs";

    
        /**
         * value: "analytics"
         * @const
         */
        "analytics" = "analytics";

    
        /**
         * value: "projects"
         * @const
         */
        "projects" = "projects";

    

    /**
    * Returns a <code>SearchView</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SearchView} The enum <code>SearchView</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

