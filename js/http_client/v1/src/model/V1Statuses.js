/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1Statuses.
* @enum {}
* @readonly
*/
export default class V1Statuses {

        /**
         * value: "created"
         * @const
         */
        "created" = "created";


        /**
         * value: "resuming"
         * @const
         */
        "resuming" = "resuming";


        /**
         * value: "on_schedule"
         * @const
         */
        "on_schedule" = "on_schedule";


        /**
         * value: "compiled"
         * @const
         */
        "compiled" = "compiled";


        /**
         * value: "queued"
         * @const
         */
        "queued" = "queued";


        /**
         * value: "scheduled"
         * @const
         */
        "scheduled" = "scheduled";


        /**
         * value: "starting"
         * @const
         */
        "starting" = "starting";


        /**
         * value: "running"
         * @const
         */
        "running" = "running";


        /**
         * value: "processing"
         * @const
         */
        "processing" = "processing";


        /**
         * value: "stopping"
         * @const
         */
        "stopping" = "stopping";


        /**
         * value: "failed"
         * @const
         */
        "failed" = "failed";


        /**
         * value: "stopped"
         * @const
         */
        "stopped" = "stopped";


        /**
         * value: "succeeded"
         * @const
         */
        "succeeded" = "succeeded";


        /**
         * value: "skipped"
         * @const
         */
        "skipped" = "skipped";


        /**
         * value: "warning"
         * @const
         */
        "warning" = "warning";


        /**
         * value: "unschedulable"
         * @const
         */
        "unschedulable" = "unschedulable";


        /**
         * value: "upstream_failed"
         * @const
         */
        "upstream_failed" = "upstream_failed";


        /**
         * value: "retrying"
         * @const
         */
        "retrying" = "retrying";


        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";


        /**
         * value: "done"
         * @const
         */
        "done" = "done";



    /**
    * Returns a <code>V1Statuses</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1Statuses} The enum <code>V1Statuses</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

