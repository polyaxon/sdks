# V1SettingsCatalog


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_settings_catalog import V1SettingsCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of V1SettingsCatalog from a JSON string
v1_settings_catalog_instance = V1SettingsCatalog.from_json(json)
# print the JSON string representation of the object
print V1SettingsCatalog.to_json()

# convert the object into a dict
v1_settings_catalog_dict = v1_settings_catalog_instance.to_dict()
# create an instance of V1SettingsCatalog from a dict
v1_settings_catalog_form_dict = v1_settings_catalog.from_dict(v1_settings_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


