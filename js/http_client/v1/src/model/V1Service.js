/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Environment from './V1Environment';
import V1Init from './V1Init';

/**
 * The V1Service model module.
 * @module model/V1Service
 * @version 2.6.1
 */
class V1Service {
    /**
     * Constructs a new <code>V1Service</code>.
     * @alias module:model/V1Service
     */
    constructor() {

        V1Service.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Service} obj Optional instance to populate.
     * @return {module:model/V1Service} The populated <code>V1Service</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Service();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = V1Environment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [Object]);
            }
            if (data.hasOwnProperty('init')) {
                obj['init'] = ApiClient.convertToType(data['init'], [V1Init]);
            }
            if (data.hasOwnProperty('sidecars')) {
                obj['sidecars'] = ApiClient.convertToType(data['sidecars'], [Object]);
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], Object);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], ['Number']);
            }
            if (data.hasOwnProperty('rewritePath')) {
                obj['rewritePath'] = ApiClient.convertToType(data['rewritePath'], 'Boolean');
            }
            if (data.hasOwnProperty('isExternal')) {
                obj['isExternal'] = ApiClient.convertToType(data['isExternal'], 'Boolean');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Service</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Service</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          V1Environment.validateJSON(data['environment']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['volumes'])) {
            throw new Error("Expected the field `volumes` to be an array in the JSON data but got " + data['volumes']);
        }
        if (data['init']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['init'])) {
                throw new Error("Expected the field `init` to be an array in the JSON data but got " + data['init']);
            }
            // validate the optional field `init` (array)
            for (const item of data['init']) {
                V1Init.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sidecars'])) {
            throw new Error("Expected the field `sidecars` to be an array in the JSON data but got " + data['sidecars']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ports'])) {
            throw new Error("Expected the field `ports` to be an array in the JSON data but got " + data['ports']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'service'
 */
V1Service.prototype['kind'] = 'service';

/**
 * @member {module:model/V1Environment} environment
 */
V1Service.prototype['environment'] = undefined;

/**
 * @member {Array.<String>} connections
 */
V1Service.prototype['connections'] = undefined;

/**
 * Volumes is a list of volumes that can be mounted.
 * @member {Array.<Object>} volumes
 */
V1Service.prototype['volumes'] = undefined;

/**
 * @member {Array.<module:model/V1Init>} init
 */
V1Service.prototype['init'] = undefined;

/**
 * @member {Array.<Object>} sidecars
 */
V1Service.prototype['sidecars'] = undefined;

/**
 * @member {Object} container
 */
V1Service.prototype['container'] = undefined;

/**
 * @member {Array.<Number>} ports
 */
V1Service.prototype['ports'] = undefined;

/**
 * Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url.
 * @member {Boolean} rewritePath
 */
V1Service.prototype['rewritePath'] = undefined;

/**
 * Optional flag to signal to Polyaxon that this service should not go through Polyaxon's auth Default is false, the service will be controlled by Polyaxon's auth.
 * @member {Boolean} isExternal
 */
V1Service.prototype['isExternal'] = undefined;

/**
 * @member {Number} replicas
 */
V1Service.prototype['replicas'] = undefined;






export default V1Service;

