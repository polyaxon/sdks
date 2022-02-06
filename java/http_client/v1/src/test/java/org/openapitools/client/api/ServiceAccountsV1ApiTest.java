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
 * The version of the OpenAPI document: 1.15.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListServiceAccountsResponse;
import org.openapitools.client.model.V1ListTokenResponse;
import org.openapitools.client.model.V1ServiceAccount;
import org.openapitools.client.model.V1Token;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ServiceAccountsV1Api
 */
@Ignore
public class ServiceAccountsV1ApiTest {

    private final ServiceAccountsV1Api api = new ServiceAccountsV1Api();

    
    /**
     * Create service account
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createServiceAccountTest() throws ApiException {
        String owner = null;
        V1ServiceAccount body = null;
                V1ServiceAccount response = api.createServiceAccount(owner, body);
        // TODO: test validations
    }
    
    /**
     * Create service account token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createServiceAccountTokenTest() throws ApiException {
        String owner = null;
        String entity = null;
        V1Token body = null;
                V1Token response = api.createServiceAccountToken(owner, entity, body);
        // TODO: test validations
    }
    
    /**
     * Delete service account
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteServiceAccountTest() throws ApiException {
        String owner = null;
        String uuid = null;
                api.deleteServiceAccount(owner, uuid);
        // TODO: test validations
    }
    
    /**
     * Delete service account token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteServiceAccountTokenTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
                api.deleteServiceAccountToken(owner, entity, uuid);
        // TODO: test validations
    }
    
    /**
     * Get service account
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getServiceAccountTest() throws ApiException {
        String owner = null;
        String uuid = null;
                V1ServiceAccount response = api.getServiceAccount(owner, uuid);
        // TODO: test validations
    }
    
    /**
     * Get service account token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getServiceAccountTokenTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
                V1Token response = api.getServiceAccountToken(owner, entity, uuid);
        // TODO: test validations
    }
    
    /**
     * List service accounts names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listServiceAccountNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
                V1ListServiceAccountsResponse response = api.listServiceAccountNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }
    
    /**
     * List service account tokens
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listServiceAccountTokensTest() throws ApiException {
        String owner = null;
        String uuid = null;
        String entity = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean noPage = null;
                V1ListTokenResponse response = api.listServiceAccountTokens(owner, uuid, entity, offset, limit, sort, query, noPage);
        // TODO: test validations
    }
    
    /**
     * List service accounts
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listServiceAccountsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
                V1ListServiceAccountsResponse response = api.listServiceAccounts(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }
    
    /**
     * Patch service account
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchServiceAccountTest() throws ApiException {
        String owner = null;
        String saUuid = null;
        V1ServiceAccount body = null;
                V1ServiceAccount response = api.patchServiceAccount(owner, saUuid, body);
        // TODO: test validations
    }
    
    /**
     * Patch service account token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchServiceAccountTokenTest() throws ApiException {
        String owner = null;
        String entity = null;
        String tokenUuid = null;
        V1Token body = null;
                V1Token response = api.patchServiceAccountToken(owner, entity, tokenUuid, body);
        // TODO: test validations
    }
    
    /**
     * Update service account
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateServiceAccountTest() throws ApiException {
        String owner = null;
        String saUuid = null;
        V1ServiceAccount body = null;
                V1ServiceAccount response = api.updateServiceAccount(owner, saUuid, body);
        // TODO: test validations
    }
    
    /**
     * Update service account token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateServiceAccountTokenTest() throws ApiException {
        String owner = null;
        String entity = null;
        String tokenUuid = null;
        V1Token body = null;
                V1Token response = api.updateServiceAccountToken(owner, entity, tokenUuid, body);
        // TODO: test validations
    }
    
}
