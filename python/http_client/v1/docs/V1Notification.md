# V1Notification


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | **List[str]** |  | [optional] 
**trigger** | [**V1Statuses**](V1Statuses.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_notification import V1Notification

# TODO update the JSON string below
json = "{}"
# create an instance of V1Notification from a JSON string
v1_notification_instance = V1Notification.from_json(json)
# print the JSON string representation of the object
print V1Notification.to_json()

# convert the object into a dict
v1_notification_dict = v1_notification_instance.to_dict()
# create an instance of V1Notification from a dict
v1_notification_form_dict = v1_notification.from_dict(v1_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


