# V1RunArtifact


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**kind** | [**V1ArtifactKind**](V1ArtifactKind.md) |  | [optional] 
**path** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**run** | **str** |  | [optional] 
**summary** | **object** |  | [optional] 
**is_input** | **bool** |  | [optional] 
**meta_info** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_artifact import V1RunArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunArtifact from a JSON string
v1_run_artifact_instance = V1RunArtifact.from_json(json)
# print the JSON string representation of the object
print V1RunArtifact.to_json()

# convert the object into a dict
v1_run_artifact_dict = v1_run_artifact_instance.to_dict()
# create an instance of V1RunArtifact from a dict
v1_run_artifact_form_dict = v1_run_artifact.from_dict(v1_run_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


