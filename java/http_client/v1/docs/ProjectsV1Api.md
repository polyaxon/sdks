# ProjectsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveProject**](ProjectsV1Api.md#archiveProject) | **POST** /api/v1/{owner}/{name}/archive | Archive project |
| [**bookmarkProject**](ProjectsV1Api.md#bookmarkProject) | **POST** /api/v1/{owner}/{name}/bookmark | Bookmark project |
| [**createProject**](ProjectsV1Api.md#createProject) | **POST** /api/v1/{owner}/projects/create | Create new project |
| [**createTeamProject**](ProjectsV1Api.md#createTeamProject) | **POST** /api/v1/{owner}/{team}/projects/create | Create new project via team space |
| [**createVersion**](ProjectsV1Api.md#createVersion) | **POST** /api/v1/{owner}/{project}/versions/{version.kind} | Create version |
| [**createVersionStage**](ProjectsV1Api.md#createVersionStage) | **POST** /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages | Create new artifact version stage |
| [**deleteProject**](ProjectsV1Api.md#deleteProject) | **DELETE** /api/v1/{owner}/{name} | Delete project |
| [**deleteVersion**](ProjectsV1Api.md#deleteVersion) | **DELETE** /api/v1/{owner}/{entity}/versions/{kind}/{name} | Delete version |
| [**disableProjectCI**](ProjectsV1Api.md#disableProjectCI) | **DELETE** /api/v1/{owner}/{name}/ci | Disbale project CI |
| [**enableProjectCI**](ProjectsV1Api.md#enableProjectCI) | **POST** /api/v1/{owner}/{name}/ci | Enable project CI |
| [**getProject**](ProjectsV1Api.md#getProject) | **GET** /api/v1/{owner}/{name} | Get project |
| [**getProjectActivities**](ProjectsV1Api.md#getProjectActivities) | **GET** /api/v1/{owner}/{name}/activities | Get project activities |
| [**getProjectSettings**](ProjectsV1Api.md#getProjectSettings) | **GET** /api/v1/{owner}/{name}/settings | Get Project settings |
| [**getProjectStats**](ProjectsV1Api.md#getProjectStats) | **GET** /api/v1/{owner}/{name}/stats | Get project stats |
| [**getVersion**](ProjectsV1Api.md#getVersion) | **GET** /api/v1/{owner}/{entity}/versions/{kind}/{name} | Get version |
| [**getVersionStages**](ProjectsV1Api.md#getVersionStages) | **GET** /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages | Get version stages |
| [**listArchivedProjects**](ProjectsV1Api.md#listArchivedProjects) | **GET** /api/v1/archives/{user}/projects | List archived projects for user |
| [**listBookmarkedProjects**](ProjectsV1Api.md#listBookmarkedProjects) | **GET** /api/v1/bookmarks/{user}/projects | List bookmarked projects for user |
| [**listProjectNames**](ProjectsV1Api.md#listProjectNames) | **GET** /api/v1/{owner}/projects/names | List project names |
| [**listProjects**](ProjectsV1Api.md#listProjects) | **GET** /api/v1/{owner}/projects/list | List projects |
| [**listVersionNames**](ProjectsV1Api.md#listVersionNames) | **GET** /api/v1/{owner}/{entity}/versions/{kind}/names | List versions names |
| [**listVersions**](ProjectsV1Api.md#listVersions) | **GET** /api/v1/{owner}/{entity}/versions/{kind} | List versions |
| [**patchProject**](ProjectsV1Api.md#patchProject) | **PATCH** /api/v1/{owner}/{project.name} | Patch project |
| [**patchProjectSettings**](ProjectsV1Api.md#patchProjectSettings) | **PATCH** /api/v1/{owner}/{project}/settings | Patch project settings |
| [**patchVersion**](ProjectsV1Api.md#patchVersion) | **PATCH** /api/v1/{owner}/{project}/versions/{version.kind}/{version.name} | Patch version |
| [**restoreProject**](ProjectsV1Api.md#restoreProject) | **POST** /api/v1/{owner}/{name}/restore | Restore project |
| [**transferVersion**](ProjectsV1Api.md#transferVersion) | **POST** /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer | Transfer version |
| [**unbookmarkProject**](ProjectsV1Api.md#unbookmarkProject) | **DELETE** /api/v1/{owner}/{name}/unbookmark | Unbookmark project |
| [**updateProject**](ProjectsV1Api.md#updateProject) | **PUT** /api/v1/{owner}/{project.name} | Update project |
| [**updateProjectSettings**](ProjectsV1Api.md#updateProjectSettings) | **PUT** /api/v1/{owner}/{project}/settings | Update project settings |
| [**updateVersion**](ProjectsV1Api.md#updateVersion) | **PUT** /api/v1/{owner}/{project}/versions/{version.kind}/{version.name} | Update version |
| [**uploadProjectArtifact**](ProjectsV1Api.md#uploadProjectArtifact) | **POST** /api/v1/{owner}/{project}/artifacts/{uuid}/upload | Upload artifact to a store via project access |


<a name="archiveProject"></a>
# **archiveProject**
> archiveProject(owner, name)

Archive project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.archiveProject(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#archiveProject");
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

<a name="bookmarkProject"></a>
# **bookmarkProject**
> bookmarkProject(owner, name)

Bookmark project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.bookmarkProject(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#bookmarkProject");
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

<a name="createProject"></a>
# **createProject**
> V1Project createProject(owner, body)

Create new project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Project body = new V1Project(); // V1Project | Project body
    try {
      V1Project result = apiInstance.createProject(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#createProject");
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
| **body** | [**V1Project**](V1Project.md)| Project body | |

### Return type

[**V1Project**](V1Project.md)

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

<a name="createTeamProject"></a>
# **createTeamProject**
> V1Project createTeamProject(owner, team, body)

Create new project via team space

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String team = "team_example"; // String | Team
    V1Project body = new V1Project(); // V1Project | Project body
    try {
      V1Project result = apiInstance.createTeamProject(owner, team, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#createTeamProject");
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
| **body** | [**V1Project**](V1Project.md)| Project body | |

### Return type

[**V1Project**](V1Project.md)

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

<a name="createVersion"></a>
# **createVersion**
> V1ProjectVersion createVersion(owner, project, versionKind, body)

Create version

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project name
    String versionKind = "component"; // String | Optional kind to tell the kind of this version
    V1ProjectVersion body = new V1ProjectVersion(); // V1ProjectVersion | Project version body
    try {
      V1ProjectVersion result = apiInstance.createVersion(owner, project, versionKind, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#createVersion");
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
| **project** | **String**| Project name | |
| **versionKind** | **String**| Optional kind to tell the kind of this version | [enum: component, model, artifact] |
| **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | |

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

<a name="createVersionStage"></a>
# **createVersionStage**
> V1Stage createVersionStage(owner, entity, kind, name, body)

Create new artifact version stage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity namespace
    String kind = "kind_example"; // String | Optional kind, only required for an version entity
    String name = "name_example"; // String | Name of the entity to apply the stage to
    V1EntityStageBodyRequest body = new V1EntityStageBodyRequest(); // V1EntityStageBodyRequest | 
    try {
      V1Stage result = apiInstance.createVersionStage(owner, entity, kind, name, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#createVersionStage");
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
| **entity** | **String**| Entity namespace | |
| **kind** | **String**| Optional kind, only required for an version entity | |
| **name** | **String**| Name of the entity to apply the stage to | |
| **body** | [**V1EntityStageBodyRequest**](V1EntityStageBodyRequest.md)|  | |

### Return type

[**V1Stage**](V1Stage.md)

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

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(owner, name)

Delete project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.deleteProject(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#deleteProject");
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

<a name="deleteVersion"></a>
# **deleteVersion**
> deleteVersion(owner, entity, kind, name)

Delete version

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String kind = "kind_example"; // String | Version Kind
    String name = "name_example"; // String | Sub-entity name
    try {
      apiInstance.deleteVersion(owner, entity, kind, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#deleteVersion");
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
| **kind** | **String**| Version Kind | |
| **name** | **String**| Sub-entity name | |

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

<a name="disableProjectCI"></a>
# **disableProjectCI**
> disableProjectCI(owner, name)

Disbale project CI

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.disableProjectCI(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#disableProjectCI");
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

<a name="enableProjectCI"></a>
# **enableProjectCI**
> enableProjectCI(owner, name)

Enable project CI

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.enableProjectCI(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#enableProjectCI");
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

<a name="getProject"></a>
# **getProject**
> V1Project getProject(owner, name)

Get project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      V1Project result = apiInstance.getProject(owner, name);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#getProject");
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

[**V1Project**](V1Project.md)

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

<a name="getProjectActivities"></a>
# **getProjectActivities**
> V1ListActivitiesResponse getProjectActivities(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get project activities

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
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
      V1ListActivitiesResponse result = apiInstance.getProjectActivities(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#getProjectActivities");
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

<a name="getProjectSettings"></a>
# **getProjectSettings**
> V1ProjectSettings getProjectSettings(owner, name)

Get Project settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      V1ProjectSettings result = apiInstance.getProjectSettings(owner, name);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#getProjectSettings");
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

[**V1ProjectSettings**](V1ProjectSettings.md)

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

<a name="getProjectStats"></a>
# **getProjectStats**
> Object getProjectStats(owner, name, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc)

Get project stats

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
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
      Object result = apiInstance.getProjectStats(owner, name, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#getProjectStats");
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

<a name="getVersion"></a>
# **getVersion**
> V1ProjectVersion getVersion(owner, entity, kind, name)

Get version

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String kind = "kind_example"; // String | Version Kind
    String name = "name_example"; // String | Sub-entity name
    try {
      V1ProjectVersion result = apiInstance.getVersion(owner, entity, kind, name);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#getVersion");
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
| **kind** | **String**| Version Kind | |
| **name** | **String**| Sub-entity name | |

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

<a name="getVersionStages"></a>
# **getVersionStages**
> V1Stage getVersionStages(owner, entity, kind, name)

Get version stages

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String kind = "kind_example"; // String | Version Kind
    String name = "name_example"; // String | Sub-entity name
    try {
      V1Stage result = apiInstance.getVersionStages(owner, entity, kind, name);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#getVersionStages");
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
| **kind** | **String**| Version Kind | |
| **name** | **String**| Sub-entity name | |

### Return type

[**V1Stage**](V1Stage.md)

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

<a name="listArchivedProjects"></a>
# **listArchivedProjects**
> V1ListProjectsResponse listArchivedProjects(user, offset, limit, sort, query, noPage)

List archived projects for user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String user = "user_example"; // String | User
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectsResponse result = apiInstance.listArchivedProjects(user, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#listArchivedProjects");
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
| **user** | **String**| User | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

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

<a name="listBookmarkedProjects"></a>
# **listBookmarkedProjects**
> V1ListBookmarksResponse listBookmarkedProjects(user, offset, limit, sort, query, noPage)

List bookmarked projects for user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String user = "user_example"; // String | User
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListBookmarksResponse result = apiInstance.listBookmarkedProjects(user, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#listBookmarkedProjects");
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
| **user** | **String**| User | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListBookmarksResponse**](V1ListBookmarksResponse.md)

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

<a name="listProjectNames"></a>
# **listProjectNames**
> V1ListProjectsResponse listProjectNames(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List project names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectsResponse result = apiInstance.listProjectNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#listProjectNames");
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

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

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

<a name="listProjects"></a>
# **listProjects**
> V1ListProjectsResponse listProjects(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List projects

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectsResponse result = apiInstance.listProjects(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#listProjects");
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

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

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

<a name="listVersionNames"></a>
# **listVersionNames**
> V1ListProjectVersionsResponse listVersionNames(owner, entity, kind, offset, limit, sort, query, noPage)

List versions names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String kind = "kind_example"; // String | Version Kind
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectVersionsResponse result = apiInstance.listVersionNames(owner, entity, kind, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#listVersionNames");
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

<a name="listVersions"></a>
# **listVersions**
> V1ListProjectVersionsResponse listVersions(owner, entity, kind, offset, limit, sort, query, noPage)

List versions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String kind = "kind_example"; // String | Version Kind
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectVersionsResponse result = apiInstance.listVersions(owner, entity, kind, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#listVersions");
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

<a name="patchProject"></a>
# **patchProject**
> V1Project patchProject(owner, projectName, body)

Patch project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String projectName = "projectName_example"; // String | Required name
    V1Project body = new V1Project(); // V1Project | Project body
    try {
      V1Project result = apiInstance.patchProject(owner, projectName, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#patchProject");
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
| **projectName** | **String**| Required name | |
| **body** | [**V1Project**](V1Project.md)| Project body | |

### Return type

[**V1Project**](V1Project.md)

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

<a name="patchProjectSettings"></a>
# **patchProjectSettings**
> V1ProjectSettings patchProjectSettings(owner, project, body)

Patch project settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project name
    V1ProjectSettings body = new V1ProjectSettings(); // V1ProjectSettings | Project settings body
    try {
      V1ProjectSettings result = apiInstance.patchProjectSettings(owner, project, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#patchProjectSettings");
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
| **project** | **String**| Project name | |
| **body** | [**V1ProjectSettings**](V1ProjectSettings.md)| Project settings body | |

### Return type

[**V1ProjectSettings**](V1ProjectSettings.md)

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

<a name="patchVersion"></a>
# **patchVersion**
> V1ProjectVersion patchVersion(owner, project, versionKind, versionName, body)

Patch version

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project name
    String versionKind = "component"; // String | Optional kind to tell the kind of this version
    String versionName = "versionName_example"; // String | Optional component name, should be a valid fully qualified value: name[:version]
    V1ProjectVersion body = new V1ProjectVersion(); // V1ProjectVersion | Project version body
    try {
      V1ProjectVersion result = apiInstance.patchVersion(owner, project, versionKind, versionName, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#patchVersion");
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
| **project** | **String**| Project name | |
| **versionKind** | **String**| Optional kind to tell the kind of this version | [enum: component, model, artifact] |
| **versionName** | **String**| Optional component name, should be a valid fully qualified value: name[:version] | |
| **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | |

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

<a name="restoreProject"></a>
# **restoreProject**
> restoreProject(owner, name)

Restore project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.restoreProject(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#restoreProject");
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

<a name="transferVersion"></a>
# **transferVersion**
> transferVersion(owner, project, versionKind, versionName, body)

Transfer version

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project name
    String versionKind = "component"; // String | Optional kind to tell the kind of this version
    String versionName = "versionName_example"; // String | Optional component name, should be a valid fully qualified value: name[:version]
    V1ProjectVersion body = new V1ProjectVersion(); // V1ProjectVersion | Project version body
    try {
      apiInstance.transferVersion(owner, project, versionKind, versionName, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#transferVersion");
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
| **project** | **String**| Project name | |
| **versionKind** | **String**| Optional kind to tell the kind of this version | [enum: component, model, artifact] |
| **versionName** | **String**| Optional component name, should be a valid fully qualified value: name[:version] | |
| **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | |

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

<a name="unbookmarkProject"></a>
# **unbookmarkProject**
> unbookmarkProject(owner, name)

Unbookmark project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.unbookmarkProject(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#unbookmarkProject");
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

<a name="updateProject"></a>
# **updateProject**
> V1Project updateProject(owner, projectName, body)

Update project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String projectName = "projectName_example"; // String | Required name
    V1Project body = new V1Project(); // V1Project | Project body
    try {
      V1Project result = apiInstance.updateProject(owner, projectName, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#updateProject");
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
| **projectName** | **String**| Required name | |
| **body** | [**V1Project**](V1Project.md)| Project body | |

### Return type

[**V1Project**](V1Project.md)

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

<a name="updateProjectSettings"></a>
# **updateProjectSettings**
> V1ProjectSettings updateProjectSettings(owner, project, body)

Update project settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project name
    V1ProjectSettings body = new V1ProjectSettings(); // V1ProjectSettings | Project settings body
    try {
      V1ProjectSettings result = apiInstance.updateProjectSettings(owner, project, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#updateProjectSettings");
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
| **project** | **String**| Project name | |
| **body** | [**V1ProjectSettings**](V1ProjectSettings.md)| Project settings body | |

### Return type

[**V1ProjectSettings**](V1ProjectSettings.md)

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

<a name="updateVersion"></a>
# **updateVersion**
> V1ProjectVersion updateVersion(owner, project, versionKind, versionName, body)

Update version

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project name
    String versionKind = "component"; // String | Optional kind to tell the kind of this version
    String versionName = "versionName_example"; // String | Optional component name, should be a valid fully qualified value: name[:version]
    V1ProjectVersion body = new V1ProjectVersion(); // V1ProjectVersion | Project version body
    try {
      V1ProjectVersion result = apiInstance.updateVersion(owner, project, versionKind, versionName, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#updateVersion");
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
| **project** | **String**| Project name | |
| **versionKind** | **String**| Optional kind to tell the kind of this version | [enum: component, model, artifact] |
| **versionName** | **String**| Optional component name, should be a valid fully qualified value: name[:version] | |
| **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | |

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

<a name="uploadProjectArtifact"></a>
# **uploadProjectArtifact**
> uploadProjectArtifact(owner, project, uuid, uploadfile, path, overwrite)

Upload artifact to a store via project access

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProjectsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    ProjectsV1Api apiInstance = new ProjectsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project having access to the store
    String uuid = "uuid_example"; // String | Unique integer identifier of the entity
    File uploadfile = new File("/path/to/file"); // File | The file to upload.
    String path = "path_example"; // String | File path query params.
    Boolean overwrite = true; // Boolean | File path query params.
    try {
      apiInstance.uploadProjectArtifact(owner, project, uuid, uploadfile, path, overwrite);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProjectsV1Api#uploadProjectArtifact");
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
| **project** | **String**| Project having access to the store | |
| **uuid** | **String**| Unique integer identifier of the entity | |
| **uploadfile** | **File**| The file to upload. | |
| **path** | **String**| File path query params. | [optional] |
| **overwrite** | **Boolean**| File path query params. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |

