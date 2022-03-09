// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.16.1
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
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for UsersV1Api
 */
@Ignore
public class UsersV1ApiTest {

    private final UsersV1Api api = new UsersV1Api();

    
    /**
     * Create token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getUserTest() throws ApiException {
                V1User response = api.getUser();
        // TODO: test validations
    }
    
    /**
     * List tokens
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
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
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateUserTest() throws ApiException {
        V1User body = null;
                V1User response = api.updateUser(body);
        // TODO: test validations
    }
    
}
