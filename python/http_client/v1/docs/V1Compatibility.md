# V1Compatibility


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cli** | [**V1Version**](V1Version.md) |  | [optional] 
**platform** | [**V1Version**](V1Version.md) |  | [optional] 
**agent** | [**V1Version**](V1Version.md) |  | [optional] 
**ui** | [**V1Version**](V1Version.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_compatibility import V1Compatibility

# TODO update the JSON string below
json = "{}"
# create an instance of V1Compatibility from a JSON string
v1_compatibility_instance = V1Compatibility.from_json(json)
# print the JSON string representation of the object
print V1Compatibility.to_json()

# convert the object into a dict
v1_compatibility_dict = v1_compatibility_instance.to_dict()
# create an instance of V1Compatibility from a dict
v1_compatibility_form_dict = v1_compatibility.from_dict(v1_compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


