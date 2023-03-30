# V1IntervalSchedule


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'interval']
**start_at** | **datetime** |  | [optional] 
**end_at** | **datetime** |  | [optional] 
**max_runs** | **int** |  | [optional] 
**frequency** | **int** |  | [optional] 
**depends_on_past** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_interval_schedule import V1IntervalSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of V1IntervalSchedule from a JSON string
v1_interval_schedule_instance = V1IntervalSchedule.from_json(json)
# print the JSON string representation of the object
print V1IntervalSchedule.to_json()

# convert the object into a dict
v1_interval_schedule_dict = v1_interval_schedule_instance.to_dict()
# create an instance of V1IntervalSchedule from a dict
v1_interval_schedule_form_dict = v1_interval_schedule.from_dict(v1_interval_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


