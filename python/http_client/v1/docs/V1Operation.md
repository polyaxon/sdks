# V1Operation


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **float** |  | [optional] 
**kind** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**presets** | **List[str]** |  | [optional] 
**queue** | **str** |  | [optional] 
**cache** | [**V1Cache**](V1Cache.md) |  | [optional] 
**termination** | [**V1Termination**](V1Termination.md) |  | [optional] 
**plugins** | [**V1Plugins**](V1Plugins.md) |  | [optional] 
**schedule** | **object** |  | [optional] 
**events** | [**List[V1EventTrigger]**](V1EventTrigger.md) |  | [optional] 
**hooks** | [**List[V1Hook]**](V1Hook.md) |  | [optional] 
**dependencies** | **List[str]** |  | [optional] 
**trigger** | [**V1TriggerPolicy**](V1TriggerPolicy.md) |  | [optional] 
**conditions** | **str** |  | [optional] 
**skip_on_upstream_skip** | **bool** |  | [optional] 
**matrix** | **object** |  | [optional] 
**joins** | [**Dict[str, V1Join]**](V1Join.md) |  | [optional] 
**params** | [**Dict[str, V1Param]**](V1Param.md) |  | [optional] 
**run_patch** | **object** |  | [optional] 
**patch_strategy** | [**V1PatchStrategy**](V1PatchStrategy.md) |  | [optional] 
**is_preset** | **bool** |  | [optional] 
**is_approved** | **bool** |  | [optional] 
**template** | [**V1Template**](V1Template.md) |  | [optional] 
**build** | [**V1Build**](V1Build.md) |  | [optional] 
**cost** | **float** |  | [optional] 
**path_ref** | **str** |  | [optional] 
**hub_ref** | **str** |  | [optional] 
**dag_ref** | **str** |  | [optional] 
**url_ref** | **str** |  | [optional] 
**component** | [**V1Component**](V1Component.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_operation import V1Operation

# TODO update the JSON string below
json = "{}"
# create an instance of V1Operation from a JSON string
v1_operation_instance = V1Operation.from_json(json)
# print the JSON string representation of the object
print V1Operation.to_json()

# convert the object into a dict
v1_operation_dict = v1_operation_instance.to_dict()
# create an instance of V1Operation from a dict
v1_operation_form_dict = v1_operation.from_dict(v1_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


