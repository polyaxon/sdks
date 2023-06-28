/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc24
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListSearchesResponse from '../model/V1ListSearchesResponse';
import V1Search from '../model/V1Search';

/**
* SearchesV1 service.
* @module api/SearchesV1Api
* @version 2.0.0-rc24
*/
export default class SearchesV1Api {

    /**
    * Constructs a new SearchesV1Api.
    * Polyaxon sdk
    * @alias module:api/SearchesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSearch operation.
     * @callback module:api/SearchesV1Api~createSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create search
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Search} body Search body
     * @param {module:api/SearchesV1Api~createSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    createSearch(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSearch");
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/searches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSearch operation.
     * @callback module:api/SearchesV1Api~deleteSearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete search
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/SearchesV1Api~deleteSearchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSearch(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteSearch");
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
        '/api/v1/orgs/{owner}/searches/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSearch operation.
     * @callback module:api/SearchesV1Api~getSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get search
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/SearchesV1Api~getSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    getSearch(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getSearch");
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/searches/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSearchNames operation.
     * @callback module:api/SearchesV1Api~listSearchNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSearchesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List search names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/SearchesV1Api~listSearchNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSearchesResponse}
     */
    listSearchNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listSearchNames");
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
      let returnType = V1ListSearchesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/searches/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSearches operation.
     * @callback module:api/SearchesV1Api~listSearchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSearchesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List searches
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/SearchesV1Api~listSearchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSearchesResponse}
     */
    listSearches(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listSearches");
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
      let returnType = V1ListSearchesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/searches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchSearch operation.
     * @callback module:api/SearchesV1Api~patchSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch search
     * @param {String} owner Owner of the namespace
     * @param {String} search_uuid UUID
     * @param {module:model/V1Search} body Search body
     * @param {module:api/SearchesV1Api~patchSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    patchSearch(owner, search_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchSearch");
      }
      // verify the required parameter 'search_uuid' is set
      if (search_uuid === undefined || search_uuid === null) {
        throw new Error("Missing the required parameter 'search_uuid' when calling patchSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchSearch");
      }

      let pathParams = {
        'owner': owner,
        'search.uuid': search_uuid
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/searches/{search.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSearch operation.
     * @callback module:api/SearchesV1Api~updateSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update search
     * @param {String} owner Owner of the namespace
     * @param {String} search_uuid UUID
     * @param {module:model/V1Search} body Search body
     * @param {module:api/SearchesV1Api~updateSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    updateSearch(owner, search_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateSearch");
      }
      // verify the required parameter 'search_uuid' is set
      if (search_uuid === undefined || search_uuid === null) {
        throw new Error("Missing the required parameter 'search_uuid' when calling updateSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSearch");
      }

      let pathParams = {
        'owner': owner,
        'search.uuid': search_uuid
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/searches/{search.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
