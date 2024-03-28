# V1SectionSpec


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**is_minimized** | **bool** |  | [optional] 
**is_frozen** | **bool** |  | [optional] 
**columns** | **int** |  | [optional] 
**height** | **int** |  | [optional] 
**xaxis** | **str** |  | [optional] 
**smoothing** | **int** |  | [optional] 
**ignore_outliers** | **bool** |  | [optional] 
**sample_size** | **int** |  | [optional] 
**widgets** | **List[object]** |  | [optional] 
**page_index** | **int** |  | [optional] 
**page_size** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_section_spec import V1SectionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of V1SectionSpec from a JSON string
v1_section_spec_instance = V1SectionSpec.from_json(json)
# print the JSON string representation of the object
print V1SectionSpec.to_json()

# convert the object into a dict
v1_section_spec_dict = v1_section_spec_instance.to_dict()
# create an instance of V1SectionSpec from a dict
v1_section_spec_form_dict = v1_section_spec.from_dict(v1_section_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


