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
 * The V1PresetSettings model module.
 * @module model/V1PresetSettings
 * @version 2.8.0
 */
class V1PresetSettings {
    /**
     * Constructs a new <code>V1PresetSettings</code>.
     * @alias module:model/V1PresetSettings
     */
    constructor() {

        V1PresetSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1PresetSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PresetSettings} obj Optional instance to populate.
     * @return {module:model/V1PresetSettings} The populated <code>V1PresetSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PresetSettings();

            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [V1SettingsCatalog]);
            }
            if (data.hasOwnProperty('runs')) {
                obj['runs'] = ApiClient.convertToType(data['runs'], [V1SettingsCatalog]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1PresetSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1PresetSettings</code>.
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
        if (data['runs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['runs'])) {
                throw new Error("Expected the field `runs` to be an array in the JSON data but got " + data['runs']);
            }
            // validate the optional field `runs` (array)
            for (const item of data['runs']) {
                V1SettingsCatalog.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1SettingsCatalog>} projects
 */
V1PresetSettings.prototype['projects'] = undefined;

/**
 * @member {Array.<module:model/V1SettingsCatalog>} runs
 */
V1PresetSettings.prototype['runs'] = undefined;






export default V1PresetSettings;

