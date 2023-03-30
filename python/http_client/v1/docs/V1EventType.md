# V1EventType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**kind** | [**V1ArtifactKind**](V1ArtifactKind.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_type import V1EventType

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventType from a JSON string
v1_event_type_instance = V1EventType.from_json(json)
# print the JSON string representation of the object
print V1EventType.to_json()

# convert the object into a dict
v1_event_type_dict = v1_event_type_instance.to_dict()
# create an instance of V1EventType from a dict
v1_event_type_form_dict = v1_event_type.from_dict(v1_event_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


