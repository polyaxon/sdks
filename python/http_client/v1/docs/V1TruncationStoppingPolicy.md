# V1TruncationStoppingPolicy

Early stopping with truncation stopping, this policy stops a percentage of all running runs at every evaluation.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'truncation']
**percent** | **int** | The percentage of runs to stop, at each evaluation interval. e.g. 1 - 99. | [optional] 
**evaluation_interval** | **int** | Interval/Frequency for applying the policy. | [optional] 
**min_interval** | **int** |  | [optional] 
**min_samples** | **int** |  | [optional] 
**include_succeeded** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_truncation_stopping_policy import V1TruncationStoppingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of V1TruncationStoppingPolicy from a JSON string
v1_truncation_stopping_policy_instance = V1TruncationStoppingPolicy.from_json(json)
# print the JSON string representation of the object
print V1TruncationStoppingPolicy.to_json()

# convert the object into a dict
v1_truncation_stopping_policy_dict = v1_truncation_stopping_policy_instance.to_dict()
# create an instance of V1TruncationStoppingPolicy from a dict
v1_truncation_stopping_policy_form_dict = v1_truncation_stopping_policy.from_dict(v1_truncation_stopping_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


