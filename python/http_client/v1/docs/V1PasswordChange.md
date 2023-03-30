# V1PasswordChange


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_password** | **str** |  | [optional] 
**new_password1** | **str** |  | [optional] 
**new_password2** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_password_change import V1PasswordChange

# TODO update the JSON string below
json = "{}"
# create an instance of V1PasswordChange from a JSON string
v1_password_change_instance = V1PasswordChange.from_json(json)
# print the JSON string representation of the object
print V1PasswordChange.to_json()

# convert the object into a dict
v1_password_change_dict = v1_password_change_instance.to_dict()
# create an instance of V1PasswordChange from a dict
v1_password_change_form_dict = v1_password_change.from_dict(v1_password_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


