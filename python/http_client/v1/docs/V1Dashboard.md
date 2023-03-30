# V1Dashboard


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**live_state** | **int** |  | [optional] 
**spec** | [**V1DashboardSpec**](V1DashboardSpec.md) |  | [optional] 
**org_level** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dashboard import V1Dashboard

# TODO update the JSON string below
json = "{}"
# create an instance of V1Dashboard from a JSON string
v1_dashboard_instance = V1Dashboard.from_json(json)
# print the JSON string representation of the object
print V1Dashboard.to_json()

# convert the object into a dict
v1_dashboard_dict = v1_dashboard_instance.to_dict()
# create an instance of V1Dashboard from a dict
v1_dashboard_form_dict = v1_dashboard.from_dict(v1_dashboard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


