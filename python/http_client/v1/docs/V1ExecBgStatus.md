# V1ExecBgStatus

One background exec status record.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exec_id** | **str** |  | [optional] 
**pid** | **int** |  | [optional] 
**state** | **str** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**finished_at** | **datetime** |  | [optional] 
**duration_ms** | **int** |  | [optional] 
**exit_code** | **int** |  | [optional] 
**signal** | **str** |  | [optional] 
**stdout_bytes** | **int** |  | [optional] 
**stderr_bytes** | **int** |  | [optional] 
**tag** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_exec_bg_status import V1ExecBgStatus

# TODO update the JSON string below
json = "{}"
# create an instance of V1ExecBgStatus from a JSON string
v1_exec_bg_status_instance = V1ExecBgStatus.from_json(json)
# print the JSON string representation of the object
print V1ExecBgStatus.to_json()

# convert the object into a dict
v1_exec_bg_status_dict = v1_exec_bg_status_instance.to_dict()
# create an instance of V1ExecBgStatus from a dict
v1_exec_bg_status_form_dict = v1_exec_bg_status.from_dict(v1_exec_bg_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


