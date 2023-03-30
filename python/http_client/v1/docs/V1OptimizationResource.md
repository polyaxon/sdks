# V1OptimizationResource


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | [**V1ResourceType**](V1ResourceType.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_optimization_resource import V1OptimizationResource

# TODO update the JSON string below
json = "{}"
# create an instance of V1OptimizationResource from a JSON string
v1_optimization_resource_instance = V1OptimizationResource.from_json(json)
# print the JSON string representation of the object
print V1OptimizationResource.to_json()

# convert the object into a dict
v1_optimization_resource_dict = v1_optimization_resource_instance.to_dict()
# create an instance of V1OptimizationResource from a dict
v1_optimization_resource_form_dict = v1_optimization_resource.from_dict(v1_optimization_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


