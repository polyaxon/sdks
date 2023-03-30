# V1Template


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**fields** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_template import V1Template

# TODO update the JSON string below
json = "{}"
# create an instance of V1Template from a JSON string
v1_template_instance = V1Template.from_json(json)
# print the JSON string representation of the object
print V1Template.to_json()

# convert the object into a dict
v1_template_dict = v1_template_instance.to_dict()
# create an instance of V1Template from a dict
v1_template_form_dict = v1_template.from_dict(v1_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


