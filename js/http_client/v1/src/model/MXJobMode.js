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
* Enum class MXJobMode.
* @enum {}
* @readonly
*/
export default class MXJobMode {

        /**
         * value: "MXTrain"
         * @const
         */
        "MXTrain" = "MXTrain";


        /**
         * value: "MXTune"
         * @const
         */
        "MXTune" = "MXTune";



    /**
    * Returns a <code>MXJobMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MXJobMode} The enum <code>MXJobMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

