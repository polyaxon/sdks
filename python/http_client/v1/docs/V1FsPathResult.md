# V1FsPathResult

Response body for filesystem path operations.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_fs_path_result import V1FsPathResult

# TODO update the JSON string below
json = "{}"
# create an instance of V1FsPathResult from a JSON string
v1_fs_path_result_instance = V1FsPathResult.from_json(json)
# print the JSON string representation of the object
print V1FsPathResult.to_json()

# convert the object into a dict
v1_fs_path_result_dict = v1_fs_path_result_instance.to_dict()
# create an instance of V1FsPathResult from a dict
v1_fs_path_result_form_dict = v1_fs_path_result.from_dict(v1_fs_path_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


