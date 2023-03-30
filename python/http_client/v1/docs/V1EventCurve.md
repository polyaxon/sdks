# V1EventCurve


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**V1EventCurveKind**](V1EventCurveKind.md) |  | [optional] 
**x** | **List[float]** |  | [optional] 
**y** | **List[float]** |  | [optional] 
**annotation** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_curve import V1EventCurve

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventCurve from a JSON string
v1_event_curve_instance = V1EventCurve.from_json(json)
# print the JSON string representation of the object
print V1EventCurve.to_json()

# convert the object into a dict
v1_event_curve_dict = v1_event_curve_instance.to_dict()
# create an instance of V1EventCurve from a dict
v1_event_curve_form_dict = v1_event_curve.from_dict(v1_event_curve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


