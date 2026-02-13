# AutomationsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAutomation**](AutomationsV1Api.md#createAutomation) | **POST** /api/v1/orgs/{owner}/automations | Create automation |
| [**deleteAutomation**](AutomationsV1Api.md#deleteAutomation) | **DELETE** /api/v1/orgs/{owner}/automations/{uuid} | Delete automation |
| [**getAutomation**](AutomationsV1Api.md#getAutomation) | **GET** /api/v1/orgs/{owner}/automations/{uuid} | Get automation |
| [**getAutomationStats**](AutomationsV1Api.md#getAutomationStats) | **GET** /api/v1/orgs/{owner}/automations/{uuid}/stats | Get automation stats |
| [**listAutomationEvents**](AutomationsV1Api.md#listAutomationEvents) | **GET** /api/v1/orgs/{owner}/automations/{uuid}/events | List automation events (from executions&#39; triggering_event) |
| [**listAutomationExecutions**](AutomationsV1Api.md#listAutomationExecutions) | **GET** /api/v1/orgs/{owner}/automations/{uuid}/executions | List automation executions |
| [**listAutomationNames**](AutomationsV1Api.md#listAutomationNames) | **GET** /api/v1/orgs/{owner}/automations/names | List automation names |
| [**listAutomations**](AutomationsV1Api.md#listAutomations) | **GET** /api/v1/orgs/{owner}/automations | List automations |
| [**patchAutomation**](AutomationsV1Api.md#patchAutomation) | **PATCH** /api/v1/orgs/{owner}/automations/{automation.uuid} | Patch automation |
| [**retryAutomationExecution**](AutomationsV1Api.md#retryAutomationExecution) | **POST** /api/v1/orgs/{owner}/automations/{entity}/executions/{uuid}/retry | Retry automation execution |
| [**testAutomation**](AutomationsV1Api.md#testAutomation) | **POST** /api/v1/orgs/{owner}/automations/{automation_uuid}/test | Test automation trigger evaluation |
| [**updateAutomation**](AutomationsV1Api.md#updateAutomation) | **PUT** /api/v1/orgs/{owner}/automations/{automation.uuid} | Update automation |


<a name="createAutomation"></a>
# **createAutomation**
> V1Automation createAutomation(owner, body)

Create automation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Automation body = new V1Automation(); // V1Automation | Automation
    try {
      V1Automation result = apiInstance.createAutomation(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#createAutomation");
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
| **body** | [**V1Automation**](V1Automation.md)| Automation | |

### Return type

[**V1Automation**](V1Automation.md)

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

<a name="deleteAutomation"></a>
# **deleteAutomation**
> deleteAutomation(owner, uuid, entity)

Delete automation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    try {
      apiInstance.deleteAutomation(owner, uuid, entity);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#deleteAutomation");
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
| **uuid** | **String**| Uuid identifier of the sub-entity | |
| **entity** | **String**| Entity: project name, hub name, registry name, ... | [optional] |

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

<a name="getAutomation"></a>
# **getAutomation**
> V1Automation getAutomation(owner, uuid, entity)

Get automation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    try {
      V1Automation result = apiInstance.getAutomation(owner, uuid, entity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#getAutomation");
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
| **uuid** | **String**| Uuid identifier of the sub-entity | |
| **entity** | **String**| Entity: project name, hub name, registry name, ... | [optional] |

### Return type

[**V1Automation**](V1Automation.md)

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

<a name="getAutomationStats"></a>
# **getAutomationStats**
> Object getAutomationStats(owner, uuid, entity, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc, startDate, endDate, boundary)

Get automation stats

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    String entity = "entity_example"; // String | Entity name under namespace.
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
      Object result = apiInstance.getAutomationStats(owner, uuid, entity, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc, startDate, endDate, boundary);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#getAutomationStats");
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
| **uuid** | **String**| SubEntity uuid | |
| **entity** | **String**| Entity name under namespace. | [optional] |
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

<a name="listAutomationEvents"></a>
# **listAutomationEvents**
> V1ListActivitiesResponse listAutomationEvents(owner, uuid, entity, offset, limit, sort, query, noPage)

List automation events (from executions&#39; triggering_event)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    String entity = "entity_example"; // String | Entity name under namespace.
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListActivitiesResponse result = apiInstance.listAutomationEvents(owner, uuid, entity, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#listAutomationEvents");
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
| **uuid** | **String**| SubEntity uuid | |
| **entity** | **String**| Entity name under namespace. | [optional] |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
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

<a name="listAutomationExecutions"></a>
# **listAutomationExecutions**
> V1ListAutomationExecutionsResponse listAutomationExecutions(owner, uuid, entity, offset, limit, sort, query, noPage)

List automation executions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | SubEntity uuid
    String entity = "entity_example"; // String | Entity name under namespace.
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListAutomationExecutionsResponse result = apiInstance.listAutomationExecutions(owner, uuid, entity, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#listAutomationExecutions");
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
| **uuid** | **String**| SubEntity uuid | |
| **entity** | **String**| Entity name under namespace. | [optional] |
| **offset** | **Integer**| Pagination offset. | [optional] |
| **limit** | **Integer**| Limit size. | [optional] |
| **sort** | **String**| Sort to order the search. | [optional] |
| **query** | **String**| Query filter the search. | [optional] |
| **noPage** | **Boolean**| No pagination. | [optional] |

### Return type

[**V1ListAutomationExecutionsResponse**](V1ListAutomationExecutionsResponse.md)

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

<a name="listAutomationNames"></a>
# **listAutomationNames**
> V1ListAutomationsResponse listAutomationNames(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List automation names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListAutomationsResponse result = apiInstance.listAutomationNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#listAutomationNames");
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

[**V1ListAutomationsResponse**](V1ListAutomationsResponse.md)

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

<a name="listAutomations"></a>
# **listAutomations**
> V1ListAutomationsResponse listAutomations(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List automations

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListAutomationsResponse result = apiInstance.listAutomations(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#listAutomations");
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

[**V1ListAutomationsResponse**](V1ListAutomationsResponse.md)

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

<a name="patchAutomation"></a>
# **patchAutomation**
> V1Automation patchAutomation(owner, automationUuid, body)

Patch automation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String automationUuid = "automationUuid_example"; // String | UUID
    V1Automation body = new V1Automation(); // V1Automation | Automation
    try {
      V1Automation result = apiInstance.patchAutomation(owner, automationUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#patchAutomation");
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
| **automationUuid** | **String**| UUID | |
| **body** | [**V1Automation**](V1Automation.md)| Automation | |

### Return type

[**V1Automation**](V1Automation.md)

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

<a name="retryAutomationExecution"></a>
# **retryAutomationExecution**
> V1AutomationExecution retryAutomationExecution(owner, entity, uuid)

Retry automation execution

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    try {
      V1AutomationExecution result = apiInstance.retryAutomationExecution(owner, entity, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#retryAutomationExecution");
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

[**V1AutomationExecution**](V1AutomationExecution.md)

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

<a name="testAutomation"></a>
# **testAutomation**
> Object testAutomation(owner, automationUuid, body)

Test automation trigger evaluation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String automationUuid = "automationUuid_example"; // String | Automation UUID
    V1AutomationTestRequest body = new V1AutomationTestRequest(); // V1AutomationTestRequest | 
    try {
      Object result = apiInstance.testAutomation(owner, automationUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#testAutomation");
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
| **automationUuid** | **String**| Automation UUID | |
| **body** | [**V1AutomationTestRequest**](V1AutomationTestRequest.md)|  | |

### Return type

**Object**

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

<a name="updateAutomation"></a>
# **updateAutomation**
> V1Automation updateAutomation(owner, automationUuid, body)

Update automation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AutomationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AutomationsV1Api apiInstance = new AutomationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String automationUuid = "automationUuid_example"; // String | UUID
    V1Automation body = new V1Automation(); // V1Automation | Automation
    try {
      V1Automation result = apiInstance.updateAutomation(owner, automationUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AutomationsV1Api#updateAutomation");
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
| **automationUuid** | **String**| UUID | |
| **body** | [**V1Automation**](V1Automation.md)| Automation | |

### Return type

[**V1Automation**](V1Automation.md)

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

