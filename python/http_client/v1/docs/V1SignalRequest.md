# V1SignalRequest

Request body for signal endpoints.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signal** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_signal_request import V1SignalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1SignalRequest from a JSON string
v1_signal_request_instance = V1SignalRequest.from_json(json)
# print the JSON string representation of the object
print V1SignalRequest.to_json()

# convert the object into a dict
v1_signal_request_dict = v1_signal_request_instance.to_dict()
# create an instance of V1SignalRequest from a dict
v1_signal_request_form_dict = v1_signal_request.from_dict(v1_signal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


