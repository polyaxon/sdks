# PolyaxonSdk.ServiceAccountsV1Api

Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceAccount**](ServiceAccountsV1Api.md#createServiceAccount) | **POST** /api/v1/orgs/{owner}/sa | Create service account
[**createServiceAccountToken**](ServiceAccountsV1Api.md#createServiceAccountToken) | **POST** /api/v1/orgs/{owner}/sa/{entity}/tokens | Create service account token
[**deleteServiceAccount**](ServiceAccountsV1Api.md#deleteServiceAccount) | **DELETE** /api/v1/orgs/{owner}/sa/{uuid} | Delete service account
[**deleteServiceAccountToken**](ServiceAccountsV1Api.md#deleteServiceAccountToken) | **DELETE** /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid} | Delete service account token
[**getServiceAccount**](ServiceAccountsV1Api.md#getServiceAccount) | **GET** /api/v1/orgs/{owner}/sa/{uuid} | Get service account
[**getServiceAccountToken**](ServiceAccountsV1Api.md#getServiceAccountToken) | **GET** /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid} | Get service account token
[**listServiceAccountNames**](ServiceAccountsV1Api.md#listServiceAccountNames) | **GET** /api/v1/orgs/{owner}/sa/names | List service accounts names
[**listServiceAccountTokens**](ServiceAccountsV1Api.md#listServiceAccountTokens) | **GET** /api/v1/orgs/{owner}/sa/{uuid}/tokens | List service account tokens
[**listServiceAccounts**](ServiceAccountsV1Api.md#listServiceAccounts) | **GET** /api/v1/orgs/{owner}/sa | List service accounts
[**patchServiceAccount**](ServiceAccountsV1Api.md#patchServiceAccount) | **PATCH** /api/v1/orgs/{owner}/sa/{sa.uuid} | Patch service account
[**patchServiceAccountToken**](ServiceAccountsV1Api.md#patchServiceAccountToken) | **PATCH** /api/v1/orgs/{owner}/sa/{entity}/tokens/{token.uuid} | Patch service account token
[**updateServiceAccount**](ServiceAccountsV1Api.md#updateServiceAccount) | **PUT** /api/v1/orgs/{owner}/sa/{sa.uuid} | Update service account
[**updateServiceAccountToken**](ServiceAccountsV1Api.md#updateServiceAccountToken) | **PUT** /api/v1/orgs/{owner}/sa/{entity}/tokens/{token.uuid} | Update service account token



## createServiceAccount

> V1ServiceAccount createServiceAccount(owner, body)

Create service account

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let body = new PolyaxonSdk.V1ServiceAccount(); // V1ServiceAccount | ServiceAccount body
apiInstance.createServiceAccount(owner, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **body** | [**V1ServiceAccount**](V1ServiceAccount.md)| ServiceAccount body | 

### Return type

[**V1ServiceAccount**](V1ServiceAccount.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createServiceAccountToken

> V1Token createServiceAccountToken(owner, entity, body)

Create service account token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Rntity
let body = new PolyaxonSdk.V1Token(); // V1Token | Token body
apiInstance.createServiceAccountToken(owner, entity, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **entity** | **String**| Rntity | 
 **body** | [**V1Token**](V1Token.md)| Token body | 

### Return type

[**V1Token**](V1Token.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteServiceAccount

> deleteServiceAccount(owner, uuid)

Delete service account

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
apiInstance.deleteServiceAccount(owner, uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **uuid** | **String**| Uuid identifier of the entity | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteServiceAccountToken

> deleteServiceAccountToken(owner, entity, uuid)

Delete service account token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
let uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
apiInstance.deleteServiceAccountToken(owner, entity, uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **entity** | **String**| Entity: project name, hub name, registry name, ... | 
 **uuid** | **String**| Uuid identifier of the sub-entity | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceAccount

> V1ServiceAccount getServiceAccount(owner, uuid)

Get service account

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
apiInstance.getServiceAccount(owner, uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **uuid** | **String**| Uuid identifier of the entity | 

### Return type

[**V1ServiceAccount**](V1ServiceAccount.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceAccountToken

> V1Token getServiceAccountToken(owner, entity, uuid)

Get service account token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
let uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
apiInstance.getServiceAccountToken(owner, entity, uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **entity** | **String**| Entity: project name, hub name, registry name, ... | 
 **uuid** | **String**| Uuid identifier of the sub-entity | 

### Return type

[**V1Token**](V1Token.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServiceAccountNames

> V1ListServiceAccountsResponse listServiceAccountNames(owner, opts)

List service accounts names

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'bookmarks': true, // Boolean | Filter by bookmarks.
  'mode': "mode_example", // String | Mode of the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.listServiceAccountNames(owner, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] 
 **mode** | **String**| Mode of the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListServiceAccountsResponse**](V1ListServiceAccountsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServiceAccountTokens

> V1ListTokenResponse listServiceAccountTokens(owner, uuid, opts)

List service account tokens

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | SubEntity uuid
let opts = {
  'entity': "entity_example", // String | Entity name under namesapce.
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.listServiceAccountTokens(owner, uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **uuid** | **String**| SubEntity uuid | 
 **entity** | **String**| Entity name under namesapce. | [optional] 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListTokenResponse**](V1ListTokenResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServiceAccounts

> V1ListServiceAccountsResponse listServiceAccounts(owner, opts)

List service accounts

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'bookmarks': true, // Boolean | Filter by bookmarks.
  'mode': "mode_example", // String | Mode of the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.listServiceAccounts(owner, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] 
 **mode** | **String**| Mode of the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListServiceAccountsResponse**](V1ListServiceAccountsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchServiceAccount

> V1ServiceAccount patchServiceAccount(owner, sa_uuid, body)

Patch service account

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let sa_uuid = "sa_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1ServiceAccount(); // V1ServiceAccount | ServiceAccount body
apiInstance.patchServiceAccount(owner, sa_uuid, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **sa_uuid** | **String**| UUID | 
 **body** | [**V1ServiceAccount**](V1ServiceAccount.md)| ServiceAccount body | 

### Return type

[**V1ServiceAccount**](V1ServiceAccount.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchServiceAccountToken

> V1Token patchServiceAccountToken(owner, entity, token_uuid, body)

Patch service account token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Rntity
let token_uuid = "token_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1Token(); // V1Token | Token body
apiInstance.patchServiceAccountToken(owner, entity, token_uuid, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **entity** | **String**| Rntity | 
 **token_uuid** | **String**| UUID | 
 **body** | [**V1Token**](V1Token.md)| Token body | 

### Return type

[**V1Token**](V1Token.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateServiceAccount

> V1ServiceAccount updateServiceAccount(owner, sa_uuid, body)

Update service account

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let sa_uuid = "sa_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1ServiceAccount(); // V1ServiceAccount | ServiceAccount body
apiInstance.updateServiceAccount(owner, sa_uuid, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **sa_uuid** | **String**| UUID | 
 **body** | [**V1ServiceAccount**](V1ServiceAccount.md)| ServiceAccount body | 

### Return type

[**V1ServiceAccount**](V1ServiceAccount.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateServiceAccountToken

> V1Token updateServiceAccountToken(owner, entity, token_uuid, body)

Update service account token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.ServiceAccountsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Rntity
let token_uuid = "token_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1Token(); // V1Token | Token body
apiInstance.updateServiceAccountToken(owner, entity, token_uuid, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Owner of the namespace | 
 **entity** | **String**| Rntity | 
 **token_uuid** | **String**| UUID | 
 **body** | [**V1Token**](V1Token.md)| Token body | 

### Return type

[**V1Token**](V1Token.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

