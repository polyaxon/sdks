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
 * The V1HostPathConnection model module.
 * @module model/V1HostPathConnection
 * @version 2.8.0
 */
class V1HostPathConnection {
    /**
     * Constructs a new <code>V1HostPathConnection</code>.
     * @alias module:model/V1HostPathConnection
     */
    constructor() {

        V1HostPathConnection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1HostPathConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1HostPathConnection} obj Optional instance to populate.
     * @return {module:model/V1HostPathConnection} The populated <code>V1HostPathConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HostPathConnection();

            if (data.hasOwnProperty('hostPath')) {
                obj['hostPath'] = ApiClient.convertToType(data['hostPath'], 'String');
            }
            if (data.hasOwnProperty('mountPath')) {
                obj['mountPath'] = ApiClient.convertToType(data['mountPath'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1HostPathConnection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1HostPathConnection</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hostPath'] && !(typeof data['hostPath'] === 'string' || data['hostPath'] instanceof String)) {
            throw new Error("Expected the field `hostPath` to be a primitive type in the JSON string but got " + data['hostPath']);
        }
        // ensure the json data is a string
        if (data['mountPath'] && !(typeof data['mountPath'] === 'string' || data['mountPath'] instanceof String)) {
            throw new Error("Expected the field `mountPath` to be a primitive type in the JSON string but got " + data['mountPath']);
        }

        return true;
    }


}



/**
 * @member {String} hostPath
 */
V1HostPathConnection.prototype['hostPath'] = undefined;

/**
 * @member {String} mountPath
 */
V1HostPathConnection.prototype['mountPath'] = undefined;

/**
 * @member {Boolean} readOnly
 */
V1HostPathConnection.prototype['readOnly'] = undefined;

/**
 * @member {Object} kind
 */
V1HostPathConnection.prototype['kind'] = undefined;






export default V1HostPathConnection;

