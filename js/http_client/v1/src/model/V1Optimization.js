/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.2-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1Optimization.
* @enum {}
* @readonly
*/
export default class V1Optimization {
    
        /**
         * value: "maximize"
         * @const
         */
        "maximize" = "maximize";

    
        /**
         * value: "minimize"
         * @const
         */
        "minimize" = "minimize";

    

    /**
    * Returns a <code>V1Optimization</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1Optimization} The enum <code>V1Optimization</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

