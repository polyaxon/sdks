# polyaxon_sdk.SandboxV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**call_exec**](SandboxV1Api.md#call_exec) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec | 
[**create_pty**](SandboxV1Api.md#create_pty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty | 
[**delete_bg_exec**](SandboxV1Api.md#delete_bg_exec) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id} | 
[**delete_pty**](SandboxV1Api.md#delete_pty) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id} | 
[**exec_bg**](SandboxV1Api.md#exec_bg) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg | 
[**fs_ls**](SandboxV1Api.md#fs_ls) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/ls | 
[**fs_mkdir**](SandboxV1Api.md#fs_mkdir) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/mkdir | 
[**fs_rm**](SandboxV1Api.md#fs_rm) | **DELETE** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/rm | 
[**fs_stat**](SandboxV1Api.md#fs_stat) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/fs/stat | 
[**get_bg_exec**](SandboxV1Api.md#get_bg_exec) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id} | 
[**get_bg_exec_logs**](SandboxV1Api.md#get_bg_exec_logs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/logs | 
[**get_pty**](SandboxV1Api.md#get_pty) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id} | 
[**list_bg_execs**](SandboxV1Api.md#list_bg_execs) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg | 
[**list_ptys**](SandboxV1Api.md#list_ptys) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty | 
[**ping**](SandboxV1Api.md#ping) | **GET** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/ping | 
[**resize_pty**](SandboxV1Api.md#resize_pty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id}/resize | 
[**signal_bg_exec**](SandboxV1Api.md#signal_bg_exec) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/exec/bg/{id}/signal | 
[**signal_pty**](SandboxV1Api.md#signal_pty) | **POST** /sandbox/v1/{namespace}/{owner}/{project}/runs/{uuid}/pty/{id}/signal | 


# **call_exec**
> V1ExecResult call_exec(namespace, owner, project, uuid, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    body = polyaxon_sdk.V1ExecRequest() # V1ExecRequest | 

    try:
        api_response = api_instance.call_exec(namespace, owner, project, uuid, body)
        print("The response of SandboxV1Api->call_exec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->call_exec: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **body** | [**V1ExecRequest**](V1ExecRequest.md)|  | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_pty**
> V1Pty create_pty(namespace, owner, project, uuid, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    body = polyaxon_sdk.V1CreatePtyRequest() # V1CreatePtyRequest | 

    try:
        api_response = api_instance.create_pty(namespace, owner, project, uuid, body)
        print("The response of SandboxV1Api->create_pty:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->create_pty: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **body** | [**V1CreatePtyRequest**](V1CreatePtyRequest.md)|  | 

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
**200** | A successful response. |  -  |
**201** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_bg_exec**
> delete_bg_exec(namespace, owner, project, uuid, id)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.delete_bg_exec(namespace, owner, project, uuid, id)
    except Exception as e:
        print("Exception when calling SandboxV1Api->delete_bg_exec: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 

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

# **delete_pty**
> delete_pty(namespace, owner, project, uuid, id)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.delete_pty(namespace, owner, project, uuid, id)
    except Exception as e:
        print("Exception when calling SandboxV1Api->delete_pty: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 

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

# **exec_bg**
> V1ExecBgStart exec_bg(namespace, owner, project, uuid, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    body = polyaxon_sdk.V1ExecBgRequest() # V1ExecBgRequest | 

    try:
        api_response = api_instance.exec_bg(namespace, owner, project, uuid, body)
        print("The response of SandboxV1Api->exec_bg:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->exec_bg: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **body** | [**V1ExecBgRequest**](V1ExecBgRequest.md)|  | 

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
**200** | A successful response. |  -  |
**202** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_ls**
> V1FsListResult fs_ls(namespace, owner, project, uuid, path=path, recursive=recursive, max_entries=max_entries)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    path = 'path_example' # str |  (optional)
    recursive = True # bool |  (optional)
    max_entries = 56 # int |  (optional)

    try:
        api_response = api_instance.fs_ls(namespace, owner, project, uuid, path=path, recursive=recursive, max_entries=max_entries)
        print("The response of SandboxV1Api->fs_ls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->fs_ls: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **path** | **str**|  | [optional] 
 **recursive** | **bool**|  | [optional] 
 **max_entries** | **int**|  | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_mkdir**
> V1FsPathResult fs_mkdir(namespace, owner, project, uuid, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    body = polyaxon_sdk.V1FsMkdirRequest() # V1FsMkdirRequest | 

    try:
        api_response = api_instance.fs_mkdir(namespace, owner, project, uuid, body)
        print("The response of SandboxV1Api->fs_mkdir:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->fs_mkdir: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **body** | [**V1FsMkdirRequest**](V1FsMkdirRequest.md)|  | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_rm**
> V1FsPathResult fs_rm(namespace, owner, project, uuid, path=path, recursive=recursive)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    path = 'path_example' # str |  (optional)
    recursive = True # bool |  (optional)

    try:
        api_response = api_instance.fs_rm(namespace, owner, project, uuid, path=path, recursive=recursive)
        print("The response of SandboxV1Api->fs_rm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->fs_rm: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **path** | **str**|  | [optional] 
 **recursive** | **bool**|  | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_stat**
> V1FsStatResult fs_stat(namespace, owner, project, uuid, path=path)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    path = 'path_example' # str |  (optional)

    try:
        api_response = api_instance.fs_stat(namespace, owner, project, uuid, path=path)
        print("The response of SandboxV1Api->fs_stat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->fs_stat: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **path** | **str**|  | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_bg_exec**
> V1ExecBgStatus get_bg_exec(namespace, owner, project, uuid, id)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_bg_exec(namespace, owner, project, uuid, id)
        print("The response of SandboxV1Api->get_bg_exec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->get_bg_exec: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_bg_exec_logs**
> V1ExecBgLogs get_bg_exec_logs(namespace, owner, project, uuid, id, stream=stream, offset=offset, max_bytes=max_bytes)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 
    stream = 'stream_example' # str |  (optional)
    offset = 56 # int |  (optional)
    max_bytes = 56 # int |  (optional)

    try:
        api_response = api_instance.get_bg_exec_logs(namespace, owner, project, uuid, id, stream=stream, offset=offset, max_bytes=max_bytes)
        print("The response of SandboxV1Api->get_bg_exec_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->get_bg_exec_logs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 
 **stream** | **str**|  | [optional] 
 **offset** | **int**|  | [optional] 
 **max_bytes** | **int**|  | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pty**
> V1Pty get_pty(namespace, owner, project, uuid, id)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_pty(namespace, owner, project, uuid, id)
        print("The response of SandboxV1Api->get_pty:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->get_pty: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_bg_execs**
> V1ExecBgList list_bg_execs(namespace, owner, project, uuid, tag=tag)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    tag = 'tag_example' # str |  (optional)

    try:
        api_response = api_instance.list_bg_execs(namespace, owner, project, uuid, tag=tag)
        print("The response of SandboxV1Api->list_bg_execs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->list_bg_execs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **tag** | **str**|  | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_ptys**
> V1PtyList list_ptys(namespace, owner, project, uuid, tag=tag)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    tag = 'tag_example' # str |  (optional)

    try:
        api_response = api_instance.list_ptys(namespace, owner, project, uuid, tag=tag)
        print("The response of SandboxV1Api->list_ptys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->list_ptys: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **tag** | **str**|  | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ping**
> V1PingResponse ping(namespace, owner, project, uuid)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 

    try:
        api_response = api_instance.ping(namespace, owner, project, uuid)
        print("The response of SandboxV1Api->ping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxV1Api->ping: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resize_pty**
> resize_pty(namespace, owner, project, uuid, id, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 
    body = polyaxon_sdk.V1ResizePtyRequest() # V1ResizePtyRequest | 

    try:
        api_instance.resize_pty(namespace, owner, project, uuid, id, body)
    except Exception as e:
        print("Exception when calling SandboxV1Api->resize_pty: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 
 **body** | [**V1ResizePtyRequest**](V1ResizePtyRequest.md)|  | 

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

# **signal_bg_exec**
> signal_bg_exec(namespace, owner, project, uuid, id, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 
    body = polyaxon_sdk.V1SignalRequest() # V1SignalRequest | 

    try:
        api_instance.signal_bg_exec(namespace, owner, project, uuid, id, body)
    except Exception as e:
        print("Exception when calling SandboxV1Api->signal_bg_exec: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 
 **body** | [**V1SignalRequest**](V1SignalRequest.md)|  | 

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

# **signal_pty**
> signal_pty(namespace, owner, project, uuid, id, body)



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
    api_instance = polyaxon_sdk.SandboxV1Api(api_client)
    namespace = 'namespace_example' # str | 
    owner = 'owner_example' # str | 
    project = 'project_example' # str | 
    uuid = 'uuid_example' # str | 
    id = 'id_example' # str | 
    body = polyaxon_sdk.V1SignalRequest() # V1SignalRequest | 

    try:
        api_instance.signal_pty(namespace, owner, project, uuid, id, body)
    except Exception as e:
        print("Exception when calling SandboxV1Api->signal_pty: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**|  | 
 **owner** | **str**|  | 
 **project** | **str**|  | 
 **uuid** | **str**|  | 
 **id** | **str**|  | 
 **body** | [**V1SignalRequest**](V1SignalRequest.md)|  | 

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

