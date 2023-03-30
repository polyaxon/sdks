# V1GridSearch


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'grid']
**params** | **Dict[str, object]** |  | [optional] 
**num_runs** | **int** |  | [optional] 
**seed** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_grid_search import V1GridSearch

# TODO update the JSON string below
json = "{}"
# create an instance of V1GridSearch from a JSON string
v1_grid_search_instance = V1GridSearch.from_json(json)
# print the JSON string representation of the object
print V1GridSearch.to_json()

# convert the object into a dict
v1_grid_search_dict = v1_grid_search_instance.to_dict()
# create an instance of V1GridSearch from a dict
v1_grid_search_form_dict = v1_grid_search.from_dict(v1_grid_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


