# V1UriType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**host** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_uri_type import V1UriType

# TODO update the JSON string below
json = "{}"
# create an instance of V1UriType from a JSON string
v1_uri_type_instance = V1UriType.from_json(json)
# print the JSON string representation of the object
print V1UriType.to_json()

# convert the object into a dict
v1_uri_type_dict = v1_uri_type_instance.to_dict()
# create an instance of V1UriType from a dict
v1_uri_type_form_dict = v1_uri_type.from_dict(v1_uri_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


