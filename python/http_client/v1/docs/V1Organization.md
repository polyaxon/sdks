# V1Organization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** |  | [optional] 
**user_email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**is_public** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**support_revoke_at** | **datetime** |  | [optional] 
**expiration** | **int** |  | [optional] 
**role** | **str** |  | [optional] 
**queue** | **str** |  | [optional] 
**preset** | **str** |  | [optional] 
**is_cloud_viewable** | **bool** |  | [optional] 
**auth** | **object** |  | [optional] 
**plan** | **object** |  | [optional] 
**usage** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_organization import V1Organization

# TODO update the JSON string below
json = "{}"
# create an instance of V1Organization from a JSON string
v1_organization_instance = V1Organization.from_json(json)
# print the JSON string representation of the object
print V1Organization.to_json()

# convert the object into a dict
v1_organization_dict = v1_organization_instance.to_dict()
# create an instance of V1Organization from a dict
v1_organization_form_dict = v1_organization.from_dict(v1_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


