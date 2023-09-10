/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc39
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1TriggerPolicy.
* @enum {}
* @readonly
*/
export default class V1TriggerPolicy {

        /**
         * value: "all_succeeded"
         * @const
         */
        "all_succeeded" = "all_succeeded";


        /**
         * value: "all_failed"
         * @const
         */
        "all_failed" = "all_failed";


        /**
         * value: "all_done"
         * @const
         */
        "all_done" = "all_done";


        /**
         * value: "one_succeeded"
         * @const
         */
        "one_succeeded" = "one_succeeded";


        /**
         * value: "one_failed"
         * @const
         */
        "one_failed" = "one_failed";


        /**
         * value: "one_done"
         * @const
         */
        "one_done" = "one_done";



    /**
    * Returns a <code>V1TriggerPolicy</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1TriggerPolicy} The enum <code>V1TriggerPolicy</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

