# V1Event


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**step** | **int** | Global step of the event. | [optional] 
**metric** | **float** |  | [optional] 
**image** | [**V1EventImage**](V1EventImage.md) |  | [optional] 
**histogram** | [**V1EventHistogram**](V1EventHistogram.md) |  | [optional] 
**audio** | [**V1EventAudio**](V1EventAudio.md) |  | [optional] 
**video** | [**V1EventVideo**](V1EventVideo.md) |  | [optional] 
**html** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**chart** | [**V1EventChart**](V1EventChart.md) |  | [optional] 
**model** | [**V1EventModel**](V1EventModel.md) |  | [optional] 
**artifact** | [**V1EventArtifact**](V1EventArtifact.md) |  | [optional] 
**dataframe** | [**V1EventDataframe**](V1EventDataframe.md) |  | [optional] 
**curve** | [**V1EventCurve**](V1EventCurve.md) |  | [optional] 
**confusion** | [**V1EventConfusionMatrix**](V1EventConfusionMatrix.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event import V1Event

# TODO update the JSON string below
json = "{}"
# create an instance of V1Event from a JSON string
v1_event_instance = V1Event.from_json(json)
# print the JSON string representation of the object
print V1Event.to_json()

# convert the object into a dict
v1_event_dict = v1_event_instance.to_dict()
# create an instance of V1Event from a dict
v1_event_form_dict = v1_event.from_dict(v1_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


