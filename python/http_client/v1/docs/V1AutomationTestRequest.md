# V1AutomationTestRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**automation_uuid** | **str** |  | [optional] 
**event** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_automation_test_request import V1AutomationTestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1AutomationTestRequest from a JSON string
v1_automation_test_request_instance = V1AutomationTestRequest.from_json(json)
# print the JSON string representation of the object
print V1AutomationTestRequest.to_json()

# convert the object into a dict
v1_automation_test_request_dict = v1_automation_test_request_instance.to_dict()
# create an instance of V1AutomationTestRequest from a dict
v1_automation_test_request_form_dict = v1_automation_test_request.from_dict(v1_automation_test_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


