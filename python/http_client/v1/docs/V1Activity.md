# V1Activity


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**event_action** | **str** |  | [optional] 
**event_subject** | **str** |  | [optional] 
**object_name** | **str** |  | [optional] 
**object_uuid** | **str** |  | [optional] 
**object_parent** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_activity import V1Activity

# TODO update the JSON string below
json = "{}"
# create an instance of V1Activity from a JSON string
v1_activity_instance = V1Activity.from_json(json)
# print the JSON string representation of the object
print V1Activity.to_json()

# convert the object into a dict
v1_activity_dict = v1_activity_instance.to_dict()
# create an instance of V1Activity from a dict
v1_activity_form_dict = v1_activity.from_dict(v1_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


