# V1EntitiesTransfer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuids** | **List[str]** |  | [optional] 
**project** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_entities_transfer import V1EntitiesTransfer

# TODO update the JSON string below
json = "{}"
# create an instance of V1EntitiesTransfer from a JSON string
v1_entities_transfer_instance = V1EntitiesTransfer.from_json(json)
# print the JSON string representation of the object
print V1EntitiesTransfer.to_json()

# convert the object into a dict
v1_entities_transfer_dict = v1_entities_transfer_instance.to_dict()
# create an instance of V1EntitiesTransfer from a dict
v1_entities_transfer_form_dict = v1_entities_transfer.from_dict(v1_entities_transfer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


