# V1UserAccess


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**user_data** | [**V1UserAccessData**](V1UserAccessData.md) |  | [optional] 
**queue** | **str** |  | [optional] 
**default_presets** | **List[str]** |  | [optional] 
**default_presets_ordered** | **List[str]** |  | [optional] 
**namespace** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_user_access import V1UserAccess

# TODO update the JSON string below
json = "{}"
# create an instance of V1UserAccess from a JSON string
v1_user_access_instance = V1UserAccess.from_json(json)
# print the JSON string representation of the object
print V1UserAccess.to_json()

# convert the object into a dict
v1_user_access_dict = v1_user_access_instance.to_dict()
# create an instance of V1UserAccess from a dict
v1_user_access_form_dict = v1_user_access.from_dict(v1_user_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


