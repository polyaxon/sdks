# V1EarlyStopping


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**median** | [**V1MedianStoppingPolicy**](V1MedianStoppingPolicy.md) |  | [optional] 
**diff** | [**V1DiffStoppingPolicy**](V1DiffStoppingPolicy.md) |  | [optional] 
**truncation** | [**V1TruncationStoppingPolicy**](V1TruncationStoppingPolicy.md) |  | [optional] 
**metric** | [**V1MetricEarlyStopping**](V1MetricEarlyStopping.md) |  | [optional] 
**failure** | [**V1FailureEarlyStopping**](V1FailureEarlyStopping.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_early_stopping import V1EarlyStopping

# TODO update the JSON string below
json = "{}"
# create an instance of V1EarlyStopping from a JSON string
v1_early_stopping_instance = V1EarlyStopping.from_json(json)
# print the JSON string representation of the object
print V1EarlyStopping.to_json()

# convert the object into a dict
v1_early_stopping_dict = v1_early_stopping_instance.to_dict()
# create an instance of V1EarlyStopping from a dict
v1_early_stopping_form_dict = v1_early_stopping.from_dict(v1_early_stopping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


