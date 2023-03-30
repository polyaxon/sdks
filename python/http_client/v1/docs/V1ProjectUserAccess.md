# V1ProjectUserAccess


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**queue** | **str** |  | [optional] 
**preset** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_project_user_access import V1ProjectUserAccess

# TODO update the JSON string below
json = "{}"
# create an instance of V1ProjectUserAccess from a JSON string
v1_project_user_access_instance = V1ProjectUserAccess.from_json(json)
# print the JSON string representation of the object
print V1ProjectUserAccess.to_json()

# convert the object into a dict
v1_project_user_access_dict = v1_project_user_access_instance.to_dict()
# create an instance of V1ProjectUserAccess from a dict
v1_project_user_access_form_dict = v1_project_user_access.from_dict(v1_project_user_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


