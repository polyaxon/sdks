# V1ConnectionResource


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**mount_path** | **str** |  | [optional] 
**items** | **List[str]** |  | [optional] 
**default_mode** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_connection_resource import V1ConnectionResource

# TODO update the JSON string below
json = "{}"
# create an instance of V1ConnectionResource from a JSON string
v1_connection_resource_instance = V1ConnectionResource.from_json(json)
# print the JSON string representation of the object
print V1ConnectionResource.to_json()

# convert the object into a dict
v1_connection_resource_dict = v1_connection_resource_instance.to_dict()
# create an instance of V1ConnectionResource from a dict
v1_connection_resource_form_dict = v1_connection_resource.from_dict(v1_connection_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


