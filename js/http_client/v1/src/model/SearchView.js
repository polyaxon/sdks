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
* Enum class SearchView.
* @enum {}
* @readonly
*/
export default class SearchView {

        /**
         * value: "any"
         * @const
         */
        "any" = "any";


        /**
         * value: "runs"
         * @const
         */
        "runs" = "runs";


        /**
         * value: "selection"
         * @const
         */
        "selection" = "selection";


        /**
         * value: "analytics"
         * @const
         */
        "analytics" = "analytics";


        /**
         * value: "components"
         * @const
         */
        "components" = "components";


        /**
         * value: "models"
         * @const
         */
        "models" = "models";


        /**
         * value: "artifacts"
         * @const
         */
        "artifacts" = "artifacts";


        /**
         * value: "projects"
         * @const
         */
        "projects" = "projects";



    /**
    * Returns a <code>SearchView</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SearchView} The enum <code>SearchView</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

