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
import java.io.File;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ArtifactsStoresV1Api
 */
@Disabled
public class ArtifactsStoresV1ApiTest {

    private final ArtifactsStoresV1Api api = new ArtifactsStoresV1Api();

    /**
     * Upload artifact to a store
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void uploadArtifactTest() throws ApiException {
        String owner = null;
        String uuid = null;
        File uploadfile = null;
        String path = null;
        Boolean overwrite = null;
        api.uploadArtifact(owner, uuid, uploadfile, path, overwrite);
        // TODO: test validations
    }

}
