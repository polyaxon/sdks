# V1Status


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**status** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**status_conditions** | [**List[V1StatusCondition]**](V1StatusCondition.md) |  | [optional] 
**meta_info** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_status import V1Status

# TODO update the JSON string below
json = "{}"
# create an instance of V1Status from a JSON string
v1_status_instance = V1Status.from_json(json)
# print the JSON string representation of the object
print V1Status.to_json()

# convert the object into a dict
v1_status_dict = v1_status_instance.to_dict()
# create an instance of V1Status from a dict
v1_status_form_dict = v1_status.from_dict(v1_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


