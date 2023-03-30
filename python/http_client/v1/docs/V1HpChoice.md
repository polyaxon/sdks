# V1HpChoice


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'choice']
**value** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hp_choice import V1HpChoice

# TODO update the JSON string below
json = "{}"
# create an instance of V1HpChoice from a JSON string
v1_hp_choice_instance = V1HpChoice.from_json(json)
# print the JSON string representation of the object
print V1HpChoice.to_json()

# convert the object into a dict
v1_hp_choice_dict = v1_hp_choice_instance.to_dict()
# create an instance of V1HpChoice from a dict
v1_hp_choice_form_dict = v1_hp_choice.from_dict(v1_hp_choice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


