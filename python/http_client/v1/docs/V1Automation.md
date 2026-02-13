# V1Automation


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**live_state** | **int** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**trigger_kind** | [**AutomationTriggerKind**](AutomationTriggerKind.md) |  | [optional] 
**posture** | [**AutomationTriggerPosture**](AutomationTriggerPosture.md) |  | [optional] 
**trigger_on** | **str** |  | [optional] 
**trigger_entity_uuid** | **str** |  | [optional] 
**trigger_config** | **object** |  | [optional] 
**trigger_schedule** | **object** |  | [optional] 
**actions** | [**List[V1AutomationAction]**](V1AutomationAction.md) |  | [optional] 
**fail_strategy** | [**AutomationFailStrategy**](AutomationFailStrategy.md) |  | [optional] 
**org_level** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_automation import V1Automation

# TODO update the JSON string below
json = "{}"
# create an instance of V1Automation from a JSON string
v1_automation_instance = V1Automation.from_json(json)
# print the JSON string representation of the object
print V1Automation.to_json()

# convert the object into a dict
v1_automation_dict = v1_automation_instance.to_dict()
# create an instance of V1Automation from a dict
v1_automation_form_dict = v1_automation.from_dict(v1_automation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


