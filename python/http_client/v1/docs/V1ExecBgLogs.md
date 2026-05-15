# V1ExecBgLogs

Response body for GET /exec/bg/{id}/logs.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exec_id** | **str** |  | [optional] 
**stream** | **str** |  | [optional] 
**offset** | **int** |  | [optional] 
**next_offset** | **int** |  | [optional] 
**bytes** | **int** |  | [optional] 
**data** | **str** |  | [optional] 
**eof** | **bool** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_exec_bg_logs import V1ExecBgLogs

# TODO update the JSON string below
json = "{}"
# create an instance of V1ExecBgLogs from a JSON string
v1_exec_bg_logs_instance = V1ExecBgLogs.from_json(json)
# print the JSON string representation of the object
print V1ExecBgLogs.to_json()

# convert the object into a dict
v1_exec_bg_logs_dict = v1_exec_bg_logs_instance.to_dict()
# create an instance of V1ExecBgLogs from a dict
v1_exec_bg_logs_form_dict = v1_exec_bg_logs.from_dict(v1_exec_bg_logs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


