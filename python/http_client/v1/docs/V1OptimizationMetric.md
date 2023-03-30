# V1OptimizationMetric


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**optimization** | [**V1Optimization**](V1Optimization.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_optimization_metric import V1OptimizationMetric

# TODO update the JSON string below
json = "{}"
# create an instance of V1OptimizationMetric from a JSON string
v1_optimization_metric_instance = V1OptimizationMetric.from_json(json)
# print the JSON string representation of the object
print V1OptimizationMetric.to_json()

# convert the object into a dict
v1_optimization_metric_dict = v1_optimization_metric_instance.to_dict()
# create an instance of V1OptimizationMetric from a dict
v1_optimization_metric_form_dict = v1_optimization_metric.from_dict(v1_optimization_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


