# V1ListAutomationsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1Automation]**](V1Automation.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_automations_response import V1ListAutomationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListAutomationsResponse from a JSON string
v1_list_automations_response_instance = V1ListAutomationsResponse.from_json(json)
# print the JSON string representation of the object
print V1ListAutomationsResponse.to_json()

# convert the object into a dict
v1_list_automations_response_dict = v1_list_automations_response_instance.to_dict()
# create an instance of V1ListAutomationsResponse from a dict
v1_list_automations_response_form_dict = v1_list_automations_response.from_dict(v1_list_automations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


