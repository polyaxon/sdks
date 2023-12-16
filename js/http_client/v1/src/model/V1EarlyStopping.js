/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1DiffStoppingPolicy from './V1DiffStoppingPolicy';
import V1FailureEarlyStopping from './V1FailureEarlyStopping';
import V1MedianStoppingPolicy from './V1MedianStoppingPolicy';
import V1MetricEarlyStopping from './V1MetricEarlyStopping';
import V1TruncationStoppingPolicy from './V1TruncationStoppingPolicy';

/**
 * The V1EarlyStopping model module.
 * @module model/V1EarlyStopping
 * @version 2.0.6
 */
class V1EarlyStopping {
    /**
     * Constructs a new <code>V1EarlyStopping</code>.
     * @alias module:model/V1EarlyStopping
     */
    constructor() {

        V1EarlyStopping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EarlyStopping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EarlyStopping} obj Optional instance to populate.
     * @return {module:model/V1EarlyStopping} The populated <code>V1EarlyStopping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EarlyStopping();

            if (data.hasOwnProperty('median')) {
                obj['median'] = V1MedianStoppingPolicy.constructFromObject(data['median']);
            }
            if (data.hasOwnProperty('diff')) {
                obj['diff'] = V1DiffStoppingPolicy.constructFromObject(data['diff']);
            }
            if (data.hasOwnProperty('truncation')) {
                obj['truncation'] = V1TruncationStoppingPolicy.constructFromObject(data['truncation']);
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = V1MetricEarlyStopping.constructFromObject(data['metric']);
            }
            if (data.hasOwnProperty('failure')) {
                obj['failure'] = V1FailureEarlyStopping.constructFromObject(data['failure']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EarlyStopping</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EarlyStopping</code>.
     */
    static validateJSON(data) {
        // validate the optional field `median`
        if (data['median']) { // data not null
          V1MedianStoppingPolicy.validateJSON(data['median']);
        }
        // validate the optional field `diff`
        if (data['diff']) { // data not null
          V1DiffStoppingPolicy.validateJSON(data['diff']);
        }
        // validate the optional field `truncation`
        if (data['truncation']) { // data not null
          V1TruncationStoppingPolicy.validateJSON(data['truncation']);
        }
        // validate the optional field `metric`
        if (data['metric']) { // data not null
          V1MetricEarlyStopping.validateJSON(data['metric']);
        }
        // validate the optional field `failure`
        if (data['failure']) { // data not null
          V1FailureEarlyStopping.validateJSON(data['failure']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1MedianStoppingPolicy} median
 */
V1EarlyStopping.prototype['median'] = undefined;

/**
 * @member {module:model/V1DiffStoppingPolicy} diff
 */
V1EarlyStopping.prototype['diff'] = undefined;

/**
 * @member {module:model/V1TruncationStoppingPolicy} truncation
 */
V1EarlyStopping.prototype['truncation'] = undefined;

/**
 * @member {module:model/V1MetricEarlyStopping} metric
 */
V1EarlyStopping.prototype['metric'] = undefined;

/**
 * @member {module:model/V1FailureEarlyStopping} failure
 */
V1EarlyStopping.prototype['failure'] = undefined;






export default V1EarlyStopping;

