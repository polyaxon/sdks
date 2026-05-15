# V1PingResponse

Response body for GET /ping.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**uptime_ms** | **int** |  | [optional] 
**last_activity** | **datetime** |  | [optional] 
**execs_running** | **int** |  | [optional] 
**ptys_running** | **int** |  | [optional] 
**ptys_attached** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_ping_response import V1PingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1PingResponse from a JSON string
v1_ping_response_instance = V1PingResponse.from_json(json)
# print the JSON string representation of the object
print V1PingResponse.to_json()

# convert the object into a dict
v1_ping_response_dict = v1_ping_response_instance.to_dict()
# create an instance of V1PingResponse from a dict
v1_ping_response_form_dict = v1_ping_response.from_dict(v1_ping_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


