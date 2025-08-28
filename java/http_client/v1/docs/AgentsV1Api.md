# AgentsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**collectAgentData**](AgentsV1Api.md#collectAgentData) | **POST** /internal/v1/{namespace}/{owner}/agents/{uuid}/collect | collect agent |
| [**createAgent**](AgentsV1Api.md#createAgent) | **POST** /api/v1/orgs/{owner}/agents | Create agent |
| [**createAgentStatus**](AgentsV1Api.md#createAgentStatus) | **POST** /api/v1/orgs/{owner}/agents/{uuid}/statuses | Create new agent status |
| [**cronAgent**](AgentsV1Api.md#cronAgent) | **POST** /api/v1/orgs/{owner}/agents/cron | Global Cron |
| [**deleteAgent**](AgentsV1Api.md#deleteAgent) | **DELETE** /api/v1/orgs/{owner}/agents/{uuid} | Delete agent |
| [**getAgent**](AgentsV1Api.md#getAgent) | **GET** /api/v1/orgs/{owner}/agents/{uuid} | Get agent |
| [**getAgentConfig**](AgentsV1Api.md#getAgentConfig) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/config | Get agent config |
| [**getAgentLogs**](AgentsV1Api.md#getAgentLogs) | **GET** /streams/v1/{namespace}/{owner}/agents/{uuid}/logs | Get run logs |
| [**getAgentState**](AgentsV1Api.md#getAgentState) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/state | Get State (queues/runs) |
| [**getAgentStats**](AgentsV1Api.md#getAgentStats) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/stats | Get agent stats |
| [**getAgentStatuses**](AgentsV1Api.md#getAgentStatuses) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/statuses | Get Agent statuses |
| [**getAgentToken**](AgentsV1Api.md#getAgentToken) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/token | Get agent token |
| [**getGlobalState**](AgentsV1Api.md#getGlobalState) | **GET** /api/v1/orgs/{owner}/agents/state | Get Global State (queues/runs) |
| [**inspectAgent**](AgentsV1Api.md#inspectAgent) | **GET** /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect | Inspect an agent&#39;s service full conditions |
| [**listAgentNames**](AgentsV1Api.md#listAgentNames) | **GET** /api/v1/orgs/{owner}/agents/names | List agents names |
| [**listAgents**](AgentsV1Api.md#listAgents) | **GET** /api/v1/orgs/{owner}/agents | List agents |
| [**patchAgent**](AgentsV1Api.md#patchAgent) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid} | Patch agent |
| [**patchAgentToken**](AgentsV1Api.md#patchAgentToken) | **PATCH** /api/v1/orgs/{owner}/agents/{entity}/token | Patch agent token |
| [**reconcileAgent**](AgentsV1Api.md#reconcileAgent) | **PATCH** /api/v1/orgs/{owner}/agents/{uuid}/reconcile | Reconcile agent |
| [**syncAgent**](AgentsV1Api.md#syncAgent) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid}/sync | Sync agent |
| [**updateAgent**](AgentsV1Api.md#updateAgent) | **PUT** /api/v1/orgs/{owner}/agents/{agent.uuid} | Update agent |
| [**updateAgentConfig**](AgentsV1Api.md#updateAgentConfig) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid}/config | Update agent config |
| [**updateAgentToken**](AgentsV1Api.md#updateAgentToken) | **PUT** /api/v1/orgs/{owner}/agents/{entity}/token | Update agent token |


<a name="collectAgentData"></a>
# **collectAgentData**
> Object collectAgentData(namespace, owner, uuid)

collect agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    try {
      Object result = apiInstance.collectAgentData(namespace, owner, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#collectAgentData");
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
| **uuid** | **String**| Uuid identifier of the entity | |

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

<a name="createAgent"></a>
# **createAgent**
> V1Agent createAgent(owner, body)

Create agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Agent body = new V1Agent(); // V1Agent | Agent body
    try {
      V1Agent result = apiInstance.createAgent(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#createAgent");
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
| **body** | [**V1Agent**](V1Agent.md)| Agent body | |

### Return type

[**V1Agent**](V1Agent.md)

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

<a name="createAgentStatus"></a>
# **createAgentStatus**
> V1Status createAgentStatus(owner, uuid, body)

Create new agent status

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    V1AgentStatusBodyRequest body = new V1AgentStatusBodyRequest(); // V1AgentStatusBodyRequest | 
    try {
      V1Status result = apiInstance.createAgentStatus(owner, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#createAgentStatus");
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
| **uuid** | **String**| Uuid identifier of the entity | |
| **body** | [**V1AgentStatusBodyRequest**](V1AgentStatusBodyRequest.md)|  | |

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

<a name="cronAgent"></a>
# **cronAgent**
> V1AgentStateResponse cronAgent(owner, body)

Global Cron

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Object body = null; // Object | Cron body
    try {
      V1AgentStateResponse result = apiInstance.cronAgent(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#cronAgent");
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
| **body** | **Object**| Cron body | |

### Return type

[**V1AgentStateResponse**](V1AgentStateResponse.md)

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

<a name="deleteAgent"></a>
# **deleteAgent**
> deleteAgent(owner, uuid, entity)

Delete agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    try {
      apiInstance.deleteAgent(owner, uuid, entity);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#deleteAgent");
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

<a name="getAgent"></a>
# **getAgent**
> V1Agent getAgent(owner, uuid, entity)

Get agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    try {
      V1Agent result = apiInstance.getAgent(owner, uuid, entity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgent");
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

[**V1Agent**](V1Agent.md)

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

<a name="getAgentConfig"></a>
# **getAgentConfig**
> V1Agent getAgentConfig(owner, uuid, entity)

Get agent config

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    try {
      V1Agent result = apiInstance.getAgentConfig(owner, uuid, entity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgentConfig");
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

[**V1Agent**](V1Agent.md)

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

<a name="getAgentLogs"></a>
# **getAgentLogs**
> V1Logs getAgentLogs(namespace, owner, uuid, service, lastFile, force, connection)

Get run logs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String service = "service_example"; // String | Service.
    String lastFile = "lastFile_example"; // String | last_file.
    Boolean force = true; // Boolean | Force query param.
    String connection = "connection_example"; // String | Connection to use.
    try {
      V1Logs result = apiInstance.getAgentLogs(namespace, owner, uuid, service, lastFile, force, connection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgentLogs");
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
| **uuid** | **String**| Uuid identifier of the entity | |
| **service** | **String**| Service. | [optional] |
| **lastFile** | **String**| last_file. | [optional] |
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

<a name="getAgentState"></a>
# **getAgentState**
> V1AgentStateResponse getAgentState(owner, uuid)

Get State (queues/runs)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    try {
      V1AgentStateResponse result = apiInstance.getAgentState(owner, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgentState");
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
| **uuid** | **String**| Uuid identifier of the entity | |

### Return type

[**V1AgentStateResponse**](V1AgentStateResponse.md)

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

<a name="getAgentStats"></a>
# **getAgentStats**
> Object getAgentStats(owner, uuid, entity, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc, startDate, endDate, boundary)

Get agent stats

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
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
      Object result = apiInstance.getAgentStats(owner, uuid, entity, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc, startDate, endDate, boundary);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgentStats");
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

<a name="getAgentStatuses"></a>
# **getAgentStatuses**
> V1Status getAgentStatuses(owner, uuid, entity)

Get Agent statuses

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
    String entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
    try {
      V1Status result = apiInstance.getAgentStatuses(owner, uuid, entity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgentStatuses");
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

<a name="getAgentToken"></a>
# **getAgentToken**
> V1Token getAgentToken(owner, uuid)

Get agent token

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    try {
      V1Token result = apiInstance.getAgentToken(owner, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getAgentToken");
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
| **uuid** | **String**| Uuid identifier of the entity | |

### Return type

[**V1Token**](V1Token.md)

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

<a name="getGlobalState"></a>
# **getGlobalState**
> V1AgentStateResponse getGlobalState(owner)

Get Global State (queues/runs)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    try {
      V1AgentStateResponse result = apiInstance.getGlobalState(owner);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#getGlobalState");
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

### Return type

[**V1AgentStateResponse**](V1AgentStateResponse.md)

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

<a name="inspectAgent"></a>
# **inspectAgent**
> Object inspectAgent(namespace, owner, uuid, service, lastFile, force, connection)

Inspect an agent&#39;s service full conditions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    String service = "service_example"; // String | Service.
    String lastFile = "lastFile_example"; // String | last_file.
    Boolean force = true; // Boolean | Force query param.
    String connection = "connection_example"; // String | Connection to use.
    try {
      Object result = apiInstance.inspectAgent(namespace, owner, uuid, service, lastFile, force, connection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#inspectAgent");
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
| **uuid** | **String**| Uuid identifier of the entity | |
| **service** | **String**| Service. | [optional] |
| **lastFile** | **String**| last_file. | [optional] |
| **force** | **Boolean**| Force query param. | [optional] |
| **connection** | **String**| Connection to use. | [optional] |

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

<a name="listAgentNames"></a>
# **listAgentNames**
> V1ListAgentsResponse listAgentNames(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List agents names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListAgentsResponse result = apiInstance.listAgentNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#listAgentNames");
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

[**V1ListAgentsResponse**](V1ListAgentsResponse.md)

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

<a name="listAgents"></a>
# **listAgents**
> V1ListAgentsResponse listAgents(owner, offset, limit, sort, query, bookmarks, mode, noPage)

List agents

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListAgentsResponse result = apiInstance.listAgents(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#listAgents");
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

[**V1ListAgentsResponse**](V1ListAgentsResponse.md)

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

<a name="patchAgent"></a>
# **patchAgent**
> V1Agent patchAgent(owner, agentUuid, body)

Patch agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String agentUuid = "agentUuid_example"; // String | UUID
    V1Agent body = new V1Agent(); // V1Agent | Agent body
    try {
      V1Agent result = apiInstance.patchAgent(owner, agentUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#patchAgent");
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
| **agentUuid** | **String**| UUID | |
| **body** | [**V1Agent**](V1Agent.md)| Agent body | |

### Return type

[**V1Agent**](V1Agent.md)

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

<a name="patchAgentToken"></a>
# **patchAgentToken**
> V1Token patchAgentToken(owner, entity, body)

Patch agent token

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity
    V1Token body = new V1Token(); // V1Token | Token body
    try {
      V1Token result = apiInstance.patchAgentToken(owner, entity, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#patchAgentToken");
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
| **entity** | **String**| Entity | |
| **body** | [**V1Token**](V1Token.md)| Token body | |

### Return type

[**V1Token**](V1Token.md)

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

<a name="reconcileAgent"></a>
# **reconcileAgent**
> Object reconcileAgent(owner, uuid, body)

Reconcile agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    V1AgentReconcileBodyRequest body = new V1AgentReconcileBodyRequest(); // V1AgentReconcileBodyRequest | 
    try {
      Object result = apiInstance.reconcileAgent(owner, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#reconcileAgent");
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
| **uuid** | **String**| Uuid identifier of the entity | |
| **body** | [**V1AgentReconcileBodyRequest**](V1AgentReconcileBodyRequest.md)|  | |

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

<a name="syncAgent"></a>
# **syncAgent**
> syncAgent(owner, agentUuid, body)

Sync agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String agentUuid = "agentUuid_example"; // String | UUID
    V1Agent body = new V1Agent(); // V1Agent | Agent body
    try {
      apiInstance.syncAgent(owner, agentUuid, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#syncAgent");
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
| **agentUuid** | **String**| UUID | |
| **body** | [**V1Agent**](V1Agent.md)| Agent body | |

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

<a name="updateAgent"></a>
# **updateAgent**
> V1Agent updateAgent(owner, agentUuid, body)

Update agent

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String agentUuid = "agentUuid_example"; // String | UUID
    V1Agent body = new V1Agent(); // V1Agent | Agent body
    try {
      V1Agent result = apiInstance.updateAgent(owner, agentUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#updateAgent");
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
| **agentUuid** | **String**| UUID | |
| **body** | [**V1Agent**](V1Agent.md)| Agent body | |

### Return type

[**V1Agent**](V1Agent.md)

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

<a name="updateAgentConfig"></a>
# **updateAgentConfig**
> V1Agent updateAgentConfig(owner, agentUuid, body)

Update agent config

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String agentUuid = "agentUuid_example"; // String | UUID
    V1Agent body = new V1Agent(); // V1Agent | Agent body
    try {
      V1Agent result = apiInstance.updateAgentConfig(owner, agentUuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#updateAgentConfig");
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
| **agentUuid** | **String**| UUID | |
| **body** | [**V1Agent**](V1Agent.md)| Agent body | |

### Return type

[**V1Agent**](V1Agent.md)

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

<a name="updateAgentToken"></a>
# **updateAgentToken**
> V1Token updateAgentToken(owner, entity, body)

Update agent token

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AgentsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    AgentsV1Api apiInstance = new AgentsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String entity = "entity_example"; // String | Entity
    V1Token body = new V1Token(); // V1Token | Token body
    try {
      V1Token result = apiInstance.updateAgentToken(owner, entity, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AgentsV1Api#updateAgentToken");
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
| **entity** | **String**| Entity | |
| **body** | [**V1Token**](V1Token.md)| Token body | |

### Return type

[**V1Token**](V1Token.md)

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

