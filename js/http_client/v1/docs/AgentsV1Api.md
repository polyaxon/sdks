# PolyaxonSdk.AgentsV1Api

Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectAgentData**](AgentsV1Api.md#collectAgentData) | **POST** /streams/v1/{namespace}/{owner}/agents/{uuid}/collect | collect agent
[**createAgent**](AgentsV1Api.md#createAgent) | **POST** /api/v1/orgs/{owner}/agents | Create agent
[**createAgentStatus**](AgentsV1Api.md#createAgentStatus) | **POST** /api/v1/orgs/{owner}/agents/{uuid}/statuses | Create new agent status
[**cronAgent**](AgentsV1Api.md#cronAgent) | **POST** /api/v1/orgs/{owner}/agents/cron | Global Cron
[**deleteAgent**](AgentsV1Api.md#deleteAgent) | **DELETE** /api/v1/orgs/{owner}/agents/{uuid} | Delete agent
[**getAgent**](AgentsV1Api.md#getAgent) | **GET** /api/v1/orgs/{owner}/agents/{uuid} | Get agent
[**getAgentConfig**](AgentsV1Api.md#getAgentConfig) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/config | Get agent config
[**getAgentLogs**](AgentsV1Api.md#getAgentLogs) | **GET** /streams/v1/{namespace}/{owner}/agents/{uuid}/logs | Get run logs
[**getAgentState**](AgentsV1Api.md#getAgentState) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/state | Get State (queues/runs)
[**getAgentToken**](AgentsV1Api.md#getAgentToken) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/token | Get agent token
[**getGlobalState**](AgentsV1Api.md#getGlobalState) | **GET** /api/v1/orgs/{owner}/agents/state | Get Global State (queues/runs)
[**inspectAgent**](AgentsV1Api.md#inspectAgent) | **GET** /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect | Inspect an agent&#39;s service full conditions
[**listAgentNames**](AgentsV1Api.md#listAgentNames) | **GET** /api/v1/orgs/{owner}/agents/names | List agents names
[**listAgents**](AgentsV1Api.md#listAgents) | **GET** /api/v1/orgs/{owner}/agents | List agents
[**patchAgent**](AgentsV1Api.md#patchAgent) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid} | Patch agent
[**patchAgentToken**](AgentsV1Api.md#patchAgentToken) | **PATCH** /api/v1/orgs/{owner}/agents/{entity}/token | Patch agent token
[**syncAgent**](AgentsV1Api.md#syncAgent) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid}/sync | Sync agent
[**updateAgent**](AgentsV1Api.md#updateAgent) | **PUT** /api/v1/orgs/{owner}/agents/{agent.uuid} | Update agent
[**updateAgentConfig**](AgentsV1Api.md#updateAgentConfig) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid}/config | Update agent config
[**updateAgentToken**](AgentsV1Api.md#updateAgentToken) | **PUT** /api/v1/orgs/{owner}/agents/{entity}/token | Update agent token



## collectAgentData

> Object collectAgentData(namespace, owner, uuid)

collect agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let namespace = "namespace_example"; // String | namespace
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
apiInstance.collectAgentData(namespace, owner, uuid, (error, data, response) => {
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
 **namespace** | **String**| namespace | 
 **owner** | **String**| Owner of the namespace | 
 **uuid** | **String**| Uuid identifier of the entity | 

### Return type

**Object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createAgent

> V1Agent createAgent(owner, body)

Create agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let body = new PolyaxonSdk.V1Agent(); // V1Agent | Agent body
apiInstance.createAgent(owner, body, (error, data, response) => {
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
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

### Return type

[**V1Agent**](V1Agent.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAgentStatus

> V1Status createAgentStatus(owner, uuid, body)

Create new agent status

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
let body = new PolyaxonSdk.V1AgentStatusBodyRequest(); // V1AgentStatusBodyRequest | 
apiInstance.createAgentStatus(owner, uuid, body, (error, data, response) => {
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
 **body** | [**V1AgentStatusBodyRequest**](V1AgentStatusBodyRequest.md)|  | 

### Return type

[**V1Status**](V1Status.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cronAgent

> V1AgentStateResponse cronAgent(owner, body)

Global Cron

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let body = {key: null}; // Object | Cron body
apiInstance.cronAgent(owner, body, (error, data, response) => {
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
 **body** | **Object**| Cron body | 

### Return type

[**V1AgentStateResponse**](V1AgentStateResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAgent

> deleteAgent(owner, uuid, opts)

Delete agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
let opts = {
  'entity': "entity_example" // String | Entity: project name, hub name, registry name, ...
};
apiInstance.deleteAgent(owner, uuid, opts, (error, data, response) => {
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
 **uuid** | **String**| Uuid identifier of the sub-entity | 
 **entity** | **String**| Entity: project name, hub name, registry name, ... | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgent

> V1Agent getAgent(owner, uuid, opts)

Get agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
let opts = {
  'entity': "entity_example" // String | Entity: project name, hub name, registry name, ...
};
apiInstance.getAgent(owner, uuid, opts, (error, data, response) => {
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
 **uuid** | **String**| Uuid identifier of the sub-entity | 
 **entity** | **String**| Entity: project name, hub name, registry name, ... | [optional] 

### Return type

[**V1Agent**](V1Agent.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentConfig

> V1Agent getAgentConfig(owner, uuid, opts)

Get agent config

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
let opts = {
  'entity': "entity_example" // String | Entity: project name, hub name, registry name, ...
};
apiInstance.getAgentConfig(owner, uuid, opts, (error, data, response) => {
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
 **uuid** | **String**| Uuid identifier of the sub-entity | 
 **entity** | **String**| Entity: project name, hub name, registry name, ... | [optional] 

### Return type

[**V1Agent**](V1Agent.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentLogs

> V1Logs getAgentLogs(namespace, owner, uuid, opts)

Get run logs

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let namespace = "namespace_example"; // String | namespace
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
let opts = {
  'service': "service_example", // String | Service.
  'last_file': "last_file_example", // String | last_file.
  'force': true, // Boolean | Force query param.
  'connection': "connection_example" // String | Connection to use.
};
apiInstance.getAgentLogs(namespace, owner, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**| namespace | 
 **owner** | **String**| Owner of the namespace | 
 **uuid** | **String**| Uuid identifier of the entity | 
 **service** | **String**| Service. | [optional] 
 **last_file** | **String**| last_file. | [optional] 
 **force** | **Boolean**| Force query param. | [optional] 
 **connection** | **String**| Connection to use. | [optional] 

### Return type

[**V1Logs**](V1Logs.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentState

> V1AgentStateResponse getAgentState(owner, uuid)

Get State (queues/runs)

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
apiInstance.getAgentState(owner, uuid, (error, data, response) => {
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

[**V1AgentStateResponse**](V1AgentStateResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentToken

> V1Token getAgentToken(owner, uuid)

Get agent token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
apiInstance.getAgentToken(owner, uuid, (error, data, response) => {
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

[**V1Token**](V1Token.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGlobalState

> V1AgentStateResponse getGlobalState(owner)

Get Global State (queues/runs)

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
apiInstance.getGlobalState(owner, (error, data, response) => {
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

### Return type

[**V1AgentStateResponse**](V1AgentStateResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inspectAgent

> Object inspectAgent(namespace, owner, uuid, opts)

Inspect an agent&#39;s service full conditions

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let namespace = "namespace_example"; // String | namespace
let owner = "owner_example"; // String | Owner of the namespace
let uuid = "uuid_example"; // String | Uuid identifier of the entity
let opts = {
  'service': "service_example", // String | Service.
  'last_file': "last_file_example", // String | last_file.
  'force': true, // Boolean | Force query param.
  'connection': "connection_example" // String | Connection to use.
};
apiInstance.inspectAgent(namespace, owner, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**| namespace | 
 **owner** | **String**| Owner of the namespace | 
 **uuid** | **String**| Uuid identifier of the entity | 
 **service** | **String**| Service. | [optional] 
 **last_file** | **String**| last_file. | [optional] 
 **force** | **Boolean**| Force query param. | [optional] 
 **connection** | **String**| Connection to use. | [optional] 

### Return type

**Object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAgentNames

> V1ListAgentsResponse listAgentNames(owner, opts)

List agents names

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
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
apiInstance.listAgentNames(owner, opts, (error, data, response) => {
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

[**V1ListAgentsResponse**](V1ListAgentsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAgents

> V1ListAgentsResponse listAgents(owner, opts)

List agents

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
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
apiInstance.listAgents(owner, opts, (error, data, response) => {
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

[**V1ListAgentsResponse**](V1ListAgentsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchAgent

> V1Agent patchAgent(owner, agent_uuid, body)

Patch agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let agent_uuid = "agent_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1Agent(); // V1Agent | Agent body
apiInstance.patchAgent(owner, agent_uuid, body, (error, data, response) => {
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
 **agent_uuid** | **String**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

### Return type

[**V1Agent**](V1Agent.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchAgentToken

> V1Token patchAgentToken(owner, entity, body)

Patch agent token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Rntity
let body = new PolyaxonSdk.V1Token(); // V1Token | Token body
apiInstance.patchAgentToken(owner, entity, body, (error, data, response) => {
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


## syncAgent

> syncAgent(owner, agent_uuid, body)

Sync agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let agent_uuid = "agent_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1Agent(); // V1Agent | Agent body
apiInstance.syncAgent(owner, agent_uuid, body, (error, data, response) => {
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
 **agent_uuid** | **String**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgent

> V1Agent updateAgent(owner, agent_uuid, body)

Update agent

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let agent_uuid = "agent_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1Agent(); // V1Agent | Agent body
apiInstance.updateAgent(owner, agent_uuid, body, (error, data, response) => {
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
 **agent_uuid** | **String**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

### Return type

[**V1Agent**](V1Agent.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentConfig

> V1Agent updateAgentConfig(owner, agent_uuid, body)

Update agent config

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let agent_uuid = "agent_uuid_example"; // String | UUID
let body = new PolyaxonSdk.V1Agent(); // V1Agent | Agent body
apiInstance.updateAgentConfig(owner, agent_uuid, body, (error, data, response) => {
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
 **agent_uuid** | **String**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

### Return type

[**V1Agent**](V1Agent.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentToken

> V1Token updateAgentToken(owner, entity, body)

Update agent token

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.AgentsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Rntity
let body = new PolyaxonSdk.V1Token(); // V1Token | Token body
apiInstance.updateAgentToken(owner, entity, body, (error, data, response) => {
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

