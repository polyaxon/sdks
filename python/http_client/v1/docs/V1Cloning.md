# V1Cloning


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**kind** | [**V1CloningKind**](V1CloningKind.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_cloning import V1Cloning

# TODO update the JSON string below
json = "{}"
# create an instance of V1Cloning from a JSON string
v1_cloning_instance = V1Cloning.from_json(json)
# print the JSON string representation of the object
print V1Cloning.to_json()

# convert the object into a dict
v1_cloning_dict = v1_cloning_instance.to_dict()
# create an instance of V1Cloning from a dict
v1_cloning_form_dict = v1_cloning.from_dict(v1_cloning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


