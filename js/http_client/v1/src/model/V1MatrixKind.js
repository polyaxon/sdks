/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1MatrixKind.
* @enum {}
* @readonly
*/
export default class V1MatrixKind {

        /**
         * value: "random"
         * @const
         */
        "random" = "random";


        /**
         * value: "grid"
         * @const
         */
        "grid" = "grid";


        /**
         * value: "hyperband"
         * @const
         */
        "hyperband" = "hyperband";


        /**
         * value: "bayes"
         * @const
         */
        "bayes" = "bayes";


        /**
         * value: "hyperopt"
         * @const
         */
        "hyperopt" = "hyperopt";


        /**
         * value: "iterative"
         * @const
         */
        "iterative" = "iterative";


        /**
         * value: "mapping"
         * @const
         */
        "mapping" = "mapping";



    /**
    * Returns a <code>V1MatrixKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1MatrixKind} The enum <code>V1MatrixKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

