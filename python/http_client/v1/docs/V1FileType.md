# V1FileType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**filename** | **str** |  | [optional] 
**chmod** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_file_type import V1FileType

# TODO update the JSON string below
json = "{}"
# create an instance of V1FileType from a JSON string
v1_file_type_instance = V1FileType.from_json(json)
# print the JSON string representation of the object
print V1FileType.to_json()

# convert the object into a dict
v1_file_type_dict = v1_file_type_instance.to_dict()
# create an instance of V1FileType from a dict
v1_file_type_form_dict = v1_file_type.from_dict(v1_file_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


