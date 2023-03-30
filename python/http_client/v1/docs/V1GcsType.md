# V1GcsType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** |  | [optional] 
**blob** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_gcs_type import V1GcsType

# TODO update the JSON string below
json = "{}"
# create an instance of V1GcsType from a JSON string
v1_gcs_type_instance = V1GcsType.from_json(json)
# print the JSON string representation of the object
print V1GcsType.to_json()

# convert the object into a dict
v1_gcs_type_dict = v1_gcs_type_instance.to_dict()
# create an instance of V1GcsType from a dict
v1_gcs_type_form_dict = v1_gcs_type.from_dict(v1_gcs_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


