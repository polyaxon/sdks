/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1HpChoice from './V1HpChoice';
import V1HpDateRange from './V1HpDateRange';
import V1HpDateTimeRange from './V1HpDateTimeRange';
import V1HpGeomSpace from './V1HpGeomSpace';
import V1HpLinSpace from './V1HpLinSpace';
import V1HpLogNormal from './V1HpLogNormal';
import V1HpLogSpace from './V1HpLogSpace';
import V1HpLogUniform from './V1HpLogUniform';
import V1HpNormal from './V1HpNormal';
import V1HpPChoice from './V1HpPChoice';
import V1HpQLogNormal from './V1HpQLogNormal';
import V1HpQLogUniform from './V1HpQLogUniform';
import V1HpQNormal from './V1HpQNormal';
import V1HpQUniform from './V1HpQUniform';
import V1HpRange from './V1HpRange';
import V1HpUniform from './V1HpUniform';

/**
 * The V1HpParams model module.
 * @module model/V1HpParams
 * @version 2.0.0-rc16
 */
class V1HpParams {
    /**
     * Constructs a new <code>V1HpParams</code>.
     * @alias module:model/V1HpParams
     */
    constructor() {

        V1HpParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1HpParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1HpParams} obj Optional instance to populate.
     * @return {module:model/V1HpParams} The populated <code>V1HpParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HpParams();

