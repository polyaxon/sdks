# V1EventChart


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**V1EventChartKind**](V1EventChartKind.md) |  | [optional] 
**figure** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_chart import V1EventChart

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventChart from a JSON string
v1_event_chart_instance = V1EventChart.from_json(json)
# print the JSON string representation of the object
print V1EventChart.to_json()

# convert the object into a dict
v1_event_chart_dict = v1_event_chart_instance.to_dict()
# create an instance of V1EventChart from a dict
v1_event_chart_form_dict = v1_event_chart.from_dict(v1_event_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


