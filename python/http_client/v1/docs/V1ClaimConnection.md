# V1ClaimConnection


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume_claim** | **str** |  | [optional] 
**mount_path** | **str** |  | [optional] 
**read_only** | **bool** |  | [optional] 
**kind** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_claim_connection import V1ClaimConnection

# TODO update the JSON string below
json = "{}"
# create an instance of V1ClaimConnection from a JSON string
v1_claim_connection_instance = V1ClaimConnection.from_json(json)
# print the JSON string representation of the object
print V1ClaimConnection.to_json()

# convert the object into a dict
v1_claim_connection_dict = v1_claim_connection_instance.to_dict()
# create an instance of V1ClaimConnection from a dict
v1_claim_connection_form_dict = v1_claim_connection.from_dict(v1_claim_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


