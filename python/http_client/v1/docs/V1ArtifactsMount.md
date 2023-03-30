# V1ArtifactsMount


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**paths** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_artifacts_mount import V1ArtifactsMount

# TODO update the JSON string below
json = "{}"
# create an instance of V1ArtifactsMount from a JSON string
v1_artifacts_mount_instance = V1ArtifactsMount.from_json(json)
# print the JSON string representation of the object
print V1ArtifactsMount.to_json()

# convert the object into a dict
v1_artifacts_mount_dict = v1_artifacts_mount_instance.to_dict()
# create an instance of V1ArtifactsMount from a dict
v1_artifacts_mount_form_dict = v1_artifacts_mount.from_dict(v1_artifacts_mount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


