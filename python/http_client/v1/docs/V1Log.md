# V1Log


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**node** | **str** |  | [optional] 
**pod** | **str** |  | [optional] 
**container** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_log import V1Log

# TODO update the JSON string below
json = "{}"
# create an instance of V1Log from a JSON string
v1_log_instance = V1Log.from_json(json)
# print the JSON string representation of the object
print V1Log.to_json()

# convert the object into a dict
v1_log_dict = v1_log_instance.to_dict()
# create an instance of V1Log from a dict
v1_log_form_dict = v1_log.from_dict(v1_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


