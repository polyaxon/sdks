# V1ResizePtyRequest

Request body for POST /pty/{id}/resize.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cols** | **int** |  | [optional] 
**rows** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_resize_pty_request import V1ResizePtyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1ResizePtyRequest from a JSON string
v1_resize_pty_request_instance = V1ResizePtyRequest.from_json(json)
# print the JSON string representation of the object
print V1ResizePtyRequest.to_json()

# convert the object into a dict
v1_resize_pty_request_dict = v1_resize_pty_request_instance.to_dict()
# create an instance of V1ResizePtyRequest from a dict
v1_resize_pty_request_form_dict = v1_resize_pty_request.from_dict(v1_resize_pty_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


