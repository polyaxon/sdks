# V1DashboardSpec


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sections** | [**List[V1SectionSpec]**](V1SectionSpec.md) |  | [optional] 
**xaxis** | **str** |  | [optional] 
**smoothing** | **int** |  | [optional] 
**step** | **int** |  | [optional] 
**ignore_outliers** | **bool** |  | [optional] 
**sample_size** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dashboard_spec import V1DashboardSpec

# TODO update the JSON string below
json = "{}"
# create an instance of V1DashboardSpec from a JSON string
v1_dashboard_spec_instance = V1DashboardSpec.from_json(json)
# print the JSON string representation of the object
print V1DashboardSpec.to_json()

# convert the object into a dict
v1_dashboard_spec_dict = v1_dashboard_spec_instance.to_dict()
# create an instance of V1DashboardSpec from a dict
v1_dashboard_spec_form_dict = v1_dashboard_spec.from_dict(v1_dashboard_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


