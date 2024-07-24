# TeamsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveTeamRuns**](TeamsV1Api.md#approveTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/approve | Approve cross-project runs selection |
| [**archiveTeamRuns**](TeamsV1Api.md#archiveTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/archive | Archive cross-project runs selection |
| [**bookmarkTeamRuns**](TeamsV1Api.md#bookmarkTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/bookmark | Bookmark cross-project runs selection |
| [**createTeam**](TeamsV1Api.md#createTeam) | **POST** /api/v1/orgs/{owner}/teams | Create team |
| [**createTeamMember**](TeamsV1Api.md#createTeamMember) | **POST** /api/v1/orgs/{owner}/teams/{team}/members | Create team member |
| [**deleteTeam**](TeamsV1Api.md#deleteTeam) | **DELETE** /api/v1/orgs/{owner}/teams/{name} | Delete team |
| [**deleteTeamMember**](TeamsV1Api.md#deleteTeamMember) | **DELETE** /api/v1/orgs/{owner}/teams/{team}/members/{user} | Delete team member details |
| [**deleteTeamRuns**](TeamsV1Api.md#deleteTeamRuns) | **DELETE** /api/v1/orgs/{owner}/teams/{name}/runs/delete | Delete cross-project runs selection |
| [**getTeam**](TeamsV1Api.md#getTeam) | **GET** /api/v1/orgs/{owner}/teams/{name} | Get team |
| [**getTeamActivities**](TeamsV1Api.md#getTeamActivities) | **GET** /api/v1/orgs/{owner}/teams/{name}/activities | Get organization activities |
| [**getTeamMember**](TeamsV1Api.md#getTeamMember) | **GET** /api/v1/orgs/{owner}/teams/{team}/members/{user} | Get team member details |
| [**getTeamMultiRunEvents**](TeamsV1Api.md#getTeamMultiRunEvents) | **GET** /streams/v1/{namespace}/orgs/{owner}/teams/{entity}/runs/multi/events/{kind} | Get multi runs events |
| [**getTeamMultiRunImportance**](TeamsV1Api.md#getTeamMultiRunImportance) | **POST** /streams/v1/{namespace}/orgs/{owner}/teams/{entity}/runs/multi/importance | Get multi run importance |
| [**getTeamRun**](TeamsV1Api.md#getTeamRun) | **GET** /api/v1/orgs/{owner}/teams/{entity}/runs/{uuid} | Get a run in a team |
| [**getTeamRuns**](TeamsV1Api.md#getTeamRuns) | **GET** /api/v1/orgs/{owner}/teams/{name}/runs | Get all runs in a team |
| [**getTeamRunsArtifactsLineage**](TeamsV1Api.md#getTeamRunsArtifactsLineage) | **GET** /api/v1/orgs/{owner}/teams/{name}/runs/lineage/artifacts | Get runs artifacts lineage |
| [**getTeamStats**](TeamsV1Api.md#getTeamStats) | **GET** /api/v1/orgs/{owner}/teams/{name}/stats | Get team stats |
| [**getTeamVersions**](TeamsV1Api.md#getTeamVersions) | **GET** /api/v1/orgs/{owner}/teams/{entity}/versions/{kind} | Get all runs in a team |
| [**invalidateTeamRuns**](TeamsV1Api.md#invalidateTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/invalidate | Invalidate cross-project runs selection |
| [**listTeamMembers**](TeamsV1Api.md#listTeamMembers) | **GET** /api/v1/orgs/{owner}/teams/{name}/members | Get team members |
| [**listTeamNames**](TeamsV1Api.md#listTeamNames) | **GET** /api/v1/orgs/{owner}/teams/names | List teams names |
| [**listTeams**](TeamsV1Api.md#listTeams) | **GET** /api/v1/orgs/{owner}/teams | List teams |
| [**patchTeam**](TeamsV1Api.md#patchTeam) | **PATCH** /api/v1/orgs/{owner}/teams/{team.name} | Patch team |
| [**patchTeamMember**](TeamsV1Api.md#patchTeamMember) | **PATCH** /api/v1/orgs/{owner}/teams/{team}/members/{member.user} | Patch team member |
| [**restoreTeamRuns**](TeamsV1Api.md#restoreTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/restore | Restore cross-project runs selection |
| [**skipTeamRuns**](TeamsV1Api.md#skipTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/Skip | Skip cross-project runs selection |
| [**stopTeamRuns**](TeamsV1Api.md#stopTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/stop | Stop cross-project runs selection |
| [**tagTeamRuns**](TeamsV1Api.md#tagTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/tag | Tag cross-project runs selection |
| [**transferTeamRuns**](TeamsV1Api.md#transferTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/transfer | Transfer cross-project runs selection to a new project |
| [**updateTeam**](TeamsV1Api.md#updateTeam) | **PUT** /api/v1/orgs/{owner}/teams/{team.name} | Update team |
| [**updateTeamMember**](TeamsV1Api.md#updateTeamMember) | **PUT** /api/v1/orgs/{owner}/teams/{team}/members/{member.user} | Update team member |


<a name="approveTeamRuns"></a>
# **approveTeamRuns**
> approveTeamRuns(owner, name, body)

Approve cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.approveTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#approveTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="archiveTeamRuns"></a>
# **archiveTeamRuns**
> archiveTeamRuns(owner, name, body)

Archive cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.archiveTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#archiveTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="bookmarkTeamRuns"></a>
# **bookmarkTeamRuns**
> bookmarkTeamRuns(owner, name, body)

Bookmark cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.bookmarkTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#bookmarkTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="createTeam"></a>
# **createTeam**
> V1Team createTeam(owner, body)

Create team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Team body = new V1Team(); // V1Team | Team body
    try {
      V1Team result = apiInstance.createTeam(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#createTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **body** | [**V1Team**](V1Team.md)| Team body | |

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="createTeamMember"></a>
# **createTeamMember**
> V1TeamMember createTeamMember(owner, team, body)

Create team member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String team = "team_example"; // String | Team
    V1TeamMember body = new V1TeamMember(); // V1TeamMember | Team body
    try {
      V1TeamMember result = apiInstance.createTeamMember(owner, team, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#createTeamMember");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **team** | **String**| Team | |
| **body** | [**V1TeamMember**](V1TeamMember.md)| Team body | |

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="deleteTeam"></a>
# **deleteTeam**
> deleteTeam(owner, name)

Delete team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.deleteTeam(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#deleteTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Component under namespace | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="deleteTeamMember"></a>
# **deleteTeamMember**
> deleteTeamMember(owner, team, user)

Delete team member details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String team = "team_example"; // String | Team under namespace
    String user = "user_example"; // String | Member under team
    try {
      apiInstance.deleteTeamMember(owner, team, user);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#deleteTeamMember");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **team** | **String**| Team under namespace | |
| **user** | **String**| Member under team | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="deleteTeamRuns"></a>
# **deleteTeamRuns**
> deleteTeamRuns(owner, name, body)

Delete cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.deleteTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#deleteTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeam"></a>
# **getTeam**
> V1Team getTeam(owner, name)

Get team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      V1Team result = apiInstance.getTeam(owner, name);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Component under namespace | |

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamActivities"></a>
# **getTeamActivities**
> V1ListActivitiesResponse getTeamActivities(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get organization activities

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity managing the resource
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListActivitiesResponse result = apiInstance.getTeamActivities(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamActivities");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity managing the resource | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Mode of the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListActivitiesResponse**](V1ListActivitiesResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamMember"></a>
# **getTeamMember**
> V1TeamMember getTeamMember(owner, team, user)

Get team member details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String team = "team_example"; // String | Team under namespace
    String user = "user_example"; // String | Member under team
    try {
      V1TeamMember result = apiInstance.getTeamMember(owner, team, user);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamMember");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **team** | **String**| Team under namespace | |
| **user** | **String**| Member under team | |

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamMultiRunEvents"></a>
# **getTeamMultiRunEvents**
> V1MultiEventsResponse getTeamMultiRunEvents(namespace, owner, entity, kind, names, runs, orient, force, sample, connection, status)

Get multi runs events

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity where the run will be assigned
    String kind = "model"; // String | The artifact kind
    String names = "names_example"; // String | Names query param.
    String runs = "runs_example"; // String | Runs query param.
    String orient = "orient_example"; // String | Orient query param.
    Boolean force = true; // Boolean | Force query param.
    Integer sample = 56; // Integer | Sample query param.
    String connection = "connection_example"; // String | Connection to use.
    String status = "created"; // String | Optional status.
    try {
      V1MultiEventsResponse result = apiInstance.getTeamMultiRunEvents(namespace, owner, entity, kind, names, runs, orient, force, sample, connection, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamMultiRunEvents");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespace** | **String**| namespace | |
| **owner** | **String**| Owner of the namespace | |
| **entity** | **String**| Entity where the run will be assigned | |
| **kind** | **String**| The artifact kind | [enum: model, audio, video, histogram, image, tensor, dataframe, chart, csv, tsv, psv, ssv, metric, env, html, text, file, dir, dockerfile, docker_image, data, coderef, table, tensorboard, curve, confusion, analysis, iteration, markdown, system, span, artifact] |
| **names** | **String**| Names query param. | [optional] |
| **runs** | **String**| Runs query param. | [optional] |
| **orient** | **String**| Orient query param. | [optional] |
| **force** | **Boolean**| Force query param. | [optional] |
| **sample** | **Integer**| Sample query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |
| **status** | **String**| Optional status. | [optional] [default to created] [enum: created, resuming, on_schedule, compiled, queued, scheduled, starting, running, processing, stopping, failed, stopped, succeeded, skipped, warning, unschedulable, upstream_failed, retrying, unknown, done] |

### Return type

[**V1MultiEventsResponse**](V1MultiEventsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamMultiRunImportance"></a>
# **getTeamMultiRunImportance**
> V1MultiEventsResponse getTeamMultiRunImportance(namespace, owner, entity, body)

Get multi run importance

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity where the run will be assigned
    Object body = null; // Object | Params/Metrics data
    try {
      V1MultiEventsResponse result = apiInstance.getTeamMultiRunImportance(namespace, owner, entity, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamMultiRunImportance");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespace** | **String**| namespace | |
| **owner** | **String**| Owner of the namespace | |
| **entity** | **String**| Entity where the run will be assigned | |
| **body** | **Object**| Params/Metrics data | |

### Return type

[**V1MultiEventsResponse**](V1MultiEventsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamRun"></a>
# **getTeamRun**
> V1Run getTeamRun(owner, entity, uuid)

Get a run in a team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1Run result = apiInstance.getTeamRun(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamRun");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **entity** | **String**| Entity: project name, hub name, registry name, ... | |
| **uuid** | **String**| Uuid identifier of the sub-entity | |

### Return type

[**V1Run**](V1Run.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamRuns"></a>
# **getTeamRuns**
> V1ListRunsResponse getTeamRuns(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get all runs in a team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity managing the resource
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunsResponse result = apiInstance.getTeamRuns(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity managing the resource | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Mode of the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListRunsResponse**](V1ListRunsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamRunsArtifactsLineage"></a>
# **getTeamRunsArtifactsLineage**
> V1ListRunArtifactsResponse getTeamRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get runs artifacts lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity managing the resource
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunArtifactsResponse result = apiInstance.getTeamRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamRunsArtifactsLineage");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity managing the resource | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Mode of the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListRunArtifactsResponse**](V1ListRunArtifactsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamStats"></a>
# **getTeamStats**
> Object getTeamStats(owner, name, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc)

Get team stats

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity managing the resource
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Stats Mode.
    String kind = "kind_example"; // String | Stats Kind.
    String aggregate = "aggregate_example"; // String | Stats aggregate.
    String groupby = "groupby_example"; // String | Stats group.
    String trunc = "trunc_example"; // String | Stats trunc.
    try {
      Object result = apiInstance.getTeamStats(owner, name, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamStats");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity managing the resource | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Stats Mode. | [optional] |
| **kind** | **String**| Stats Kind. | [optional] |
| **aggregate** | **String**| Stats aggregate. | [optional] |
| **groupby** | **String**| Stats group. | [optional] |
| **trunc** | **String**| Stats trunc. | [optional] |

### Return type

**Object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="getTeamVersions"></a>
# **getTeamVersions**
> V1ListProjectVersionsResponse getTeamVersions(owner, entity, kind, offset, limit, sort, query, noPage)

Get all runs in a team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String kind = "kind_example"; // String | Version Kind
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectVersionsResponse result = apiInstance.getTeamVersions(owner, entity, kind, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#getTeamVersions");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **entity** | **String**| Entity name under namespace | |
| **kind** | **String**| Version Kind | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListProjectVersionsResponse**](V1ListProjectVersionsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="invalidateTeamRuns"></a>
# **invalidateTeamRuns**
> invalidateTeamRuns(owner, name, body)

Invalidate cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.invalidateTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#invalidateTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="listTeamMembers"></a>
# **listTeamMembers**
> V1ListTeamMembersResponse listTeamMembers(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get team members

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity managing the resource
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListTeamMembersResponse result = apiInstance.listTeamMembers(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#listTeamMembers");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity managing the resource | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Mode of the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListTeamMembersResponse**](V1ListTeamMembersResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="listTeamNames"></a>
# **listTeamNames**
> V1ListTeamsResponse listTeamNames(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List teams names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListTeamsResponse result = apiInstance.listTeamNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#listTeamNames");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Mode of the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListTeamsResponse**](V1ListTeamsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="listTeams"></a>
# **listTeams**
> V1ListTeamsResponse listTeams(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List teams

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListTeamsResponse result = apiInstance.listTeams(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#listTeams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] |
| **mode** | **String**| Mode of the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListTeamsResponse**](V1ListTeamsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="patchTeam"></a>
# **patchTeam**
> V1Team patchTeam(owner, teamName, body)

Patch team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String teamName = "teamName_example"; // String | Name
    V1Team body = new V1Team(); // V1Team | Team body
    try {
      V1Team result = apiInstance.patchTeam(owner, teamName, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#patchTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **teamName** | **String**| Name | |
| **body** | [**V1Team**](V1Team.md)| Team body | |

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="patchTeamMember"></a>
# **patchTeamMember**
> V1TeamMember patchTeamMember(owner, team, memberUser, body)

Patch team member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String team = "team_example"; // String | Team
    String memberUser = "memberUser_example"; // String | User
    V1TeamMember body = new V1TeamMember(); // V1TeamMember | Team body
    try {
      V1TeamMember result = apiInstance.patchTeamMember(owner, team, memberUser, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#patchTeamMember");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **team** | **String**| Team | |
| **memberUser** | **String**| User | |
| **body** | [**V1TeamMember**](V1TeamMember.md)| Team body | |

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="restoreTeamRuns"></a>
# **restoreTeamRuns**
> restoreTeamRuns(owner, name, body)

Restore cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.restoreTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#restoreTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="skipTeamRuns"></a>
# **skipTeamRuns**
> skipTeamRuns(owner, name, body)

Skip cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.skipTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#skipTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="stopTeamRuns"></a>
# **stopTeamRuns**
> stopTeamRuns(owner, name, body)

Stop cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.stopTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#stopTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="tagTeamRuns"></a>
# **tagTeamRuns**
> tagTeamRuns(owner, name, body)

Tag cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1EntitiesTags body = new V1EntitiesTags(); // V1EntitiesTags | Data
    try {
      apiInstance.tagTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#tagTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1EntitiesTags**](V1EntitiesTags.md)| Data | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="transferTeamRuns"></a>
# **transferTeamRuns**
> transferTeamRuns(owner, name, body)

Transfer cross-project runs selection to a new project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1EntitiesTransfer body = new V1EntitiesTransfer(); // V1EntitiesTransfer | Data
    try {
      apiInstance.transferTeamRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#transferTeamRuns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **name** | **String**| Entity under namespace | |
| **body** | [**V1EntitiesTransfer**](V1EntitiesTransfer.md)| Data | |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="updateTeam"></a>
# **updateTeam**
> V1Team updateTeam(owner, teamName, body)

Update team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String teamName = "teamName_example"; // String | Name
    V1Team body = new V1Team(); // V1Team | Team body
    try {
      V1Team result = apiInstance.updateTeam(owner, teamName, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#updateTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **teamName** | **String**| Name | |
| **body** | [**V1Team**](V1Team.md)| Team body | |

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="updateTeamMember"></a>
# **updateTeamMember**
> V1TeamMember updateTeamMember(owner, team, memberUser, body)

Update team member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    TeamsV1Api apiInstance = new TeamsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String team = "team_example"; // String | Team
    String memberUser = "memberUser_example"; // String | User
    V1TeamMember body = new V1TeamMember(); // V1TeamMember | Team body
    try {
      V1TeamMember result = apiInstance.updateTeamMember(owner, team, memberUser, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsV1Api#updateTeamMember");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| Owner of the namespace | |
| **team** | **String**| Team | |
| **memberUser** | **String**| User | |
| **body** | [**V1TeamMember**](V1TeamMember.md)| Team body | |

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

