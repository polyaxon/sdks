# PolyaxonSdk.TeamsV1Api

Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTeamRuns**](TeamsV1Api.md#approveTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/approve | Approve cross-project runs selection
[**archiveTeamRuns**](TeamsV1Api.md#archiveTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/archive | Archive cross-project runs selection
[**bookmarkTeamRuns**](TeamsV1Api.md#bookmarkTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/bookmark | Bookmark cross-project runs selection
[**createTeam**](TeamsV1Api.md#createTeam) | **POST** /api/v1/orgs/{owner}/teams | Create team
[**createTeamMember**](TeamsV1Api.md#createTeamMember) | **POST** /api/v1/orgs/{owner}/teams/{team}/members | Create team member
[**deleteTeam**](TeamsV1Api.md#deleteTeam) | **DELETE** /api/v1/orgs/{owner}/teams/{name} | Delete team
[**deleteTeamMember**](TeamsV1Api.md#deleteTeamMember) | **DELETE** /api/v1/orgs/{owner}/teams/{team}/members/{user} | Delete team member details
[**deleteTeamRuns**](TeamsV1Api.md#deleteTeamRuns) | **DELETE** /api/v1/orgs/{owner}/teams/{name}/runs/delete | Delete cross-project runs selection
[**getTeam**](TeamsV1Api.md#getTeam) | **GET** /api/v1/orgs/{owner}/teams/{name} | Get team
[**getTeamActivities**](TeamsV1Api.md#getTeamActivities) | **GET** /api/v1/orgs/{owner}/teams/{name}/activities | Get organization activities
[**getTeamMember**](TeamsV1Api.md#getTeamMember) | **GET** /api/v1/orgs/{owner}/teams/{team}/members/{user} | Get team member details
[**getTeamMultiRunEvents**](TeamsV1Api.md#getTeamMultiRunEvents) | **GET** /api/v1/orgs/{owner}/teams/{entity}/runs/multi/events/{kind} | Get multi runs events
[**getTeamMultiRunImportance**](TeamsV1Api.md#getTeamMultiRunImportance) | **POST** /api/v1/orgs/{owner}/teams/{entity}/runs/multi/importance | Get multi run importance
[**getTeamRun**](TeamsV1Api.md#getTeamRun) | **GET** /api/v1/orgs/{owner}/teams/{entity}/runs/{uuid} | Get a run in a team
[**getTeamRuns**](TeamsV1Api.md#getTeamRuns) | **GET** /api/v1/orgs/{owner}/teams/{name}/runs | Get all runs in a team
[**getTeamStats**](TeamsV1Api.md#getTeamStats) | **GET** /api/v1/orgs/{owner}/teams/{name}/stats | Get team stats
[**getTeamVersions**](TeamsV1Api.md#getTeamVersions) | **GET** /api/v1/orgs/{owner}/teams/{entity}/versions/{kind} | Get all runs in a team
[**invalidateTeamRuns**](TeamsV1Api.md#invalidateTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/invalidate | Invalidate cross-project runs selection
[**listTeamMembers**](TeamsV1Api.md#listTeamMembers) | **GET** /api/v1/orgs/{owner}/teams/{name}/members | Get team members
[**listTeamNames**](TeamsV1Api.md#listTeamNames) | **GET** /api/v1/orgs/{owner}/teams/names | List teams names
[**listTeams**](TeamsV1Api.md#listTeams) | **GET** /api/v1/orgs/{owner}/teams | List teams
[**patchTeam**](TeamsV1Api.md#patchTeam) | **PATCH** /api/v1/orgs/{owner}/teams/{team.name} | Patch team
[**patchTeamMember**](TeamsV1Api.md#patchTeamMember) | **PATCH** /api/v1/orgs/{owner}/teams/{team}/members/{member.user} | Patch team member
[**restoreTeamRuns**](TeamsV1Api.md#restoreTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/restore | Restore cross-project runs selection
[**skipTeamRuns**](TeamsV1Api.md#skipTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/Skip | Skip cross-project runs selection
[**stopTeamRuns**](TeamsV1Api.md#stopTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/stop | Stop cross-project runs selection
[**tagTeamRuns**](TeamsV1Api.md#tagTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/tag | Tag cross-project runs selection
[**transferTeamRuns**](TeamsV1Api.md#transferTeamRuns) | **POST** /api/v1/orgs/{owner}/teams/{name}/runs/transfer | Transfer cross-project runs selection to a new project
[**updateTeam**](TeamsV1Api.md#updateTeam) | **PUT** /api/v1/orgs/{owner}/teams/{team.name} | Update team
[**updateTeamMember**](TeamsV1Api.md#updateTeamMember) | **PUT** /api/v1/orgs/{owner}/teams/{team}/members/{member.user} | Update team member



## approveTeamRuns

> approveTeamRuns(owner, name, body)

Approve cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.approveTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## archiveTeamRuns

> archiveTeamRuns(owner, name, body)

Archive cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.archiveTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bookmarkTeamRuns

> bookmarkTeamRuns(owner, name, body)

Bookmark cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.bookmarkTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeam

> V1Team createTeam(owner, body)

Create team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let body = new PolyaxonSdk.V1Team(); // V1Team | Team body
apiInstance.createTeam(owner, body, (error, data, response) => {
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
 **body** | [**V1Team**](V1Team.md)| Team body | 

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeamMember

> V1TeamMember createTeamMember(owner, team, body)

Create team member

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team = "team_example"; // String | Team
let body = new PolyaxonSdk.V1TeamMember(); // V1TeamMember | Team body
apiInstance.createTeamMember(owner, team, body, (error, data, response) => {
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
 **team** | **String**| Team | 
 **body** | [**V1TeamMember**](V1TeamMember.md)| Team body | 

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeam

> deleteTeam(owner, name)

Delete team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Component under namespace
apiInstance.deleteTeam(owner, name, (error, data, response) => {
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
 **name** | **String**| Component under namespace | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTeamMember

> deleteTeamMember(owner, team, user)

Delete team member details

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team = "team_example"; // String | Team under namespace
let user = "user_example"; // String | Member under team
apiInstance.deleteTeamMember(owner, team, user, (error, data, response) => {
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
 **team** | **String**| Team under namespace | 
 **user** | **String**| Member under team | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTeamRuns

> deleteTeamRuns(owner, name, body)

Delete cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.deleteTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTeam

> V1Team getTeam(owner, name)

Get team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Component under namespace
apiInstance.getTeam(owner, name, (error, data, response) => {
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
 **name** | **String**| Component under namespace | 

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamActivities

> V1ListActivitiesResponse getTeamActivities(owner, name, opts)

Get organization activities

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity managing the resource
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'bookmarks': true, // Boolean | Filter by bookmarks.
  'mode': "mode_example", // String | Mode of the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.getTeamActivities(owner, name, opts, (error, data, response) => {
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
 **name** | **String**| Entity managing the resource | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] 
 **mode** | **String**| Mode of the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListActivitiesResponse**](V1ListActivitiesResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamMember

> V1TeamMember getTeamMember(owner, team, user)

Get team member details

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team = "team_example"; // String | Team under namespace
let user = "user_example"; // String | Member under team
apiInstance.getTeamMember(owner, team, user, (error, data, response) => {
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
 **team** | **String**| Team under namespace | 
 **user** | **String**| Member under team | 

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamMultiRunEvents

> V1MultiEventsResponse getTeamMultiRunEvents(owner, entity, kind, opts)

Get multi runs events

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Entity where the run will be assigned
let kind = "kind_example"; // String | The artifact kind
let opts = {
  'namespace': "namespace_example", // String | namespace.
  'names': "names_example", // String | Names query param.
  'runs': "runs_example", // String | Runs query param.
  'orient': "orient_example", // String | Orient query param.
  'force': true, // Boolean | Force query param.
  'sample': 56, // Number | Sample query param.
  'connection': "connection_example", // String | Connection to use.
  'status': "'created'" // String | Optional status.
};
apiInstance.getTeamMultiRunEvents(owner, entity, kind, opts, (error, data, response) => {
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
 **entity** | **String**| Entity where the run will be assigned | 
 **kind** | **String**| The artifact kind | 
 **namespace** | **String**| namespace. | [optional] 
 **names** | **String**| Names query param. | [optional] 
 **runs** | **String**| Runs query param. | [optional] 
 **orient** | **String**| Orient query param. | [optional] 
 **force** | **Boolean**| Force query param. | [optional] 
 **sample** | **Number**| Sample query param. | [optional] 
 **connection** | **String**| Connection to use. | [optional] 
 **status** | **String**| Optional status. | [optional] [default to &#39;created&#39;]

### Return type

[**V1MultiEventsResponse**](V1MultiEventsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamMultiRunImportance

> V1MultiEventsResponse getTeamMultiRunImportance(owner, entity, body, opts)

Get multi run importance

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Entity where the run will be assigned
let body = {key: null}; // Object | Params/Metrics data
let opts = {
  'namespace': "namespace_example" // String | namespace.
};
apiInstance.getTeamMultiRunImportance(owner, entity, body, opts, (error, data, response) => {
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
 **entity** | **String**| Entity where the run will be assigned | 
 **body** | **Object**| Params/Metrics data | 
 **namespace** | **String**| namespace. | [optional] 

### Return type

[**V1MultiEventsResponse**](V1MultiEventsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTeamRun

> V1Run getTeamRun(owner, entity, uuid)

Get a run in a team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Entity: project name, hub name, registry name, ...
let uuid = "uuid_example"; // String | Uuid identifier of the sub-entity
apiInstance.getTeamRun(owner, entity, uuid, (error, data, response) => {
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

[**V1Run**](V1Run.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamRuns

> V1ListRunsResponse getTeamRuns(owner, name, opts)

Get all runs in a team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity managing the resource
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'bookmarks': true, // Boolean | Filter by bookmarks.
  'mode': "mode_example", // String | Mode of the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.getTeamRuns(owner, name, opts, (error, data, response) => {
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
 **name** | **String**| Entity managing the resource | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] 
 **mode** | **String**| Mode of the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListRunsResponse**](V1ListRunsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamStats

> Object getTeamStats(owner, name, opts)

Get team stats

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity managing the resource
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'bookmarks': true, // Boolean | Filter by bookmarks.
  'mode': "mode_example", // String | Stats Mode.
  'kind': "kind_example", // String | Stats Kind.
  'aggregate': "aggregate_example", // String | Stats aggregate.
  'groupby': "groupby_example", // String | Stats group.
  'trunc': "trunc_example" // String | Stats trunc.
};
apiInstance.getTeamStats(owner, name, opts, (error, data, response) => {
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
 **name** | **String**| Entity managing the resource | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] 
 **mode** | **String**| Stats Mode. | [optional] 
 **kind** | **String**| Stats Kind. | [optional] 
 **aggregate** | **String**| Stats aggregate. | [optional] 
 **groupby** | **String**| Stats group. | [optional] 
 **trunc** | **String**| Stats trunc. | [optional] 

### Return type

**Object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamVersions

> V1ListProjectVersionsResponse getTeamVersions(owner, entity, kind, opts)

Get all runs in a team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let entity = "entity_example"; // String | Entity name under namespace
let kind = "kind_example"; // String | Version Kind
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.getTeamVersions(owner, entity, kind, opts, (error, data, response) => {
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
 **entity** | **String**| Entity name under namespace | 
 **kind** | **String**| Version Kind | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListProjectVersionsResponse**](V1ListProjectVersionsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invalidateTeamRuns

> invalidateTeamRuns(owner, name, body)

Invalidate cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.invalidateTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listTeamMembers

> V1ListTeamMembersResponse listTeamMembers(owner, name, opts)

Get team members

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity managing the resource
let opts = {
  'offset': 56, // Number | Pagination offset.
  'limit': 56, // Number | Limit size.
  'sort': "sort_example", // String | Sort to order the search.
  'query': "query_example", // String | Query filter the search.
  'bookmarks': true, // Boolean | Filter by bookmarks.
  'mode': "mode_example", // String | Mode of the search.
  'no_page': true // Boolean | No pagination.
};
apiInstance.listTeamMembers(owner, name, opts, (error, data, response) => {
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
 **name** | **String**| Entity managing the resource | 
 **offset** | **Number**| Pagination offset. | [optional] 
 **limit** | **Number**| Limit size. | [optional] 
 **sort** | **String**| Sort to order the search. | [optional] 
 **query** | **String**| Query filter the search. | [optional] 
 **bookmarks** | **Boolean**| Filter by bookmarks. | [optional] 
 **mode** | **String**| Mode of the search. | [optional] 
 **no_page** | **Boolean**| No pagination. | [optional] 

### Return type

[**V1ListTeamMembersResponse**](V1ListTeamMembersResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeamNames

> V1ListTeamsResponse listTeamNames(owner, opts)

List teams names

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
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
apiInstance.listTeamNames(owner, opts, (error, data, response) => {
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

[**V1ListTeamsResponse**](V1ListTeamsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeams

> V1ListTeamsResponse listTeams(owner, opts)

List teams

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
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
apiInstance.listTeams(owner, opts, (error, data, response) => {
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

[**V1ListTeamsResponse**](V1ListTeamsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchTeam

> V1Team patchTeam(owner, team_name, body)

Patch team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team_name = "team_name_example"; // String | Name
let body = new PolyaxonSdk.V1Team(); // V1Team | Team body
apiInstance.patchTeam(owner, team_name, body, (error, data, response) => {
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
 **team_name** | **String**| Name | 
 **body** | [**V1Team**](V1Team.md)| Team body | 

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchTeamMember

> V1TeamMember patchTeamMember(owner, team, member_user, body)

Patch team member

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team = "team_example"; // String | Team
let member_user = "member_user_example"; // String | User
let body = new PolyaxonSdk.V1TeamMember(); // V1TeamMember | Team body
apiInstance.patchTeamMember(owner, team, member_user, body, (error, data, response) => {
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
 **team** | **String**| Team | 
 **member_user** | **String**| User | 
 **body** | [**V1TeamMember**](V1TeamMember.md)| Team body | 

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restoreTeamRuns

> restoreTeamRuns(owner, name, body)

Restore cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.restoreTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## skipTeamRuns

> skipTeamRuns(owner, name, body)

Skip cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.skipTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stopTeamRuns

> stopTeamRuns(owner, name, body)

Stop cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1Uuids(); // V1Uuids | Uuids of the entities
apiInstance.stopTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1Uuids**](V1Uuids.md)| Uuids of the entities | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tagTeamRuns

> tagTeamRuns(owner, name, body)

Tag cross-project runs selection

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1EntitiesTags(); // V1EntitiesTags | Data
apiInstance.tagTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1EntitiesTags**](V1EntitiesTags.md)| Data | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferTeamRuns

> transferTeamRuns(owner, name, body)

Transfer cross-project runs selection to a new project

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let name = "name_example"; // String | Entity under namespace
let body = new PolyaxonSdk.V1EntitiesTransfer(); // V1EntitiesTransfer | Data
apiInstance.transferTeamRuns(owner, name, body, (error, data, response) => {
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
 **name** | **String**| Entity under namespace | 
 **body** | [**V1EntitiesTransfer**](V1EntitiesTransfer.md)| Data | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTeam

> V1Team updateTeam(owner, team_name, body)

Update team

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team_name = "team_name_example"; // String | Name
let body = new PolyaxonSdk.V1Team(); // V1Team | Team body
apiInstance.updateTeam(owner, team_name, body, (error, data, response) => {
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
 **team_name** | **String**| Name | 
 **body** | [**V1Team**](V1Team.md)| Team body | 

### Return type

[**V1Team**](V1Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTeamMember

> V1TeamMember updateTeamMember(owner, team, member_user, body)

Update team member

### Example

```javascript
import PolyaxonSdk from 'polyaxon-sdk';
let defaultClient = PolyaxonSdk.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new PolyaxonSdk.TeamsV1Api();
let owner = "owner_example"; // String | Owner of the namespace
let team = "team_example"; // String | Team
let member_user = "member_user_example"; // String | User
let body = new PolyaxonSdk.V1TeamMember(); // V1TeamMember | Team body
apiInstance.updateTeamMember(owner, team, member_user, body, (error, data, response) => {
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
 **team** | **String**| Team | 
 **member_user** | **String**| User | 
 **body** | [**V1TeamMember**](V1TeamMember.md)| Team body | 

### Return type

[**V1TeamMember**](V1TeamMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

