# V1AgentStateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**state** | [**AgentStateResponseAgentState**](AgentStateResponseAgentState.md) |  | [optional] 
**live_state** | **int** |  | [optional] 
**compatible_updates** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_agent_state_response import V1AgentStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1AgentStateResponse from a JSON string
v1_agent_state_response_instance = V1AgentStateResponse.from_json(json)
# print the JSON string representation of the object
print V1AgentStateResponse.to_json()

# convert the object into a dict
v1_agent_state_response_dict = v1_agent_state_response_instance.to_dict()
# create an instance of V1AgentStateResponse from a dict
v1_agent_state_response_form_dict = v1_agent_state_response.from_dict(v1_agent_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


