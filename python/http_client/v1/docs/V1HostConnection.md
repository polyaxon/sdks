# V1HostConnection


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**insecure** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_host_connection import V1HostConnection

# TODO update the JSON string below
json = "{}"
# create an instance of V1HostConnection from a JSON string
v1_host_connection_instance = V1HostConnection.from_json(json)
# print the JSON string representation of the object
print V1HostConnection.to_json()

# convert the object into a dict
v1_host_connection_dict = v1_host_connection_instance.to_dict()
# create an instance of V1HostConnection from a dict
v1_host_connection_form_dict = v1_host_connection.from_dict(v1_host_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


