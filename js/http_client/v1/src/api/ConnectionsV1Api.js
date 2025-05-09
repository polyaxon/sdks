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


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ConnectionResponse from '../model/V1ConnectionResponse';
import V1ListConnectionsResponse from '../model/V1ListConnectionsResponse';

/**
* ConnectionsV1 service.
* @module api/ConnectionsV1Api
* @version 2.8.0
*/
export default class ConnectionsV1Api {

    /**
    * Constructs a new ConnectionsV1Api.
    * Polyaxon sdk
    * @alias module:api/ConnectionsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createConnection operation.
     * @callback module:api/ConnectionsV1Api~createConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ConnectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create connection
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1ConnectionResponse} body Connection body
     * @param {module:api/ConnectionsV1Api~createConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ConnectionResponse}
     */
    createConnection(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createConnection");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createConnection");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1ConnectionResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConnection operation.
     * @callback module:api/ConnectionsV1Api~deleteConnectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete connection
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ConnectionsV1Api~deleteConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteConnection(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteConnection");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteConnection");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConnection operation.
     * @callback module:api/ConnectionsV1Api~getConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ConnectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get connection
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ConnectionsV1Api~getConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ConnectionResponse}
     */
    getConnection(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getConnection");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getConnection");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ConnectionResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listConnectionNames operation.
     * @callback module:api/ConnectionsV1Api~listConnectionNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListConnectionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List connections names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ConnectionsV1Api~listConnectionNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListConnectionsResponse}
     */
    listConnectionNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listConnectionNames");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'bookmarks': opts['bookmarks'],
        'mode': opts['mode'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListConnectionsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listConnections operation.
     * @callback module:api/ConnectionsV1Api~listConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListConnectionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List connections
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ConnectionsV1Api~listConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListConnectionsResponse}
     */
    listConnections(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listConnections");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'bookmarks': opts['bookmarks'],
        'mode': opts['mode'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListConnectionsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchConnection operation.
     * @callback module:api/ConnectionsV1Api~patchConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ConnectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch connection
     * @param {String} owner Owner of the namespace
     * @param {String} connection_uuid UUID
     * @param {module:model/V1ConnectionResponse} body Connection body
     * @param {module:api/ConnectionsV1Api~patchConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ConnectionResponse}
     */
    patchConnection(owner, connection_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchConnection");
      }
      // verify the required parameter 'connection_uuid' is set
      if (connection_uuid === undefined || connection_uuid === null) {
        throw new Error("Missing the required parameter 'connection_uuid' when calling patchConnection");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchConnection");
      }

      let pathParams = {
        'owner': owner,
        'connection.uuid': connection_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1ConnectionResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections/{connection.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConnection operation.
     * @callback module:api/ConnectionsV1Api~updateConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ConnectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update connection
     * @param {String} owner Owner of the namespace
     * @param {String} connection_uuid UUID
     * @param {module:model/V1ConnectionResponse} body Connection body
     * @param {module:api/ConnectionsV1Api~updateConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ConnectionResponse}
     */
    updateConnection(owner, connection_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateConnection");
      }
      // verify the required parameter 'connection_uuid' is set
      if (connection_uuid === undefined || connection_uuid === null) {
        throw new Error("Missing the required parameter 'connection_uuid' when calling updateConnection");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateConnection");
      }

      let pathParams = {
        'owner': owner,
        'connection.uuid': connection_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1ConnectionResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/connections/{connection.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
