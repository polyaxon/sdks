# V1EventHistogram


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[float]** |  | [optional] 
**counts** | **List[float]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_histogram import V1EventHistogram

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventHistogram from a JSON string
v1_event_histogram_instance = V1EventHistogram.from_json(json)
# print the JSON string representation of the object
print V1EventHistogram.to_json()

# convert the object into a dict
v1_event_histogram_dict = v1_event_histogram_instance.to_dict()
# create an instance of V1EventHistogram from a dict
v1_event_histogram_form_dict = v1_event_histogram.from_dict(v1_event_histogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


