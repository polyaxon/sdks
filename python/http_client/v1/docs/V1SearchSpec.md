# V1SearchSpec


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | [optional] 
**sort** | **str** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**groupby** | **str** |  | [optional] 
**columns** | **str** |  | [optional] 
**layout** | **str** |  | [optional] 
**sections** | **str** |  | [optional] 
**compares** | **str** |  | [optional] 
**heat** | **str** |  | [optional] 
**events** | [**V1DashboardSpec**](V1DashboardSpec.md) |  | [optional] 
**histograms** | **object** |  | [optional] 
**trends** | **object** |  | [optional] 
**analytics** | [**V1AnalyticsSpec**](V1AnalyticsSpec.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_search_spec import V1SearchSpec

# TODO update the JSON string below
json = "{}"
# create an instance of V1SearchSpec from a JSON string
v1_search_spec_instance = V1SearchSpec.from_json(json)
# print the JSON string representation of the object
print V1SearchSpec.to_json()

# convert the object into a dict
v1_search_spec_dict = v1_search_spec_instance.to_dict()
# create an instance of V1SearchSpec from a dict
v1_search_spec_form_dict = v1_search_spec.from_dict(v1_search_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


