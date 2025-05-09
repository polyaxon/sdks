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
import V1ListActivitiesResponse from '../model/V1ListActivitiesResponse';
import V1ListTokenResponse from '../model/V1ListTokenResponse';
import V1Token from '../model/V1Token';
import V1User from '../model/V1User';

/**
* UsersV1 service.
* @module api/UsersV1Api
* @version 2.8.0
*/
export default class UsersV1Api {

    /**
    * Constructs a new UsersV1Api.
    * Polyaxon sdk
    * @alias module:api/UsersV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createToken operation.
     * @callback module:api/UsersV1Api~createTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create token
     * @param {module:model/V1Token} body Token body
     * @param {module:api/UsersV1Api~createTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    createToken(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createToken");
      }

      let pathParams = {
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/users/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteToken operation.
     * @callback module:api/UsersV1Api~deleteTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete token
     * @param {String} uuid UUid of the namespace
     * @param {module:api/UsersV1Api~deleteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteToken(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteToken");
      }

      let pathParams = {
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
        '/api/v1/users/tokens/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getHistory operation.
     * @callback module:api/UsersV1Api~getHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListActivitiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User History
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/UsersV1Api~getHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListActivitiesResponse}
     */
    getHistory(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListActivitiesResponse;
      return this.apiClient.callApi(
        '/api/v1/users/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSuggestions operation.
     * @callback module:api/UsersV1Api~getSuggestionsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User suggestions
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/UsersV1Api~getSuggestionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getSuggestions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/users/suggestions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getToken operation.
     * @callback module:api/UsersV1Api~getTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get token
     * @param {String} uuid UUid of the namespace
     * @param {module:api/UsersV1Api~getTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    getToken(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getToken");
      }

      let pathParams = {
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/users/tokens/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UsersV1Api~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current user
     * @param {module:api/UsersV1Api~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1User}
     */
    getUser(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = V1User;
      return this.apiClient.callApi(
        '/api/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkspaces operation.
     * @callback module:api/UsersV1Api~getWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User workspaces
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/UsersV1Api~getWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getWorkspaces(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/users/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTokens operation.
     * @callback module:api/UsersV1Api~listTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tokens
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/UsersV1Api~listTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListTokenResponse}
     */
    listTokens(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListTokenResponse;
      return this.apiClient.callApi(
        '/api/v1/users/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchToken operation.
     * @callback module:api/UsersV1Api~patchTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch token
     * @param {String} token_uuid UUID
     * @param {module:model/V1Token} body Token body
     * @param {module:api/UsersV1Api~patchTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    patchToken(token_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'token_uuid' is set
      if (token_uuid === undefined || token_uuid === null) {
        throw new Error("Missing the required parameter 'token_uuid' when calling patchToken");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchToken");
      }

      let pathParams = {
        'token.uuid': token_uuid
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/users/tokens/{token.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchUser operation.
     * @callback module:api/UsersV1Api~patchUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch current user
     * @param {module:model/V1User} body
     * @param {module:api/UsersV1Api~patchUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1User}
     */
    patchUser(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchUser");
      }

      let pathParams = {
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
      let returnType = V1User;
      return this.apiClient.callApi(
        '/api/v1/users', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateToken operation.
     * @callback module:api/UsersV1Api~updateTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update token
     * @param {String} token_uuid UUID
     * @param {module:model/V1Token} body Token body
     * @param {module:api/UsersV1Api~updateTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    updateToken(token_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'token_uuid' is set
      if (token_uuid === undefined || token_uuid === null) {
        throw new Error("Missing the required parameter 'token_uuid' when calling updateToken");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateToken");
      }

      let pathParams = {
        'token.uuid': token_uuid
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/users/tokens/{token.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UsersV1Api~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current user
     * @param {module:model/V1User} body
     * @param {module:api/UsersV1Api~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1User}
     */
    updateUser(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUser");
      }

      let pathParams = {
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
      let returnType = V1User;
      return this.apiClient.callApi(
        '/api/v1/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
