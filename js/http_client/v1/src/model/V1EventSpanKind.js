/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc10
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1EventSpanKind.
* @enum {}
* @readonly
*/
export default class V1EventSpanKind {

        /**
         * value: "llm"
         * @const
         */
        "llm" = "llm";


        /**
         * value: "chain"
         * @const
         */
        "chain" = "chain";


        /**
         * value: "agent"
         * @const
         */
        "agent" = "agent";


        /**
         * value: "tool"
         * @const
         */
        "tool" = "tool";


        /**
         * value: "embedding"
         * @const
         */
        "embedding" = "embedding";


        /**
         * value: "retriever"
         * @const
         */
        "retriever" = "retriever";



    /**
    * Returns a <code>V1EventSpanKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1EventSpanKind} The enum <code>V1EventSpanKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

