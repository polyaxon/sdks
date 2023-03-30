# V1WasbType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** |  | [optional] 
**storage_account** | **str** |  | [optional] 
**path** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_wasb_type import V1WasbType

# TODO update the JSON string below
json = "{}"
# create an instance of V1WasbType from a JSON string
v1_wasb_type_instance = V1WasbType.from_json(json)
# print the JSON string representation of the object
print V1WasbType.to_json()

# convert the object into a dict
v1_wasb_type_dict = v1_wasb_type_instance.to_dict()
# create an instance of V1WasbType from a dict
v1_wasb_type_form_dict = v1_wasb_type.from_dict(v1_wasb_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


