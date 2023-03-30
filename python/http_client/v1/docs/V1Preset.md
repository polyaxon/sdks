# V1Preset


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**frozen** | **bool** |  | [optional] 
**live_state** | **int** |  | [optional] 
**content** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_preset import V1Preset

# TODO update the JSON string below
json = "{}"
# create an instance of V1Preset from a JSON string
v1_preset_instance = V1Preset.from_json(json)
# print the JSON string representation of the object
print V1Preset.to_json()

# convert the object into a dict
v1_preset_dict = v1_preset_instance.to_dict()
# create an instance of V1Preset from a dict
v1_preset_form_dict = v1_preset.from_dict(v1_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


