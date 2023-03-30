# V1Logs


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | [**List[V1Log]**](V1Log.md) |  | [optional] 
**last_time** | **datetime** |  | [optional] 
**last_file** | **str** |  | [optional] 
**files** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_logs import V1Logs

# TODO update the JSON string below
json = "{}"
# create an instance of V1Logs from a JSON string
v1_logs_instance = V1Logs.from_json(json)
# print the JSON string representation of the object
print V1Logs.to_json()

# convert the object into a dict
v1_logs_dict = v1_logs_instance.to_dict()
# create an instance of V1Logs from a dict
v1_logs_form_dict = v1_logs.from_dict(v1_logs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


