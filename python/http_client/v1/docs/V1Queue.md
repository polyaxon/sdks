# V1Queue


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**priority** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**resource** | **str** |  | [optional] 
**quota** | **str** |  | [optional] 
**stats** | **object** |  | [optional] 
**contributors** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_queue import V1Queue

# TODO update the JSON string below
json = "{}"
# create an instance of V1Queue from a JSON string
v1_queue_instance = V1Queue.from_json(json)
# print the JSON string representation of the object
print V1Queue.to_json()

# convert the object into a dict
v1_queue_dict = v1_queue_instance.to_dict()
# create an instance of V1Queue from a dict
v1_queue_form_dict = v1_queue.from_dict(v1_queue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


