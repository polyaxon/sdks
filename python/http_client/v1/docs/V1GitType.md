# V1GitType


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**revision** | **str** |  | [optional] 
**flags** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_git_type import V1GitType

# TODO update the JSON string below
json = "{}"
# create an instance of V1GitType from a JSON string
v1_git_type_instance = V1GitType.from_json(json)
# print the JSON string representation of the object
print V1GitType.to_json()

# convert the object into a dict
v1_git_type_dict = v1_git_type_instance.to_dict()
# create an instance of V1GitType from a dict
v1_git_type_form_dict = v1_git_type.from_dict(v1_git_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


