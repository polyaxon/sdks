# V1Tuner


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hub_ref** | **str** |  | [optional] 
**presets** | **List[str]** |  | [optional] 
**queue** | **str** |  | [optional] 
**namespace** | **str** |  | [optional] 
**params** | [**Dict[str, V1Param]**](V1Param.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_tuner import V1Tuner

# TODO update the JSON string below
json = "{}"
# create an instance of V1Tuner from a JSON string
v1_tuner_instance = V1Tuner.from_json(json)
# print the JSON string representation of the object
print V1Tuner.to_json()

# convert the object into a dict
v1_tuner_dict = v1_tuner_instance.to_dict()
# create an instance of V1Tuner from a dict
v1_tuner_form_dict = v1_tuner.from_dict(v1_tuner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


