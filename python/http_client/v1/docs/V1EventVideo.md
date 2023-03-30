# V1EventVideo


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Height of the video. | [optional] 
**width** | **int** | Width of the video. | [optional] 
**colorspace** | **int** |  | [optional] 
**path** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_video import V1EventVideo

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventVideo from a JSON string
v1_event_video_instance = V1EventVideo.from_json(json)
# print the JSON string representation of the object
print V1EventVideo.to_json()

# convert the object into a dict
v1_event_video_dict = v1_event_video_instance.to_dict()
# create an instance of V1EventVideo from a dict
v1_event_video_form_dict = v1_event_video.from_dict(v1_event_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


