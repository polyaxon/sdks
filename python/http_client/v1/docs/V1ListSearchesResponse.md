# V1ListSearchesResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1Search]**](V1Search.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_searches_response import V1ListSearchesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListSearchesResponse from a JSON string
v1_list_searches_response_instance = V1ListSearchesResponse.from_json(json)
# print the JSON string representation of the object
print V1ListSearchesResponse.to_json()

# convert the object into a dict
v1_list_searches_response_dict = v1_list_searches_response_instance.to_dict()
# create an instance of V1ListSearchesResponse from a dict
v1_list_searches_response_form_dict = v1_list_searches_response.from_dict(v1_list_searches_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


