# RunsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveRun**](RunsV1Api.md#approveRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/approve | Approve run |
| [**approveRuns**](RunsV1Api.md#approveRuns) | **POST** /api/v1/{owner}/{name}/runs/approve | Approve runs |
| [**archiveRun**](RunsV1Api.md#archiveRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/archive | Archive run |
| [**archiveRuns**](RunsV1Api.md#archiveRuns) | **POST** /api/v1/{owner}/{name}/runs/archive | Archive runs |
| [**bookmarkRun**](RunsV1Api.md#bookmarkRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/bookmark | Bookmark run |
| [**bookmarkRuns**](RunsV1Api.md#bookmarkRuns) | **POST** /api/v1/{owner}/{name}/runs/bookmark | Bookmark runs |
| [**collectRunLogs**](RunsV1Api.md#collectRunLogs) | **POST** /internal/v1/{namespace}/{owner}/{project}/runs/{uuid}/{kind}/logs | Internal API to collect run logs |
| [**copyRun**](RunsV1Api.md#copyRun) | **POST** /api/v1/{owner}/{project}/runs/{run.uuid}/copy | Restart run with copy |
| [**createRun**](RunsV1Api.md#createRun) | **POST** /api/v1/{owner}/{project}/runs | Create new run |
| [**createRunArtifactsLineage**](RunsV1Api.md#createRunArtifactsLineage) | **POST** /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts | Create bulk run artifacts lineage |
| [**createRunStatus**](RunsV1Api.md#createRunStatus) | **POST** /api/v1/{owner}/{project}/runs/{uuid}/statuses | Create new run status |
| [**deleteRun**](RunsV1Api.md#deleteRun) | **DELETE** /api/v1/{owner}/{entity}/runs/{uuid} | Delete run |
| [**deleteRunArtifact**](RunsV1Api.md#deleteRunArtifact) | **DELETE** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifact | Delete run artifact |
| [**deleteRunArtifactLineage**](RunsV1Api.md#deleteRunArtifactLineage) | **DELETE** /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts/{name} | Delete run artifact lineage |
| [**deleteRunArtifacts**](RunsV1Api.md#deleteRunArtifacts) | **DELETE** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts | Delete run artifacts |
| [**deleteRuns**](RunsV1Api.md#deleteRuns) | **DELETE** /api/v1/{owner}/{name}/runs/delete | Delete runs |
| [**getMultiRunEvents**](RunsV1Api.md#getMultiRunEvents) | **GET** /streams/v1/{namespace}/{owner}/{entity}/runs/multi/events/{kind} | Get multi runs events |
| [**getMultiRunImportance**](RunsV1Api.md#getMultiRunImportance) | **POST** /streams/v1/{namespace}/{owner}/{entity}/runs/multi/importance | Get multi run importance |
| [**getRun**](RunsV1Api.md#getRun) | **GET** /api/v1/{owner}/{entity}/runs/{uuid} | Get run |
| [**getRunArtifact**](RunsV1Api.md#getRunArtifact) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifact | Get run artifact |
| [**getRunArtifactLineage**](RunsV1Api.md#getRunArtifactLineage) | **GET** /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts/{name} | Get run artifacts lineage |
| [**getRunArtifacts**](RunsV1Api.md#getRunArtifacts) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts | Get run artifacts |
| [**getRunArtifactsLineage**](RunsV1Api.md#getRunArtifactsLineage) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts | Get run artifacts lineage |
| [**getRunArtifactsLineageNames**](RunsV1Api.md#getRunArtifactsLineageNames) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts/names | Get run artifacts lineage names |
| [**getRunArtifactsTree**](RunsV1Api.md#getRunArtifactsTree) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts/tree | Get run artifacts tree |
| [**getRunClonesLineage**](RunsV1Api.md#getRunClonesLineage) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/lineage/clones | Get run clones lineage |
| [**getRunConnectionsLineage**](RunsV1Api.md#getRunConnectionsLineage) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/lineage/connections | Get run connections lineage |
| [**getRunDownstreamLineage**](RunsV1Api.md#getRunDownstreamLineage) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/lineage/downstream | Get run downstream lineage |
| [**getRunEvents**](RunsV1Api.md#getRunEvents) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/events/{kind} | Get run events |
| [**getRunLogs**](RunsV1Api.md#getRunLogs) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/logs | Get run logs |
| [**getRunNamespace**](RunsV1Api.md#getRunNamespace) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/namespace | Get Run namespace |
| [**getRunResources**](RunsV1Api.md#getRunResources) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources | Get run resources events |
| [**getRunSettings**](RunsV1Api.md#getRunSettings) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/settings | Get Run settings |
| [**getRunStats**](RunsV1Api.md#getRunStats) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/stats | Get run stats |
| [**getRunStatuses**](RunsV1Api.md#getRunStatuses) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/statuses | Get run statuses |
| [**getRunUpstreamLineage**](RunsV1Api.md#getRunUpstreamLineage) | **GET** /api/v1/{owner}/{entity}/runs/{uuid}/lineage/upstream | Get run upstream lineage |
| [**getRunsArtifactsLineage**](RunsV1Api.md#getRunsArtifactsLineage) | **GET** /api/v1/{owner}/{name}/runs/lineage/artifacts | Get runs artifacts lineage |
| [**impersonateToken**](RunsV1Api.md#impersonateToken) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/impersonate | Impersonate run token |
| [**inspectRun**](RunsV1Api.md#inspectRun) | **GET** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/k8s_inspect | Inspect an active run full conditions |
| [**invalidateRun**](RunsV1Api.md#invalidateRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/invalidate | Invalidate run |
| [**invalidateRuns**](RunsV1Api.md#invalidateRuns) | **POST** /api/v1/{owner}/{name}/runs/invalidate | Invalidate runs |
| [**listArchivedRuns**](RunsV1Api.md#listArchivedRuns) | **GET** /api/v1/archives/{user}/runs | List archived runs for user |
| [**listBookmarkedRuns**](RunsV1Api.md#listBookmarkedRuns) | **GET** /api/v1/bookmarks/{user}/runs | List bookmarked runs for user |
| [**listRuns**](RunsV1Api.md#listRuns) | **GET** /api/v1/{owner}/{name}/runs | List runs |
| [**notifyRunStatus**](RunsV1Api.md#notifyRunStatus) | **POST** /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/notify | Notify run status |
| [**patchRun**](RunsV1Api.md#patchRun) | **PATCH** /api/v1/{owner}/{project}/runs/{run.uuid} | Patch run |
| [**restartRun**](RunsV1Api.md#restartRun) | **POST** /api/v1/{owner}/{project}/runs/{run.uuid}/restart | Restart run |
| [**restoreRun**](RunsV1Api.md#restoreRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/restore | Restore run |
| [**restoreRuns**](RunsV1Api.md#restoreRuns) | **POST** /api/v1/{owner}/{name}/runs/restore | Restore runs |
| [**resumeRun**](RunsV1Api.md#resumeRun) | **POST** /api/v1/{owner}/{project}/runs/{run.uuid}/resume | Resume run |
| [**setRunEdgesLineage**](RunsV1Api.md#setRunEdgesLineage) | **POST** /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges | Set run edges graph lineage |
| [**skipRun**](RunsV1Api.md#skipRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/skip | Skip run |
| [**skipRuns**](RunsV1Api.md#skipRuns) | **POST** /api/v1/{owner}/{name}/runs/skip | Skip runs |
| [**stopRun**](RunsV1Api.md#stopRun) | **POST** /api/v1/{owner}/{entity}/runs/{uuid}/stop | Stop run |
| [**stopRuns**](RunsV1Api.md#stopRuns) | **POST** /api/v1/{owner}/{name}/runs/stop | Stop runs |
| [**syncRun**](RunsV1Api.md#syncRun) | **POST** /api/v1/{owner}/{project}/runs/sync | Sync offline run |
| [**tagRuns**](RunsV1Api.md#tagRuns) | **POST** /api/v1/{owner}/{name}/runs/tag | Tag runs |
| [**transferRun**](RunsV1Api.md#transferRun) | **POST** /api/v1/{owner}/{project}/runs/{run.uuid}/transfer | Transfer run |
| [**transferRuns**](RunsV1Api.md#transferRuns) | **POST** /api/v1/{owner}/{name}/runs/transfer | Transfer runs |
| [**unbookmarkRun**](RunsV1Api.md#unbookmarkRun) | **DELETE** /api/v1/{owner}/{entity}/runs/{uuid}/unbookmark | Unbookmark run |
| [**updateRun**](RunsV1Api.md#updateRun) | **PUT** /api/v1/{owner}/{project}/runs/{run.uuid} | Update run |
| [**uploadRunArtifact**](RunsV1Api.md#uploadRunArtifact) | **POST** /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload | Upload an artifact file to a store via run access |
| [**uploadRunLogs**](RunsV1Api.md#uploadRunLogs) | **POST** /api/v1/{owner}/{project}/runs/{uuid}/logs/upload | Upload a logs file to a store via run access |


<a name="approveRun"></a>
# **approveRun**
> approveRun(owner, entity, uuid)

Approve run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.approveRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#approveRun");
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

<a name="approveRuns"></a>
# **approveRuns**
> approveRuns(owner, name, body)

Approve runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.approveRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#approveRuns");
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

<a name="archiveRun"></a>
# **archiveRun**
> archiveRun(owner, entity, uuid)

Archive run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.archiveRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#archiveRun");
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

<a name="archiveRuns"></a>
# **archiveRuns**
> archiveRuns(owner, name, body)

Archive runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.archiveRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#archiveRuns");
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

<a name="bookmarkRun"></a>
# **bookmarkRun**
> bookmarkRun(owner, entity, uuid)

Bookmark run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.bookmarkRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#bookmarkRun");
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

<a name="bookmarkRuns"></a>
# **bookmarkRuns**
> bookmarkRuns(owner, name, body)

Bookmark runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.bookmarkRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#bookmarkRuns");
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

<a name="collectRunLogs"></a>
# **collectRunLogs**
> collectRunLogs(namespace, owner, project, uuid, kind)

Internal API to collect run logs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String kind = "kind_example"; // String | Kind of the entity
    try {
      apiInstance.collectRunLogs(namespace, owner, project, uuid, kind);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#collectRunLogs");
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
| **namespace** | **String**|  | |
| **owner** | **String**| Owner of the namespace | |
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **kind** | **String**| Kind of the entity | |

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

<a name="copyRun"></a>
# **copyRun**
> V1Run copyRun(owner, project, runUuid, body)

Restart run with copy

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String runUuid = "runUuid_example"; // String | UUID
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      V1Run result = apiInstance.copyRun(owner, project, runUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#copyRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **runUuid** | **String**| UUID | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

### Return type

[**V1Run**](V1Run.md)

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

<a name="createRun"></a>
# **createRun**
> V1Run createRun(owner, project, body)

Create new run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    V1OperationBody body = new V1OperationBody(); // V1OperationBody | operation object
    try {
      V1Run result = apiInstance.createRun(owner, project, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#createRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **body** | [**V1OperationBody**](V1OperationBody.md)| operation object | |

### Return type

[**V1Run**](V1Run.md)

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

<a name="createRunArtifactsLineage"></a>
# **createRunArtifactsLineage**
> createRunArtifactsLineage(owner, project, uuid, body)

Create bulk run artifacts lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    V1RunArtifacts body = new V1RunArtifacts(); // V1RunArtifacts | Run Artifacts
    try {
      apiInstance.createRunArtifactsLineage(owner, project, uuid, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#createRunArtifactsLineage");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **body** | [**V1RunArtifacts**](V1RunArtifacts.md)| Run Artifacts | |

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

<a name="createRunStatus"></a>
# **createRunStatus**
> V1Status createRunStatus(owner, project, uuid, body)

Create new run status

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    V1EntityStatusBodyRequest body = new V1EntityStatusBodyRequest(); // V1EntityStatusBodyRequest | 
    try {
      V1Status result = apiInstance.createRunStatus(owner, project, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#createRunStatus");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **body** | [**V1EntityStatusBodyRequest**](V1EntityStatusBodyRequest.md)|  | |

### Return type

[**V1Status**](V1Status.md)

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

<a name="deleteRun"></a>
# **deleteRun**
> deleteRun(owner, entity, uuid)

Delete run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.deleteRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#deleteRun");
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

<a name="deleteRunArtifact"></a>
# **deleteRunArtifact**
> deleteRunArtifact(namespace, owner, project, uuid, path, connection)

Delete run artifact

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String path = "path_example"; // String | Path query param.
    String connection = "connection_example"; // String | Connection to use.
    try {
      apiInstance.deleteRunArtifact(namespace, owner, project, uuid, path, connection);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#deleteRunArtifact");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **path** | **String**| Path query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

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

<a name="deleteRunArtifactLineage"></a>
# **deleteRunArtifactLineage**
> deleteRunArtifactLineage(owner, project, uuid, name, namespace)

Delete run artifact lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String name = "name_example"; // String | Artifact name
    String namespace = "namespace_example"; // String | namespace.
    try {
      apiInstance.deleteRunArtifactLineage(owner, project, uuid, name, namespace);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#deleteRunArtifactLineage");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **name** | **String**| Artifact name | |
| **namespace** | **String**| namespace. | [optional] |

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

<a name="deleteRunArtifacts"></a>
# **deleteRunArtifacts**
> deleteRunArtifacts(namespace, owner, project, uuid, path, connection)

Delete run artifacts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String path = "path_example"; // String | Path query param.
    String connection = "connection_example"; // String | Connection to use.
    try {
      apiInstance.deleteRunArtifacts(namespace, owner, project, uuid, path, connection);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#deleteRunArtifacts");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **path** | **String**| Path query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

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

<a name="deleteRuns"></a>
# **deleteRuns**
> deleteRuns(owner, name, body)

Delete runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.deleteRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#deleteRuns");
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

<a name="getMultiRunEvents"></a>
# **getMultiRunEvents**
> V1MultiEventsResponse getMultiRunEvents(namespace, owner, entity, kind, names, runs, orient, force, sample, connection, status)

Get multi runs events

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
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
      V1MultiEventsResponse result = apiInstance.getMultiRunEvents(namespace, owner, entity, kind, names, runs, orient, force, sample, connection, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getMultiRunEvents");
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

<a name="getMultiRunImportance"></a>
# **getMultiRunImportance**
> V1MultiEventsResponse getMultiRunImportance(namespace, owner, entity, body)

Get multi run importance

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity where the run will be assigned
    Object body = null; // Object | Params/Metrics data
    try {
      V1MultiEventsResponse result = apiInstance.getMultiRunImportance(namespace, owner, entity, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getMultiRunImportance");
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

<a name="getRun"></a>
# **getRun**
> V1Run getRun(owner, entity, uuid)

Get run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1Run result = apiInstance.getRun(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRun");
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

<a name="getRunArtifact"></a>
# **getRunArtifact**
> String getRunArtifact(namespace, owner, project, uuid, path, stream, force, connection)

Get run artifact

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the entity will be assigned
    String uuid = "uuid_example"; // String | Unique integer identifier of the entity
    String path = "path_example"; // String | Artifact filepath.
    Boolean stream = true; // Boolean | Whether to stream the file.
    Boolean force = true; // Boolean | Whether to force reload.
    String connection = "connection_example"; // String | Connection to use.
    try {
      String result = apiInstance.getRunArtifact(namespace, owner, project, uuid, path, stream, force, connection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunArtifact");
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
| **project** | **String**| Project where the entity will be assigned | |
| **uuid** | **String**| Unique integer identifier of the entity | |
| **path** | **String**| Artifact filepath. | [optional] |
| **stream** | **Boolean**| Whether to stream the file. | [optional] |
| **force** | **Boolean**| Whether to force reload. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

### Return type

**String**

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

<a name="getRunArtifactLineage"></a>
# **getRunArtifactLineage**
> V1RunArtifact getRunArtifactLineage(owner, project, uuid, name, namespace)

Get run artifacts lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String name = "name_example"; // String | Artifact name
    String namespace = "namespace_example"; // String | namespace.
    try {
      V1RunArtifact result = apiInstance.getRunArtifactLineage(owner, project, uuid, name, namespace);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunArtifactLineage");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **name** | **String**| Artifact name | |
| **namespace** | **String**| namespace. | [optional] |

### Return type

[**V1RunArtifact**](V1RunArtifact.md)

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

<a name="getRunArtifacts"></a>
# **getRunArtifacts**
> String getRunArtifacts(namespace, owner, project, uuid, path, force, connection)

Get run artifacts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the entity will be assigned
    String uuid = "uuid_example"; // String | Unique integer identifier of the entity
    String path = "path_example"; // String | Artifact filepath.
    Boolean force = true; // Boolean | Whether to force reload.
    String connection = "connection_example"; // String | Connection to use.
    try {
      String result = apiInstance.getRunArtifacts(namespace, owner, project, uuid, path, force, connection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunArtifacts");
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
| **project** | **String**| Project where the entity will be assigned | |
| **uuid** | **String**| Unique integer identifier of the entity | |
| **path** | **String**| Artifact filepath. | [optional] |
| **force** | **Boolean**| Whether to force reload. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

### Return type

**String**

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

<a name="getRunArtifactsLineage"></a>
# **getRunArtifactsLineage**
> V1ListRunArtifactsResponse getRunArtifactsLineage(owner, entity, uuid, offset, limit, sort, query, noPage)

Get run artifacts lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunArtifactsResponse result = apiInstance.getRunArtifactsLineage(owner, entity, uuid, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunArtifactsLineage");
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
| **uuid** | **String**| SubEntity uuid | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
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

<a name="getRunArtifactsLineageNames"></a>
# **getRunArtifactsLineageNames**
> V1ListRunArtifactsResponse getRunArtifactsLineageNames(owner, entity, uuid, offset, limit, sort, query, noPage)

Get run artifacts lineage names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunArtifactsResponse result = apiInstance.getRunArtifactsLineageNames(owner, entity, uuid, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunArtifactsLineageNames");
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
| **uuid** | **String**| SubEntity uuid | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
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

<a name="getRunArtifactsTree"></a>
# **getRunArtifactsTree**
> V1ArtifactTree getRunArtifactsTree(namespace, owner, project, uuid, path, connection)

Get run artifacts tree

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String path = "path_example"; // String | Path query param.
    String connection = "connection_example"; // String | Connection to use.
    try {
      V1ArtifactTree result = apiInstance.getRunArtifactsTree(namespace, owner, project, uuid, path, connection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunArtifactsTree");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **path** | **String**| Path query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

### Return type

[**V1ArtifactTree**](V1ArtifactTree.md)

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

<a name="getRunClonesLineage"></a>
# **getRunClonesLineage**
> V1ListRunsResponse getRunClonesLineage(owner, entity, uuid, offset, limit, sort, query, noPage)

Get run clones lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunsResponse result = apiInstance.getRunClonesLineage(owner, entity, uuid, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunClonesLineage");
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
| **uuid** | **String**| SubEntity uuid | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
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

<a name="getRunConnectionsLineage"></a>
# **getRunConnectionsLineage**
> V1ListRunConnectionsResponse getRunConnectionsLineage(owner, entity, uuid, offset, limit, sort, query, noPage)

Get run connections lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunConnectionsResponse result = apiInstance.getRunConnectionsLineage(owner, entity, uuid, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunConnectionsLineage");
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
| **uuid** | **String**| SubEntity uuid | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListRunConnectionsResponse**](V1ListRunConnectionsResponse.md)

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

<a name="getRunDownstreamLineage"></a>
# **getRunDownstreamLineage**
> V1ListRunEdgesResponse getRunDownstreamLineage(owner, entity, uuid, offset, limit, sort, query, noPage)

Get run downstream lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunEdgesResponse result = apiInstance.getRunDownstreamLineage(owner, entity, uuid, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunDownstreamLineage");
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
| **uuid** | **String**| SubEntity uuid | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListRunEdgesResponse**](V1ListRunEdgesResponse.md)

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

<a name="getRunEvents"></a>
# **getRunEvents**
> V1EventsResponse getRunEvents(namespace, owner, project, uuid, kind, names, orient, force, sample, connection, status)

Get run events

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String kind = "model"; // String | The artifact kind
    String names = "names_example"; // String | Names query param.
    String orient = "orient_example"; // String | Orient query param.
    Boolean force = true; // Boolean | Force query param.
    Integer sample = 56; // Integer | Sample query param.
    String connection = "connection_example"; // String | Connection to use.
    String status = "created"; // String | Optional status.
    try {
      V1EventsResponse result = apiInstance.getRunEvents(namespace, owner, project, uuid, kind, names, orient, force, sample, connection, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunEvents");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **kind** | **String**| The artifact kind | [enum: model, audio, video, histogram, image, tensor, dataframe, chart, csv, tsv, psv, ssv, metric, env, html, text, file, dir, dockerfile, docker_image, data, coderef, table, tensorboard, curve, confusion, analysis, iteration, markdown, system, span, artifact] |
| **names** | **String**| Names query param. | [optional] |
| **orient** | **String**| Orient query param. | [optional] |
| **force** | **Boolean**| Force query param. | [optional] |
| **sample** | **Integer**| Sample query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |
| **status** | **String**| Optional status. | [optional] [default to created] [enum: created, resuming, on_schedule, compiled, queued, scheduled, starting, running, processing, stopping, failed, stopped, succeeded, skipped, warning, unschedulable, upstream_failed, retrying, unknown, done] |

### Return type

[**V1EventsResponse**](V1EventsResponse.md)

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

<a name="getRunLogs"></a>
# **getRunLogs**
> V1Logs getRunLogs(namespace, owner, project, uuid, lastTime, lastFile, force, connection)

Get run logs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    OffsetDateTime lastTime = OffsetDateTime.now(); // OffsetDateTime | last time.
    String lastFile = "lastFile_example"; // String | last file.
    Boolean force = true; // Boolean | Force query param.
    String connection = "connection_example"; // String | Connection to use.
    try {
      V1Logs result = apiInstance.getRunLogs(namespace, owner, project, uuid, lastTime, lastFile, force, connection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunLogs");
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
| **namespace** | **String**|  | |
| **owner** | **String**| Owner of the namespace | |
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **lastTime** | **OffsetDateTime**| last time. | [optional] |
| **lastFile** | **String**| last file. | [optional] |
| **force** | **Boolean**| Force query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

### Return type

[**V1Logs**](V1Logs.md)

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

<a name="getRunNamespace"></a>
# **getRunNamespace**
> V1RunSettings getRunNamespace(owner, entity, uuid)

Get Run namespace

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1RunSettings result = apiInstance.getRunNamespace(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunNamespace");
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

[**V1RunSettings**](V1RunSettings.md)

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

<a name="getRunResources"></a>
# **getRunResources**
> V1EventsResponse getRunResources(namespace, owner, project, uuid, names, tail, force, sample, connection, status)

Get run resources events

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String names = "names_example"; // String | Names query param.
    Boolean tail = true; // Boolean | Query param flag to tail the values.
    Boolean force = true; // Boolean | Force query param.
    Integer sample = 56; // Integer | Sample query param.
    String connection = "connection_example"; // String | Connection to use.
    String status = "created"; // String | Optional status.
    try {
      V1EventsResponse result = apiInstance.getRunResources(namespace, owner, project, uuid, names, tail, force, sample, connection, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunResources");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **names** | **String**| Names query param. | [optional] |
| **tail** | **Boolean**| Query param flag to tail the values. | [optional] |
| **force** | **Boolean**| Force query param. | [optional] |
| **sample** | **Integer**| Sample query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |
| **status** | **String**| Optional status. | [optional] [default to created] [enum: created, resuming, on_schedule, compiled, queued, scheduled, starting, running, processing, stopping, failed, stopped, succeeded, skipped, warning, unschedulable, upstream_failed, retrying, unknown, done] |

### Return type

[**V1EventsResponse**](V1EventsResponse.md)

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

<a name="getRunSettings"></a>
# **getRunSettings**
> V1RunSettings getRunSettings(owner, entity, uuid)

Get Run settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1RunSettings result = apiInstance.getRunSettings(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunSettings");
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

[**V1RunSettings**](V1RunSettings.md)

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

<a name="getRunStats"></a>
# **getRunStats**
> Object getRunStats(owner, entity, uuid, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc, startDate, endDate, boundary)

Get run stats

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
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
    String startDate = "startDate_example"; // String | Stats start date.
    String endDate = "endDate_example"; // String | Stats end date.
    Boolean boundary = true; // Boolean | Stats boundary.
    try {
      Object result = apiInstance.getRunStats(owner, entity, uuid, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc, startDate, endDate, boundary);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunStats");
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
| **uuid** | **String**| SubEntity uuid | |
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
| **startDate** | **String**| Stats start date. | [optional] |
| **endDate** | **String**| Stats end date. | [optional] |
| **boundary** | **Boolean**| Stats boundary. | [optional] |

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

<a name="getRunStatuses"></a>
# **getRunStatuses**
> V1Status getRunStatuses(owner, entity, uuid)

Get run statuses

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1Status result = apiInstance.getRunStatuses(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunStatuses");
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

[**V1Status**](V1Status.md)

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

<a name="getRunUpstreamLineage"></a>
# **getRunUpstreamLineage**
> V1ListRunEdgesResponse getRunUpstreamLineage(owner, entity, uuid, offset, limit, sort, query, noPage)

Get run upstream lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity name under namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunEdgesResponse result = apiInstance.getRunUpstreamLineage(owner, entity, uuid, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunUpstreamLineage");
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
| **uuid** | **String**| SubEntity uuid | |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListRunEdgesResponse**](V1ListRunEdgesResponse.md)

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

<a name="getRunsArtifactsLineage"></a>
# **getRunsArtifactsLineage**
> V1ListRunArtifactsResponse getRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get runs artifacts lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
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
      V1ListRunArtifactsResponse result = apiInstance.getRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#getRunsArtifactsLineage");
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

<a name="impersonateToken"></a>
# **impersonateToken**
> V1Auth impersonateToken(owner, entity, uuid)

Impersonate run token

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1Auth result = apiInstance.impersonateToken(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#impersonateToken");
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

[**V1Auth**](V1Auth.md)

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

<a name="inspectRun"></a>
# **inspectRun**
> Object inspectRun(namespace, owner, project, uuid, names, tail, force, sample, connection, status)

Inspect an active run full conditions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String names = "names_example"; // String | Names query param.
    Boolean tail = true; // Boolean | Query param flag to tail the values.
    Boolean force = true; // Boolean | Force query param.
    Integer sample = 56; // Integer | Sample query param.
    String connection = "connection_example"; // String | Connection to use.
    String status = "created"; // String | Optional status.
    try {
      Object result = apiInstance.inspectRun(namespace, owner, project, uuid, names, tail, force, sample, connection, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#inspectRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **names** | **String**| Names query param. | [optional] |
| **tail** | **Boolean**| Query param flag to tail the values. | [optional] |
| **force** | **Boolean**| Force query param. | [optional] |
| **sample** | **Integer**| Sample query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |
| **status** | **String**| Optional status. | [optional] [default to created] [enum: created, resuming, on_schedule, compiled, queued, scheduled, starting, running, processing, stopping, failed, stopped, succeeded, skipped, warning, unschedulable, upstream_failed, retrying, unknown, done] |

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

<a name="invalidateRun"></a>
# **invalidateRun**
> invalidateRun(owner, entity, uuid)

Invalidate run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.invalidateRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#invalidateRun");
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

<a name="invalidateRuns"></a>
# **invalidateRuns**
> invalidateRuns(owner, name, body)

Invalidate runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.invalidateRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#invalidateRuns");
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

<a name="listArchivedRuns"></a>
# **listArchivedRuns**
> V1ListRunsResponse listArchivedRuns(user, offset, limit, sort, query, noPage)

List archived runs for user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String user = "user_example"; // String | User
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunsResponse result = apiInstance.listArchivedRuns(user, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#listArchivedRuns");
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

<a name="listBookmarkedRuns"></a>
# **listBookmarkedRuns**
> V1ListBookmarksResponse listBookmarkedRuns(user, offset, limit, sort, query, noPage)

List bookmarked runs for user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String user = "user_example"; // String | User
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListBookmarksResponse result = apiInstance.listBookmarkedRuns(user, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#listBookmarkedRuns");
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

<a name="listRuns"></a>
# **listRuns**
> V1ListRunsResponse listRuns(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

List runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
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
      V1ListRunsResponse result = apiInstance.listRuns(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#listRuns");
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

<a name="notifyRunStatus"></a>
# **notifyRunStatus**
> notifyRunStatus(namespace, owner, project, uuid, body)

Notify run status

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | Na,espace
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    V1EntityNotificationBody body = new V1EntityNotificationBody(); // V1EntityNotificationBody | 
    try {
      apiInstance.notifyRunStatus(namespace, owner, project, uuid, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#notifyRunStatus");
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
| **namespace** | **String**| Na,espace | |
| **owner** | **String**| Owner of the namespace | |
| **project** | **String**| Project where the run will be assigned | |
| **uuid** | **String**| Uuid identifier of the entity | |
| **body** | [**V1EntityNotificationBody**](V1EntityNotificationBody.md)|  | |

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

<a name="patchRun"></a>
# **patchRun**
> V1Run patchRun(owner, project, runUuid, body)

Patch run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String runUuid = "runUuid_example"; // String | UUID
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      V1Run result = apiInstance.patchRun(owner, project, runUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#patchRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **runUuid** | **String**| UUID | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

### Return type

[**V1Run**](V1Run.md)

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

<a name="restartRun"></a>
# **restartRun**
> V1Run restartRun(owner, project, runUuid, body)

Restart run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String runUuid = "runUuid_example"; // String | UUID
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      V1Run result = apiInstance.restartRun(owner, project, runUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#restartRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **runUuid** | **String**| UUID | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

### Return type

[**V1Run**](V1Run.md)

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

<a name="restoreRun"></a>
# **restoreRun**
> restoreRun(owner, entity, uuid)

Restore run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.restoreRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#restoreRun");
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

<a name="restoreRuns"></a>
# **restoreRuns**
> restoreRuns(owner, name, body)

Restore runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.restoreRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#restoreRuns");
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

<a name="resumeRun"></a>
# **resumeRun**
> V1Run resumeRun(owner, project, runUuid, body)

Resume run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String runUuid = "runUuid_example"; // String | UUID
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      V1Run result = apiInstance.resumeRun(owner, project, runUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#resumeRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **runUuid** | **String**| UUID | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

### Return type

[**V1Run**](V1Run.md)

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

<a name="setRunEdgesLineage"></a>
# **setRunEdgesLineage**
> setRunEdgesLineage(owner, project, uuid, body)

Set run edges graph lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project
    String uuid = "uuid_example"; // String | Run uuid
    V1RunEdgesGraph body = new V1RunEdgesGraph(); // V1RunEdgesGraph | Run edges graph
    try {
      apiInstance.setRunEdgesLineage(owner, project, uuid, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#setRunEdgesLineage");
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
| **project** | **String**| Project | |
| **uuid** | **String**| Run uuid | |
| **body** | [**V1RunEdgesGraph**](V1RunEdgesGraph.md)| Run edges graph | |

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

<a name="skipRun"></a>
# **skipRun**
> skipRun(owner, entity, uuid)

Skip run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.skipRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#skipRun");
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

<a name="skipRuns"></a>
# **skipRuns**
> skipRuns(owner, name, body)

Skip runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.skipRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#skipRuns");
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

<a name="stopRun"></a>
# **stopRun**
> stopRun(owner, entity, uuid)

Stop run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.stopRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#stopRun");
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

<a name="stopRuns"></a>
# **stopRuns**
> stopRuns(owner, name, body)

Stop runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.stopRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#stopRuns");
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

<a name="syncRun"></a>
# **syncRun**
> syncRun(owner, project, body)

Sync offline run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      apiInstance.syncRun(owner, project, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#syncRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

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

<a name="tagRuns"></a>
# **tagRuns**
> tagRuns(owner, name, body)

Tag runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1EntitiesTags body = new V1EntitiesTags(); // V1EntitiesTags | Data
    try {
      apiInstance.tagRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#tagRuns");
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

<a name="transferRun"></a>
# **transferRun**
> transferRun(owner, project, runUuid, body)

Transfer run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String runUuid = "runUuid_example"; // String | UUID
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      apiInstance.transferRun(owner, project, runUuid, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#transferRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **runUuid** | **String**| UUID | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

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

<a name="transferRuns"></a>
# **transferRuns**
> transferRuns(owner, name, body)

Transfer runs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity under namespace
    V1EntitiesTransfer body = new V1EntitiesTransfer(); // V1EntitiesTransfer | Data
    try {
      apiInstance.transferRuns(owner, name, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#transferRuns");
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

<a name="unbookmarkRun"></a>
# **unbookmarkRun**
> unbookmarkRun(owner, entity, uuid)

Unbookmark run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      apiInstance.unbookmarkRun(owner, entity, uuid);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#unbookmarkRun");
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

<a name="updateRun"></a>
# **updateRun**
> V1Run updateRun(owner, project, runUuid, body)

Update run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project where the run will be assigned
    String runUuid = "runUuid_example"; // String | UUID
    V1Run body = new V1Run(); // V1Run | Run object
    try {
      V1Run result = apiInstance.updateRun(owner, project, runUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#updateRun");
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
| **project** | **String**| Project where the run will be assigned | |
| **runUuid** | **String**| UUID | |
| **body** | [**V1Run**](V1Run.md)| Run object | |

### Return type

[**V1Run**](V1Run.md)

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

<a name="uploadRunArtifact"></a>
# **uploadRunArtifact**
> uploadRunArtifact(owner, project, uuid, uploadfile, path, overwrite, connection)

Upload an artifact file to a store via run access

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project having access to the store
    String uuid = "uuid_example"; // String | Unique integer identifier of the entity
    File uploadfile = new File("/path/to/file"); // File | The file to upload.
    String path = "path_example"; // String | File path query params.
    Boolean overwrite = true; // Boolean | File path query params.
    String connection = "connection_example"; // String | Connection to use.
    try {
      apiInstance.uploadRunArtifact(owner, project, uuid, uploadfile, path, overwrite, connection);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#uploadRunArtifact");
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
| **connection** | **String**| Connection to use. | [optional] |

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

<a name="uploadRunLogs"></a>
# **uploadRunLogs**
> uploadRunLogs(owner, project, uuid, uploadfile, path, overwrite, connection)

Upload a logs file to a store via run access

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RunsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    RunsV1Api apiInstance = new RunsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String project = "project_example"; // String | Project having access to the store
    String uuid = "uuid_example"; // String | Unique integer identifier of the entity
    File uploadfile = new File("/path/to/file"); // File | The file to upload.
    String path = "path_example"; // String | File path query params.
    Boolean overwrite = true; // Boolean | File path query params.
    String connection = "connection_example"; // String | Connection to use.
    try {
      apiInstance.uploadRunLogs(owner, project, uuid, uploadfile, path, overwrite, connection);
    } catch (ApiException e) {
      System.err.println("Exception when calling RunsV1Api#uploadRunLogs");
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
| **connection** | **String**| Connection to use. | [optional] |

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

