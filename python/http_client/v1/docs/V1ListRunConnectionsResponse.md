# V1ListRunConnectionsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1RunConnection]**](V1RunConnection.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_run_connections_response import V1ListRunConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListRunConnectionsResponse from a JSON string
v1_list_run_connections_response_instance = V1ListRunConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print V1ListRunConnectionsResponse.to_json()

# convert the object into a dict
v1_list_run_connections_response_dict = v1_list_run_connections_response_instance.to_dict()
# create an instance of V1ListRunConnectionsResponse from a dict
v1_list_run_connections_response_form_dict = v1_list_run_connections_response.from_dict(v1_list_run_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


