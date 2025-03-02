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
 * The V1RunEdgeLineage model module.
 * @module model/V1RunEdgeLineage
 * @version 2.7.0
 */
class V1RunEdgeLineage {
    /**
     * Constructs a new <code>V1RunEdgeLineage</code>.
     * @alias module:model/V1RunEdgeLineage
     */
    constructor() {

        V1RunEdgeLineage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1RunEdgeLineage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunEdgeLineage} obj Optional instance to populate.
     * @return {module:model/V1RunEdgeLineage} The populated <code>V1RunEdgeLineage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunEdgeLineage();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('is_upstream')) {
                obj['is_upstream'] = ApiClient.convertToType(data['is_upstream'], 'Boolean');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1RunEdgeLineage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1RunEdgeLineage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1RunEdgeLineage.prototype['uuid'] = undefined;

/**
 * @member {Boolean} is_upstream
 */
V1RunEdgeLineage.prototype['is_upstream'] = undefined;

/**
 * @member {Object} values
 */
V1RunEdgeLineage.prototype['values'] = undefined;






export default V1RunEdgeLineage;

