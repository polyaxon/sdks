# V1FailureEarlyStopping

FailureEarlyStoppingSchema specification Early stopping based on failure config. this policy stops based on a percentage of failed runs at every evaluation.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'failure_early_stopping']
**percent** | **int** | The percentage of failed runs, at each evaluation interval. e.g. 1 - 99. | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_failure_early_stopping import V1FailureEarlyStopping

# TODO update the JSON string below
json = "{}"
# create an instance of V1FailureEarlyStopping from a JSON string
v1_failure_early_stopping_instance = V1FailureEarlyStopping.from_json(json)
# print the JSON string representation of the object
print V1FailureEarlyStopping.to_json()

# convert the object into a dict
v1_failure_early_stopping_dict = v1_failure_early_stopping_instance.to_dict()
# create an instance of V1FailureEarlyStopping from a dict
v1_failure_early_stopping_form_dict = v1_failure_early_stopping.from_dict(v1_failure_early_stopping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


