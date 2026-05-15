# V1ExecBgList

List response for GET /exec/bg.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execs** | [**List[V1ExecBgStatus]**](V1ExecBgStatus.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_exec_bg_list import V1ExecBgList

# TODO update the JSON string below
json = "{}"
# create an instance of V1ExecBgList from a JSON string
v1_exec_bg_list_instance = V1ExecBgList.from_json(json)
# print the JSON string representation of the object
print V1ExecBgList.to_json()

# convert the object into a dict
v1_exec_bg_list_dict = v1_exec_bg_list_instance.to_dict()
# create an instance of V1ExecBgList from a dict
v1_exec_bg_list_form_dict = v1_exec_bg_list.from_dict(v1_exec_bg_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


