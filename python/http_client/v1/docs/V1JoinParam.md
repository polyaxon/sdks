# V1JoinParam


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**to_init** | **bool** |  | [optional] 
**to_env** | **str** |  | [optional] 
**context_only** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_join_param import V1JoinParam

# TODO update the JSON string below
json = "{}"
# create an instance of V1JoinParam from a JSON string
v1_join_param_instance = V1JoinParam.from_json(json)
# print the JSON string representation of the object
print V1JoinParam.to_json()

# convert the object into a dict
v1_join_param_dict = v1_join_param_instance.to_dict()
# create an instance of V1JoinParam from a dict
v1_join_param_form_dict = v1_join_param.from_dict(v1_join_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


