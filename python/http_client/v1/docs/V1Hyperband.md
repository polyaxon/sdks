# V1Hyperband


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'hyperband']
**params** | **Dict[str, object]** |  | [optional] 
**max_iterations** | **int** |  | [optional] 
**eta** | **int** |  | [optional] 
**resource** | [**V1OptimizationResource**](V1OptimizationResource.md) |  | [optional] 
**metric** | [**V1OptimizationMetric**](V1OptimizationMetric.md) |  | [optional] 
**resume** | **bool** |  | [optional] 
**seed** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**tuner** | [**V1Tuner**](V1Tuner.md) |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hyperband import V1Hyperband

# TODO update the JSON string below
json = "{}"
# create an instance of V1Hyperband from a JSON string
v1_hyperband_instance = V1Hyperband.from_json(json)
# print the JSON string representation of the object
print V1Hyperband.to_json()

# convert the object into a dict
v1_hyperband_dict = v1_hyperband_instance.to_dict()
# create an instance of V1Hyperband from a dict
v1_hyperband_form_dict = v1_hyperband.from_dict(v1_hyperband_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


