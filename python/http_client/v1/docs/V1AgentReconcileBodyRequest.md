# V1AgentReconcileBodyRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 
**reconcile** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_agent_reconcile_body_request import V1AgentReconcileBodyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1AgentReconcileBodyRequest from a JSON string
v1_agent_reconcile_body_request_instance = V1AgentReconcileBodyRequest.from_json(json)
# print the JSON string representation of the object
print V1AgentReconcileBodyRequest.to_json()

# convert the object into a dict
v1_agent_reconcile_body_request_dict = v1_agent_reconcile_body_request_instance.to_dict()
# create an instance of V1AgentReconcileBodyRequest from a dict
v1_agent_reconcile_body_request_form_dict = v1_agent_reconcile_body_request.from_dict(v1_agent_reconcile_body_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


