# V1FsListResult

Response body for GET /fs/ls.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | [optional] 
**entries** | [**List[V1FsEntry]**](V1FsEntry.md) |  | [optional] 
**truncated** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_fs_list_result import V1FsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of V1FsListResult from a JSON string
v1_fs_list_result_instance = V1FsListResult.from_json(json)
# print the JSON string representation of the object
print V1FsListResult.to_json()

# convert the object into a dict
v1_fs_list_result_dict = v1_fs_list_result_instance.to_dict()
# create an instance of V1FsListResult from a dict
v1_fs_list_result_form_dict = v1_fs_list_result.from_dict(v1_fs_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


