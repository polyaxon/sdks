/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListActivitiesResponse;
import org.openapitools.client.model.V1ListTokenResponse;
import org.openapitools.client.model.V1Token;
import org.openapitools.client.model.V1User;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for UsersV1Api
 */
@Disabled
public class UsersV1ApiTest {

    private final UsersV1Api api = new UsersV1Api();

    /**
     * Create token
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createTokenTest() throws ApiException {
        V1Token body = null;
        V1Token response = api.createToken(body);
        // TODO: test validations
    }

    /**
     * Delete token
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteTokenTest() throws ApiException {
        String uuid = null;
        api.deleteToken(uuid);
        // TODO: test validations
    }

    /**
     * User History
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getHistoryTest() throws ApiException {
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean noPage = null;
        V1ListActivitiesResponse response = api.getHistory(offset, limit, sort, query, noPage);
        // TODO: test validations
    }

    /**
     * User suggestions
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getSuggestionsTest() throws ApiException {
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean noPage = null;
        Object response = api.getSuggestions(offset, limit, sort, query, noPage);
        // TODO: test validations
    }

    /**
     * Get token
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTokenTest() throws ApiException {
        String uuid = null;
        V1Token response = api.getToken(uuid);
        // TODO: test validations
    }

    /**
     * Get current user
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getUserTest() throws ApiException {
        V1User response = api.getUser();
        // TODO: test validations
    }

    /**
     * List tokens
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTokensTest() throws ApiException {
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean noPage = null;
        V1ListTokenResponse response = api.listTokens(offset, limit, sort, query, noPage);
        // TODO: test validations
    }

    /**
     * Patch token
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchTokenTest() throws ApiException {
        String tokenUuid = null;
        V1Token body = null;
        V1Token response = api.patchToken(tokenUuid, body);
        // TODO: test validations
    }

    /**
     * Patch current user
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchUserTest() throws ApiException {
        V1User body = null;
        V1User response = api.patchUser(body);
        // TODO: test validations
    }

    /**
     * Update token
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateTokenTest() throws ApiException {
        String tokenUuid = null;
        V1Token body = null;
        V1Token response = api.updateToken(tokenUuid, body);
        // TODO: test validations
    }

    /**
     * Update current user
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateUserTest() throws ApiException {
        V1User body = null;
        V1User response = api.updateUser(body);
        // TODO: test validations
    }

}
