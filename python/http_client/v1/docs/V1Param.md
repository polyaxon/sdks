# V1Param


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **object** |  | [optional] 
**ref** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**to_init** | **bool** |  | [optional] 
**to_env** | **str** |  | [optional] 
**context_only** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_param import V1Param

# TODO update the JSON string below
json = "{}"
# create an instance of V1Param from a JSON string
v1_param_instance = V1Param.from_json(json)
# print the JSON string representation of the object
print V1Param.to_json()

# convert the object into a dict
v1_param_dict = v1_param_instance.to_dict()
# create an instance of V1Param from a dict
v1_param_form_dict = v1_param.from_dict(v1_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


