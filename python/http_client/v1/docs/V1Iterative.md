# V1Iterative


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'iterative']
**params** | **Dict[str, object]** |  | [optional] 
**max_iterations** | **int** |  | [optional] 
**seed** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**tuner** | [**V1Tuner**](V1Tuner.md) |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_iterative import V1Iterative

# TODO update the JSON string below
json = "{}"
# create an instance of V1Iterative from a JSON string
v1_iterative_instance = V1Iterative.from_json(json)
# print the JSON string representation of the object
print V1Iterative.to_json()

# convert the object into a dict
v1_iterative_dict = v1_iterative_instance.to_dict()
# create an instance of V1Iterative from a dict
v1_iterative_form_dict = v1_iterative.from_dict(v1_iterative_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


