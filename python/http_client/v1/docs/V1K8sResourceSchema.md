# V1K8sResourceSchema


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**mount_path** | **str** |  | [optional] 
**items** | **List[str]** |  | [optional] 
**default_mode** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_k8s_resource_schema import V1K8sResourceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of V1K8sResourceSchema from a JSON string
v1_k8s_resource_schema_instance = V1K8sResourceSchema.from_json(json)
# print the JSON string representation of the object
print V1K8sResourceSchema.to_json()

# convert the object into a dict
v1_k8s_resource_schema_dict = v1_k8s_resource_schema_instance.to_dict()
# create an instance of V1K8sResourceSchema from a dict
v1_k8s_resource_schema_form_dict = v1_k8s_resource_schema.from_dict(v1_k8s_resource_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


