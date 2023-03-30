# V1ArtifactTree


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **Dict[str, str]** |  | [optional] 
**dirs** | **List[str]** |  | [optional] 
**is_done** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_artifact_tree import V1ArtifactTree

# TODO update the JSON string below
json = "{}"
# create an instance of V1ArtifactTree from a JSON string
v1_artifact_tree_instance = V1ArtifactTree.from_json(json)
# print the JSON string representation of the object
print V1ArtifactTree.to_json()

# convert the object into a dict
v1_artifact_tree_dict = v1_artifact_tree_instance.to_dict()
# create an instance of V1ArtifactTree from a dict
v1_artifact_tree_form_dict = v1_artifact_tree.from_dict(v1_artifact_tree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


