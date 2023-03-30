# V1AnalyticsSpec


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view** | **str** |  | [optional] 
**trunc** | **str** |  | [optional] 
**groupby** | **str** |  | [optional] 
**frequency** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_analytics_spec import V1AnalyticsSpec

# TODO update the JSON string below
json = "{}"
# create an instance of V1AnalyticsSpec from a JSON string
v1_analytics_spec_instance = V1AnalyticsSpec.from_json(json)
# print the JSON string representation of the object
print V1AnalyticsSpec.to_json()

# convert the object into a dict
v1_analytics_spec_dict = v1_analytics_spec_instance.to_dict()
# create an instance of V1AnalyticsSpec from a dict
v1_analytics_spec_form_dict = v1_analytics_spec.from_dict(v1_analytics_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


