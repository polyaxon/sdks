# V1EntityStatusBodyRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 
**condition** | [**V1StatusCondition**](V1StatusCondition.md) |  | [optional] 
**force** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_entity_status_body_request import V1EntityStatusBodyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1EntityStatusBodyRequest from a JSON string
v1_entity_status_body_request_instance = V1EntityStatusBodyRequest.from_json(json)
# print the JSON string representation of the object
print V1EntityStatusBodyRequest.to_json()

# convert the object into a dict
v1_entity_status_body_request_dict = v1_entity_status_body_request_instance.to_dict()
# create an instance of V1EntityStatusBodyRequest from a dict
v1_entity_status_body_request_form_dict = v1_entity_status_body_request.from_dict(v1_entity_status_body_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


