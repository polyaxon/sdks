# V1Validation


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay** | **bool** |  | [optional] 
**gt** | **int** |  | [optional] 
**ge** | **int** |  | [optional] 
**lt** | **int** |  | [optional] 
**le** | **int** |  | [optional] 
**multiple_of** | **int** |  | [optional] 
**max_digits** | **int** |  | [optional] 
**decimal_places** | **int** |  | [optional] 
**regex** | **str** |  | [optional] 
**min_length** | **int** |  | [optional] 
**max_length** | **int** |  | [optional] 
**keys** | **List[str]** |  | [optional] 
**contains_keys** | **List[str]** |  | [optional] 
**excludes_keys** | **List[str]** |  | [optional] 
**contains** | **List[object]** |  | [optional] 
**excludes** | **List[object]** |  | [optional] 
**options** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_validation import V1Validation

# TODO update the JSON string below
json = "{}"
# create an instance of V1Validation from a JSON string
v1_validation_instance = V1Validation.from_json(json)
# print the JSON string representation of the object
print V1Validation.to_json()

# convert the object into a dict
v1_validation_dict = v1_validation_instance.to_dict()
# create an instance of V1Validation from a dict
v1_validation_form_dict = v1_validation.from_dict(v1_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


