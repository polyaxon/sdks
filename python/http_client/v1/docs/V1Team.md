# V1Team


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**user** | **str** |  | [optional] 
**projects** | **List[str]** |  | [optional] 
**component_hubs** | **List[str]** |  | [optional] 
**model_registries** | **List[str]** |  | [optional] 
**settings** | [**V1TeamSettings**](V1TeamSettings.md) |  | [optional] 
**policy** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_team import V1Team

# TODO update the JSON string below
json = "{}"
# create an instance of V1Team from a JSON string
v1_team_instance = V1Team.from_json(json)
# print the JSON string representation of the object
print V1Team.to_json()

# convert the object into a dict
v1_team_dict = v1_team_instance.to_dict()
# create an instance of V1Team from a dict
v1_team_form_dict = v1_team.from_dict(v1_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


