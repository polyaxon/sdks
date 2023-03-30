# V1EventModel


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**framework** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**spec** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_model import V1EventModel

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventModel from a JSON string
v1_event_model_instance = V1EventModel.from_json(json)
# print the JSON string representation of the object
print V1EventModel.to_json()

# convert the object into a dict
v1_event_model_dict = v1_event_model_instance.to_dict()
# create an instance of V1EventModel from a dict
v1_event_model_form_dict = v1_event_model.from_dict(v1_event_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


