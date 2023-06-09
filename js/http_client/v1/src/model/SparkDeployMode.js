/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc18
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class SparkDeployMode.
* @enum {}
* @readonly
*/
export default class SparkDeployMode {

        /**
         * value: "cluster"
         * @const
         */
        "cluster" = "cluster";


        /**
         * value: "client"
         * @const
         */
        "client" = "client";


        /**
         * value: "in_cluster_client"
         * @const
         */
        "in_cluster_client" = "in_cluster_client";



    /**
    * Returns a <code>SparkDeployMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SparkDeployMode} The enum <code>SparkDeployMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

