/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc39
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListTeamMembersResponse;
import org.openapitools.client.model.V1ListTeamsResponse;
import org.openapitools.client.model.V1Team;
import org.openapitools.client.model.V1TeamMember;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TeamsV1Api
 */
@Disabled
public class TeamsV1ApiTest {

    private final TeamsV1Api api = new TeamsV1Api();

    /**
     * Create team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createTeamTest() throws ApiException {
        String owner = null;
        V1Team body = null;
        V1Team response = api.createTeam(owner, body);
        // TODO: test validations
    }

    /**
     * Create team member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        V1TeamMember body = null;
        V1TeamMember response = api.createTeamMember(owner, team, body);
        // TODO: test validations
    }

    /**
     * Delete team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteTeamTest() throws ApiException {
        String owner = null;
        String name = null;
        api.deleteTeam(owner, name);
        // TODO: test validations
    }

    /**
     * Delete team member details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String user = null;
        api.deleteTeamMember(owner, team, user);
        // TODO: test validations
    }

    /**
     * Get team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Team response = api.getTeam(owner, name);
        // TODO: test validations
    }

    /**
     * Get team member details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String user = null;
        V1TeamMember response = api.getTeamMember(owner, team, user);
        // TODO: test validations
    }

    /**
     * Get team members
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTeamMembersTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListTeamMembersResponse response = api.listTeamMembers(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List teams names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTeamNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListTeamsResponse response = api.listTeamNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List teams
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTeamsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListTeamsResponse response = api.listTeams(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Patch team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchTeamTest() throws ApiException {
        String owner = null;
        String teamName = null;
        V1Team body = null;
        V1Team response = api.patchTeam(owner, teamName, body);
        // TODO: test validations
    }

    /**
     * Patch team member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String memberUser = null;
        V1TeamMember body = null;
        V1TeamMember response = api.patchTeamMember(owner, team, memberUser, body);
        // TODO: test validations
    }

    /**
     * Update team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateTeamTest() throws ApiException {
        String owner = null;
        String teamName = null;
        V1Team body = null;
        V1Team response = api.updateTeam(owner, teamName, body);
        // TODO: test validations
    }

    /**
     * Update team member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String memberUser = null;
        V1TeamMember body = null;
        V1TeamMember response = api.updateTeamMember(owner, team, memberUser, body);
        // TODO: test validations
    }

}
