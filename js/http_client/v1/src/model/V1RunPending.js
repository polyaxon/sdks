/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1RunPending.
* @enum {}
* @readonly
*/
export default class V1RunPending {
    
        /**
         * value: "approval"
         * @const
         */
        "approval" = "approval";

    
        /**
         * value: "upload"
         * @const
         */
        "upload" = "upload";

    
        /**
         * value: "cache"
         * @const
         */
        "cache" = "cache";

    
        /**
         * value: "build"
         * @const
         */
        "build" = "build";

    

    /**
    * Returns a <code>V1RunPending</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1RunPending} The enum <code>V1RunPending</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

