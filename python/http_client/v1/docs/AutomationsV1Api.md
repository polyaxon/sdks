# polyaxon_sdk.AutomationsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_automation**](AutomationsV1Api.md#create_automation) | **POST** /api/v1/orgs/{owner}/automations | Create automation
[**delete_automation**](AutomationsV1Api.md#delete_automation) | **DELETE** /api/v1/orgs/{owner}/automations/{uuid} | Delete automation
[**get_automation**](AutomationsV1Api.md#get_automation) | **GET** /api/v1/orgs/{owner}/automations/{uuid} | Get automation
[**get_automation_stats**](AutomationsV1Api.md#get_automation_stats) | **GET** /api/v1/orgs/{owner}/automations/{uuid}/stats | Get automation stats
[**list_automation_events**](AutomationsV1Api.md#list_automation_events) | **GET** /api/v1/orgs/{owner}/automations/{uuid}/events | List automation events (from executions&#39; triggering_event)
[**list_automation_executions**](AutomationsV1Api.md#list_automation_executions) | **GET** /api/v1/orgs/{owner}/automations/{uuid}/executions | List automation executions
[**list_automation_names**](AutomationsV1Api.md#list_automation_names) | **GET** /api/v1/orgs/{owner}/automations/names | List automation names
[**list_automations**](AutomationsV1Api.md#list_automations) | **GET** /api/v1/orgs/{owner}/automations | List automations
[**patch_automation**](AutomationsV1Api.md#patch_automation) | **PATCH** /api/v1/orgs/{owner}/automations/{automation.uuid} | Patch automation
[**retry_automation_execution**](AutomationsV1Api.md#retry_automation_execution) | **POST** /api/v1/orgs/{owner}/automations/{entity}/executions/{uuid}/retry | Retry automation execution
[**test_automation**](AutomationsV1Api.md#test_automation) | **POST** /api/v1/orgs/{owner}/automations/{automation_uuid}/test | Test automation trigger evaluation
[**update_automation**](AutomationsV1Api.md#update_automation) | **PUT** /api/v1/orgs/{owner}/automations/{automation.uuid} | Update automation


# **create_automation**
> V1Automation create_automation(owner, body)

Create automation

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    body = polyaxon_sdk.V1Automation() # V1Automation | Automation

    try:
        # Create automation
        api_response = api_instance.create_automation(owner, body)
        print("The response of AutomationsV1Api->create_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->create_automation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **body** | [**V1Automation**](V1Automation.md)| Automation | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_automation**
> delete_automation(owner, uuid, entity=entity)

Delete automation

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the sub-entity
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ... (optional)

    try:
        # Delete automation
        api_instance.delete_automation(owner, uuid, entity=entity)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->delete_automation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the sub-entity | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_automation**
> V1Automation get_automation(owner, uuid, entity=entity)

Get automation

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the sub-entity
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ... (optional)

    try:
        # Get automation
        api_response = api_instance.get_automation(owner, uuid, entity=entity)
        print("The response of AutomationsV1Api->get_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->get_automation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the sub-entity | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_automation_stats**
> object get_automation_stats(owner, uuid, entity=entity, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, kind=kind, aggregate=aggregate, groupby=groupby, trunc=trunc, start_date=start_date, end_date=end_date, boundary=boundary)

Get automation stats

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | SubEntity uuid
    entity = 'entity_example' # str | Entity name under namespace. (optional)
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Stats Mode. (optional)
    kind = 'kind_example' # str | Stats Kind. (optional)
    aggregate = 'aggregate_example' # str | Stats aggregate. (optional)
    groupby = 'groupby_example' # str | Stats group. (optional)
    trunc = 'trunc_example' # str | Stats trunc. (optional)
    start_date = 'start_date_example' # str | Stats start date. (optional)
    end_date = 'end_date_example' # str | Stats end date. (optional)
    boundary = True # bool | Stats boundary. (optional)

    try:
        # Get automation stats
        api_response = api_instance.get_automation_stats(owner, uuid, entity=entity, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, kind=kind, aggregate=aggregate, groupby=groupby, trunc=trunc, start_date=start_date, end_date=end_date, boundary=boundary)
        print("The response of AutomationsV1Api->get_automation_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->get_automation_stats: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| SubEntity uuid | 
 **entity** | **str**| Entity name under namespace. | [optional] 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **bookmarks** | **bool**| Filter by bookmarks. | [optional] 
 **mode** | **str**| Stats Mode. | [optional] 
 **kind** | **str**| Stats Kind. | [optional] 
 **aggregate** | **str**| Stats aggregate. | [optional] 
 **groupby** | **str**| Stats group. | [optional] 
 **trunc** | **str**| Stats trunc. | [optional] 
 **start_date** | **str**| Stats start date. | [optional] 
 **end_date** | **str**| Stats end date. | [optional] 
 **boundary** | **bool**| Stats boundary. | [optional] 

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_automation_events**
> V1ListActivitiesResponse list_automation_events(owner, uuid, entity=entity, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)

List automation events (from executions' triggering_event)

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | SubEntity uuid
    entity = 'entity_example' # str | Entity name under namespace. (optional)
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List automation events (from executions' triggering_event)
        api_response = api_instance.list_automation_events(owner, uuid, entity=entity, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)
        print("The response of AutomationsV1Api->list_automation_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->list_automation_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| SubEntity uuid | 
 **entity** | **str**| Entity name under namespace. | [optional] 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_automation_executions**
> V1ListAutomationExecutionsResponse list_automation_executions(owner, uuid, entity=entity, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)

List automation executions

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | SubEntity uuid
    entity = 'entity_example' # str | Entity name under namespace. (optional)
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List automation executions
        api_response = api_instance.list_automation_executions(owner, uuid, entity=entity, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)
        print("The response of AutomationsV1Api->list_automation_executions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->list_automation_executions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| SubEntity uuid | 
 **entity** | **str**| Entity name under namespace. | [optional] 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_automation_names**
> V1ListAutomationsResponse list_automation_names(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

List automation names

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List automation names
        api_response = api_instance.list_automation_names(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of AutomationsV1Api->list_automation_names:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->list_automation_names: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **bookmarks** | **bool**| Filter by bookmarks. | [optional] 
 **mode** | **str**| Mode of the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_automations**
> V1ListAutomationsResponse list_automations(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

List automations

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List automations
        api_response = api_instance.list_automations(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of AutomationsV1Api->list_automations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->list_automations: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **bookmarks** | **bool**| Filter by bookmarks. | [optional] 
 **mode** | **str**| Mode of the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_automation**
> V1Automation patch_automation(owner, automation_uuid, body)

Patch automation

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    automation_uuid = 'automation_uuid_example' # str | UUID
    body = polyaxon_sdk.V1Automation() # V1Automation | Automation

    try:
        # Patch automation
        api_response = api_instance.patch_automation(owner, automation_uuid, body)
        print("The response of AutomationsV1Api->patch_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->patch_automation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **automation_uuid** | **str**| UUID | 
 **body** | [**V1Automation**](V1Automation.md)| Automation | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retry_automation_execution**
> V1AutomationExecution retry_automation_execution(owner, entity, uuid)

Retry automation execution

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ...
    uuid = 'uuid_example' # str | Uuid identifier of the sub-entity

    try:
        # Retry automation execution
        api_response = api_instance.retry_automation_execution(owner, entity, uuid)
        print("The response of AutomationsV1Api->retry_automation_execution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->retry_automation_execution: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | 
 **uuid** | **str**| Uuid identifier of the sub-entity | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_automation**
> object test_automation(owner, automation_uuid, body)

Test automation trigger evaluation

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    automation_uuid = 'automation_uuid_example' # str | Automation UUID
    body = polyaxon_sdk.V1AutomationTestRequest() # V1AutomationTestRequest | 

    try:
        # Test automation trigger evaluation
        api_response = api_instance.test_automation(owner, automation_uuid, body)
        print("The response of AutomationsV1Api->test_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->test_automation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **automation_uuid** | **str**| Automation UUID | 
 **body** | [**V1AutomationTestRequest**](V1AutomationTestRequest.md)|  | 

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_automation**
> V1Automation update_automation(owner, automation_uuid, body)

Update automation

### Example

* Api Key Authentication (ApiKey):
```python
from __future__ import print_function
import time
import os
import polyaxon_sdk
from polyaxon_sdk.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = polyaxon_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with polyaxon_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = polyaxon_sdk.AutomationsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    automation_uuid = 'automation_uuid_example' # str | UUID
    body = polyaxon_sdk.V1Automation() # V1Automation | Automation

    try:
        # Update automation
        api_response = api_instance.update_automation(owner, automation_uuid, body)
        print("The response of AutomationsV1Api->update_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsV1Api->update_automation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **automation_uuid** | **str**| UUID | 
 **body** | [**V1Automation**](V1Automation.md)| Automation | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