            if (data.hasOwnProperty('choice')) {
                obj['choice'] = V1HpChoice.constructFromObject(data['choice']);
            }
            if (data.hasOwnProperty('pchoice')) {
                obj['pchoice'] = V1HpPChoice.constructFromObject(data['pchoice']);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = V1HpRange.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('linspace')) {
                obj['linspace'] = V1HpLinSpace.constructFromObject(data['linspace']);
            }
            if (data.hasOwnProperty('logspace')) {
                obj['logspace'] = V1HpLogSpace.constructFromObject(data['logspace']);
            }
            if (data.hasOwnProperty('geomspace')) {
                obj['geomspace'] = V1HpGeomSpace.constructFromObject(data['geomspace']);
            }
            if (data.hasOwnProperty('uniform')) {
                obj['uniform'] = V1HpUniform.constructFromObject(data['uniform']);
            }
            if (data.hasOwnProperty('quniform')) {
                obj['quniform'] = V1HpQUniform.constructFromObject(data['quniform']);
            }
            if (data.hasOwnProperty('loguniform')) {
                obj['loguniform'] = V1HpLogUniform.constructFromObject(data['loguniform']);
            }
            if (data.hasOwnProperty('qloguniform')) {
                obj['qloguniform'] = V1HpQLogUniform.constructFromObject(data['qloguniform']);
            }
            if (data.hasOwnProperty('normal')) {
                obj['normal'] = V1HpNormal.constructFromObject(data['normal']);
            }
            if (data.hasOwnProperty('qnormal')) {
                obj['qnormal'] = V1HpQNormal.constructFromObject(data['qnormal']);
            }
            if (data.hasOwnProperty('lognormal')) {
                obj['lognormal'] = V1HpLogNormal.constructFromObject(data['lognormal']);
            }
            if (data.hasOwnProperty('qlognormal')) {
                obj['qlognormal'] = V1HpQLogNormal.constructFromObject(data['qlognormal']);
            }
            if (data.hasOwnProperty('daterange')) {
                obj['daterange'] = V1HpDateRange.constructFromObject(data['daterange']);
            }
            if (data.hasOwnProperty('datetimerange')) {
                obj['datetimerange'] = V1HpDateTimeRange.constructFromObject(data['datetimerange']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1HpParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1HpParams</code>.
     */
    static validateJSON(data) {
        // validate the optional field `choice`
        if (data['choice']) { // data not null
          V1HpChoice.validateJSON(data['choice']);
        }
        // validate the optional field `pchoice`
        if (data['pchoice']) { // data not null
          V1HpPChoice.validateJSON(data['pchoice']);
        }
        // validate the optional field `range`
        if (data['range']) { // data not null
          V1HpRange.validateJSON(data['range']);
        }
        // validate the optional field `linspace`
        if (data['linspace']) { // data not null
          V1HpLinSpace.validateJSON(data['linspace']);
        }
        // validate the optional field `logspace`
        if (data['logspace']) { // data not null
          V1HpLogSpace.validateJSON(data['logspace']);
        }
        // validate the optional field `geomspace`
        if (data['geomspace']) { // data not null
          V1HpGeomSpace.validateJSON(data['geomspace']);
        }
        // validate the optional field `uniform`
        if (data['uniform']) { // data not null
          V1HpUniform.validateJSON(data['uniform']);
        }
        // validate the optional field `quniform`
        if (data['quniform']) { // data not null
          V1HpQUniform.validateJSON(data['quniform']);
        }
        // validate the optional field `loguniform`
        if (data['loguniform']) { // data not null
          V1HpLogUniform.validateJSON(data['loguniform']);
        }
        // validate the optional field `qloguniform`
        if (data['qloguniform']) { // data not null
          V1HpQLogUniform.validateJSON(data['qloguniform']);
        }
        // validate the optional field `normal`
        if (data['normal']) { // data not null
          V1HpNormal.validateJSON(data['normal']);
        }
        // validate the optional field `qnormal`
        if (data['qnormal']) { // data not null
          V1HpQNormal.validateJSON(data['qnormal']);
        }
        // validate the optional field `lognormal`
        if (data['lognormal']) { // data not null
          V1HpLogNormal.validateJSON(data['lognormal']);
        }
        // validate the optional field `qlognormal`
        if (data['qlognormal']) { // data not null
          V1HpQLogNormal.validateJSON(data['qlognormal']);
        }
        // validate the optional field `daterange`
        if (data['daterange']) { // data not null
          V1HpDateRange.validateJSON(data['daterange']);
        }
        // validate the optional field `datetimerange`
        if (data['datetimerange']) { // data not null
          V1HpDateTimeRange.validateJSON(data['datetimerange']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1HpChoice} choice
 */
V1HpParams.prototype['choice'] = undefined;

/**
 * @member {module:model/V1HpPChoice} pchoice
 */
V1HpParams.prototype['pchoice'] = undefined;

/**
 * @member {module:model/V1HpRange} range
 */
V1HpParams.prototype['range'] = undefined;

/**
 * @member {module:model/V1HpLinSpace} linspace
 */
V1HpParams.prototype['linspace'] = undefined;

/**
 * @member {module:model/V1HpLogSpace} logspace
 */
V1HpParams.prototype['logspace'] = undefined;

/**
 * @member {module:model/V1HpGeomSpace} geomspace
 */
V1HpParams.prototype['geomspace'] = undefined;

/**
 * @member {module:model/V1HpUniform} uniform
 */
V1HpParams.prototype['uniform'] = undefined;

/**
 * @member {module:model/V1HpQUniform} quniform
 */
V1HpParams.prototype['quniform'] = undefined;

/**
 * @member {module:model/V1HpLogUniform} loguniform
 */
V1HpParams.prototype['loguniform'] = undefined;

/**
 * @member {module:model/V1HpQLogUniform} qloguniform
 */
V1HpParams.prototype['qloguniform'] = undefined;

/**
 * @member {module:model/V1HpNormal} normal
 */
V1HpParams.prototype['normal'] = undefined;

/**
 * @member {module:model/V1HpQNormal} qnormal
 */
V1HpParams.prototype['qnormal'] = undefined;

/**
 * @member {module:model/V1HpLogNormal} lognormal
 */
V1HpParams.prototype['lognormal'] = undefined;

/**
 * @member {module:model/V1HpQLogNormal} qlognormal
 */
V1HpParams.prototype['qlognormal'] = undefined;

/**
 * @member {module:model/V1HpDateRange} daterange
 */
V1HpParams.prototype['daterange'] = undefined;

/**
 * @member {module:model/V1HpDateTimeRange} datetimerange
 */
V1HpParams.prototype['datetimerange'] = undefined;






export default V1HpParams;

