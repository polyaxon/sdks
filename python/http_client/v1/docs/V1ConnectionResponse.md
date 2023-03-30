# V1ConnectionResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**live_state** | **int** |  | [optional] 
**kind** | [**V1ConnectionKind**](V1ConnectionKind.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_connection_response import V1ConnectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ConnectionResponse from a JSON string
v1_connection_response_instance = V1ConnectionResponse.from_json(json)
# print the JSON string representation of the object
print V1ConnectionResponse.to_json()

# convert the object into a dict
v1_connection_response_dict = v1_connection_response_instance.to_dict()
# create an instance of V1ConnectionResponse from a dict
v1_connection_response_form_dict = v1_connection_response.from_dict(v1_connection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


