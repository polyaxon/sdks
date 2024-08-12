# V1UserAccessData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | [optional] 
**is_sa** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_user_access_data import V1UserAccessData

# TODO update the JSON string below
json = "{}"
# create an instance of V1UserAccessData from a JSON string
v1_user_access_data_instance = V1UserAccessData.from_json(json)
# print the JSON string representation of the object
print V1UserAccessData.to_json()

# convert the object into a dict
v1_user_access_data_dict = v1_user_access_data_instance.to_dict()
# create an instance of V1UserAccessData from a dict
v1_user_access_data_form_dict = v1_user_access_data.from_dict(v1_user_access_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


