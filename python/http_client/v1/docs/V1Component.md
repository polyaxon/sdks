# V1Component


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
**hooks** | [**List[V1Hook]**](V1Hook.md) |  | [optional] 
**inputs** | [**List[V1IO]**](V1IO.md) |  | [optional] 
**outputs** | [**List[V1IO]**](V1IO.md) |  | [optional] 
**build** | [**V1Build**](V1Build.md) |  | [optional] 
**run** | **object** |  | [optional] 
**template** | [**V1Template**](V1Template.md) |  | [optional] 
**is_approved** | **bool** |  | [optional] 
**cost** | **float** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_component import V1Component

# TODO update the JSON string below
json = "{}"
# create an instance of V1Component from a JSON string
v1_component_instance = V1Component.from_json(json)
# print the JSON string representation of the object
print V1Component.to_json()

# convert the object into a dict
v1_component_dict = v1_component_instance.to_dict()
# create an instance of V1Component from a dict
v1_component_form_dict = v1_component.from_dict(v1_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


