# V1Hook


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hub_ref** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**trigger** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**conditions** | **str** |  | [optional] 
**params** | [**Dict[str, V1Param]**](V1Param.md) |  | [optional] 
**queue** | **str** |  | [optional] 
**presets** | **List[str]** |  | [optional] 
**disable_defaults** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hook import V1Hook

# TODO update the JSON string below
json = "{}"
# create an instance of V1Hook from a JSON string
v1_hook_instance = V1Hook.from_json(json)
# print the JSON string representation of the object
print V1Hook.to_json()

# convert the object into a dict
v1_hook_dict = v1_hook_instance.to_dict()
# create an instance of V1Hook from a dict
v1_hook_form_dict = v1_hook.from_dict(v1_hook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


