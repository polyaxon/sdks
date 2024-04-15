/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1Auth;
import org.openapitools.client.model.V1Credentials;
import org.openapitools.client.model.V1PasswordChange;
import org.openapitools.client.model.V1TrialStart;
import org.openapitools.client.model.V1UserEmail;
import org.openapitools.client.model.V1UserSingup;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AuthV1Api
 */
@Disabled
public class AuthV1ApiTest {

    private final AuthV1Api api = new AuthV1Api();

    /**
     * Change password
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void changePasswordTest() throws ApiException {
        V1PasswordChange body = null;
        api.changePassword(body);
        // TODO: test validations
    }

    /**
     * Login
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void loginTest() throws ApiException {
        V1Credentials body = null;
        V1Auth response = api.login(body);
        // TODO: test validations
    }

    /**
     * Reset password
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void resetPasswordTest() throws ApiException {
        V1UserEmail body = null;
        api.resetPassword(body);
        // TODO: test validations
    }

    /**
     * Reset password confirm
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void resetPasswordConfirmTest() throws ApiException {
        V1PasswordChange body = null;
        V1Auth response = api.resetPasswordConfirm(body);
        // TODO: test validations
    }

    /**
     * Signup
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void signupTest() throws ApiException {
        V1UserSingup body = null;
        V1Auth response = api.signup(body);
        // TODO: test validations
    }

    /**
     * Trial Start
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void trialTest() throws ApiException {
        V1TrialStart body = null;
        api.trial(body);
        // TODO: test validations
    }

}
