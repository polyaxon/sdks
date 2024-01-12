# V1Build


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hub_ref** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**presets** | **List[str]** |  | [optional] 
**queue** | **str** |  | [optional] 
**namespace** | **str** |  | [optional] 
**cache** | [**V1Cache**](V1Cache.md) |  | [optional] 
**params** | [**Dict[str, V1Param]**](V1Param.md) |  | [optional] 
**run_patch** | **object** |  | [optional] 
**patch_strategy** | [**V1PatchStrategy**](V1PatchStrategy.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_build import V1Build

# TODO update the JSON string below
json = "{}"
# create an instance of V1Build from a JSON string
v1_build_instance = V1Build.from_json(json)
# print the JSON string representation of the object
print V1Build.to_json()

# convert the object into a dict
v1_build_dict = v1_build_instance.to_dict()
# create an instance of V1Build from a dict
v1_build_form_dict = v1_build.from_dict(v1_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


