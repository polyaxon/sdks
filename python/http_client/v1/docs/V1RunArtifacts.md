# V1RunArtifacts


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[V1RunArtifact]**](V1RunArtifact.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_artifacts import V1RunArtifacts

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunArtifacts from a JSON string
v1_run_artifacts_instance = V1RunArtifacts.from_json(json)
# print the JSON string representation of the object
print V1RunArtifacts.to_json()

# convert the object into a dict
v1_run_artifacts_dict = v1_run_artifacts_instance.to_dict()
# create an instance of V1RunArtifacts from a dict
v1_run_artifacts_form_dict = v1_run_artifacts.from_dict(v1_run_artifacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


