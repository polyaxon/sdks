/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ConnectionResponse;
import org.openapitools.client.model.V1ListConnectionsResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ConnectionsV1Api
 */
@Disabled
public class ConnectionsV1ApiTest {

    private final ConnectionsV1Api api = new ConnectionsV1Api();

    /**
     * Create connection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createConnectionTest() throws ApiException {
        String owner = null;
        V1ConnectionResponse body = null;
        V1ConnectionResponse response = api.createConnection(owner, body);
        // TODO: test validations
    }

    /**
     * Delete connection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteConnectionTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteConnection(owner, uuid);
        // TODO: test validations
    }

    /**
     * Get connection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getConnectionTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1ConnectionResponse response = api.getConnection(owner, uuid);
        // TODO: test validations
    }

    /**
     * List connections names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listConnectionNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListConnectionsResponse response = api.listConnectionNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List connections
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listConnectionsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListConnectionsResponse response = api.listConnections(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Patch connection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchConnectionTest() throws ApiException {
        String owner = null;
        String connectionUuid = null;
        V1ConnectionResponse body = null;
        V1ConnectionResponse response = api.patchConnection(owner, connectionUuid, body);
        // TODO: test validations
    }

    /**
     * Update connection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateConnectionTest() throws ApiException {
        String owner = null;
        String connectionUuid = null;
        V1ConnectionResponse body = null;
        V1ConnectionResponse response = api.updateConnection(owner, connectionUuid, body);
        // TODO: test validations
    }

}
