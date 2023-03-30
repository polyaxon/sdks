# V1ListProjectVersionsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1ProjectVersion]**](V1ProjectVersion.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_project_versions_response import V1ListProjectVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListProjectVersionsResponse from a JSON string
v1_list_project_versions_response_instance = V1ListProjectVersionsResponse.from_json(json)
# print the JSON string representation of the object
print V1ListProjectVersionsResponse.to_json()

# convert the object into a dict
v1_list_project_versions_response_dict = v1_list_project_versions_response_instance.to_dict()
# create an instance of V1ListProjectVersionsResponse from a dict
v1_list_project_versions_response_form_dict = v1_list_project_versions_response.from_dict(v1_list_project_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


