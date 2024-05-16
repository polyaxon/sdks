# polyaxon_sdk.ProjectsV1Api
Polyaxon sdk

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archive_project**](ProjectsV1Api.md#archive_project) | **POST** /api/v1/{owner}/{name}/archive | Archive project
[**bookmark_project**](ProjectsV1Api.md#bookmark_project) | **POST** /api/v1/{owner}/{name}/bookmark | Bookmark project
[**create_project**](ProjectsV1Api.md#create_project) | **POST** /api/v1/{owner}/projects/create | Create new project
[**create_team_project**](ProjectsV1Api.md#create_team_project) | **POST** /api/v1/{owner}/{team}/projects/create | Create new project via team space
[**create_version**](ProjectsV1Api.md#create_version) | **POST** /api/v1/{owner}/{project}/versions/{version.kind} | Create version
[**create_version_stage**](ProjectsV1Api.md#create_version_stage) | **POST** /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages | Create new artifact version stage
[**delete_project**](ProjectsV1Api.md#delete_project) | **DELETE** /api/v1/{owner}/{name} | Delete project
[**delete_version**](ProjectsV1Api.md#delete_version) | **DELETE** /api/v1/{owner}/{entity}/versions/{kind}/{name} | Delete version
[**disable_project_ci**](ProjectsV1Api.md#disable_project_ci) | **DELETE** /api/v1/{owner}/{name}/ci | Disbale project CI
[**enable_project_ci**](ProjectsV1Api.md#enable_project_ci) | **POST** /api/v1/{owner}/{name}/ci | Enable project CI
[**get_project**](ProjectsV1Api.md#get_project) | **GET** /api/v1/{owner}/{name} | Get project
[**get_project_activities**](ProjectsV1Api.md#get_project_activities) | **GET** /api/v1/{owner}/{name}/activities | Get project activities
[**get_project_settings**](ProjectsV1Api.md#get_project_settings) | **GET** /api/v1/{owner}/{name}/settings | Get Project settings
[**get_project_stats**](ProjectsV1Api.md#get_project_stats) | **GET** /api/v1/{owner}/{name}/stats | Get project stats
[**get_version**](ProjectsV1Api.md#get_version) | **GET** /api/v1/{owner}/{entity}/versions/{kind}/{name} | Get version
[**get_version_stages**](ProjectsV1Api.md#get_version_stages) | **GET** /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages | Get version stages
[**list_archived_projects**](ProjectsV1Api.md#list_archived_projects) | **GET** /api/v1/archives/{user}/projects | List archived projects for user
[**list_bookmarked_projects**](ProjectsV1Api.md#list_bookmarked_projects) | **GET** /api/v1/bookmarks/{user}/projects | List bookmarked projects for user
[**list_project_names**](ProjectsV1Api.md#list_project_names) | **GET** /api/v1/{owner}/projects/names | List project names
[**list_projects**](ProjectsV1Api.md#list_projects) | **GET** /api/v1/{owner}/projects/list | List projects
[**list_version_names**](ProjectsV1Api.md#list_version_names) | **GET** /api/v1/{owner}/{entity}/versions/{kind}/names | List versions names
[**list_versions**](ProjectsV1Api.md#list_versions) | **GET** /api/v1/{owner}/{entity}/versions/{kind} | List versions
[**patch_project**](ProjectsV1Api.md#patch_project) | **PATCH** /api/v1/{owner}/{project.name} | Patch project
[**patch_project_settings**](ProjectsV1Api.md#patch_project_settings) | **PATCH** /api/v1/{owner}/{project}/settings | Patch project settings
[**patch_version**](ProjectsV1Api.md#patch_version) | **PATCH** /api/v1/{owner}/{project}/versions/{version.kind}/{version.name} | Patch version
[**restore_project**](ProjectsV1Api.md#restore_project) | **POST** /api/v1/{owner}/{name}/restore | Restore project
[**transfer_version**](ProjectsV1Api.md#transfer_version) | **POST** /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer | Transfer version
[**unbookmark_project**](ProjectsV1Api.md#unbookmark_project) | **DELETE** /api/v1/{owner}/{name}/unbookmark | Unbookmark project
[**update_project**](ProjectsV1Api.md#update_project) | **PUT** /api/v1/{owner}/{project.name} | Update project
[**update_project_settings**](ProjectsV1Api.md#update_project_settings) | **PUT** /api/v1/{owner}/{project}/settings | Update project settings
[**update_version**](ProjectsV1Api.md#update_version) | **PUT** /api/v1/{owner}/{project}/versions/{version.kind}/{version.name} | Update version
[**upload_project_artifact**](ProjectsV1Api.md#upload_project_artifact) | **POST** /api/v1/{owner}/{project}/artifacts/{uuid}/upload | Upload artifact to a store via project access


# **archive_project**
> archive_project(owner, name)

Archive project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Archive project
        api_instance.archive_project(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->archive_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **bookmark_project**
> bookmark_project(owner, name)

Bookmark project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Bookmark project
        api_instance.bookmark_project(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->bookmark_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **create_project**
> V1Project create_project(owner, body)

Create new project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    body = polyaxon_sdk.V1Project() # V1Project | Project body

    try:
        # Create new project
        api_response = api_instance.create_project(owner, body)
        print("The response of ProjectsV1Api->create_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->create_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **body** | [**V1Project**](V1Project.md)| Project body | 

### Return type

[**V1Project**](V1Project.md)

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

# **create_team_project**
> V1Project create_team_project(owner, team, body)

Create new project via team space

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    team = 'team_example' # str | Team
    body = polyaxon_sdk.V1Project() # V1Project | Project body

    try:
        # Create new project via team space
        api_response = api_instance.create_team_project(owner, team, body)
        print("The response of ProjectsV1Api->create_team_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->create_team_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **team** | **str**| Team | 
 **body** | [**V1Project**](V1Project.md)| Project body | 

### Return type

[**V1Project**](V1Project.md)

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

# **create_version**
> V1ProjectVersion create_version(owner, project, version_kind, body)

Create version

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project name
    version_kind = 'version_kind_example' # str | Optional kind to tell the kind of this version
    body = polyaxon_sdk.V1ProjectVersion() # V1ProjectVersion | Project version body

    try:
        # Create version
        api_response = api_instance.create_version(owner, project, version_kind, body)
        print("The response of ProjectsV1Api->create_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->create_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project name | 
 **version_kind** | **str**| Optional kind to tell the kind of this version | 
 **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | 

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

# **create_version_stage**
> V1Stage create_version_stage(owner, entity, kind, name, body)

Create new artifact version stage

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity namespace
    kind = 'kind_example' # str | Optional kind, only required for an version entity
    name = 'name_example' # str | Name of the entity to apply the stage to
    body = polyaxon_sdk.V1EntityStageBodyRequest() # V1EntityStageBodyRequest | 

    try:
        # Create new artifact version stage
        api_response = api_instance.create_version_stage(owner, entity, kind, name, body)
        print("The response of ProjectsV1Api->create_version_stage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->create_version_stage: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity namespace | 
 **kind** | **str**| Optional kind, only required for an version entity | 
 **name** | **str**| Name of the entity to apply the stage to | 
 **body** | [**V1EntityStageBodyRequest**](V1EntityStageBodyRequest.md)|  | 

### Return type

[**V1Stage**](V1Stage.md)

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

# **delete_project**
> delete_project(owner, name)

Delete project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Delete project
        api_instance.delete_project(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->delete_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **delete_version**
> delete_version(owner, entity, kind, name)

Delete version

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ...
    kind = 'kind_example' # str | Version Kind
    name = 'name_example' # str | Sub-entity name

    try:
        # Delete version
        api_instance.delete_version(owner, entity, kind, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->delete_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | 
 **kind** | **str**| Version Kind | 
 **name** | **str**| Sub-entity name | 

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

# **disable_project_ci**
> disable_project_ci(owner, name)

Disbale project CI

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Disbale project CI
        api_instance.disable_project_ci(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->disable_project_ci: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **enable_project_ci**
> enable_project_ci(owner, name)

Enable project CI

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Enable project CI
        api_instance.enable_project_ci(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->enable_project_ci: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **get_project**
> V1Project get_project(owner, name)

Get project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Get project
        api_response = api_instance.get_project(owner, name)
        print("The response of ProjectsV1Api->get_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->get_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

### Return type

[**V1Project**](V1Project.md)

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

# **get_project_activities**
> V1ListActivitiesResponse get_project_activities(owner, name, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

Get project activities

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Entity managing the resource
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # Get project activities
        api_response = api_instance.get_project_activities(owner, name, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of ProjectsV1Api->get_project_activities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->get_project_activities: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Entity managing the resource | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **bookmarks** | **bool**| Filter by bookmarks. | [optional] 
 **mode** | **str**| Mode of the search. | [optional] 
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

# **get_project_settings**
> V1ProjectSettings get_project_settings(owner, name)

Get Project settings

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Get Project settings
        api_response = api_instance.get_project_settings(owner, name)
        print("The response of ProjectsV1Api->get_project_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->get_project_settings: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

### Return type

[**V1ProjectSettings**](V1ProjectSettings.md)

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

# **get_project_stats**
> object get_project_stats(owner, name, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, kind=kind, aggregate=aggregate, groupby=groupby, trunc=trunc)

Get project stats

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Entity managing the resource
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

    try:
        # Get project stats
        api_response = api_instance.get_project_stats(owner, name, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, kind=kind, aggregate=aggregate, groupby=groupby, trunc=trunc)
        print("The response of ProjectsV1Api->get_project_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->get_project_stats: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Entity managing the resource | 
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

# **get_version**
> V1ProjectVersion get_version(owner, entity, kind, name)

Get version

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ...
    kind = 'kind_example' # str | Version Kind
    name = 'name_example' # str | Sub-entity name

    try:
        # Get version
        api_response = api_instance.get_version(owner, entity, kind, name)
        print("The response of ProjectsV1Api->get_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->get_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | 
 **kind** | **str**| Version Kind | 
 **name** | **str**| Sub-entity name | 

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

# **get_version_stages**
> V1Stage get_version_stages(owner, entity, kind, name)

Get version stages

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity: project name, hub name, registry name, ...
    kind = 'kind_example' # str | Version Kind
    name = 'name_example' # str | Sub-entity name

    try:
        # Get version stages
        api_response = api_instance.get_version_stages(owner, entity, kind, name)
        print("The response of ProjectsV1Api->get_version_stages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->get_version_stages: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity: project name, hub name, registry name, ... | 
 **kind** | **str**| Version Kind | 
 **name** | **str**| Sub-entity name | 

### Return type

[**V1Stage**](V1Stage.md)

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

# **list_archived_projects**
> V1ListProjectsResponse list_archived_projects(user, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)

List archived projects for user

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    user = 'user_example' # str | User
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List archived projects for user
        api_response = api_instance.list_archived_projects(user, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)
        print("The response of ProjectsV1Api->list_archived_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->list_archived_projects: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **str**| User | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

### Return type

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

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

# **list_bookmarked_projects**
> V1ListBookmarksResponse list_bookmarked_projects(user, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)

List bookmarked projects for user

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    user = 'user_example' # str | User
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List bookmarked projects for user
        api_response = api_instance.list_bookmarked_projects(user, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)
        print("The response of ProjectsV1Api->list_bookmarked_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->list_bookmarked_projects: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **str**| User | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

### Return type

[**V1ListBookmarksResponse**](V1ListBookmarksResponse.md)

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

# **list_project_names**
> V1ListProjectsResponse list_project_names(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

List project names

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List project names
        api_response = api_instance.list_project_names(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of ProjectsV1Api->list_project_names:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->list_project_names: %s\n" % e)
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

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

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

# **list_projects**
> V1ListProjectsResponse list_projects(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)

List projects

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    bookmarks = True # bool | Filter by bookmarks. (optional)
    mode = 'mode_example' # str | Mode of the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List projects
        api_response = api_instance.list_projects(owner, offset=offset, limit=limit, sort=sort, query=query, bookmarks=bookmarks, mode=mode, no_page=no_page)
        print("The response of ProjectsV1Api->list_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->list_projects: %s\n" % e)
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

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

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

# **list_version_names**
> V1ListProjectVersionsResponse list_version_names(owner, entity, kind, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)

List versions names

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity name under namespace
    kind = 'kind_example' # str | Version Kind
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List versions names
        api_response = api_instance.list_version_names(owner, entity, kind, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)
        print("The response of ProjectsV1Api->list_version_names:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->list_version_names: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity name under namespace | 
 **kind** | **str**| Version Kind | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_versions**
> V1ListProjectVersionsResponse list_versions(owner, entity, kind, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)

List versions

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    entity = 'entity_example' # str | Entity name under namespace
    kind = 'kind_example' # str | Version Kind
    offset = 56 # int | Pagination offset. (optional)
    limit = 56 # int | Limit size. (optional)
    sort = 'sort_example' # str | Sort to order the search. (optional)
    query = 'query_example' # str | Query filter the search. (optional)
    no_page = True # bool | No pagination. (optional)

    try:
        # List versions
        api_response = api_instance.list_versions(owner, entity, kind, offset=offset, limit=limit, sort=sort, query=query, no_page=no_page)
        print("The response of ProjectsV1Api->list_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->list_versions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **entity** | **str**| Entity name under namespace | 
 **kind** | **str**| Version Kind | 
 **offset** | **int**| Pagination offset. | [optional] 
 **limit** | **int**| Limit size. | [optional] 
 **sort** | **str**| Sort to order the search. | [optional] 
 **query** | **str**| Query filter the search. | [optional] 
 **no_page** | **bool**| No pagination. | [optional] 

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
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_project**
> V1Project patch_project(owner, project_name, body)

Patch project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project_name = 'project_name_example' # str | Required name
    body = polyaxon_sdk.V1Project() # V1Project | Project body

    try:
        # Patch project
        api_response = api_instance.patch_project(owner, project_name, body)
        print("The response of ProjectsV1Api->patch_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->patch_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project_name** | **str**| Required name | 
 **body** | [**V1Project**](V1Project.md)| Project body | 

### Return type

[**V1Project**](V1Project.md)

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

# **patch_project_settings**
> V1ProjectSettings patch_project_settings(owner, project, body)

Patch project settings

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project name
    body = polyaxon_sdk.V1ProjectSettings() # V1ProjectSettings | Project settings body

    try:
        # Patch project settings
        api_response = api_instance.patch_project_settings(owner, project, body)
        print("The response of ProjectsV1Api->patch_project_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->patch_project_settings: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project name | 
 **body** | [**V1ProjectSettings**](V1ProjectSettings.md)| Project settings body | 

### Return type

[**V1ProjectSettings**](V1ProjectSettings.md)

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

# **patch_version**
> V1ProjectVersion patch_version(owner, project, version_kind, version_name, body)

Patch version

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project name
    version_kind = 'version_kind_example' # str | Optional kind to tell the kind of this version
    version_name = 'version_name_example' # str | Optional component name, should be a valid fully qualified value: name[:version]
    body = polyaxon_sdk.V1ProjectVersion() # V1ProjectVersion | Project version body

    try:
        # Patch version
        api_response = api_instance.patch_version(owner, project, version_kind, version_name, body)
        print("The response of ProjectsV1Api->patch_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->patch_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project name | 
 **version_kind** | **str**| Optional kind to tell the kind of this version | 
 **version_name** | **str**| Optional component name, should be a valid fully qualified value: name[:version] | 
 **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | 

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

# **restore_project**
> restore_project(owner, name)

Restore project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Restore project
        api_instance.restore_project(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->restore_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **transfer_version**
> transfer_version(owner, project, version_kind, version_name, body)

Transfer version

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project name
    version_kind = 'version_kind_example' # str | Optional kind to tell the kind of this version
    version_name = 'version_name_example' # str | Optional component name, should be a valid fully qualified value: name[:version]
    body = polyaxon_sdk.V1ProjectVersion() # V1ProjectVersion | Project version body

    try:
        # Transfer version
        api_instance.transfer_version(owner, project, version_kind, version_name, body)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->transfer_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project name | 
 **version_kind** | **str**| Optional kind to tell the kind of this version | 
 **version_name** | **str**| Optional component name, should be a valid fully qualified value: name[:version] | 
 **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | 

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

# **unbookmark_project**
> unbookmark_project(owner, name)

Unbookmark project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    name = 'name_example' # str | Component under namespace

    try:
        # Unbookmark project
        api_instance.unbookmark_project(owner, name)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->unbookmark_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **name** | **str**| Component under namespace | 

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

# **update_project**
> V1Project update_project(owner, project_name, body)

Update project

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project_name = 'project_name_example' # str | Required name
    body = polyaxon_sdk.V1Project() # V1Project | Project body

    try:
        # Update project
        api_response = api_instance.update_project(owner, project_name, body)
        print("The response of ProjectsV1Api->update_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->update_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project_name** | **str**| Required name | 
 **body** | [**V1Project**](V1Project.md)| Project body | 

### Return type

[**V1Project**](V1Project.md)

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

# **update_project_settings**
> V1ProjectSettings update_project_settings(owner, project, body)

Update project settings

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project name
    body = polyaxon_sdk.V1ProjectSettings() # V1ProjectSettings | Project settings body

    try:
        # Update project settings
        api_response = api_instance.update_project_settings(owner, project, body)
        print("The response of ProjectsV1Api->update_project_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->update_project_settings: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project name | 
 **body** | [**V1ProjectSettings**](V1ProjectSettings.md)| Project settings body | 

### Return type

[**V1ProjectSettings**](V1ProjectSettings.md)

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

# **update_version**
> V1ProjectVersion update_version(owner, project, version_kind, version_name, body)

Update version

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project name
    version_kind = 'version_kind_example' # str | Optional kind to tell the kind of this version
    version_name = 'version_name_example' # str | Optional component name, should be a valid fully qualified value: name[:version]
    body = polyaxon_sdk.V1ProjectVersion() # V1ProjectVersion | Project version body

    try:
        # Update version
        api_response = api_instance.update_version(owner, project, version_kind, version_name, body)
        print("The response of ProjectsV1Api->update_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->update_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project name | 
 **version_kind** | **str**| Optional kind to tell the kind of this version | 
 **version_name** | **str**| Optional component name, should be a valid fully qualified value: name[:version] | 
 **body** | [**V1ProjectVersion**](V1ProjectVersion.md)| Project version body | 

### Return type

[**V1ProjectVersion**](V1ProjectVersion.md)

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

# **upload_project_artifact**
> upload_project_artifact(owner, project, uuid, uploadfile, path=path, overwrite=overwrite)

Upload artifact to a store via project access

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
    api_instance = polyaxon_sdk.ProjectsV1Api(api_client)
    owner = 'owner_example' # str | Owner of the namespace
    project = 'project_example' # str | Project having access to the store
    uuid = 'uuid_example' # str | Unique integer identifier of the entity
    uploadfile = polyaxon_sdk.bytearray() # bytearray | The file to upload.
    path = 'path_example' # str | File path query params. (optional)
    overwrite = True # bool | File path query params. (optional)

    try:
        # Upload artifact to a store via project access
        api_instance.upload_project_artifact(owner, project, uuid, uploadfile, path=path, overwrite=overwrite)
    except Exception as e:
        print("Exception when calling ProjectsV1Api->upload_project_artifact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner of the namespace | 
 **project** | **str**| Project having access to the store | 
 **uuid** | **str**| Unique integer identifier of the entity | 
 **uploadfile** | **bytearray**| The file to upload. | 
 **path** | **str**| File path query params. | [optional] 
 **overwrite** | **bool**| File path query params. | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**204** | No content. |  -  |
**403** | You don&#39;t have permission to access the resource. |  -  |
**404** | Resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

