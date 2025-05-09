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
* Enum class V1HyperoptAlgorithms.
* @enum {}
* @readonly
*/
export default class V1HyperoptAlgorithms {

        /**
         * value: "tpe"
         * @const
         */
        "tpe" = "tpe";


        /**
         * value: "rand"
         * @const
         */
        "rand" = "rand";


        /**
         * value: "anneal"
         * @const
         */
        "anneal" = "anneal";



    /**
    * Returns a <code>V1HyperoptAlgorithms</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1HyperoptAlgorithms} The enum <code>V1HyperoptAlgorithms</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

