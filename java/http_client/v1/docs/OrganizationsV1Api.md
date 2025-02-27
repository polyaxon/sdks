# OrganizationsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveOrganizationRuns**](OrganizationsV1Api.md#approveOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/approve | Approve cross-project runs selection |
| [**archiveOrganizationRuns**](OrganizationsV1Api.md#archiveOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/archive | Archive cross-project runs selection |
| [**bookmarkOrganizationRuns**](OrganizationsV1Api.md#bookmarkOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/bookmark | Bookmark cross-project runs selection |
| [**createOrganization**](OrganizationsV1Api.md#createOrganization) | **POST** /api/v1/orgs/create | Create organization |
| [**createOrganizationMember**](OrganizationsV1Api.md#createOrganizationMember) | **POST** /api/v1/orgs/{owner}/members | Create organization member |
| [**deleteOrganization**](OrganizationsV1Api.md#deleteOrganization) | **DELETE** /api/v1/orgs/{owner} | Delete organization |
| [**deleteOrganizationInvitation**](OrganizationsV1Api.md#deleteOrganizationInvitation) | **DELETE** /api/v1/orgs/{owner}/invitations | Delete organization invitation details |
| [**deleteOrganizationMember**](OrganizationsV1Api.md#deleteOrganizationMember) | **DELETE** /api/v1/orgs/{owner}/members/{name} | Delete organization member details |
| [**deleteOrganizationRuns**](OrganizationsV1Api.md#deleteOrganizationRuns) | **DELETE** /api/v1/orgs/{owner}/runs/delete | Delete cross-project runs selection |
| [**getOrganization**](OrganizationsV1Api.md#getOrganization) | **GET** /api/v1/orgs/{owner} | Get organization |
| [**getOrganizationActivities**](OrganizationsV1Api.md#getOrganizationActivities) | **GET** /api/v1/orgs/{owner}/activities | Get organization activities |
| [**getOrganizationInvitation**](OrganizationsV1Api.md#getOrganizationInvitation) | **GET** /api/v1/orgs/{owner}/invitations | Get organization invitation details |
| [**getOrganizationMember**](OrganizationsV1Api.md#getOrganizationMember) | **GET** /api/v1/orgs/{owner}/members/{name} | Get organization member details |
| [**getOrganizationMultiRunEvents**](OrganizationsV1Api.md#getOrganizationMultiRunEvents) | **GET** /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind} | Get multi runs events |
| [**getOrganizationMultiRunImportance**](OrganizationsV1Api.md#getOrganizationMultiRunImportance) | **POST** /streams/v1/{namespace}/orgs/{owner}/runs/multi/importance | Get multi run importance |
| [**getOrganizationRun**](OrganizationsV1Api.md#getOrganizationRun) | **GET** /api/v1/orgs/{owner}/runs/{uuid} | Get a run in an organization |
| [**getOrganizationRuns**](OrganizationsV1Api.md#getOrganizationRuns) | **GET** /api/v1/orgs/{owner}/runs | Get all runs in an organization |
| [**getOrganizationRunsArtifactsLineage**](OrganizationsV1Api.md#getOrganizationRunsArtifactsLineage) | **GET** /api/v1/orgs/{owner}/runs/lineage/artifacts | Get runs artifacts lineage |
| [**getOrganizationSettings**](OrganizationsV1Api.md#getOrganizationSettings) | **GET** /api/v1/orgs/{owner}/settings | Get organization settings |
| [**getOrganizationStats**](OrganizationsV1Api.md#getOrganizationStats) | **GET** /api/v1/orgs/{owner}/stats | Get organization stats |
| [**getOrganizationVersions**](OrganizationsV1Api.md#getOrganizationVersions) | **GET** /api/v1/orgs/{owner}/versions/{kind} | Get all runs in an organization |
| [**invalidateOrganizationRuns**](OrganizationsV1Api.md#invalidateOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/invalidate | Invalidate cross-project runs selection |
| [**listOrganizationMemberNames**](OrganizationsV1Api.md#listOrganizationMemberNames) | **GET** /api/v1/orgs/{owner}/members/names | Get organization member names |
| [**listOrganizationMembers**](OrganizationsV1Api.md#listOrganizationMembers) | **GET** /api/v1/orgs/{owner}/members | Get organization members |
| [**listOrganizationNames**](OrganizationsV1Api.md#listOrganizationNames) | **GET** /api/v1/orgs/names | List organizations names |
| [**listOrganizations**](OrganizationsV1Api.md#listOrganizations) | **GET** /api/v1/orgs/list | List organizations |
| [**organizationLicense**](OrganizationsV1Api.md#organizationLicense) | **POST** /api/v1/orgs/{owner}/license | Organization license |
| [**organizationPlan**](OrganizationsV1Api.md#organizationPlan) | **POST** /api/v1/orgs/{owner}/plan | Organization plan |
| [**patchOrganization**](OrganizationsV1Api.md#patchOrganization) | **PATCH** /api/v1/orgs/{owner} | Patch organization |
| [**patchOrganizationInvitation**](OrganizationsV1Api.md#patchOrganizationInvitation) | **PATCH** /api/v1/orgs/{owner}/invitations | Patch organization invitation |
| [**patchOrganizationMember**](OrganizationsV1Api.md#patchOrganizationMember) | **PATCH** /api/v1/orgs/{owner}/members/{member.user} | Patch organization member |
| [**patchOrganizationSettings**](OrganizationsV1Api.md#patchOrganizationSettings) | **PATCH** /api/v1/orgs/{owner}/settings | Patch oranization settings |
| [**resendOrganizationInvitation**](OrganizationsV1Api.md#resendOrganizationInvitation) | **POST** /api/v1/orgs/{owner}/invitations | Resend organization invitation |
| [**restoreOrganizationRuns**](OrganizationsV1Api.md#restoreOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/restore | Restore cross-project runs selection |
| [**skipOrganizationRuns**](OrganizationsV1Api.md#skipOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/Skip | Skip cross-project runs selection |
| [**stopOrganizationRuns**](OrganizationsV1Api.md#stopOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/stop | Stop cross-project runs selection |
| [**tagOrganizationRuns**](OrganizationsV1Api.md#tagOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/tag | Tag cross-project runs selection |
| [**transferOrganizationRuns**](OrganizationsV1Api.md#transferOrganizationRuns) | **POST** /api/v1/orgs/{owner}/runs/transfer | Transfer cross-project runs selection to a new project |
| [**updateOrganization**](OrganizationsV1Api.md#updateOrganization) | **PUT** /api/v1/orgs/{owner} | Update organization |
| [**updateOrganizationInvitation**](OrganizationsV1Api.md#updateOrganizationInvitation) | **PUT** /api/v1/orgs/{owner}/invitations | Update organization invitation |
| [**updateOrganizationMember**](OrganizationsV1Api.md#updateOrganizationMember) | **PUT** /api/v1/orgs/{owner}/members/{member.user} | Update organization member |
| [**updateOrganizationSettings**](OrganizationsV1Api.md#updateOrganizationSettings) | **PUT** /api/v1/orgs/{owner}/settings | Update organization settings |


<a name="approveOrganizationRuns"></a>
# **approveOrganizationRuns**
> approveOrganizationRuns(owner, body)

Approve cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.approveOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#approveOrganizationRuns");
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

<a name="archiveOrganizationRuns"></a>
# **archiveOrganizationRuns**
> archiveOrganizationRuns(owner, body)

Archive cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.archiveOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#archiveOrganizationRuns");
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

<a name="bookmarkOrganizationRuns"></a>
# **bookmarkOrganizationRuns**
> bookmarkOrganizationRuns(owner, body)

Bookmark cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.bookmarkOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#bookmarkOrganizationRuns");
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

<a name="createOrganization"></a>
# **createOrganization**
> V1Organization createOrganization(body)

Create organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    V1Organization body = new V1Organization(); // V1Organization | 
    try {
      V1Organization result = apiInstance.createOrganization(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#createOrganization");
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
| **body** | [**V1Organization**](V1Organization.md)|  | |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="createOrganizationMember"></a>
# **createOrganizationMember**
> V1OrganizationMember createOrganizationMember(owner, body, email)

Create organization member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1OrganizationMember body = new V1OrganizationMember(); // V1OrganizationMember | Organization body
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.createOrganizationMember(owner, body, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#createOrganizationMember");
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
| **body** | [**V1OrganizationMember**](V1OrganizationMember.md)| Organization body | |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="deleteOrganization"></a>
# **deleteOrganization**
> deleteOrganization(owner, usage)

Delete organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String usage = "usage_example"; // String | Owner usage query param.
    try {
      apiInstance.deleteOrganization(owner, usage);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#deleteOrganization");
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
| **usage** | **String**| Owner usage query param. | [optional] |

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

<a name="deleteOrganizationInvitation"></a>
# **deleteOrganizationInvitation**
> deleteOrganizationInvitation(owner, memberUser, memberUserEmail, memberRole, memberKind, memberCreatedAt, memberUpdatedAt, email)

Delete organization invitation details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String memberUser = "memberUser_example"; // String | User.
    String memberUserEmail = "memberUserEmail_example"; // String | Read-only User email.
    String memberRole = "memberRole_example"; // String | Role.
    String memberKind = "memberKind_example"; // String | Kind.
    OffsetDateTime memberCreatedAt = OffsetDateTime.now(); // OffsetDateTime | Optional time when the entity was created.
    OffsetDateTime memberUpdatedAt = OffsetDateTime.now(); // OffsetDateTime | Optional last time the entity was updated.
    String email = "email_example"; // String | Optional email.
    try {
      apiInstance.deleteOrganizationInvitation(owner, memberUser, memberUserEmail, memberRole, memberKind, memberCreatedAt, memberUpdatedAt, email);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#deleteOrganizationInvitation");
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
| **memberUser** | **String**| User. | [optional] |
| **memberUserEmail** | **String**| Read-only User email. | [optional] |
| **memberRole** | **String**| Role. | [optional] |
| **memberKind** | **String**| Kind. | [optional] |
| **memberCreatedAt** | **OffsetDateTime**| Optional time when the entity was created. | [optional] |
| **memberUpdatedAt** | **OffsetDateTime**| Optional last time the entity was updated. | [optional] |
| **email** | **String**| Optional email. | [optional] |

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

<a name="deleteOrganizationMember"></a>
# **deleteOrganizationMember**
> deleteOrganizationMember(owner, name)

Delete organization member details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      apiInstance.deleteOrganizationMember(owner, name);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#deleteOrganizationMember");
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

<a name="deleteOrganizationRuns"></a>
# **deleteOrganizationRuns**
> deleteOrganizationRuns(owner, body)

Delete cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.deleteOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#deleteOrganizationRuns");
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

<a name="getOrganization"></a>
# **getOrganization**
> V1Organization getOrganization(owner, usage)

Get organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String usage = "usage_example"; // String | Owner usage query param.
    try {
      V1Organization result = apiInstance.getOrganization(owner, usage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganization");
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
| **usage** | **String**| Owner usage query param. | [optional] |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="getOrganizationActivities"></a>
# **getOrganizationActivities**
> V1ListActivitiesResponse getOrganizationActivities(owner, offset, limit, sort, query, bookmarks, mode, noPage)

Get organization activities

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListActivitiesResponse result = apiInstance.getOrganizationActivities(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationActivities");
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

<a name="getOrganizationInvitation"></a>
# **getOrganizationInvitation**
> V1OrganizationMember getOrganizationInvitation(owner, memberUser, memberUserEmail, memberRole, memberKind, memberCreatedAt, memberUpdatedAt, email)

Get organization invitation details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String memberUser = "memberUser_example"; // String | User.
    String memberUserEmail = "memberUserEmail_example"; // String | Read-only User email.
    String memberRole = "memberRole_example"; // String | Role.
    String memberKind = "memberKind_example"; // String | Kind.
    OffsetDateTime memberCreatedAt = OffsetDateTime.now(); // OffsetDateTime | Optional time when the entity was created.
    OffsetDateTime memberUpdatedAt = OffsetDateTime.now(); // OffsetDateTime | Optional last time the entity was updated.
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.getOrganizationInvitation(owner, memberUser, memberUserEmail, memberRole, memberKind, memberCreatedAt, memberUpdatedAt, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationInvitation");
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
| **memberUser** | **String**| User. | [optional] |
| **memberUserEmail** | **String**| Read-only User email. | [optional] |
| **memberRole** | **String**| Role. | [optional] |
| **memberKind** | **String**| Kind. | [optional] |
| **memberCreatedAt** | **OffsetDateTime**| Optional time when the entity was created. | [optional] |
| **memberUpdatedAt** | **OffsetDateTime**| Optional last time the entity was updated. | [optional] |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="getOrganizationMember"></a>
# **getOrganizationMember**
> V1OrganizationMember getOrganizationMember(owner, name)

Get organization member details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Component under namespace
    try {
      V1OrganizationMember result = apiInstance.getOrganizationMember(owner, name);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationMember");
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

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="getOrganizationMultiRunEvents"></a>
# **getOrganizationMultiRunEvents**
> V1MultiEventsResponse getOrganizationMultiRunEvents(namespace, owner, kind, entity, names, runs, orient, force, sample, connection, status)

Get multi runs events

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    String kind = "model"; // String | The artifact kind
    String entity = "entity_example"; // String | Entity where the run will be assigned.
    String names = "names_example"; // String | Names query param.
    String runs = "runs_example"; // String | Runs query param.
    String orient = "orient_example"; // String | Orient query param.
    Boolean force = true; // Boolean | Force query param.
    Integer sample = 56; // Integer | Sample query param.
    String connection = "connection_example"; // String | Connection to use.
    String status = "created"; // String | Optional status.
    try {
      V1MultiEventsResponse result = apiInstance.getOrganizationMultiRunEvents(namespace, owner, kind, entity, names, runs, orient, force, sample, connection, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationMultiRunEvents");
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
| **kind** | **String**| The artifact kind | [enum: model, audio, video, histogram, image, tensor, dataframe, chart, csv, tsv, psv, ssv, metric, env, html, text, file, dir, dockerfile, docker_image, data, coderef, table, tensorboard, curve, confusion, analysis, iteration, markdown, system, span, artifact] |
| **entity** | **String**| Entity where the run will be assigned. | [optional] |
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

<a name="getOrganizationMultiRunImportance"></a>
# **getOrganizationMultiRunImportance**
> V1MultiEventsResponse getOrganizationMultiRunImportance(namespace, owner, body, entity)

Get multi run importance

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String namespace = "namespace_example"; // String | namespace
    String owner = "owner_example"; // String | Owner of the namespace
    Object body = null; // Object | Params/Metrics data
    String entity = "entity_example"; // String | Entity where the run will be assigned.
    try {
      V1MultiEventsResponse result = apiInstance.getOrganizationMultiRunImportance(namespace, owner, body, entity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationMultiRunImportance");
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
| **body** | **Object**| Params/Metrics data | |
| **entity** | **String**| Entity where the run will be assigned. | [optional] |

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

<a name="getOrganizationRun"></a>
# **getOrganizationRun**
> V1Run getOrganizationRun(owner, uuid)

Get a run in an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String uuid = "uuid_example"; // String | Uuid identifier of the entity
    try {
      V1Run result = apiInstance.getOrganizationRun(owner, uuid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationRun");
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

<a name="getOrganizationRuns"></a>
# **getOrganizationRuns**
> V1ListRunsResponse getOrganizationRuns(owner, offset, limit, sort, query, bookmarks, mode, noPage)

Get all runs in an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunsResponse result = apiInstance.getOrganizationRuns(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationRuns");
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

<a name="getOrganizationRunsArtifactsLineage"></a>
# **getOrganizationRunsArtifactsLineage**
> V1ListRunArtifactsResponse getOrganizationRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage)

Get runs artifacts lineage

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String name = "name_example"; // String | Entity managing the resource.
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListRunArtifactsResponse result = apiInstance.getOrganizationRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationRunsArtifactsLineage");
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
| **name** | **String**| Entity managing the resource. | [optional] |
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

<a name="getOrganizationSettings"></a>
# **getOrganizationSettings**
> V1Organization getOrganizationSettings(owner, organizationUser, organizationUserEmail, organizationName, organizationIsPublic, organizationCreatedAt, organizationUpdatedAt, organizationSupportRevokeAt, organizationExpiration, organizationRole, organizationQueue, organizationDefaultPresets, organizationDefaultPresetsOrdered, organizationIsCloudViewable, organizationArchivedDeletionInterval)

Get organization settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String organizationUser = "organizationUser_example"; // String | User.
    String organizationUserEmail = "organizationUserEmail_example"; // String | Read-only User email.
    String organizationName = "organizationName_example"; // String | Name.
    Boolean organizationIsPublic = true; // Boolean | Optional flag to tell if this organization is public.
    OffsetDateTime organizationCreatedAt = OffsetDateTime.now(); // OffsetDateTime | Optional time when the entity was created.
    OffsetDateTime organizationUpdatedAt = OffsetDateTime.now(); // OffsetDateTime | Optional last time the entity was updated.
    OffsetDateTime organizationSupportRevokeAt = OffsetDateTime.now(); // OffsetDateTime | Optional time to revoke support access.
    Integer organizationExpiration = 56; // Integer | Optional expiration for support.
    String organizationRole = "organizationRole_example"; // String | Current user's role in this org.
    String organizationQueue = "organizationQueue_example"; // String | Default queue.
    List<String> organizationDefaultPresets = Arrays.asList(); // List<String> | Default presets.
    List<String> organizationDefaultPresetsOrdered = Arrays.asList(); // List<String> | Default presets ordered.
    Boolean organizationIsCloudViewable = true; // Boolean | Setting to enable viewable metadata on cloud.
    Integer organizationArchivedDeletionInterval = 56; // Integer | Setting to configure default archived deletion interval.
    try {
      V1Organization result = apiInstance.getOrganizationSettings(owner, organizationUser, organizationUserEmail, organizationName, organizationIsPublic, organizationCreatedAt, organizationUpdatedAt, organizationSupportRevokeAt, organizationExpiration, organizationRole, organizationQueue, organizationDefaultPresets, organizationDefaultPresetsOrdered, organizationIsCloudViewable, organizationArchivedDeletionInterval);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationSettings");
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
| **organizationUser** | **String**| User. | [optional] |
| **organizationUserEmail** | **String**| Read-only User email. | [optional] |
| **organizationName** | **String**| Name. | [optional] |
| **organizationIsPublic** | **Boolean**| Optional flag to tell if this organization is public. | [optional] |
| **organizationCreatedAt** | **OffsetDateTime**| Optional time when the entity was created. | [optional] |
| **organizationUpdatedAt** | **OffsetDateTime**| Optional last time the entity was updated. | [optional] |
| **organizationSupportRevokeAt** | **OffsetDateTime**| Optional time to revoke support access. | [optional] |
| **organizationExpiration** | **Integer**| Optional expiration for support. | [optional] |
| **organizationRole** | **String**| Current user&#39;s role in this org. | [optional] |
| **organizationQueue** | **String**| Default queue. | [optional] |
| **organizationDefaultPresets** | [**List&lt;String&gt;**](String.md)| Default presets. | [optional] |
| **organizationDefaultPresetsOrdered** | [**List&lt;String&gt;**](String.md)| Default presets ordered. | [optional] |
| **organizationIsCloudViewable** | **Boolean**| Setting to enable viewable metadata on cloud. | [optional] |
| **organizationArchivedDeletionInterval** | **Integer**| Setting to configure default archived deletion interval. | [optional] |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="getOrganizationStats"></a>
# **getOrganizationStats**
> Object getOrganizationStats(owner, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc)

Get organization stats

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
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
      Object result = apiInstance.getOrganizationStats(owner, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationStats");
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

<a name="getOrganizationVersions"></a>
# **getOrganizationVersions**
> V1ListProjectVersionsResponse getOrganizationVersions(owner, kind, offset, limit, sort, query, noPage)

Get all runs in an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String kind = "kind_example"; // String | Version Kind
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListProjectVersionsResponse result = apiInstance.getOrganizationVersions(owner, kind, offset, limit, sort, query, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#getOrganizationVersions");
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

<a name="invalidateOrganizationRuns"></a>
# **invalidateOrganizationRuns**
> invalidateOrganizationRuns(owner, body)

Invalidate cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.invalidateOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#invalidateOrganizationRuns");
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

<a name="listOrganizationMemberNames"></a>
# **listOrganizationMemberNames**
> V1ListOrganizationMembersResponse listOrganizationMemberNames(owner, offset, limit, sort, query, bookmarks, mode, noPage)

Get organization member names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListOrganizationMembersResponse result = apiInstance.listOrganizationMemberNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#listOrganizationMemberNames");
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

[**V1ListOrganizationMembersResponse**](V1ListOrganizationMembersResponse.md)

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

<a name="listOrganizationMembers"></a>
# **listOrganizationMembers**
> V1ListOrganizationMembersResponse listOrganizationMembers(owner, offset, limit, sort, query, bookmarks, mode, noPage)

Get organization members

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    Integer offset = 56; // Integer | Pagination offset.
    Integer limit = 56; // Integer | Limit size.
    String sort = "sort_example"; // String | Sort to order the search.
    String query = "query_example"; // String | Query filter the search.
    Boolean bookmarks = true; // Boolean | Filter by bookmarks.
    String mode = "mode_example"; // String | Mode of the search.
    Boolean noPage = true; // Boolean | No pagination.
    try {
      V1ListOrganizationMembersResponse result = apiInstance.listOrganizationMembers(owner, offset, limit, sort, query, bookmarks, mode, noPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#listOrganizationMembers");
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

[**V1ListOrganizationMembersResponse**](V1ListOrganizationMembersResponse.md)

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

<a name="listOrganizationNames"></a>
# **listOrganizationNames**
> V1ListOrganizationsResponse listOrganizationNames()

List organizations names

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    try {
      V1ListOrganizationsResponse result = apiInstance.listOrganizationNames();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#listOrganizationNames");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1ListOrganizationsResponse**](V1ListOrganizationsResponse.md)

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

<a name="listOrganizations"></a>
# **listOrganizations**
> V1ListOrganizationsResponse listOrganizations()

List organizations

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    try {
      V1ListOrganizationsResponse result = apiInstance.listOrganizations();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#listOrganizations");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1ListOrganizationsResponse**](V1ListOrganizationsResponse.md)

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

<a name="organizationLicense"></a>
# **organizationLicense**
> V1Organization organizationLicense(owner, body)

Organization license

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Organization body = new V1Organization(); // V1Organization | Organization body
    try {
      V1Organization result = apiInstance.organizationLicense(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#organizationLicense");
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
| **body** | [**V1Organization**](V1Organization.md)| Organization body | |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="organizationPlan"></a>
# **organizationPlan**
> V1Organization organizationPlan(owner, body)

Organization plan

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Organization body = new V1Organization(); // V1Organization | Organization body
    try {
      V1Organization result = apiInstance.organizationPlan(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#organizationPlan");
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
| **body** | [**V1Organization**](V1Organization.md)| Organization body | |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="patchOrganization"></a>
# **patchOrganization**
> V1Organization patchOrganization(owner, body)

Patch organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Organization body = new V1Organization(); // V1Organization | Organization body
    try {
      V1Organization result = apiInstance.patchOrganization(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#patchOrganization");
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
| **body** | [**V1Organization**](V1Organization.md)| Organization body | |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="patchOrganizationInvitation"></a>
# **patchOrganizationInvitation**
> V1OrganizationMember patchOrganizationInvitation(owner, body, email)

Patch organization invitation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1OrganizationMember body = new V1OrganizationMember(); // V1OrganizationMember | Organization body
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.patchOrganizationInvitation(owner, body, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#patchOrganizationInvitation");
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
| **body** | [**V1OrganizationMember**](V1OrganizationMember.md)| Organization body | |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="patchOrganizationMember"></a>
# **patchOrganizationMember**
> V1OrganizationMember patchOrganizationMember(owner, memberUser, body, email)

Patch organization member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String memberUser = "memberUser_example"; // String | User
    V1OrganizationMember body = new V1OrganizationMember(); // V1OrganizationMember | Organization body
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.patchOrganizationMember(owner, memberUser, body, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#patchOrganizationMember");
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
| **memberUser** | **String**| User | |
| **body** | [**V1OrganizationMember**](V1OrganizationMember.md)| Organization body | |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="patchOrganizationSettings"></a>
# **patchOrganizationSettings**
> V1Organization patchOrganizationSettings(owner, body)

Patch oranization settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Organization body = new V1Organization(); // V1Organization | Organization body
    try {
      V1Organization result = apiInstance.patchOrganizationSettings(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#patchOrganizationSettings");
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
| **body** | [**V1Organization**](V1Organization.md)| Organization body | |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="resendOrganizationInvitation"></a>
# **resendOrganizationInvitation**
> V1OrganizationMember resendOrganizationInvitation(owner, body, email)

Resend organization invitation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1OrganizationMember body = new V1OrganizationMember(); // V1OrganizationMember | Organization body
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.resendOrganizationInvitation(owner, body, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#resendOrganizationInvitation");
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
| **body** | [**V1OrganizationMember**](V1OrganizationMember.md)| Organization body | |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="restoreOrganizationRuns"></a>
# **restoreOrganizationRuns**
> restoreOrganizationRuns(owner, body)

Restore cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.restoreOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#restoreOrganizationRuns");
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

<a name="skipOrganizationRuns"></a>
# **skipOrganizationRuns**
> skipOrganizationRuns(owner, body)

Skip cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.skipOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#skipOrganizationRuns");
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

<a name="stopOrganizationRuns"></a>
# **stopOrganizationRuns**
> stopOrganizationRuns(owner, body)

Stop cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Uuids body = new V1Uuids(); // V1Uuids | Uuids of the entities
    try {
      apiInstance.stopOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#stopOrganizationRuns");
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

<a name="tagOrganizationRuns"></a>
# **tagOrganizationRuns**
> tagOrganizationRuns(owner, body)

Tag cross-project runs selection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1EntitiesTags body = new V1EntitiesTags(); // V1EntitiesTags | Data
    try {
      apiInstance.tagOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#tagOrganizationRuns");
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

<a name="transferOrganizationRuns"></a>
# **transferOrganizationRuns**
> transferOrganizationRuns(owner, body)

Transfer cross-project runs selection to a new project

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1EntitiesTransfer body = new V1EntitiesTransfer(); // V1EntitiesTransfer | Data
    try {
      apiInstance.transferOrganizationRuns(owner, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#transferOrganizationRuns");
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

<a name="updateOrganization"></a>
# **updateOrganization**
> V1Organization updateOrganization(owner, body)

Update organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Organization body = new V1Organization(); // V1Organization | Organization body
    try {
      V1Organization result = apiInstance.updateOrganization(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#updateOrganization");
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
| **body** | [**V1Organization**](V1Organization.md)| Organization body | |

### Return type

[**V1Organization**](V1Organization.md)

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

<a name="updateOrganizationInvitation"></a>
# **updateOrganizationInvitation**
> V1OrganizationMember updateOrganizationInvitation(owner, body, email)

Update organization invitation

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1OrganizationMember body = new V1OrganizationMember(); // V1OrganizationMember | Organization body
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.updateOrganizationInvitation(owner, body, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#updateOrganizationInvitation");
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
| **body** | [**V1OrganizationMember**](V1OrganizationMember.md)| Organization body | |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="updateOrganizationMember"></a>
# **updateOrganizationMember**
> V1OrganizationMember updateOrganizationMember(owner, memberUser, body, email)

Update organization member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    String memberUser = "memberUser_example"; // String | User
    V1OrganizationMember body = new V1OrganizationMember(); // V1OrganizationMember | Organization body
    String email = "email_example"; // String | Optional email.
    try {
      V1OrganizationMember result = apiInstance.updateOrganizationMember(owner, memberUser, body, email);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#updateOrganizationMember");
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
| **memberUser** | **String**| User | |
| **body** | [**V1OrganizationMember**](V1OrganizationMember.md)| Organization body | |
| **email** | **String**| Optional email. | [optional] |

### Return type

[**V1OrganizationMember**](V1OrganizationMember.md)

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

<a name="updateOrganizationSettings"></a>
# **updateOrganizationSettings**
> V1Organization updateOrganizationSettings(owner, body)

Update organization settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsV1Api;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKey
    ApiKeyAuth ApiKey = (ApiKeyAuth) defaultClient.getAuthentication("ApiKey");
    ApiKey.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKey.setApiKeyPrefix("Token");

    OrganizationsV1Api apiInstance = new OrganizationsV1Api(defaultClient);
    String owner = "owner_example"; // String | Owner of the namespace
    V1Organization body = new V1Organization(); // V1Organization | Organization body
    try {
      V1Organization result = apiInstance.updateOrganizationSettings(owner, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsV1Api#updateOrganizationSettings");
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
| **body** | [**V1Organization**](V1Organization.md)| Organization body | |

### Return type

[**V1Organization**](V1Organization.md)

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

