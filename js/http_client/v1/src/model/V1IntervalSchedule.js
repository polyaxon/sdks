/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1IntervalSchedule model module.
 * @module model/V1IntervalSchedule
 * @version 2.0.0-rc26
 */
class V1IntervalSchedule {
    /**
     * Constructs a new <code>V1IntervalSchedule</code>.
     * @alias module:model/V1IntervalSchedule
     */
    constructor() { 
        
        V1IntervalSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1IntervalSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1IntervalSchedule} obj Optional instance to populate.
     * @return {module:model/V1IntervalSchedule} The populated <code>V1IntervalSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1IntervalSchedule();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Date');
            }
            if (data.hasOwnProperty('endAt')) {
                obj['endAt'] = ApiClient.convertToType(data['endAt'], 'Date');
            }
            if (data.hasOwnProperty('maxRuns')) {
                obj['maxRuns'] = ApiClient.convertToType(data['maxRuns'], 'Number');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('dependsOnPast')) {
                obj['dependsOnPast'] = ApiClient.convertToType(data['dependsOnPast'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1IntervalSchedule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1IntervalSchedule</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'interval'
 */
V1IntervalSchedule.prototype['kind'] = 'interval';

/**
 * @member {Date} startAt
 */
V1IntervalSchedule.prototype['startAt'] = undefined;

/**
 * @member {Date} endAt
 */
V1IntervalSchedule.prototype['endAt'] = undefined;

/**
 * @member {Number} maxRuns
 */
V1IntervalSchedule.prototype['maxRuns'] = undefined;

/**
 * @member {Number} frequency
 */
V1IntervalSchedule.prototype['frequency'] = undefined;

/**
 * @member {Boolean} dependsOnPast
 */
V1IntervalSchedule.prototype['dependsOnPast'] = undefined;






export default V1IntervalSchedule;

