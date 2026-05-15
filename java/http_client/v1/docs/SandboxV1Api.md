# SandboxV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPty**](SandboxV1Api.md#createPty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty |  |
| [**deleteBgExec**](SandboxV1Api.md#deleteBgExec) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id} |  |
| [**deletePty**](SandboxV1Api.md#deletePty) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id} |  |
| [**exec**](SandboxV1Api.md#exec) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec |  |
| [**execBg**](SandboxV1Api.md#execBg) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg |  |
| [**fsLs**](SandboxV1Api.md#fsLs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/ls |  |
| [**fsMkdir**](SandboxV1Api.md#fsMkdir) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/mkdir |  |
| [**fsRm**](SandboxV1Api.md#fsRm) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/rm |  |
| [**fsStat**](SandboxV1Api.md#fsStat) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/stat |  |
| [**getBgExec**](SandboxV1Api.md#getBgExec) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id} |  |
| [**getBgExecLogs**](SandboxV1Api.md#getBgExecLogs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/logs |  |
| [**getPty**](SandboxV1Api.md#getPty) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id} |  |
| [**listBgExecs**](SandboxV1Api.md#listBgExecs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg |  |
| [**listPtys**](SandboxV1Api.md#listPtys) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty |  |
| [**ping**](SandboxV1Api.md#ping) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/ping |  |
| [**resizePty**](SandboxV1Api.md#resizePty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id}/resize |  |
| [**signalBgExec**](SandboxV1Api.md#signalBgExec) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/signal |  |
| [**signalPty**](SandboxV1Api.md#signalPty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id}/signal |  |


<a name="createPty"></a>
# **createPty**
> V1Pty createPty(namespace, owner, project, uuid, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    V1CreatePtyRequest body = new V1CreatePtyRequest(); // V1CreatePtyRequest | 
    try {
      V1Pty result = apiInstance.createPty(namespace, owner, project, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#createPty");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **body** | [**V1CreatePtyRequest**](V1CreatePtyRequest.md)|  | |

### Return type

[**V1Pty**](V1Pty.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **201** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="deleteBgExec"></a>
# **deleteBgExec**
> deleteBgExec(namespace, owner, project, uuid, id)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    try {
      apiInstance.deleteBgExec(namespace, owner, project, uuid, id);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#deleteBgExec");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |

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

<a name="deletePty"></a>
# **deletePty**
> deletePty(namespace, owner, project, uuid, id)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    try {
      apiInstance.deletePty(namespace, owner, project, uuid, id);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#deletePty");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |

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

<a name="exec"></a>
# **exec**
> V1ExecResult exec(namespace, owner, project, uuid, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    V1ExecRequest body = new V1ExecRequest(); // V1ExecRequest | 
    try {
      V1ExecResult result = apiInstance.exec(namespace, owner, project, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#exec");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **body** | [**V1ExecRequest**](V1ExecRequest.md)|  | |

### Return type

[**V1ExecResult**](V1ExecResult.md)

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

<a name="execBg"></a>
# **execBg**
> V1ExecBgStart execBg(namespace, owner, project, uuid, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    V1ExecBgRequest body = new V1ExecBgRequest(); // V1ExecBgRequest | 
    try {
      V1ExecBgStart result = apiInstance.execBg(namespace, owner, project, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#execBg");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **body** | [**V1ExecBgRequest**](V1ExecBgRequest.md)|  | |

### Return type

[**V1ExecBgStart**](V1ExecBgStart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **202** | A successful response. |  -  |
| **204** | No content. |  -  |
| **403** | You don&#39;t have permission to access the resource. |  -  |
| **404** | Resource does not exist. |  -  |
| **0** | An unexpected error response. |  -  |

<a name="fsLs"></a>
# **fsLs**
> V1FsListResult fsLs(namespace, owner, project, uuid, path, recursive, maxEntries)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String path = "path_example"; // String | 
    Boolean recursive = true; // Boolean | 
    Integer maxEntries = 56; // Integer | 
    try {
      V1FsListResult result = apiInstance.fsLs(namespace, owner, project, uuid, path, recursive, maxEntries);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#fsLs");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **path** | **String**|  | [optional] |
| **recursive** | **Boolean**|  | [optional] |
| **maxEntries** | **Integer**|  | [optional] |

### Return type

[**V1FsListResult**](V1FsListResult.md)

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

<a name="fsMkdir"></a>
# **fsMkdir**
> V1FsPathResult fsMkdir(namespace, owner, project, uuid, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    V1FsMkdirRequest body = new V1FsMkdirRequest(); // V1FsMkdirRequest | 
    try {
      V1FsPathResult result = apiInstance.fsMkdir(namespace, owner, project, uuid, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#fsMkdir");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **body** | [**V1FsMkdirRequest**](V1FsMkdirRequest.md)|  | |

### Return type

[**V1FsPathResult**](V1FsPathResult.md)

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

<a name="fsRm"></a>
# **fsRm**
> V1FsPathResult fsRm(namespace, owner, project, uuid, path, recursive)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String path = "path_example"; // String | 
    Boolean recursive = true; // Boolean | 
    try {
      V1FsPathResult result = apiInstance.fsRm(namespace, owner, project, uuid, path, recursive);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#fsRm");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **path** | **String**|  | [optional] |
| **recursive** | **Boolean**|  | [optional] |

### Return type

[**V1FsPathResult**](V1FsPathResult.md)

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

<a name="fsStat"></a>
# **fsStat**
> V1FsStatResult fsStat(namespace, owner, project, uuid, path)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String path = "path_example"; // String | 
    try {
      V1FsStatResult result = apiInstance.fsStat(namespace, owner, project, uuid, path);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#fsStat");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **path** | **String**|  | [optional] |

### Return type

[**V1FsStatResult**](V1FsStatResult.md)

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

<a name="getBgExec"></a>
# **getBgExec**
> V1ExecBgStatus getBgExec(namespace, owner, project, uuid, id)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    try {
      V1ExecBgStatus result = apiInstance.getBgExec(namespace, owner, project, uuid, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#getBgExec");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |

### Return type

[**V1ExecBgStatus**](V1ExecBgStatus.md)

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

<a name="getBgExecLogs"></a>
# **getBgExecLogs**
> V1ExecBgLogs getBgExecLogs(namespace, owner, project, uuid, id, stream, offset, maxBytes)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    String stream = "stream_example"; // String | 
    Long offset = 56L; // Long | 
    Long maxBytes = 56L; // Long | 
    try {
      V1ExecBgLogs result = apiInstance.getBgExecLogs(namespace, owner, project, uuid, id, stream, offset, maxBytes);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#getBgExecLogs");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |
| **stream** | **String**|  | [optional] |
| **offset** | **Long**|  | [optional] |
| **maxBytes** | **Long**|  | [optional] |

### Return type

[**V1ExecBgLogs**](V1ExecBgLogs.md)

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

<a name="getPty"></a>
# **getPty**
> V1Pty getPty(namespace, owner, project, uuid, id)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    try {
      V1Pty result = apiInstance.getPty(namespace, owner, project, uuid, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#getPty");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |

### Return type

[**V1Pty**](V1Pty.md)

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

<a name="listBgExecs"></a>
# **listBgExecs**
> V1ExecBgList listBgExecs(namespace, owner, project, uuid, tag)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String tag = "tag_example"; // String | 
    try {
      V1ExecBgList result = apiInstance.listBgExecs(namespace, owner, project, uuid, tag);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#listBgExecs");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **tag** | **String**|  | [optional] |

### Return type

[**V1ExecBgList**](V1ExecBgList.md)

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

<a name="listPtys"></a>
# **listPtys**
> V1PtyList listPtys(namespace, owner, project, uuid, tag)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String tag = "tag_example"; // String | 
    try {
      V1PtyList result = apiInstance.listPtys(namespace, owner, project, uuid, tag);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#listPtys");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **tag** | **String**|  | [optional] |

### Return type

[**V1PtyList**](V1PtyList.md)

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

<a name="ping"></a>
# **ping**
> V1PingResponse ping(namespace, owner, project, uuid)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    try {
      V1PingResponse result = apiInstance.ping(namespace, owner, project, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#ping");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |

### Return type

[**V1PingResponse**](V1PingResponse.md)

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

<a name="resizePty"></a>
# **resizePty**
> resizePty(namespace, owner, project, uuid, id, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    V1ResizePtyRequest body = new V1ResizePtyRequest(); // V1ResizePtyRequest | 
    try {
      apiInstance.resizePty(namespace, owner, project, uuid, id, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#resizePty");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |
| **body** | [**V1ResizePtyRequest**](V1ResizePtyRequest.md)|  | |

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

<a name="signalBgExec"></a>
# **signalBgExec**
> signalBgExec(namespace, owner, project, uuid, id, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    V1SignalRequest body = new V1SignalRequest(); // V1SignalRequest | 
    try {
      apiInstance.signalBgExec(namespace, owner, project, uuid, id, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#signalBgExec");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |
| **body** | [**V1SignalRequest**](V1SignalRequest.md)|  | |

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

<a name="signalPty"></a>
# **signalPty**
> signalPty(namespace, owner, project, uuid, id, body)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SandboxV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    SandboxV1Api apiInstance = new SandboxV1Api(defaultClient);
    String namespace = "namespace_example"; // String | 
    String owner = "owner_example"; // String | 
    String project = "project_example"; // String | 
    String uuid = "uuid_example"; // String | 
    String id = "id_example"; // String | 
    V1SignalRequest body = new V1SignalRequest(); // V1SignalRequest | 
    try {
      apiInstance.signalPty(namespace, owner, project, uuid, id, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxV1Api#signalPty");
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
| **owner** | **String**|  | |
| **project** | **String**|  | |
| **uuid** | **String**|  | |
| **id** | **String**|  | |
| **body** | [**V1SignalRequest**](V1SignalRequest.md)|  | |

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

