# V1EntitiesTags


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuids** | **List[str]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_entities_tags import V1EntitiesTags

# TODO update the JSON string below
json = "{}"
# create an instance of V1EntitiesTags from a JSON string
v1_entities_tags_instance = V1EntitiesTags.from_json(json)
# print the JSON string representation of the object
print V1EntitiesTags.to_json()

# convert the object into a dict
v1_entities_tags_dict = v1_entities_tags_instance.to_dict()
# create an instance of V1EntitiesTags from a dict
v1_entities_tags_form_dict = v1_entities_tags.from_dict(v1_entities_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


