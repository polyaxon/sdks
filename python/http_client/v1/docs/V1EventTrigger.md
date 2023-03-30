# V1EventTrigger


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kinds** | [**List[V1EventKind]**](V1EventKind.md) |  | [optional] 
**ref** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_trigger import V1EventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventTrigger from a JSON string
v1_event_trigger_instance = V1EventTrigger.from_json(json)
# print the JSON string representation of the object
print V1EventTrigger.to_json()

# convert the object into a dict
v1_event_trigger_dict = v1_event_trigger_instance.to_dict()
# create an instance of V1EventTrigger from a dict
v1_event_trigger_form_dict = v1_event_trigger.from_dict(v1_event_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


