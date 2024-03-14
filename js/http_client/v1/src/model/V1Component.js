/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Build from './V1Build';
import V1Cache from './V1Cache';
import V1Hook from './V1Hook';
import V1IO from './V1IO';
import V1Plugins from './V1Plugins';
import V1Template from './V1Template';
import V1Termination from './V1Termination';

/**
 * The V1Component model module.
 * @module model/V1Component
 * @version 2.1.3-rc0
 */
class V1Component {
    /**
     * Constructs a new <code>V1Component</code>.
     * @alias module:model/V1Component
     */
    constructor() { 
        
        V1Component.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Component</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Component} obj Optional instance to populate.
     * @return {module:model/V1Component} The populated <code>V1Component</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Component();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = V1Cache.constructFromObject(data['cache']);
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('termination')) {
                obj['termination'] = V1Termination.constructFromObject(data['termination']);
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = V1Plugins.constructFromObject(data['plugins']);
            }
            if (data.hasOwnProperty('hooks')) {
                obj['hooks'] = ApiClient.convertToType(data['hooks'], [V1Hook]);
            }
            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], [V1IO]);
            }
            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = ApiClient.convertToType(data['outputs'], [V1IO]);
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = V1Build.constructFromObject(data['build']);
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], Object);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = V1Template.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('isApproved')) {
                obj['isApproved'] = ApiClient.convertToType(data['isApproved'], 'Boolean');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Component</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Component</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['presets'])) {
            throw new Error("Expected the field `presets` to be an array in the JSON data but got " + data['presets']);
        }
        // ensure the json data is a string
        if (data['queue'] && !(typeof data['queue'] === 'string' || data['queue'] instanceof String)) {
            throw new Error("Expected the field `queue` to be a primitive type in the JSON string but got " + data['queue']);
        }
        // validate the optional field `cache`
        if (data['cache']) { // data not null
          V1Cache.validateJSON(data['cache']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }
        // validate the optional field `termination`
        if (data['termination']) { // data not null
          V1Termination.validateJSON(data['termination']);
        }
        // validate the optional field `plugins`
        if (data['plugins']) { // data not null
          V1Plugins.validateJSON(data['plugins']);
        }
        if (data['hooks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['hooks'])) {
                throw new Error("Expected the field `hooks` to be an array in the JSON data but got " + data['hooks']);
            }
            // validate the optional field `hooks` (array)
            for (const item of data['hooks']) {
                V1Hook.validateJSON(item);
            };
        }
        if (data['inputs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['inputs'])) {
                throw new Error("Expected the field `inputs` to be an array in the JSON data but got " + data['inputs']);
            }
            // validate the optional field `inputs` (array)
            for (const item of data['inputs']) {
                V1IO.validateJSON(item);
            };
        }
        if (data['outputs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['outputs'])) {
                throw new Error("Expected the field `outputs` to be an array in the JSON data but got " + data['outputs']);
            }
            // validate the optional field `outputs` (array)
            for (const item of data['outputs']) {
                V1IO.validateJSON(item);
            };
        }
        // validate the optional field `build`
        if (data['build']) { // data not null
          V1Build.validateJSON(data['build']);
        }
        // validate the optional field `template`
        if (data['template']) { // data not null
          V1Template.validateJSON(data['template']);
        }

        return true;
    }


}



/**
 * @member {Number} version
 */
V1Component.prototype['version'] = undefined;

/**
 * @member {String} kind
 */
V1Component.prototype['kind'] = undefined;

/**
 * @member {String} name
 */
V1Component.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Component.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Component.prototype['tags'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1Component.prototype['presets'] = undefined;

/**
 * @member {String} queue
 */
V1Component.prototype['queue'] = undefined;

/**
 * @member {module:model/V1Cache} cache
 */
V1Component.prototype['cache'] = undefined;

/**
 * @member {String} namespace
 */
V1Component.prototype['namespace'] = undefined;

/**
 * @member {module:model/V1Termination} termination
 */
V1Component.prototype['termination'] = undefined;

/**
 * @member {module:model/V1Plugins} plugins
 */
V1Component.prototype['plugins'] = undefined;

/**
 * @member {Array.<module:model/V1Hook>} hooks
 */
V1Component.prototype['hooks'] = undefined;

/**
 * @member {Array.<module:model/V1IO>} inputs
 */
V1Component.prototype['inputs'] = undefined;

/**
 * @member {Array.<module:model/V1IO>} outputs
 */
V1Component.prototype['outputs'] = undefined;

/**
 * @member {module:model/V1Build} build
 */
V1Component.prototype['build'] = undefined;

/**
 * @member {Object} run
 */
V1Component.prototype['run'] = undefined;

/**
 * @member {module:model/V1Template} template
 */
V1Component.prototype['template'] = undefined;

/**
 * @member {Boolean} isApproved
 */
V1Component.prototype['isApproved'] = undefined;

/**
 * @member {Number} cost
 */
V1Component.prototype['cost'] = undefined;






export default V1Component;

