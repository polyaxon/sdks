# V1ExecBgStart

Response body for POST /exec/bg.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exec_id** | **str** |  | [optional] 
**pid** | **int** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**tag** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_exec_bg_start import V1ExecBgStart

# TODO update the JSON string below
json = "{}"
# create an instance of V1ExecBgStart from a JSON string
v1_exec_bg_start_instance = V1ExecBgStart.from_json(json)
# print the JSON string representation of the object
print V1ExecBgStart.to_json()

# convert the object into a dict
v1_exec_bg_start_dict = v1_exec_bg_start_instance.to_dict()
# create an instance of V1ExecBgStart from a dict
v1_exec_bg_start_form_dict = v1_exec_bg_start.from_dict(v1_exec_bg_start_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


