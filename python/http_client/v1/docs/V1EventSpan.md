# V1EventSpan


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**finished_at** | **datetime** |  | [optional] 
**status** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**status_conditions** | [**List[V1StatusCondition]**](V1StatusCondition.md) |  | [optional] 
**metadata** | **object** |  | [optional] 
**inputs** | **object** |  | [optional] 
**outputs** | **object** |  | [optional] 
**children** | [**List[V1EventSpan]**](V1EventSpan.md) |  | [optional] 
**kind** | [**V1EventSpanKind**](V1EventSpanKind.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_span import V1EventSpan

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventSpan from a JSON string
v1_event_span_instance = V1EventSpan.from_json(json)
# print the JSON string representation of the object
print V1EventSpan.to_json()

# convert the object into a dict
v1_event_span_dict = v1_event_span_instance.to_dict()
# create an instance of V1EventSpan from a dict
v1_event_span_form_dict = v1_event_span.from_dict(v1_event_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


