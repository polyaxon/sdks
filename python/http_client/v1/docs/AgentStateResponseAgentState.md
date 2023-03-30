# AgentStateResponseAgentState


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedules** | **object** |  | [optional] 
**hooks** | **object** |  | [optional] 
**watchdogs** | **object** |  | [optional] 
**tuners** | **object** |  | [optional] 
**queued** | **object** |  | [optional] 
**stopping** | **object** |  | [optional] 
**deleting** | **object** |  | [optional] 
**apply** | **object** |  | [optional] 
**checks** | **object** |  | [optional] 
**full** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.agent_state_response_agent_state import AgentStateResponseAgentState

# TODO update the JSON string below
json = "{}"
# create an instance of AgentStateResponseAgentState from a JSON string
agent_state_response_agent_state_instance = AgentStateResponseAgentState.from_json(json)
# print the JSON string representation of the object
print AgentStateResponseAgentState.to_json()

# convert the object into a dict
agent_state_response_agent_state_dict = agent_state_response_agent_state_instance.to_dict()
# create an instance of AgentStateResponseAgentState from a dict
agent_state_response_agent_state_form_dict = agent_state_response_agent_state.from_dict(agent_state_response_agent_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


