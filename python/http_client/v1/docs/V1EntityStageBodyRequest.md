# V1EntityStageBodyRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**entity** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**condition** | [**V1StageCondition**](V1StageCondition.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_entity_stage_body_request import V1EntityStageBodyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1EntityStageBodyRequest from a JSON string
v1_entity_stage_body_request_instance = V1EntityStageBodyRequest.from_json(json)
# print the JSON string representation of the object
print V1EntityStageBodyRequest.to_json()

# convert the object into a dict
v1_entity_stage_body_request_dict = v1_entity_stage_body_request_instance.to_dict()
# create an instance of V1EntityStageBodyRequest from a dict
v1_entity_stage_body_request_form_dict = v1_entity_stage_body_request.from_dict(v1_entity_stage_body_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


