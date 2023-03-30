# V1K8sResourceType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**var_schema** | [**V1K8sResourceSchema**](V1K8sResourceSchema.md) |  | [optional] 
**is_requested** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_k8s_resource_type import V1K8sResourceType

# TODO update the JSON string below
json = "{}"
# create an instance of V1K8sResourceType from a JSON string
v1_k8s_resource_type_instance = V1K8sResourceType.from_json(json)
# print the JSON string representation of the object
print V1K8sResourceType.to_json()

# convert the object into a dict
v1_k8s_resource_type_dict = v1_k8s_resource_type_instance.to_dict()
# create an instance of V1K8sResourceType from a dict
v1_k8s_resource_type_form_dict = v1_k8s_resource_type.from_dict(v1_k8s_resource_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


