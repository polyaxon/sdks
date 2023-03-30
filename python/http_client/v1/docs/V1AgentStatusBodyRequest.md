# V1AgentStatusBodyRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 
**condition** | [**V1StatusCondition**](V1StatusCondition.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_agent_status_body_request import V1AgentStatusBodyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1AgentStatusBodyRequest from a JSON string
v1_agent_status_body_request_instance = V1AgentStatusBodyRequest.from_json(json)
# print the JSON string representation of the object
print V1AgentStatusBodyRequest.to_json()

# convert the object into a dict
v1_agent_status_body_request_dict = v1_agent_status_body_request_instance.to_dict()
# create an instance of V1AgentStatusBodyRequest from a dict
v1_agent_status_body_request_form_dict = v1_agent_status_body_request.from_dict(v1_agent_status_body_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


