# V1DiffStoppingPolicy

Early stopping with diff factor stopping, this policy computes checks runs against the best run and stops those whose performance is worse than the best by the factor defined by the user.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] 
**percent** | **float** |  | [optional] 
**evaluation_interval** | **int** | Interval/Frequency for applying the policy. | [optional] 
**min_interval** | **int** |  | [optional] 
**min_samples** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_diff_stopping_policy import V1DiffStoppingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of V1DiffStoppingPolicy from a JSON string
v1_diff_stopping_policy_instance = V1DiffStoppingPolicy.from_json(json)
# print the JSON string representation of the object
print V1DiffStoppingPolicy.to_json()

# convert the object into a dict
v1_diff_stopping_policy_dict = v1_diff_stopping_policy_instance.to_dict()
# create an instance of V1DiffStoppingPolicy from a dict
v1_diff_stopping_policy_form_dict = v1_diff_stopping_policy.from_dict(v1_diff_stopping_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


