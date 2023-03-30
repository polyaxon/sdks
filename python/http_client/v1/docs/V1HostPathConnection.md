# V1HostPathConnection


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_path** | **str** |  | [optional] 
**mount_path** | **str** |  | [optional] 
**read_only** | **bool** |  | [optional] 
**kind** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_host_path_connection import V1HostPathConnection

# TODO update the JSON string below
json = "{}"
# create an instance of V1HostPathConnection from a JSON string
v1_host_path_connection_instance = V1HostPathConnection.from_json(json)
# print the JSON string representation of the object
print V1HostPathConnection.to_json()

# convert the object into a dict
v1_host_path_connection_dict = v1_host_path_connection_instance.to_dict()
# create an instance of V1HostPathConnection from a dict
v1_host_path_connection_form_dict = v1_host_path_connection.from_dict(v1_host_path_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


