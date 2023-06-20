/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc20
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1EventChartKind.
* @enum {}
* @readonly
*/
export default class V1EventChartKind {

        /**
         * value: "plotly"
         * @const
         */
        "plotly" = "plotly";


        /**
         * value: "bokeh"
         * @const
         */
        "bokeh" = "bokeh";


        /**
         * value: "vega"
         * @const
         */
        "vega" = "vega";



    /**
    * Returns a <code>V1EventChartKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1EventChartKind} The enum <code>V1EventChartKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

