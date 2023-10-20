# V1StatusCondition


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**status** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**last_update_time** | **datetime** |  | [optional] 
**last_transition_time** | **datetime** |  | [optional] 
**meta_info** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_status_condition import V1StatusCondition

# TODO update the JSON string below
json = "{}"
# create an instance of V1StatusCondition from a JSON string
v1_status_condition_instance = V1StatusCondition.from_json(json)
# print the JSON string representation of the object
print V1StatusCondition.to_json()

# convert the object into a dict
v1_status_condition_dict = v1_status_condition_instance.to_dict()
# create an instance of V1StatusCondition from a dict
v1_status_condition_form_dict = v1_status_condition.from_dict(v1_status_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


