# V1Hyperopt


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'hyperopt']
**algorithm** | [**V1HyperoptAlgorithms**](V1HyperoptAlgorithms.md) |  | [optional] 
**params** | **Dict[str, object]** |  | [optional] 
**num_runs** | **int** |  | [optional] 
**max_iterations** | **int** |  | [optional] 
**metric** | [**V1OptimizationMetric**](V1OptimizationMetric.md) |  | [optional] 
**seed** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**tuner** | [**V1Tuner**](V1Tuner.md) |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hyperopt import V1Hyperopt

# TODO update the JSON string below
json = "{}"
# create an instance of V1Hyperopt from a JSON string
v1_hyperopt_instance = V1Hyperopt.from_json(json)
# print the JSON string representation of the object
print V1Hyperopt.to_json()

# convert the object into a dict
v1_hyperopt_dict = v1_hyperopt_instance.to_dict()
# create an instance of V1Hyperopt from a dict
v1_hyperopt_form_dict = v1_hyperopt.from_dict(v1_hyperopt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


