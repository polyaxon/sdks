# V1OrganizationMember


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**user_email** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_organization_member import V1OrganizationMember

# TODO update the JSON string below
json = "{}"
# create an instance of V1OrganizationMember from a JSON string
v1_organization_member_instance = V1OrganizationMember.from_json(json)
# print the JSON string representation of the object
print V1OrganizationMember.to_json()

# convert the object into a dict
v1_organization_member_dict = v1_organization_member_instance.to_dict()
# create an instance of V1OrganizationMember from a dict
v1_organization_member_form_dict = v1_organization_member.from_dict(v1_organization_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


