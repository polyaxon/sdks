# V1TensorboardType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** |  | [optional] 
**uuids** | **List[str]** |  | [optional] 
**use_names** | **bool** |  | [optional] 
**path_prefix** | **str** |  | [optional] 
**plugins** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_tensorboard_type import V1TensorboardType

# TODO update the JSON string below
json = "{}"
# create an instance of V1TensorboardType from a JSON string
v1_tensorboard_type_instance = V1TensorboardType.from_json(json)
# print the JSON string representation of the object
print V1TensorboardType.to_json()

# convert the object into a dict
v1_tensorboard_type_dict = v1_tensorboard_type_instance.to_dict()
# create an instance of V1TensorboardType from a dict
v1_tensorboard_type_form_dict = v1_tensorboard_type.from_dict(v1_tensorboard_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


