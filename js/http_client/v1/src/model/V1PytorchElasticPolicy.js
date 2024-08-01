/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1PytorchElasticPolicy model module.
 * @module model/V1PytorchElasticPolicy
 * @version 2.3.1
 */
class V1PytorchElasticPolicy {
    /**
     * Constructs a new <code>V1PytorchElasticPolicy</code>.
     * @alias module:model/V1PytorchElasticPolicy
     */
    constructor() { 
        
        V1PytorchElasticPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PytorchElasticPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PytorchElasticPolicy} obj Optional instance to populate.
     * @return {module:model/V1PytorchElasticPolicy} The populated <code>V1PytorchElasticPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PytorchElasticPolicy();

            if (data.hasOwnProperty('minReplicas')) {
                obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Number');
            }
            if (data.hasOwnProperty('maxReplicas')) {
                obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Number');
            }
            if (data.hasOwnProperty('rdvzBackend')) {
                obj['rdvzBackend'] = ApiClient.convertToType(data['rdvzBackend'], 'String');
            }
            if (data.hasOwnProperty('rdvzPort')) {
                obj['rdvzPort'] = ApiClient.convertToType(data['rdvzPort'], 'Number');
            }
            if (data.hasOwnProperty('rdvzHost')) {
                obj['rdvzHost'] = ApiClient.convertToType(data['rdvzHost'], 'String');
            }
            if (data.hasOwnProperty('rdvzId')) {
                obj['rdvzId'] = ApiClient.convertToType(data['rdvzId'], 'String');
            }
            if (data.hasOwnProperty('rdvzConf')) {
                obj['rdvzConf'] = ApiClient.convertToType(data['rdvzConf'], [Object]);
            }
            if (data.hasOwnProperty('standalone')) {
                obj['standalone'] = ApiClient.convertToType(data['standalone'], 'Boolean');
            }
            if (data.hasOwnProperty('nProcPerNode')) {
                obj['nProcPerNode'] = ApiClient.convertToType(data['nProcPerNode'], 'Number');
            }
            if (data.hasOwnProperty('maxRestarts')) {
                obj['maxRestarts'] = ApiClient.convertToType(data['maxRestarts'], 'Number');
            }
            if (data.hasOwnProperty('Metrics')) {
                obj['Metrics'] = ApiClient.convertToType(data['Metrics'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1PytorchElasticPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1PytorchElasticPolicy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['rdvzBackend'] && !(typeof data['rdvzBackend'] === 'string' || data['rdvzBackend'] instanceof String)) {
            throw new Error("Expected the field `rdvzBackend` to be a primitive type in the JSON string but got " + data['rdvzBackend']);
        }
        // ensure the json data is a string
        if (data['rdvzHost'] && !(typeof data['rdvzHost'] === 'string' || data['rdvzHost'] instanceof String)) {
            throw new Error("Expected the field `rdvzHost` to be a primitive type in the JSON string but got " + data['rdvzHost']);
        }
        // ensure the json data is a string
        if (data['rdvzId'] && !(typeof data['rdvzId'] === 'string' || data['rdvzId'] instanceof String)) {
            throw new Error("Expected the field `rdvzId` to be a primitive type in the JSON string but got " + data['rdvzId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rdvzConf'])) {
            throw new Error("Expected the field `rdvzConf` to be an array in the JSON data but got " + data['rdvzConf']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Metrics'])) {
            throw new Error("Expected the field `Metrics` to be an array in the JSON data but got " + data['Metrics']);
        }

        return true;
    }


}



/**
 * minReplicas is the lower limit for the number of replicas to which the training job can scale down.
 * @member {Number} minReplicas
 */
V1PytorchElasticPolicy.prototype['minReplicas'] = undefined;

/**
 * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas, defaults to null.
 * @member {Number} maxReplicas
 */
V1PytorchElasticPolicy.prototype['maxReplicas'] = undefined;

/**
 * @member {String} rdvzBackend
 */
V1PytorchElasticPolicy.prototype['rdvzBackend'] = undefined;

/**
 * @member {Number} rdvzPort
 */
V1PytorchElasticPolicy.prototype['rdvzPort'] = undefined;

/**
 * @member {String} rdvzHost
 */
V1PytorchElasticPolicy.prototype['rdvzHost'] = undefined;

/**
 * @member {String} rdvzId
 */
V1PytorchElasticPolicy.prototype['rdvzId'] = undefined;

/**
 * RDZVConf contains additional rendezvous configuration (<key1>=<value1>,<key2>=<value2>,...).
 * @member {Array.<Object>} rdvzConf
 */
V1PytorchElasticPolicy.prototype['rdvzConf'] = undefined;

/**
 * Start a local standalone rendezvous backend that is represented by a C10d TCP store on port 29400. Useful when launching single-node, multi-worker job. If specified --rdzv_backend, --rdzv_endpoint, --rdzv_id are auto-assigned; any explicitly set values are ignored.
 * @member {Boolean} standalone
 */
V1PytorchElasticPolicy.prototype['standalone'] = undefined;

/**
 * Number of workers per node; supported values: [auto, cpu, gpu, int]. Deprecated: This API is deprecated in v1.7+ Use .spec.nprocPerNode instead.
 * @member {Number} nProcPerNode
 */
V1PytorchElasticPolicy.prototype['nProcPerNode'] = undefined;

/**
 * @member {Number} maxRestarts
 */
V1PytorchElasticPolicy.prototype['maxRestarts'] = undefined;

/**
 * Metrics contains the specifications which are used to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated with multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the HPA will not be created.
 * @member {Array.<Object>} Metrics
 */
V1PytorchElasticPolicy.prototype['Metrics'] = undefined;






export default V1PytorchElasticPolicy;

