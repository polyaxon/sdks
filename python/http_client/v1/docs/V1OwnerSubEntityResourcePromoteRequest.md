# V1OwnerSubEntityResourcePromoteRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**entity** | **str** | Entity: project name, hub name, registry name, ... | [optional] 
**uuid** | **str** |  | [optional] 
**level** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_owner_sub_entity_resource_promote_request import V1OwnerSubEntityResourcePromoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V1OwnerSubEntityResourcePromoteRequest from a JSON string
v1_owner_sub_entity_resource_promote_request_instance = V1OwnerSubEntityResourcePromoteRequest.from_json(json)
# print the JSON string representation of the object
print V1OwnerSubEntityResourcePromoteRequest.to_json()

# convert the object into a dict
v1_owner_sub_entity_resource_promote_request_dict = v1_owner_sub_entity_resource_promote_request_instance.to_dict()
# create an instance of V1OwnerSubEntityResourcePromoteRequest from a dict
v1_owner_sub_entity_resource_promote_request_form_dict = v1_owner_sub_entity_resource_promote_request.from_dict(v1_owner_sub_entity_resource_promote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


