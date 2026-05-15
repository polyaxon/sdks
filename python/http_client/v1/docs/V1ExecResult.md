# V1ExecResult

Response body for POST /exec.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exec_id** | **str** |  | [optional] 
**exit_code** | **int** |  | [optional] 
**signal** | **str** |  | [optional] 
**stdout** | **str** |  | [optional] 
**stderr** | **str** |  | [optional] 
**duration_ms** | **int** |  | [optional] 
**timed_out** | **bool** |  | [optional] 
**stdout_truncated** | **bool** |  | [optional] 
**stderr_truncated** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_exec_result import V1ExecResult

# TODO update the JSON string below
json = "{}"
# create an instance of V1ExecResult from a JSON string
v1_exec_result_instance = V1ExecResult.from_json(json)
# print the JSON string representation of the object
print V1ExecResult.to_json()

# convert the object into a dict
v1_exec_result_dict = v1_exec_result_instance.to_dict()
# create an instance of V1ExecResult from a dict
v1_exec_result_form_dict = v1_exec_result.from_dict(v1_exec_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


