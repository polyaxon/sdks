/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1GridSearch model module.
 * @module model/V1GridSearch
 * @version 2.5.0
 */
class V1GridSearch {
    /**
     * Constructs a new <code>V1GridSearch</code>.
     * @alias module:model/V1GridSearch
     */
    constructor() {

        V1GridSearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1GridSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GridSearch} obj Optional instance to populate.
     * @return {module:model/V1GridSearch} The populated <code>V1GridSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GridSearch();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': Object});
            }
            if (data.hasOwnProperty('numRuns')) {
                obj['numRuns'] = ApiClient.convertToType(data['numRuns'], 'Number');
            }
            if (data.hasOwnProperty('seed')) {
                obj['seed'] = ApiClient.convertToType(data['seed'], 'Number');
            }
            if (data.hasOwnProperty('concurrency')) {
                obj['concurrency'] = ApiClient.convertToType(data['concurrency'], 'Number');
            }
            if (data.hasOwnProperty('earlyStopping')) {
                obj['earlyStopping'] = ApiClient.convertToType(data['earlyStopping'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1GridSearch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1GridSearch</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
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
 * @default 'grid'
 */
V1GridSearch.prototype['kind'] = 'grid';

/**
 * @member {Object.<String, Object>} params
 */
V1GridSearch.prototype['params'] = undefined;

/**
 * @member {Number} numRuns
 */
V1GridSearch.prototype['numRuns'] = undefined;

/**
 * @member {Number} seed
 */
V1GridSearch.prototype['seed'] = undefined;

/**
 * @member {Number} concurrency
 */
V1GridSearch.prototype['concurrency'] = undefined;

/**
 * @member {Array.<Object>} earlyStopping
 */
V1GridSearch.prototype['earlyStopping'] = undefined;






export default V1GridSearch;

