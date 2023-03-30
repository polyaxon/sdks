# V1EventDataframe


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_dataframe import V1EventDataframe

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventDataframe from a JSON string
v1_event_dataframe_instance = V1EventDataframe.from_json(json)
# print the JSON string representation of the object
print V1EventDataframe.to_json()

# convert the object into a dict
v1_event_dataframe_dict = v1_event_dataframe_instance.to_dict()
# create an instance of V1EventDataframe from a dict
v1_event_dataframe_form_dict = v1_event_dataframe.from_dict(v1_event_dataframe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


