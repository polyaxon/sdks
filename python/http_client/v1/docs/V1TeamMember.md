# V1TeamMember


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**user_email** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**org_role** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_team_member import V1TeamMember

# TODO update the JSON string below
json = "{}"
# create an instance of V1TeamMember from a JSON string
v1_team_member_instance = V1TeamMember.from_json(json)
# print the JSON string representation of the object
print V1TeamMember.to_json()

# convert the object into a dict
v1_team_member_dict = v1_team_member_instance.to_dict()
# create an instance of V1TeamMember from a dict
v1_team_member_form_dict = v1_team_member.from_dict(v1_team_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


