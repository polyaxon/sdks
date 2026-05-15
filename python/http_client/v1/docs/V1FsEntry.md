# V1FsEntry

One filesystem list entry.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**mtime** | **datetime** |  | [optional] 
**mode** | **str** |  | [optional] 
**symlink_target** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_fs_entry import V1FsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of V1FsEntry from a JSON string
v1_fs_entry_instance = V1FsEntry.from_json(json)
# print the JSON string representation of the object
print V1FsEntry.to_json()

# convert the object into a dict
v1_fs_entry_dict = v1_fs_entry_instance.to_dict()
# create an instance of V1FsEntry from a dict
v1_fs_entry_form_dict = v1_fs_entry.from_dict(v1_fs_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


