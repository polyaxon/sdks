# V1HpRange


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'range']
**value** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hp_range import V1HpRange

# TODO update the JSON string below
json = "{}"
# create an instance of V1HpRange from a JSON string
v1_hp_range_instance = V1HpRange.from_json(json)
# print the JSON string representation of the object
print V1HpRange.to_json()

# convert the object into a dict
v1_hp_range_dict = v1_hp_range_instance.to_dict()
# create an instance of V1HpRange from a dict
v1_hp_range_form_dict = v1_hp_range.from_dict(v1_hp_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


