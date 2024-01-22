# polyaxon_sdk.AgentsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collect_agent_data**](AgentsV1Api.md#collect_agent_data) | **POST** /internal/v1/{namespace}/{owner}/agents/{uuid}/collect | collect agent
[**create_agent**](AgentsV1Api.md#create_agent) | **POST** /api/v1/orgs/{owner}/agents | Create agent
[**create_agent_status**](AgentsV1Api.md#create_agent_status) | **POST** /api/v1/orgs/{owner}/agents/{uuid}/statuses | Create new agent status
[**cron_agent**](AgentsV1Api.md#cron_agent) | **POST** /api/v1/orgs/{owner}/agents/cron | Global Cron
[**delete_agent**](AgentsV1Api.md#delete_agent) | **DELETE** /api/v1/orgs/{owner}/agents/{uuid} | Delete agent
[**get_agent**](AgentsV1Api.md#get_agent) | **GET** /api/v1/orgs/{owner}/agents/{uuid} | Get agent
[**get_agent_config**](AgentsV1Api.md#get_agent_config) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/config | Get agent config
[**get_agent_logs**](AgentsV1Api.md#get_agent_logs) | **GET** /streams/v1/{namespace}/{owner}/agents/{uuid}/logs | Get run logs
[**get_agent_state**](AgentsV1Api.md#get_agent_state) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/state | Get State (queues/runs)
[**get_agent_token**](AgentsV1Api.md#get_agent_token) | **GET** /api/v1/orgs/{owner}/agents/{uuid}/token | Get agent token
[**get_global_state**](AgentsV1Api.md#get_global_state) | **GET** /api/v1/orgs/{owner}/agents/state | Get Global State (queues/runs)
[**inspect_agent**](AgentsV1Api.md#inspect_agent) | **GET** /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect | Inspect an agent&#39;s service full conditions
[**list_agent_names**](AgentsV1Api.md#list_agent_names) | **GET** /api/v1/orgs/{owner}/agents/names | List agents names
[**list_agents**](AgentsV1Api.md#list_agents) | **GET** /api/v1/orgs/{owner}/agents | List agents
[**patch_agent**](AgentsV1Api.md#patch_agent) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid} | Patch agent
[**patch_agent_token**](AgentsV1Api.md#patch_agent_token) | **PATCH** /api/v1/orgs/{owner}/agents/{entity}/token | Patch agent token
[**reconcile_agent**](AgentsV1Api.md#reconcile_agent) | **PATCH** /api/v1/orgs/{owner}/agents/{uuid}/reconcile | Reconcile agent
[**sync_agent**](AgentsV1Api.md#sync_agent) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid}/sync | Sync agent
[**update_agent**](AgentsV1Api.md#update_agent) | **PUT** /api/v1/orgs/{owner}/agents/{agent.uuid} | Update agent
[**update_agent_config**](AgentsV1Api.md#update_agent_config) | **PATCH** /api/v1/orgs/{owner}/agents/{agent.uuid}/config | Update agent config
[**update_agent_token**](AgentsV1Api.md#update_agent_token) | **PUT** /api/v1/orgs/{owner}/agents/{entity}/token | Update agent token


# **collect_agent_data**
> object collect_agent_data(namespace, owner, uuid)

collect agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    namespace = 'namespace_example' # str | namespace
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity

    try:
        # collect agent
        api_response = api_instance.collect_agent_data(namespace, owner, uuid)
        print("The response of AgentsV1Api->collect_agent_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->collect_agent_data: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| namespace | 
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 

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

# **create_agent**
> V1Agent create_agent(owner, body)

Create agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    body = polyaxon_sdk.V1Agent() # V1Agent | Agent body

    try:
        # Create agent
        api_response = api_instance.create_agent(owner, body)
        print("The response of AgentsV1Api->create_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->create_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_agent_status**
> V1Status create_agent_status(owner, uuid, body)

Create new agent status

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity
    body = polyaxon_sdk.V1AgentStatusBodyRequest() # V1AgentStatusBodyRequest | 

    try:
        # Create new agent status
        api_response = api_instance.create_agent_status(owner, uuid, body)
        print("The response of AgentsV1Api->create_agent_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->create_agent_status: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 
 **body** | [**V1AgentStatusBodyRequest**](V1AgentStatusBodyRequest.md)|  | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cron_agent**
> V1AgentStateResponse cron_agent(owner, body)

Global Cron

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    body = None # object | Cron body

    try:
        # Global Cron
        api_response = api_instance.cron_agent(owner, body)
        print("The response of AgentsV1Api->cron_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->cron_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **body** | **object**| Cron body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_agent**
> delete_agent(owner, uuid, entity=entity)

Delete agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the sub-entity
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ... (optional)

    try:
        # Delete agent
        api_instance.delete_agent(owner, uuid, entity=entity)
    except Exception as e:
        print("Exception when calling AgentsV1Api->delete_agent: %s\n" % e)
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

# **get_agent**
> V1Agent get_agent(owner, uuid, entity=entity)

Get agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the sub-entity
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ... (optional)

    try:
        # Get agent
        api_response = api_instance.get_agent(owner, uuid, entity=entity)
        print("The response of AgentsV1Api->get_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->get_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the sub-entity | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_agent_config**
> V1Agent get_agent_config(owner, uuid, entity=entity)

Get agent config

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the sub-entity
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ... (optional)

    try:
        # Get agent config
        api_response = api_instance.get_agent_config(owner, uuid, entity=entity)
        print("The response of AgentsV1Api->get_agent_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->get_agent_config: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the sub-entity | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_agent_logs**
> V1Logs get_agent_logs(namespace, owner, uuid, service=service, last_file=last_file, force=force, connection=connection)

Get run logs

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    namespace = 'namespace_example' # str | namespace
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity
    service = 'service_example' # str | Service. (optional)
    last_file = 'last_file_example' # str | last_file. (optional)
    force = True # bool | Force query param. (optional)
    connection = 'connection_example' # str | Connection to use. (optional)

    try:
        # Get run logs
        api_response = api_instance.get_agent_logs(namespace, owner, uuid, service=service, last_file=last_file, force=force, connection=connection)
        print("The response of AgentsV1Api->get_agent_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->get_agent_logs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| namespace | 
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 
 **service** | **str**| Service. | [optional] 
 **last_file** | **str**| last_file. | [optional] 
 **force** | **bool**| Force query param. | [optional] 
 **connection** | **str**| Connection to use. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_agent_state**
> V1AgentStateResponse get_agent_state(owner, uuid)

Get State (queues/runs)

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity

    try:
        # Get State (queues/runs)
        api_response = api_instance.get_agent_state(owner, uuid)
        print("The response of AgentsV1Api->get_agent_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->get_agent_state: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_agent_token**
> V1Token get_agent_token(owner, uuid)

Get agent token

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity

    try:
        # Get agent token
        api_response = api_instance.get_agent_token(owner, uuid)
        print("The response of AgentsV1Api->get_agent_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->get_agent_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_global_state**
> V1AgentStateResponse get_global_state(owner)

Get Global State (queues/runs)

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace

    try:
        # Get Global State (queues/runs)
        api_response = api_instance.get_global_state(owner)
        print("The response of AgentsV1Api->get_global_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->get_global_state: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inspect_agent**
> object inspect_agent(namespace, owner, uuid, service=service, last_file=last_file, force=force, connection=connection)

Inspect an agent's service full conditions

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    namespace = 'namespace_example' # str | namespace
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity
    service = 'service_example' # str | Service. (optional)
    last_file = 'last_file_example' # str | last_file. (optional)
    force = True # bool | Force query param. (optional)
    connection = 'connection_example' # str | Connection to use. (optional)

    try:
        # Inspect an agent's service full conditions
        api_response = api_instance.inspect_agent(namespace, owner, uuid, service=service, last_file=last_file, force=force, connection=connection)
        print("The response of AgentsV1Api->inspect_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->inspect_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| namespace | 
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 
 **service** | **str**| Service. | [optional] 
 **last_file** | **str**| last_file. | [optional] 
 **force** | **bool**| Force query param. | [optional] 
 **connection** | **str**| Connection to use. | [optional] 

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

# **list_agent_names**
> V1ListAgentsResponse list_agent_names(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

List agents names

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List agents names
        api_response = api_instance.list_agent_names(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of AgentsV1Api->list_agent_names:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->list_agent_names: %s\n" % e)
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

[**V1ListAgentsResponse**](V1ListAgentsResponse.md)

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

# **list_agents**
> V1ListAgentsResponse list_agents(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

List agents

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List agents
        api_response = api_instance.list_agents(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of AgentsV1Api->list_agents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->list_agents: %s\n" % e)
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

[**V1ListAgentsResponse**](V1ListAgentsResponse.md)

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

# **patch_agent**
> V1Agent patch_agent(owner, agent_uuid, body)

Patch agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    agent_uuid = 'agent_uuid_example' # str | UUID
    body = polyaxon_sdk.V1Agent() # V1Agent | Agent body

    try:
        # Patch agent
        api_response = api_instance.patch_agent(owner, agent_uuid, body)
        print("The response of AgentsV1Api->patch_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->patch_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **agent_uuid** | **str**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_agent_token**
> V1Token patch_agent_token(owner, entity, body)

Patch agent token

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity
    body = polyaxon_sdk.V1Token() # V1Token | Token body

    try:
        # Patch agent token
        api_response = api_instance.patch_agent_token(owner, entity, body)
        print("The response of AgentsV1Api->patch_agent_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->patch_agent_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity | 
 **body** | [**V1Token**](V1Token.md)| Token body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reconcile_agent**
> object reconcile_agent(owner, uuid, body)

Reconcile agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    uuid = 'uuid_example' # str | Uuid identifier of the entity
    body = polyaxon_sdk.V1AgentReconcileBodyRequest() # V1AgentReconcileBodyRequest | 

    try:
        # Reconcile agent
        api_response = api_instance.reconcile_agent(owner, uuid, body)
        print("The response of AgentsV1Api->reconcile_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->reconcile_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **uuid** | **str**| Uuid identifier of the entity | 
 **body** | [**V1AgentReconcileBodyRequest**](V1AgentReconcileBodyRequest.md)|  | 

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

# **sync_agent**
> sync_agent(owner, agent_uuid, body)

Sync agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    agent_uuid = 'agent_uuid_example' # str | UUID
    body = polyaxon_sdk.V1Agent() # V1Agent | Agent body

    try:
        # Sync agent
        api_instance.sync_agent(owner, agent_uuid, body)
    except Exception as e:
        print("Exception when calling AgentsV1Api->sync_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **agent_uuid** | **str**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

### Return type

void (empty response body)

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

# **update_agent**
> V1Agent update_agent(owner, agent_uuid, body)

Update agent

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    agent_uuid = 'agent_uuid_example' # str | UUID
    body = polyaxon_sdk.V1Agent() # V1Agent | Agent body

    try:
        # Update agent
        api_response = api_instance.update_agent(owner, agent_uuid, body)
        print("The response of AgentsV1Api->update_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->update_agent: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **agent_uuid** | **str**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_agent_config**
> V1Agent update_agent_config(owner, agent_uuid, body)

Update agent config

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    agent_uuid = 'agent_uuid_example' # str | UUID
    body = polyaxon_sdk.V1Agent() # V1Agent | Agent body

    try:
        # Update agent config
        api_response = api_instance.update_agent_config(owner, agent_uuid, body)
        print("The response of AgentsV1Api->update_agent_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->update_agent_config: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **agent_uuid** | **str**| UUID | 
 **body** | [**V1Agent**](V1Agent.md)| Agent body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_agent_token**
> V1Token update_agent_token(owner, entity, body)

Update agent token

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
    api_instance = polyaxon_sdk.AgentsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity
    body = polyaxon_sdk.V1Token() # V1Token | Token body

    try:
        # Update agent token
        api_response = api_instance.update_agent_token(owner, entity, body)
        print("The response of AgentsV1Api->update_agent_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsV1Api->update_agent_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity | 
 **body** | [**V1Token**](V1Token.md)| Token body | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

