# V1Mapping


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'mapping']
**values** | **List[object]** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_mapping import V1Mapping

# TODO update the JSON string below
json = "{}"
# create an instance of V1Mapping from a JSON string
v1_mapping_instance = V1Mapping.from_json(json)
# print the JSON string representation of the object
print V1Mapping.to_json()

# convert the object into a dict
v1_mapping_dict = v1_mapping_instance.to_dict()
# create an instance of V1Mapping from a dict
v1_mapping_form_dict = v1_mapping.from_dict(v1_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


