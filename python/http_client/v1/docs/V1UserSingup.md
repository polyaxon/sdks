# V1UserSingup


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**organization** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**invitation_key** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_user_singup import V1UserSingup

# TODO update the JSON string below
json = "{}"
# create an instance of V1UserSingup from a JSON string
v1_user_singup_instance = V1UserSingup.from_json(json)
# print the JSON string representation of the object
print V1UserSingup.to_json()

# convert the object into a dict
v1_user_singup_dict = v1_user_singup_instance.to_dict()
# create an instance of V1UserSingup from a dict
v1_user_singup_form_dict = v1_user_singup.from_dict(v1_user_singup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


