# V1Search


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**user** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**live_state** | **int** |  | [optional] 
**view** | [**SearchView**](SearchView.md) |  | [optional] 
**spec** | [**V1SearchSpec**](V1SearchSpec.md) |  | [optional] 
**org_level** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_search import V1Search

# TODO update the JSON string below
json = "{}"
# create an instance of V1Search from a JSON string
v1_search_instance = V1Search.from_json(json)
# print the JSON string representation of the object
print V1Search.to_json()

# convert the object into a dict
v1_search_dict = v1_search_instance.to_dict()
# create an instance of V1Search from a dict
v1_search_form_dict = v1_search.from_dict(v1_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


