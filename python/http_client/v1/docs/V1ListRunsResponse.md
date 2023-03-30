# V1ListRunsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1Run]**](V1Run.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_runs_response import V1ListRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListRunsResponse from a JSON string
v1_list_runs_response_instance = V1ListRunsResponse.from_json(json)
# print the JSON string representation of the object
print V1ListRunsResponse.to_json()

# convert the object into a dict
v1_list_runs_response_dict = v1_list_runs_response_instance.to_dict()
# create an instance of V1ListRunsResponse from a dict
v1_list_runs_response_form_dict = v1_list_runs_response.from_dict(v1_list_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


