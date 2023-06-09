/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc18
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RuntimeError,
  V1Auth,
  V1Credentials,
  V1PasswordChange,
  V1TrialStart,
  V1UserEmail,
  V1UserSingup,
} from '../models';
import {
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1AuthFromJSON,
    V1AuthToJSON,
    V1CredentialsFromJSON,
    V1CredentialsToJSON,
    V1PasswordChangeFromJSON,
    V1PasswordChangeToJSON,
    V1TrialStartFromJSON,
    V1TrialStartToJSON,
    V1UserEmailFromJSON,
    V1UserEmailToJSON,
    V1UserSingupFromJSON,
    V1UserSingupToJSON,
} from '../models';

export interface ChangePasswordRequest {
    body: V1PasswordChange;
}

export interface LoginRequest {
    body: V1Credentials;
}

export interface ResetPasswordRequest {
    body: V1UserEmail;
}

export interface ResetPasswordConfirmRequest {
    body: V1PasswordChange;
}

export interface SignupRequest {
    body: V1UserSingup;
}

export interface TrialRequest {
    body: V1TrialStart;
}

/**
 *
 */
export class AuthV1Api extends runtime.BaseAPI {

    /**
     * Change password
     */
    async changePasswordRaw(requestParameters: ChangePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling changePassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/change-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1PasswordChangeToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Change password
     */
    async changePassword(requestParameters: ChangePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.changePasswordRaw(requestParameters, initOverrides);
    }

    /**
     * Login
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Auth>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1CredentialsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AuthFromJSON(jsonValue));
    }

    /**
     * Login
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Auth> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reset password
     */
    async resetPasswordRaw(requestParameters: ResetPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling resetPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/reset-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserEmailToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reset password
     */
    async resetPassword(requestParameters: ResetPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetPasswordRaw(requestParameters, initOverrides);
    }

    /**
     * Reset password confirm
     */
    async resetPasswordConfirmRaw(requestParameters: ResetPasswordConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Auth>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling resetPasswordConfirm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/reset-password-confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1PasswordChangeToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AuthFromJSON(jsonValue));
    }

    /**
     * Reset password confirm
     */
    async resetPasswordConfirm(requestParameters: ResetPasswordConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Auth> {
        const response = await this.resetPasswordConfirmRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Signup
     */
    async signupRaw(requestParameters: SignupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Auth>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling signup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/signup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserSingupToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AuthFromJSON(jsonValue));
    }

    /**
     * Signup
     */
    async signup(requestParameters: SignupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Auth> {
        const response = await this.signupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Trial Start
     */
    async trialRaw(requestParameters: TrialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling trial.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/trial`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1TrialStartToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Trial Start
     */
    async trial(requestParameters: TrialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.trialRaw(requestParameters, initOverrides);
    }

}
