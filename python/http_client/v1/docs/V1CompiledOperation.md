# V1CompiledOperation


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
**build** | [**V1Build**](V1Build.md) |  | [optional] 
**hooks** | [**List[V1Hook]**](V1Hook.md) |  | [optional] 
**dependencies** | **List[str]** |  | [optional] 
**trigger** | [**V1TriggerPolicy**](V1TriggerPolicy.md) |  | [optional] 
**conditions** | **str** |  | [optional] 
**skip_on_upstream_skip** | **bool** |  | [optional] 
**matrix** | **object** |  | [optional] 
**joins** | [**Dict[str, V1Join]**](V1Join.md) |  | [optional] 
**inputs** | [**List[V1IO]**](V1IO.md) |  | [optional] 
**outputs** | [**List[V1IO]**](V1IO.md) |  | [optional] 
**contexts** | [**List[V1IO]**](V1IO.md) |  | [optional] 
**is_approved** | **bool** |  | [optional] 
**cost** | **float** |  | [optional] 
**run** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_compiled_operation import V1CompiledOperation

# TODO update the JSON string below
json = "{}"
# create an instance of V1CompiledOperation from a JSON string
v1_compiled_operation_instance = V1CompiledOperation.from_json(json)
# print the JSON string representation of the object
print V1CompiledOperation.to_json()

# convert the object into a dict
v1_compiled_operation_dict = v1_compiled_operation_instance.to_dict()
# create an instance of V1CompiledOperation from a dict
v1_compiled_operation_form_dict = v1_compiled_operation.from_dict(v1_compiled_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


