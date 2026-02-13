# V1AutomationAction


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 
**priority** | **int** |  | [optional] 
**action** | [**V1AutomationActionKind**](V1AutomationActionKind.md) |  | [optional] 
**apply_to** | **str** |  | [optional] 
**entity_uuid** | **str** |  | [optional] 
**config** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_automation_action import V1AutomationAction

# TODO update the JSON string below
json = "{}"
# create an instance of V1AutomationAction from a JSON string
v1_automation_action_instance = V1AutomationAction.from_json(json)
# print the JSON string representation of the object
print V1AutomationAction.to_json()

# convert the object into a dict
v1_automation_action_dict = v1_automation_action_instance.to_dict()
# create an instance of V1AutomationAction from a dict
v1_automation_action_form_dict = v1_automation_action.from_dict(v1_automation_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


