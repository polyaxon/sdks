# V1PtyList

List response for GET /pty.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessions** | [**List[V1Pty]**](V1Pty.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_pty_list import V1PtyList

# TODO update the JSON string below
json = "{}"
# create an instance of V1PtyList from a JSON string
v1_pty_list_instance = V1PtyList.from_json(json)
# print the JSON string representation of the object
print V1PtyList.to_json()

# convert the object into a dict
v1_pty_list_dict = v1_pty_list_instance.to_dict()
# create an instance of V1PtyList from a dict
v1_pty_list_form_dict = v1_pty_list.from_dict(v1_pty_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


