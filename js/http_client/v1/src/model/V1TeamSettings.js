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
import V1SettingsCatalog from './V1SettingsCatalog';

/**
 * The V1TeamSettings model module.
 * @module model/V1TeamSettings
 * @version 2.8.0
 */
class V1TeamSettings {
    /**
     * Constructs a new <code>V1TeamSettings</code>.
     * @alias module:model/V1TeamSettings
     */
    constructor() {

        V1TeamSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1TeamSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1TeamSettings} obj Optional instance to populate.
     * @return {module:model/V1TeamSettings} The populated <code>V1TeamSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1TeamSettings();

            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [V1SettingsCatalog]);
            }
            if (data.hasOwnProperty('hubs')) {
                obj['hubs'] = ApiClient.convertToType(data['hubs'], [V1SettingsCatalog]);
            }
            if (data.hasOwnProperty('registries')) {
                obj['registries'] = ApiClient.convertToType(data['registries'], [V1SettingsCatalog]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1TeamSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1TeamSettings</code>.
     */
    static validateJSON(data) {
        if (data['projects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['projects'])) {
                throw new Error("Expected the field `projects` to be an array in the JSON data but got " + data['projects']);
            }
            // validate the optional field `projects` (array)
            for (const item of data['projects']) {
                V1SettingsCatalog.validateJSON(item);
            };
        }
        if (data['hubs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['hubs'])) {
                throw new Error("Expected the field `hubs` to be an array in the JSON data but got " + data['hubs']);
            }
            // validate the optional field `hubs` (array)
            for (const item of data['hubs']) {
                V1SettingsCatalog.validateJSON(item);
            };
        }
        if (data['registries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['registries'])) {
                throw new Error("Expected the field `registries` to be an array in the JSON data but got " + data['registries']);
            }
            // validate the optional field `registries` (array)
            for (const item of data['registries']) {
                V1SettingsCatalog.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1SettingsCatalog>} projects
 */
V1TeamSettings.prototype['projects'] = undefined;

/**
 * @member {Array.<module:model/V1SettingsCatalog>} hubs
 */
V1TeamSettings.prototype['hubs'] = undefined;

/**
 * @member {Array.<module:model/V1SettingsCatalog>} registries
 */
V1TeamSettings.prototype['registries'] = undefined;






export default V1TeamSettings;

