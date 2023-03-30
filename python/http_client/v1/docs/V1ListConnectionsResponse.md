# V1ListConnectionsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1ConnectionResponse]**](V1ConnectionResponse.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_connections_response import V1ListConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListConnectionsResponse from a JSON string
v1_list_connections_response_instance = V1ListConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print V1ListConnectionsResponse.to_json()

# convert the object into a dict
v1_list_connections_response_dict = v1_list_connections_response_instance.to_dict()
# create an instance of V1ListConnectionsResponse from a dict
v1_list_connections_response_form_dict = v1_list_connections_response.from_dict(v1_list_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


