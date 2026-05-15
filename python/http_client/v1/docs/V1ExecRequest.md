# V1ExecRequest

Request body for POST /exec.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **List[str]** | Command argv. No shell interpolation unless the caller passes a shell. | [optional] 
**env** | **object** | Environment overrides. JSON null means unset the key. | [optional] 
**workdir** | **str** | Working directory. | [optional] 
**stdin** | **str** | Base64-encoded stdin bytes. | [optional] 
**timeout_ms** | **int** | Timeout in milliseconds. | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_exec_request import V1ExecRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1ExecRequest from a JSON string
v1_exec_request_instance = V1ExecRequest.from_json(json)
# print the JSON string representation of the object
print V1ExecRequest.to_json()

# convert the object into a dict
v1_exec_request_dict = v1_exec_request_instance.to_dict()
# create an instance of V1ExecRequest from a dict
v1_exec_request_form_dict = v1_exec_request.from_dict(v1_exec_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


