# V1HubRef


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'hub_ref']
**name** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hub_ref import V1HubRef

# TODO update the JSON string below
json = "{}"
# create an instance of V1HubRef from a JSON string
v1_hub_ref_instance = V1HubRef.from_json(json)
# print the JSON string representation of the object
print V1HubRef.to_json()

# convert the object into a dict
v1_hub_ref_dict = v1_hub_ref_instance.to_dict()
# create an instance of V1HubRef from a dict
v1_hub_ref_form_dict = v1_hub_ref.from_dict(v1_hub_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


