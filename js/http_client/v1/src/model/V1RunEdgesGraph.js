/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.2.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1RunEdgeLineage from './V1RunEdgeLineage';

/**
 * The V1RunEdgesGraph model module.
 * @module model/V1RunEdgesGraph
 * @version 2.2.0-rc0
 */
class V1RunEdgesGraph {
    /**
     * Constructs a new <code>V1RunEdgesGraph</code>.
     * @alias module:model/V1RunEdgesGraph
     */
    constructor() { 
        
        V1RunEdgesGraph.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RunEdgesGraph</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunEdgesGraph} obj Optional instance to populate.
     * @return {module:model/V1RunEdgesGraph} The populated <code>V1RunEdgesGraph</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunEdgesGraph();

            if (data.hasOwnProperty('edges')) {
                obj['edges'] = ApiClient.convertToType(data['edges'], [V1RunEdgeLineage]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1RunEdgesGraph</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1RunEdgesGraph</code>.
     */
    static validateJSON(data) {
        if (data['edges']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['edges'])) {
                throw new Error("Expected the field `edges` to be an array in the JSON data but got " + data['edges']);
            }
            // validate the optional field `edges` (array)
            for (const item of data['edges']) {
                V1RunEdgeLineage.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1RunEdgeLineage>} edges
 */
V1RunEdgesGraph.prototype['edges'] = undefined;






export default V1RunEdgesGraph;

