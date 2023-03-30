# V1Bayes


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'bayes']
**params** | **Dict[str, object]** |  | [optional] 
**num_initial_runs** | **int** |  | [optional] 
**max_iterations** | **int** |  | [optional] 
**utility_function** | **object** |  | [optional] 
**metric** | [**V1OptimizationMetric**](V1OptimizationMetric.md) |  | [optional] 
**seed** | **int** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**tuner** | [**V1Tuner**](V1Tuner.md) |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_bayes import V1Bayes

# TODO update the JSON string below
json = "{}"
# create an instance of V1Bayes from a JSON string
v1_bayes_instance = V1Bayes.from_json(json)
# print the JSON string representation of the object
print V1Bayes.to_json()

# convert the object into a dict
v1_bayes_dict = v1_bayes_instance.to_dict()
# create an instance of V1Bayes from a dict
v1_bayes_form_dict = v1_bayes.from_dict(v1_bayes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


