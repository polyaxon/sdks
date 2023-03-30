# V1S3Type


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** |  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_s3_type import V1S3Type

# TODO update the JSON string below
json = "{}"
# create an instance of V1S3Type from a JSON string
v1_s3_type_instance = V1S3Type.from_json(json)
# print the JSON string representation of the object
print V1S3Type.to_json()

# convert the object into a dict
v1_s3_type_dict = v1_s3_type_instance.to_dict()
# create an instance of V1S3Type from a dict
v1_s3_type_form_dict = v1_s3_type.from_dict(v1_s3_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


