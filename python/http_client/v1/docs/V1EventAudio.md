# V1EventAudio


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sample_rate** | **float** | Sample rate of the audio in Hz. | [optional] 
**num_channels** | **int** | Number of channels of audio. | [optional] 
**length_frames** | **int** | Length of the audio in frames (samples per channel). | [optional] 
**content_type** | **str** |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_audio import V1EventAudio

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventAudio from a JSON string
v1_event_audio_instance = V1EventAudio.from_json(json)
# print the JSON string representation of the object
print V1EventAudio.to_json()

# convert the object into a dict
v1_event_audio_dict = v1_event_audio_instance.to_dict()
# create an instance of V1EventAudio from a dict
v1_event_audio_form_dict = v1_event_audio.from_dict(v1_event_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


