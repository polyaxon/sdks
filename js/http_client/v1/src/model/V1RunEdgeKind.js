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
* Enum class V1RunEdgeKind.
* @enum {}
* @readonly
*/
export default class V1RunEdgeKind {

        /**
         * value: "action"
         * @const
         */
        "action" = "action";


        /**
         * value: "event"
         * @const
         */
        "event" = "event";


        /**
         * value: "hook"
         * @const
         */
        "hook" = "hook";


        /**
         * value: "dag"
         * @const
         */
        "dag" = "dag";


        /**
         * value: "join"
         * @const
         */
        "join" = "join";


        /**
         * value: "run"
         * @const
         */
        "run" = "run";


        /**
         * value: "tb"
         * @const
         */
        "tb" = "tb";


        /**
         * value: "build"
         * @const
         */
        "build" = "build";


        /**
         * value: "manual"
         * @const
         */
        "manual" = "manual";



    /**
    * Returns a <code>V1RunEdgeKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1RunEdgeKind} The enum <code>V1RunEdgeKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

