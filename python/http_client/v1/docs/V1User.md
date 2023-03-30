# V1User


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 
**theme** | **int** |  | [optional] 
**organization** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_user import V1User

# TODO update the JSON string below
json = "{}"
# create an instance of V1User from a JSON string
v1_user_instance = V1User.from_json(json)
# print the JSON string representation of the object
print V1User.to_json()

# convert the object into a dict
v1_user_dict = v1_user_instance.to_dict()
# create an instance of V1User from a dict
v1_user_form_dict = v1_user.from_dict(v1_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


