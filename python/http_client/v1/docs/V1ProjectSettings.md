# V1ProjectSettings


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | **List[str]** |  | [optional] 
**preset** | **str** |  | [optional] 
**presets** | **List[str]** |  | [optional] 
**queue** | **str** |  | [optional] 
**queues** | **List[str]** |  | [optional] 
**agents** | **List[str]** |  | [optional] 
**namespaces** | **List[str]** |  | [optional] 
**user_accesses** | [**List[V1ProjectUserAccess]**](V1ProjectUserAccess.md) |  | [optional] 
**teams** | **List[str]** |  | [optional] 
**projects** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_project_settings import V1ProjectSettings

# TODO update the JSON string below
json = "{}"
# create an instance of V1ProjectSettings from a JSON string
v1_project_settings_instance = V1ProjectSettings.from_json(json)
# print the JSON string representation of the object
print V1ProjectSettings.to_json()

# convert the object into a dict
v1_project_settings_dict = v1_project_settings_instance.to_dict()
# create an instance of V1ProjectSettings from a dict
v1_project_settings_form_dict = v1_project_settings.from_dict(v1_project_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


