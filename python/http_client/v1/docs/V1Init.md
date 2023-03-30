# V1Init


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**V1ArtifactsType**](V1ArtifactsType.md) |  | [optional] 
**paths** | **List[object]** |  | [optional] 
**git** | [**V1GitType**](V1GitType.md) |  | [optional] 
**dockerfile** | [**V1DockerfileType**](V1DockerfileType.md) |  | [optional] 
**file** | [**V1FileType**](V1FileType.md) |  | [optional] 
**tensorboard** | [**V1TensorboardType**](V1TensorboardType.md) |  | [optional] 
**lineage_ref** | **str** |  | [optional] 
**artifact_ref** | **str** |  | [optional] 
**model_ref** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**container** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_init import V1Init

# TODO update the JSON string below
json = "{}"
# create an instance of V1Init from a JSON string
v1_init_instance = V1Init.from_json(json)
# print the JSON string representation of the object
print V1Init.to_json()

# convert the object into a dict
v1_init_dict = v1_init_instance.to_dict()
# create an instance of V1Init from a dict
v1_init_form_dict = v1_init.from_dict(v1_init_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


