# V1MetricEarlyStopping

MetricEarlyStoppingSchema specification Early stopping based on metric config.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'metric_early_stopping']
**metric** | **str** | Metric name to use for early stopping. | [optional] 
**value** | **str** | Metric value to use for the condition. | [optional] 
**optimization** | [**V1Optimization**](V1Optimization.md) |  | [optional] 
**policy** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_metric_early_stopping import V1MetricEarlyStopping

# TODO update the JSON string below
json = "{}"
# create an instance of V1MetricEarlyStopping from a JSON string
v1_metric_early_stopping_instance = V1MetricEarlyStopping.from_json(json)
# print the JSON string representation of the object
print V1MetricEarlyStopping.to_json()

# convert the object into a dict
v1_metric_early_stopping_dict = v1_metric_early_stopping_instance.to_dict()
# create an instance of V1MetricEarlyStopping from a dict
v1_metric_early_stopping_form_dict = v1_metric_early_stopping.from_dict(v1_metric_early_stopping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


