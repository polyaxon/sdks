# V1FsStatResult

Response body for GET /fs/stat.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**mtime** | **datetime** |  | [optional] 
**mode** | **str** |  | [optional] 
**uid** | **int** |  | [optional] 
**gid** | **int** |  | [optional] 
**symlink_target** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_fs_stat_result import V1FsStatResult

# TODO update the JSON string below
json = "{}"
# create an instance of V1FsStatResult from a JSON string
v1_fs_stat_result_instance = V1FsStatResult.from_json(json)
# print the JSON string representation of the object
print V1FsStatResult.to_json()

# convert the object into a dict
v1_fs_stat_result_dict = v1_fs_stat_result_instance.to_dict()
# create an instance of V1FsStatResult from a dict
v1_fs_stat_result_form_dict = v1_fs_stat_result.from_dict(v1_fs_stat_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


