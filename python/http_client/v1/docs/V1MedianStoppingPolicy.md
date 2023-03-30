# V1MedianStoppingPolicy

Early stopping with median stopping, this policy computes running medians across all runs and stops those whose best performance is worse than the median of the running runs.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'median']
**evaluation_interval** | **int** | Interval/Frequency for applying the policy. | [optional] 
**min_interval** | **int** |  | [optional] 
**min_samples** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_median_stopping_policy import V1MedianStoppingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of V1MedianStoppingPolicy from a JSON string
v1_median_stopping_policy_instance = V1MedianStoppingPolicy.from_json(json)
# print the JSON string representation of the object
print V1MedianStoppingPolicy.to_json()

# convert the object into a dict
v1_median_stopping_policy_dict = v1_median_stopping_policy_instance.to_dict()
# create an instance of V1MedianStoppingPolicy from a dict
v1_median_stopping_policy_form_dict = v1_median_stopping_policy.from_dict(v1_median_stopping_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


