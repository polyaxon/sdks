# RuntimeError


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**code** | **int** |  | [optional] 
**message** | **str** |  | [optional] 
**details** | [**List[ProtobufAny]**](ProtobufAny.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.runtime_error import RuntimeError

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeError from a JSON string
runtime_error_instance = RuntimeError.from_json(json)
# print the JSON string representation of the object
print RuntimeError.to_json()

# convert the object into a dict
runtime_error_dict = runtime_error_instance.to_dict()
# create an instance of RuntimeError from a dict
runtime_error_form_dict = runtime_error.from_dict(runtime_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


