/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AgentStateResponseAgentState model module.
 * @module model/AgentStateResponseAgentState
 * @version 2.8.0
 */
class AgentStateResponseAgentState {
    /**
     * Constructs a new <code>AgentStateResponseAgentState</code>.
     * @alias module:model/AgentStateResponseAgentState
     */
    constructor() {

        AgentStateResponseAgentState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>AgentStateResponseAgentState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentStateResponseAgentState} obj Optional instance to populate.
     * @return {module:model/AgentStateResponseAgentState} The populated <code>AgentStateResponseAgentState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentStateResponseAgentState();

            if (data.hasOwnProperty('schedules')) {
                obj['schedules'] = ApiClient.convertToType(data['schedules'], Object);
            }
            if (data.hasOwnProperty('hooks')) {
                obj['hooks'] = ApiClient.convertToType(data['hooks'], Object);
            }
            if (data.hasOwnProperty('watchdogs')) {
                obj['watchdogs'] = ApiClient.convertToType(data['watchdogs'], Object);
            }
            if (data.hasOwnProperty('tuners')) {
                obj['tuners'] = ApiClient.convertToType(data['tuners'], Object);
            }
            if (data.hasOwnProperty('queued')) {
                obj['queued'] = ApiClient.convertToType(data['queued'], Object);
            }
            if (data.hasOwnProperty('stopping')) {
                obj['stopping'] = ApiClient.convertToType(data['stopping'], Object);
            }
            if (data.hasOwnProperty('deleting')) {
                obj['deleting'] = ApiClient.convertToType(data['deleting'], Object);
            }
            if (data.hasOwnProperty('apply')) {
                obj['apply'] = ApiClient.convertToType(data['apply'], Object);
            }
            if (data.hasOwnProperty('checks')) {
                obj['checks'] = ApiClient.convertToType(data['checks'], Object);
            }
            if (data.hasOwnProperty('full')) {
                obj['full'] = ApiClient.convertToType(data['full'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentStateResponseAgentState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentStateResponseAgentState</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} schedules
 */
AgentStateResponseAgentState.prototype['schedules'] = undefined;

/**
 * @member {Object} hooks
 */
AgentStateResponseAgentState.prototype['hooks'] = undefined;

/**
 * @member {Object} watchdogs
 */
AgentStateResponseAgentState.prototype['watchdogs'] = undefined;

/**
 * @member {Object} tuners
 */
AgentStateResponseAgentState.prototype['tuners'] = undefined;

/**
 * @member {Object} queued
 */
AgentStateResponseAgentState.prototype['queued'] = undefined;

/**
 * @member {Object} stopping
 */
AgentStateResponseAgentState.prototype['stopping'] = undefined;

/**
 * @member {Object} deleting
 */
AgentStateResponseAgentState.prototype['deleting'] = undefined;

/**
 * @member {Object} apply
 */
AgentStateResponseAgentState.prototype['apply'] = undefined;

/**
 * @member {Object} checks
 */
AgentStateResponseAgentState.prototype['checks'] = undefined;

/**
 * @member {Boolean} full
 */
AgentStateResponseAgentState.prototype['full'] = undefined;






export default AgentStateResponseAgentState;

