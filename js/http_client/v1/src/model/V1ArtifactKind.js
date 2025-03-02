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
* Enum class V1ArtifactKind.
* @enum {}
* @readonly
*/
export default class V1ArtifactKind {

        /**
         * value: "model"
         * @const
         */
        "model" = "model";


        /**
         * value: "audio"
         * @const
         */
        "audio" = "audio";


        /**
         * value: "video"
         * @const
         */
        "video" = "video";


        /**
         * value: "histogram"
         * @const
         */
        "histogram" = "histogram";


        /**
         * value: "image"
         * @const
         */
        "image" = "image";


        /**
         * value: "tensor"
         * @const
         */
        "tensor" = "tensor";


        /**
         * value: "dataframe"
         * @const
         */
        "dataframe" = "dataframe";


        /**
         * value: "chart"
         * @const
         */
        "chart" = "chart";


        /**
         * value: "csv"
         * @const
         */
        "csv" = "csv";


        /**
         * value: "tsv"
         * @const
         */
        "tsv" = "tsv";


        /**
         * value: "psv"
         * @const
         */
        "psv" = "psv";


        /**
         * value: "ssv"
         * @const
         */
        "ssv" = "ssv";


        /**
         * value: "metric"
         * @const
         */
        "metric" = "metric";


        /**
         * value: "env"
         * @const
         */
        "env" = "env";


        /**
         * value: "html"
         * @const
         */
        "html" = "html";


        /**
         * value: "text"
         * @const
         */
        "text" = "text";


        /**
         * value: "file"
         * @const
         */
        "file" = "file";


        /**
         * value: "dir"
         * @const
         */
        "dir" = "dir";


        /**
         * value: "dockerfile"
         * @const
         */
        "dockerfile" = "dockerfile";


        /**
         * value: "docker_image"
         * @const
         */
        "docker_image" = "docker_image";


        /**
         * value: "data"
         * @const
         */
        "data" = "data";


        /**
         * value: "coderef"
         * @const
         */
        "coderef" = "coderef";


        /**
         * value: "table"
         * @const
         */
        "table" = "table";


        /**
         * value: "tensorboard"
         * @const
         */
        "tensorboard" = "tensorboard";


        /**
         * value: "curve"
         * @const
         */
        "curve" = "curve";


        /**
         * value: "confusion"
         * @const
         */
        "confusion" = "confusion";


        /**
         * value: "analysis"
         * @const
         */
        "analysis" = "analysis";


        /**
         * value: "iteration"
         * @const
         */
        "iteration" = "iteration";


        /**
         * value: "markdown"
         * @const
         */
        "markdown" = "markdown";


        /**
         * value: "system"
         * @const
         */
        "system" = "system";


        /**
         * value: "span"
         * @const
         */
        "span" = "span";


        /**
         * value: "artifact"
         * @const
         */
        "artifact" = "artifact";



    /**
    * Returns a <code>V1ArtifactKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1ArtifactKind} The enum <code>V1ArtifactKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

