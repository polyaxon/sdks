# V1EntityNotificationBody


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**condition** | [**V1StatusCondition**](V1StatusCondition.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_entity_notification_body import V1EntityNotificationBody

# TODO update the JSON string below
json = "{}"
# create an instance of V1EntityNotificationBody from a JSON string
v1_entity_notification_body_instance = V1EntityNotificationBody.from_json(json)
# print the JSON string representation of the object
print V1EntityNotificationBody.to_json()

# convert the object into a dict
v1_entity_notification_body_dict = v1_entity_notification_body_instance.to_dict()
# create an instance of V1EntityNotificationBody from a dict
v1_entity_notification_body_form_dict = v1_entity_notification_body.from_dict(v1_entity_notification_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


