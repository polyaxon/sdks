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
import V1AnalyticsSpec from './V1AnalyticsSpec';
import V1DashboardSpec from './V1DashboardSpec';

/**
 * The V1SearchSpec model module.
 * @module model/V1SearchSpec
 * @version 1.21.0
 */
class V1SearchSpec {
    /**
     * Constructs a new <code>V1SearchSpec</code>.
     * @alias module:model/V1SearchSpec
     */
    constructor() { 
        
        V1SearchSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1SearchSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1SearchSpec} obj Optional instance to populate.
     * @return {module:model/V1SearchSpec} The populated <code>V1SearchSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SearchSpec();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('groupby')) {
                obj['groupby'] = ApiClient.convertToType(data['groupby'], 'String');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], 'String');
            }
            if (data.hasOwnProperty('layout')) {
                obj['layout'] = ApiClient.convertToType(data['layout'], 'String');
            }
            if (data.hasOwnProperty('sections')) {
                obj['sections'] = ApiClient.convertToType(data['sections'], 'String');
            }
            if (data.hasOwnProperty('compares')) {
                obj['compares'] = ApiClient.convertToType(data['compares'], 'String');
            }
            if (data.hasOwnProperty('heat')) {
                obj['heat'] = ApiClient.convertToType(data['heat'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = V1DashboardSpec.constructFromObject(data['events']);
            }
            if (data.hasOwnProperty('histograms')) {
                obj['histograms'] = ApiClient.convertToType(data['histograms'], Object);
            }
            if (data.hasOwnProperty('trends')) {
                obj['trends'] = ApiClient.convertToType(data['trends'], Object);
            }
            if (data.hasOwnProperty('analytics')) {
                obj['analytics'] = V1AnalyticsSpec.constructFromObject(data['analytics']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} query
 */
V1SearchSpec.prototype['query'] = undefined;

/**
 * @member {String} sort
 */
V1SearchSpec.prototype['sort'] = undefined;

/**
 * @member {Number} limit
 */
V1SearchSpec.prototype['limit'] = undefined;

/**
 * @member {Number} offset
 */
V1SearchSpec.prototype['offset'] = undefined;

/**
 * @member {String} groupby
 */
V1SearchSpec.prototype['groupby'] = undefined;

/**
 * @member {String} columns
 */
V1SearchSpec.prototype['columns'] = undefined;

/**
 * @member {String} layout
 */
V1SearchSpec.prototype['layout'] = undefined;

/**
 * @member {String} sections
 */
V1SearchSpec.prototype['sections'] = undefined;

/**
 * @member {String} compares
 */
V1SearchSpec.prototype['compares'] = undefined;

/**
 * @member {String} heat
 */
V1SearchSpec.prototype['heat'] = undefined;

/**
 * @member {module:model/V1DashboardSpec} events
 */
V1SearchSpec.prototype['events'] = undefined;

/**
 * @member {Object} histograms
 */
V1SearchSpec.prototype['histograms'] = undefined;

/**
 * @member {Object} trends
 */
V1SearchSpec.prototype['trends'] = undefined;

/**
 * @member {module:model/V1AnalyticsSpec} analytics
 */
V1SearchSpec.prototype['analytics'] = undefined;






export default V1SearchSpec;

