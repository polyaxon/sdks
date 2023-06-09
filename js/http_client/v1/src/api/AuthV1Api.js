/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc17
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1Auth from '../model/V1Auth';
import V1Credentials from '../model/V1Credentials';
import V1PasswordChange from '../model/V1PasswordChange';
import V1TrialStart from '../model/V1TrialStart';
import V1UserEmail from '../model/V1UserEmail';
import V1UserSingup from '../model/V1UserSingup';

/**
* AuthV1 service.
* @module api/AuthV1Api
* @version 2.0.0-rc17
*/
export default class AuthV1Api {

    /**
    * Constructs a new AuthV1Api.
    * Polyaxon sdk
    * @alias module:api/AuthV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changePassword operation.
     * @callback module:api/AuthV1Api~changePasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change password
     * @param {module:model/V1PasswordChange} body
     * @param {module:api/AuthV1Api~changePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    changePassword(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling changePassword");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/auth/change-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthV1Api~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Auth} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login
     * @param {module:model/V1Credentials} body
     * @param {module:api/AuthV1Api~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Auth}
     */
    login(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling login");
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
      let returnType = V1Auth;
      return this.apiClient.callApi(
        '/api/v1/auth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPassword operation.
     * @callback module:api/AuthV1Api~resetPasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password
     * @param {module:model/V1UserEmail} body
     * @param {module:api/AuthV1Api~resetPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resetPassword(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPassword");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/auth/reset-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordConfirm operation.
     * @callback module:api/AuthV1Api~resetPasswordConfirmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Auth} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password confirm
     * @param {module:model/V1PasswordChange} body
     * @param {module:api/AuthV1Api~resetPasswordConfirmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Auth}
     */
    resetPasswordConfirm(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPasswordConfirm");
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
      let returnType = V1Auth;
      return this.apiClient.callApi(
        '/api/v1/auth/reset-password-confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the signup operation.
     * @callback module:api/AuthV1Api~signupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Auth} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Signup
     * @param {module:model/V1UserSingup} body
     * @param {module:api/AuthV1Api~signupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Auth}
     */
    signup(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling signup");
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
      let returnType = V1Auth;
      return this.apiClient.callApi(
        '/api/v1/auth/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trial operation.
     * @callback module:api/AuthV1Api~trialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trial Start
     * @param {module:model/V1TrialStart} body
     * @param {module:api/AuthV1Api~trialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    trial(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling trial");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/auth/trial', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
