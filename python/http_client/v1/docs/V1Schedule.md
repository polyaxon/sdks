# V1Schedule


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | [**V1CronSchedule**](V1CronSchedule.md) |  | [optional] 
**datetime** | [**V1DateTimeSchedule**](V1DateTimeSchedule.md) |  | [optional] 
**interval** | [**V1IntervalSchedule**](V1IntervalSchedule.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_schedule import V1Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of V1Schedule from a JSON string
v1_schedule_instance = V1Schedule.from_json(json)
# print the JSON string representation of the object
print V1Schedule.to_json()

# convert the object into a dict
v1_schedule_dict = v1_schedule_instance.to_dict()
# create an instance of V1Schedule from a dict
v1_schedule_form_dict = v1_schedule.from_dict(v1_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


