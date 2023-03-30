# V1Matrix


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**random** | [**V1RandomSearch**](V1RandomSearch.md) |  | [optional] 
**grid** | [**V1GridSearch**](V1GridSearch.md) |  | [optional] 
**hyperband** | [**V1Hyperband**](V1Hyperband.md) |  | [optional] 
**bayes** | [**V1Bayes**](V1Bayes.md) |  | [optional] 
**hyperopt** | [**V1Hyperopt**](V1Hyperopt.md) |  | [optional] 
**iterative** | [**V1Iterative**](V1Iterative.md) |  | [optional] 
**mapping** | [**V1Mapping**](V1Mapping.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_matrix import V1Matrix

# TODO update the JSON string below
json = "{}"
# create an instance of V1Matrix from a JSON string
v1_matrix_instance = V1Matrix.from_json(json)
# print the JSON string representation of the object
print V1Matrix.to_json()

# convert the object into a dict
v1_matrix_dict = v1_matrix_instance.to_dict()
# create an instance of V1Matrix from a dict
v1_matrix_form_dict = v1_matrix.from_dict(v1_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


