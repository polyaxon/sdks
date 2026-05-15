# V1Pty

One PTY session record.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pty_id** | **str** |  | [optional] 
**pid** | **int** |  | [optional] 
**state** | **str** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**finished_at** | **datetime** |  | [optional] 
**duration_ms** | **int** |  | [optional] 
**exit_code** | **int** |  | [optional] 
**signal** | **str** |  | [optional] 
**last_activity** | **datetime** |  | [optional] 
**last_client_activity** | **datetime** |  | [optional] 
**detached_since** | **datetime** |  | [optional] 
**attached** | **bool** |  | [optional] 
**cols** | **int** |  | [optional] 
**rows** | **int** |  | [optional] 
**tag** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_pty import V1Pty

# TODO update the JSON string below
json = "{}"
# create an instance of V1Pty from a JSON string
v1_pty_instance = V1Pty.from_json(json)
# print the JSON string representation of the object
print V1Pty.to_json()

# convert the object into a dict
v1_pty_dict = v1_pty_instance.to_dict()
# create an instance of V1Pty from a dict
v1_pty_form_dict = v1_pty.from_dict(v1_pty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


