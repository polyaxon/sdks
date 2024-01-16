# V1SchedulingPolicy


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_available** | **int** |  | [optional] 
**queue** | **str** |  | [optional] 
**min_resources** | **object** |  | [optional] 
**priority_class** | **str** |  | [optional] 
**schedule_timeout_seconds** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_scheduling_policy import V1SchedulingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of V1SchedulingPolicy from a JSON string
v1_scheduling_policy_instance = V1SchedulingPolicy.from_json(json)
# print the JSON string representation of the object
print V1SchedulingPolicy.to_json()

# convert the object into a dict
v1_scheduling_policy_dict = v1_scheduling_policy_instance.to_dict()
# create an instance of V1SchedulingPolicy from a dict
v1_scheduling_policy_form_dict = v1_scheduling_policy.from_dict(v1_scheduling_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


