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
 * The V1CronSchedule model module.
 * @module model/V1CronSchedule
 * @version 2.0.0-rc26
 */
class V1CronSchedule {
    /**
     * Constructs a new <code>V1CronSchedule</code>.
     * @alias module:model/V1CronSchedule
     */
    constructor() { 
        
        V1CronSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1CronSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1CronSchedule} obj Optional instance to populate.
     * @return {module:model/V1CronSchedule} The populated <code>V1CronSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1CronSchedule();

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
            if (data.hasOwnProperty('cron')) {
                obj['cron'] = ApiClient.convertToType(data['cron'], 'String');
            }
            if (data.hasOwnProperty('dependsOnPast')) {
                obj['dependsOnPast'] = ApiClient.convertToType(data['dependsOnPast'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1CronSchedule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1CronSchedule</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['cron'] && !(typeof data['cron'] === 'string' || data['cron'] instanceof String)) {
            throw new Error("Expected the field `cron` to be a primitive type in the JSON string but got " + data['cron']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'cron'
 */
V1CronSchedule.prototype['kind'] = 'cron';

/**
 * @member {Date} startAt
 */
V1CronSchedule.prototype['startAt'] = undefined;

/**
 * @member {Date} endAt
 */
V1CronSchedule.prototype['endAt'] = undefined;

/**
 * @member {Number} maxRuns
 */
V1CronSchedule.prototype['maxRuns'] = undefined;

/**
 * @member {String} cron
 */
V1CronSchedule.prototype['cron'] = undefined;

/**
 * @member {Boolean} dependsOnPast
 */
V1CronSchedule.prototype['dependsOnPast'] = undefined;






export default V1CronSchedule;

