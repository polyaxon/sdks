# V1ListQueuesResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1Queue]**](V1Queue.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_queues_response import V1ListQueuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListQueuesResponse from a JSON string
v1_list_queues_response_instance = V1ListQueuesResponse.from_json(json)
# print the JSON string representation of the object
print V1ListQueuesResponse.to_json()

# convert the object into a dict
v1_list_queues_response_dict = v1_list_queues_response_instance.to_dict()
# create an instance of V1ListQueuesResponse from a dict
v1_list_queues_response_form_dict = v1_list_queues_response.from_dict(v1_list_queues_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


