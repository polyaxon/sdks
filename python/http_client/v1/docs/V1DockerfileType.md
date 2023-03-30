# V1DockerfileType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** |  | [optional] 
**env** | **Dict[str, str]** |  | [optional] 
**path** | **List[str]** |  | [optional] 
**copy** | **List[object]** |  | [optional] 
**post_run_copy** | **List[object]** |  | [optional] 
**run** | **List[str]** |  | [optional] 
**lang_env** | **str** |  | [optional] 
**uid** | **int** |  | [optional] 
**gid** | **int** |  | [optional] 
**username** | **int** |  | [optional] 
**filename** | **str** |  | [optional] 
**workdir** | **str** |  | [optional] 
**workdir_path** | **str** |  | [optional] 
**shell** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dockerfile_type import V1DockerfileType

# TODO update the JSON string below
json = "{}"
# create an instance of V1DockerfileType from a JSON string
v1_dockerfile_type_instance = V1DockerfileType.from_json(json)
# print the JSON string representation of the object
print V1DockerfileType.to_json()

# convert the object into a dict
v1_dockerfile_type_dict = v1_dockerfile_type_instance.to_dict()
# create an instance of V1DockerfileType from a dict
v1_dockerfile_type_form_dict = v1_dockerfile_type.from_dict(v1_dockerfile_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


