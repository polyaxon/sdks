# PolyaxonSdk.SandboxV1Api

Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPty**](SandboxV1Api.md#createPty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty | 
[**deleteBgExec**](SandboxV1Api.md#deleteBgExec) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id} | 
[**deletePty**](SandboxV1Api.md#deletePty) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id} | 
[**exec**](SandboxV1Api.md#exec) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec | 
[**execBg**](SandboxV1Api.md#execBg) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg | 
[**fsLs**](SandboxV1Api.md#fsLs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/ls | 
[**fsMkdir**](SandboxV1Api.md#fsMkdir) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/mkdir | 
[**fsRm**](SandboxV1Api.md#fsRm) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/rm | 
[**fsStat**](SandboxV1Api.md#fsStat) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/stat | 
[**getBgExec**](SandboxV1Api.md#getBgExec) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id} | 
[**getBgExecLogs**](SandboxV1Api.md#getBgExecLogs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/logs | 
[**getPty**](SandboxV1Api.md#getPty) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id} | 
[**listBgExecs**](SandboxV1Api.md#listBgExecs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg | 
[**listPtys**](SandboxV1Api.md#listPtys) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty | 
[**ping**](SandboxV1Api.md#ping) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/ping | 
[**resizePty**](SandboxV1Api.md#resizePty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id}/resize | 
[**signalBgExec**](SandboxV1Api.md#signalBgExec) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/signal | 
[**signalPty**](SandboxV1Api.md#signalPty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id}/signal | 



## createPty

> V1Pty createPty(namespace, owner, project, uuid, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let body = new PolyaxonSdk.V1CreatePtyRequest(); // V1CreatePtyRequest | 
apiInstance.createPty(namespace, owner, project, uuid, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **body** | [**V1CreatePtyRequest**](V1CreatePtyRequest.md)|  | 

### Return type

[**V1Pty**](V1Pty.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBgExec

> deleteBgExec(namespace, owner, project, uuid, id)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deleteBgExec(namespace, owner, project, uuid, id, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePty

> deletePty(namespace, owner, project, uuid, id)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deletePty(namespace, owner, project, uuid, id, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exec

> V1ExecResult exec(namespace, owner, project, uuid, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let body = new PolyaxonSdk.V1ExecRequest(); // V1ExecRequest | 
apiInstance.exec(namespace, owner, project, uuid, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **body** | [**V1ExecRequest**](V1ExecRequest.md)|  | 

### Return type

[**V1ExecResult**](V1ExecResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## execBg

> V1ExecBgStart execBg(namespace, owner, project, uuid, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let body = new PolyaxonSdk.V1ExecBgRequest(); // V1ExecBgRequest | 
apiInstance.execBg(namespace, owner, project, uuid, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **body** | [**V1ExecBgRequest**](V1ExecBgRequest.md)|  | 

### Return type

[**V1ExecBgStart**](V1ExecBgStart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fsLs

> V1FsListResult fsLs(namespace, owner, project, uuid, opts)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let opts = {
  'path': "path_example", // String | 
  'recursive': true, // Boolean | 
  'max_entries': 56 // Number | 
};
apiInstance.fsLs(namespace, owner, project, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **path** | **String**|  | [optional] 
 **recursive** | **Boolean**|  | [optional] 
 **max_entries** | **Number**|  | [optional] 

### Return type

[**V1FsListResult**](V1FsListResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fsMkdir

> V1FsPathResult fsMkdir(namespace, owner, project, uuid, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let body = new PolyaxonSdk.V1FsMkdirRequest(); // V1FsMkdirRequest | 
apiInstance.fsMkdir(namespace, owner, project, uuid, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **body** | [**V1FsMkdirRequest**](V1FsMkdirRequest.md)|  | 

### Return type

[**V1FsPathResult**](V1FsPathResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fsRm

> V1FsPathResult fsRm(namespace, owner, project, uuid, opts)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let opts = {
  'path': "path_example", // String | 
  'recursive': true // Boolean | 
};
apiInstance.fsRm(namespace, owner, project, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **path** | **String**|  | [optional] 
 **recursive** | **Boolean**|  | [optional] 

### Return type

[**V1FsPathResult**](V1FsPathResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fsStat

> V1FsStatResult fsStat(namespace, owner, project, uuid, opts)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let opts = {
  'path': "path_example" // String | 
};
apiInstance.fsStat(namespace, owner, project, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **path** | **String**|  | [optional] 

### Return type

[**V1FsStatResult**](V1FsStatResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBgExec

> V1ExecBgStatus getBgExec(namespace, owner, project, uuid, id)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
apiInstance.getBgExec(namespace, owner, project, uuid, id, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**V1ExecBgStatus**](V1ExecBgStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBgExecLogs

> V1ExecBgLogs getBgExecLogs(namespace, owner, project, uuid, id, opts)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
let opts = {
  'stream': "stream_example", // String | 
  'offset': 789, // Number | 
  'max_bytes': 789 // Number | 
};
apiInstance.getBgExecLogs(namespace, owner, project, uuid, id, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 
 **stream** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **max_bytes** | **Number**|  | [optional] 

### Return type

[**V1ExecBgLogs**](V1ExecBgLogs.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPty

> V1Pty getPty(namespace, owner, project, uuid, id)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
apiInstance.getPty(namespace, owner, project, uuid, id, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**V1Pty**](V1Pty.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBgExecs

> V1ExecBgList listBgExecs(namespace, owner, project, uuid, opts)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let opts = {
  'tag': "tag_example" // String | 
};
apiInstance.listBgExecs(namespace, owner, project, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **tag** | **String**|  | [optional] 

### Return type

[**V1ExecBgList**](V1ExecBgList.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPtys

> V1PtyList listPtys(namespace, owner, project, uuid, opts)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let opts = {
  'tag': "tag_example" // String | 
};
apiInstance.listPtys(namespace, owner, project, uuid, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **tag** | **String**|  | [optional] 

### Return type

[**V1PtyList**](V1PtyList.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ping

> V1PingResponse ping(namespace, owner, project, uuid)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
apiInstance.ping(namespace, owner, project, uuid, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 

### Return type

[**V1PingResponse**](V1PingResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resizePty

> resizePty(namespace, owner, project, uuid, id, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
let body = new PolyaxonSdk.V1ResizePtyRequest(); // V1ResizePtyRequest | 
apiInstance.resizePty(namespace, owner, project, uuid, id, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**V1ResizePtyRequest**](V1ResizePtyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## signalBgExec

> signalBgExec(namespace, owner, project, uuid, id, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
let body = new PolyaxonSdk.V1SignalRequest(); // V1SignalRequest | 
apiInstance.signalBgExec(namespace, owner, project, uuid, id, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**V1SignalRequest**](V1SignalRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## signalPty

> signalPty(namespace, owner, project, uuid, id, body)



### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.SandboxV1Api();
let namespace = "namespace_example"; // String | 
let owner = "owner_example"; // String | 
let project = "project_example"; // String | 
let uuid = "uuid_example"; // String | 
let id = "id_example"; // String | 
let body = new PolyaxonSdk.V1SignalRequest(); // V1SignalRequest | 
apiInstance.signalPty(namespace, owner, project, uuid, id, body, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **owner** | **String**|  | 
 **project** | **String**|  | 
 **uuid** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**V1SignalRequest**](V1SignalRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

