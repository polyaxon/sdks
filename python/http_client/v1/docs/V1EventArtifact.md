# V1EventArtifact


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**V1ArtifactKind**](V1ArtifactKind.md) |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_artifact import V1EventArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventArtifact from a JSON string
v1_event_artifact_instance = V1EventArtifact.from_json(json)
# print the JSON string representation of the object
print V1EventArtifact.to_json()

# convert the object into a dict
v1_event_artifact_dict = v1_event_artifact_instance.to_dict()
# create an instance of V1EventArtifact from a dict
v1_event_artifact_form_dict = v1_event_artifact.from_dict(v1_event_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


