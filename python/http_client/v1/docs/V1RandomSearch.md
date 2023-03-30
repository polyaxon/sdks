# V1RandomSearch


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'random']
**params** | **Dict[str, object]** |  | [optional] 
**num_runs** | **int** |  | [optional] 
**seed** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_random_search import V1RandomSearch

# TODO update the JSON string below
json = "{}"
# create an instance of V1RandomSearch from a JSON string
v1_random_search_instance = V1RandomSearch.from_json(json)
# print the JSON string representation of the object
print V1RandomSearch.to_json()

# convert the object into a dict
v1_random_search_dict = v1_random_search_instance.to_dict()
# create an instance of V1RandomSearch from a dict
v1_random_search_form_dict = v1_random_search.from_dict(v1_random_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


