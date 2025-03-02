/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1PaddleElasticPolic model module.
 * @module model/V1PaddleElasticPolic
 * @version 2.7.0
 */
class V1PaddleElasticPolic {
    /**
     * Constructs a new <code>V1PaddleElasticPolic</code>.
     * @alias module:model/V1PaddleElasticPolic
     */
    constructor() {

        V1PaddleElasticPolic.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1PaddleElasticPolic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PaddleElasticPolic} obj Optional instance to populate.
     * @return {module:model/V1PaddleElasticPolic} The populated <code>V1PaddleElasticPolic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PaddleElasticPolic();

            if (data.hasOwnProperty('minReplicas')) {
                obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Number');
            }
            if (data.hasOwnProperty('maxReplicas')) {
                obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Number');
            }
            if (data.hasOwnProperty('maxRestarts')) {
                obj['maxRestarts'] = ApiClient.convertToType(data['maxRestarts'], 'Number');
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1PaddleElasticPolic</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1PaddleElasticPolic</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['metrics'])) {
            throw new Error("Expected the field `metrics` to be an array in the JSON data but got " + data['metrics']);
        }

        return true;
    }


}



/**
 * @member {Number} minReplicas
 */
V1PaddleElasticPolic.prototype['minReplicas'] = undefined;

/**
 * @member {Number} maxReplicas
 */
V1PaddleElasticPolic.prototype['maxReplicas'] = undefined;

/**
 * @member {Number} maxRestarts
 */
V1PaddleElasticPolic.prototype['maxRestarts'] = undefined;

/**
 * @member {Array.<Object>} metrics
 */
V1PaddleElasticPolic.prototype['metrics'] = undefined;






export default V1PaddleElasticPolic;

