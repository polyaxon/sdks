# V1Tag


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**icon** | **str** |  | [optional] 
**stats** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_tag import V1Tag

# TODO update the JSON string below
json = "{}"
# create an instance of V1Tag from a JSON string
v1_tag_instance = V1Tag.from_json(json)
# print the JSON string representation of the object
print V1Tag.to_json()

# convert the object into a dict
v1_tag_dict = v1_tag_instance.to_dict()
# create an instance of V1Tag from a dict
v1_tag_form_dict = v1_tag.from_dict(v1_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


