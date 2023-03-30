# V1ConnectionType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **str** |  | [optional] 
**kind** | [**V1ConnectionKind**](V1ConnectionKind.md) |  | [optional] 
**var_schema** | **object** |  | [optional] 
**secret** | [**V1K8sResourceSchema**](V1K8sResourceSchema.md) |  | [optional] 
**config_map** | [**V1K8sResourceSchema**](V1K8sResourceSchema.md) |  | [optional] 
**env** | **List[object]** |  | [optional] 
**annotations** | **Dict[str, str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_connection_type import V1ConnectionType

# TODO update the JSON string below
json = "{}"
# create an instance of V1ConnectionType from a JSON string
v1_connection_type_instance = V1ConnectionType.from_json(json)
# print the JSON string representation of the object
print V1ConnectionType.to_json()

# convert the object into a dict
v1_connection_type_dict = v1_connection_type_instance.to_dict()
# create an instance of V1ConnectionType from a dict
v1_connection_type_form_dict = v1_connection_type.from_dict(v1_connection_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


