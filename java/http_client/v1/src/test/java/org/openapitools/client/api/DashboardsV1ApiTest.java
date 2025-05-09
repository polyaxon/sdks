/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1Dashboard;
import org.openapitools.client.model.V1ListDashboardsResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for DashboardsV1Api
 */
@Disabled
public class DashboardsV1ApiTest {

    private final DashboardsV1Api api = new DashboardsV1Api();

    /**
     * Create dashboard
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createDashboardTest() throws ApiException {
        String owner = null;
        V1Dashboard body = null;
        V1Dashboard response = api.createDashboard(owner, body);
        // TODO: test validations
    }

    /**
     * Delete dashboard
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteDashboardTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteDashboard(owner, uuid);
        // TODO: test validations
    }

    /**
     * Get dashboard
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getDashboardTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1Dashboard response = api.getDashboard(owner, uuid);
        // TODO: test validations
    }

    /**
     * List dashboard names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listDashboardNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListDashboardsResponse response = api.listDashboardNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List dashboards
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listDashboardsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListDashboardsResponse response = api.listDashboards(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Patch dashboard
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchDashboardTest() throws ApiException {
        String owner = null;
        String dashboardUuid = null;
        V1Dashboard body = null;
        V1Dashboard response = api.patchDashboard(owner, dashboardUuid, body);
        // TODO: test validations
    }

    /**
     * Update dashboard
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateDashboardTest() throws ApiException {
        String owner = null;
        String dashboardUuid = null;
        V1Dashboard body = null;
        V1Dashboard response = api.updateDashboard(owner, dashboardUuid, body);
        // TODO: test validations
    }

}
