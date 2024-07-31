# V1PresetSettings


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projects** | [**List[V1SettingsCatalog]**](V1SettingsCatalog.md) |  | [optional] 
**runs** | [**List[V1SettingsCatalog]**](V1SettingsCatalog.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_preset_settings import V1PresetSettings

# TODO update the JSON string below
json = "{}"
# create an instance of V1PresetSettings from a JSON string
v1_preset_settings_instance = V1PresetSettings.from_json(json)
# print the JSON string representation of the object
print V1PresetSettings.to_json()

# convert the object into a dict
v1_preset_settings_dict = v1_preset_settings_instance.to_dict()
# create an instance of V1PresetSettings from a dict
v1_preset_settings_form_dict = v1_preset_settings.from_dict(v1_preset_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


