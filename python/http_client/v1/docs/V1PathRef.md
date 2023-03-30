# V1PathRef


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'path_ref']
**path** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_path_ref import V1PathRef

# TODO update the JSON string below
json = "{}"
# create an instance of V1PathRef from a JSON string
v1_path_ref_instance = V1PathRef.from_json(json)
# print the JSON string representation of the object
print V1PathRef.to_json()

# convert the object into a dict
v1_path_ref_dict = v1_path_ref_instance.to_dict()
# create an instance of V1PathRef from a dict
v1_path_ref_form_dict = v1_path_ref.from_dict(v1_path_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


