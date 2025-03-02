/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.7.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1CronSchedule from './V1CronSchedule';
import V1DateTimeSchedule from './V1DateTimeSchedule';
import V1IntervalSchedule from './V1IntervalSchedule';

/**
 * The V1Schedule model module.
 * @module model/V1Schedule
 * @version 2.7.0-rc0
 */
class V1Schedule {
    /**
     * Constructs a new <code>V1Schedule</code>.
     * @alias module:model/V1Schedule
     */
    constructor() { 
        
        V1Schedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Schedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Schedule} obj Optional instance to populate.
     * @return {module:model/V1Schedule} The populated <code>V1Schedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Schedule();

            if (data.hasOwnProperty('cron')) {
                obj['cron'] = V1CronSchedule.constructFromObject(data['cron']);
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = V1DateTimeSchedule.constructFromObject(data['datetime']);
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = V1IntervalSchedule.constructFromObject(data['interval']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Schedule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Schedule</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cron`
        if (data['cron']) { // data not null
          V1CronSchedule.validateJSON(data['cron']);
        }
        // validate the optional field `datetime`
        if (data['datetime']) { // data not null
          V1DateTimeSchedule.validateJSON(data['datetime']);
        }
        // validate the optional field `interval`
        if (data['interval']) { // data not null
          V1IntervalSchedule.validateJSON(data['interval']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1CronSchedule} cron
 */
V1Schedule.prototype['cron'] = undefined;

/**
 * @member {module:model/V1DateTimeSchedule} datetime
 */
V1Schedule.prototype['datetime'] = undefined;

/**
 * @member {module:model/V1IntervalSchedule} interval
 */
V1Schedule.prototype['interval'] = undefined;






export default V1Schedule;

