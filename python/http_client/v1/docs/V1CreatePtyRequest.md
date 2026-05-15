# V1CreatePtyRequest

Request body for POST /pty.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **List[str]** | Command argv. Empty means use the server default shell. | [optional] 
**env** | **object** | Environment overrides. JSON null means unset the key. | [optional] 
**workdir** | **str** | Working directory. | [optional] 
**cols** | **int** | Terminal columns. | [optional] 
**rows** | **int** | Terminal rows. | [optional] 
**tag** | **str** | Optional reconnect handle. | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_create_pty_request import V1CreatePtyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1CreatePtyRequest from a JSON string
v1_create_pty_request_instance = V1CreatePtyRequest.from_json(json)
# print the JSON string representation of the object
print V1CreatePtyRequest.to_json()

# convert the object into a dict
v1_create_pty_request_dict = v1_create_pty_request_instance.to_dict()
# create an instance of V1CreatePtyRequest from a dict
v1_create_pty_request_form_dict = v1_create_pty_request.from_dict(v1_create_pty_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


