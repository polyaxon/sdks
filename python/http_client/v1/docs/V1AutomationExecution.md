# V1AutomationExecution


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**automation** | **str** |  | [optional] 
**kind** | [**V1AutomationExecutionKind**](V1AutomationExecutionKind.md) |  | [optional] 
**status** | [**AutomationExecutionAutomationExecutionStatus**](AutomationExecutionAutomationExecutionStatus.md) |  | [optional] 
**triggering_event** | [**V1Activity**](V1Activity.md) |  | [optional] 
**bucketing_key** | **str** |  | [optional] 
**target_kind** | **str** |  | [optional] 
**target_uuid** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**finished_at** | **datetime** |  | [optional] 
**wait_time** | **float** |  | [optional] 
**duration** | **float** |  | [optional] 
**action_result** | **object** |  | [optional] 
**retry_count** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_automation_execution import V1AutomationExecution

# TODO update the JSON string below
json = "{}"
# create an instance of V1AutomationExecution from a JSON string
v1_automation_execution_instance = V1AutomationExecution.from_json(json)
# print the JSON string representation of the object
print V1AutomationExecution.to_json()

# convert the object into a dict
v1_automation_execution_dict = v1_automation_execution_instance.to_dict()
# create an instance of V1AutomationExecution from a dict
v1_automation_execution_form_dict = v1_automation_execution.from_dict(v1_automation_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


