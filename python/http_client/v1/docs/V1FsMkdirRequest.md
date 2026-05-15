# V1FsMkdirRequest

Request body for POST /fs/mkdir.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | [optional] 
**parents** | **bool** |  | [optional] 
**mode** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_fs_mkdir_request import V1FsMkdirRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1FsMkdirRequest from a JSON string
v1_fs_mkdir_request_instance = V1FsMkdirRequest.from_json(json)
# print the JSON string representation of the object
print V1FsMkdirRequest.to_json()

# convert the object into a dict
v1_fs_mkdir_request_dict = v1_fs_mkdir_request_instance.to_dict()
# create an instance of V1FsMkdirRequest from a dict
v1_fs_mkdir_request_form_dict = v1_fs_mkdir_request.from_dict(v1_fs_mkdir_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


