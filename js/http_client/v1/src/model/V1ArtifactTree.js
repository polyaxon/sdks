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
 * The V1ArtifactTree model module.
 * @module model/V1ArtifactTree
 * @version 2.3.1
 */
class V1ArtifactTree {
    /**
     * Constructs a new <code>V1ArtifactTree</code>.
     * @alias module:model/V1ArtifactTree
     */
    constructor() { 
        
        V1ArtifactTree.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ArtifactTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ArtifactTree} obj Optional instance to populate.
     * @return {module:model/V1ArtifactTree} The populated <code>V1ArtifactTree</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ArtifactTree();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('dirs')) {
                obj['dirs'] = ApiClient.convertToType(data['dirs'], ['String']);
            }
            if (data.hasOwnProperty('is_done')) {
                obj['is_done'] = ApiClient.convertToType(data['is_done'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ArtifactTree</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ArtifactTree</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['dirs'])) {
            throw new Error("Expected the field `dirs` to be an array in the JSON data but got " + data['dirs']);
        }

        return true;
    }


}



/**
 * @member {Object.<String, Number>} files
 */
V1ArtifactTree.prototype['files'] = undefined;

/**
 * @member {Array.<String>} dirs
 */
V1ArtifactTree.prototype['dirs'] = undefined;

/**
 * @member {Boolean} is_done
 */
V1ArtifactTree.prototype['is_done'] = undefined;






export default V1ArtifactTree;

