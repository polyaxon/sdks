# V1IO


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **object** |  | [optional] 
**is_optional** | **bool** |  | [optional] 
**is_list** | **bool** |  | [optional] 
**is_flag** | **bool** |  | [optional] 
**arg_format** | **str** |  | [optional] 
**delay_validation** | **bool** |  | [optional] 
**options** | **List[object]** |  | [optional] 
**connection** | **str** |  | [optional] 
**to_init** | **bool** |  | [optional] 
**to_env** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_io import V1IO

# TODO update the JSON string below
json = "{}"
# create an instance of V1IO from a JSON string
v1_io_instance = V1IO.from_json(json)
# print the JSON string representation of the object
print V1IO.to_json()

# convert the object into a dict
v1_io_dict = v1_io_instance.to_dict()
# create an instance of V1IO from a dict
v1_io_form_dict = v1_io.from_dict(v1_io_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


