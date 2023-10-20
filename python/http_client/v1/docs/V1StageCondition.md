# V1StageCondition


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**V1Stages**](V1Stages.md) |  | [optional] 
**status** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**last_update_time** | **datetime** |  | [optional] 
**last_transition_time** | **datetime** |  | [optional] 
**meta_info** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_stage_condition import V1StageCondition

# TODO update the JSON string below
json = "{}"
# create an instance of V1StageCondition from a JSON string
v1_stage_condition_instance = V1StageCondition.from_json(json)
# print the JSON string representation of the object
print V1StageCondition.to_json()

# convert the object into a dict
v1_stage_condition_dict = v1_stage_condition_instance.to_dict()
# create an instance of V1StageCondition from a dict
v1_stage_condition_form_dict = v1_stage_condition.from_dict(v1_stage_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


