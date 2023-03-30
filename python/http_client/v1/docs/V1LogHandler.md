# V1LogHandler


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dsn** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_log_handler import V1LogHandler

# TODO update the JSON string below
json = "{}"
# create an instance of V1LogHandler from a JSON string
v1_log_handler_instance = V1LogHandler.from_json(json)
# print the JSON string representation of the object
print V1LogHandler.to_json()

# convert the object into a dict
v1_log_handler_dict = v1_log_handler_instance.to_dict()
# create an instance of V1LogHandler from a dict
v1_log_handler_form_dict = v1_log_handler.from_dict(v1_log_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


