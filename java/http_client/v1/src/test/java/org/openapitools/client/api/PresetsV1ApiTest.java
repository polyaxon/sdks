/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListPresetsResponse;
import org.openapitools.client.model.V1Preset;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PresetsV1Api
 */
@Disabled
public class PresetsV1ApiTest {

    private final PresetsV1Api api = new PresetsV1Api();

    /**
     * Create scheduling presets
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createPresetTest() throws ApiException {
        String owner = null;
        V1Preset body = null;
        V1Preset response = api.createPreset(owner, body);
        // TODO: test validations
    }

    /**
     * Delete scheduling preset
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deletePresetTest() throws ApiException {
        String owner = null;
        String uuid = null;
        String entity = null;
        api.deletePreset(owner, uuid, entity);
        // TODO: test validations
    }

    /**
     * Get scheduling preset
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getPresetTest() throws ApiException {
        String owner = null;
        String uuid = null;
        String entity = null;
        V1Preset response = api.getPreset(owner, uuid, entity);
        // TODO: test validations
    }

    /**
     * List scheduling presets names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listPresetNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListPresetsResponse response = api.listPresetNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List scheduling presets
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listPresetsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListPresetsResponse response = api.listPresets(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Patch scheduling preset
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchPresetTest() throws ApiException {
        String owner = null;
        String presetUuid = null;
        V1Preset body = null;
        V1Preset response = api.patchPreset(owner, presetUuid, body);
        // TODO: test validations
    }

    /**
     * Update scheduling preset
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updatePresetTest() throws ApiException {
        String owner = null;
        String presetUuid = null;
        V1Preset body = null;
        V1Preset response = api.updatePreset(owner, presetUuid, body);
        // TODO: test validations
    }

}
