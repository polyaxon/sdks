# V1AuthType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**password** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_auth_type import V1AuthType

# TODO update the JSON string below
json = "{}"
# create an instance of V1AuthType from a JSON string
v1_auth_type_instance = V1AuthType.from_json(json)
# print the JSON string representation of the object
print V1AuthType.to_json()

# convert the object into a dict
v1_auth_type_dict = v1_auth_type_instance.to_dict()
# create an instance of V1AuthType from a dict
v1_auth_type_form_dict = v1_auth_type.from_dict(v1_auth_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


