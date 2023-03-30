# V1ListPresetsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1Preset]**](V1Preset.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_presets_response import V1ListPresetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListPresetsResponse from a JSON string
v1_list_presets_response_instance = V1ListPresetsResponse.from_json(json)
# print the JSON string representation of the object
print V1ListPresetsResponse.to_json()

# convert the object into a dict
v1_list_presets_response_dict = v1_list_presets_response_instance.to_dict()
# create an instance of V1ListPresetsResponse from a dict
v1_list_presets_response_form_dict = v1_list_presets_response.from_dict(v1_list_presets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


