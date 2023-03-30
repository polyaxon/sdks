# V1RunSettings


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** |  | [optional] 
**agent** | [**V1SettingsCatalog**](V1SettingsCatalog.md) |  | [optional] 
**queue** | [**V1SettingsCatalog**](V1SettingsCatalog.md) |  | [optional] 
**artifacts_store** | [**V1SettingsCatalog**](V1SettingsCatalog.md) |  | [optional] 
**tensorboard** | **object** |  | [optional] 
**build** | **object** |  | [optional] 
**component** | **object** |  | [optional] 
**models** | [**List[V1RunReferenceCatalog]**](V1RunReferenceCatalog.md) |  | [optional] 
**artifacts** | [**List[V1RunReferenceCatalog]**](V1RunReferenceCatalog.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_settings import V1RunSettings

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunSettings from a JSON string
v1_run_settings_instance = V1RunSettings.from_json(json)
# print the JSON string representation of the object
print V1RunSettings.to_json()

# convert the object into a dict
v1_run_settings_dict = v1_run_settings_instance.to_dict()
# create an instance of V1RunSettings from a dict
v1_run_settings_form_dict = v1_run_settings.from_dict(v1_run_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


