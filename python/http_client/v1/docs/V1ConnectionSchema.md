# V1ConnectionSchema


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_connection** | [**V1BucketConnection**](V1BucketConnection.md) |  | [optional] 
**host_path_connection** | [**V1HostPathConnection**](V1HostPathConnection.md) |  | [optional] 
**claim_connection** | [**V1ClaimConnection**](V1ClaimConnection.md) |  | [optional] 
**host_connection** | [**V1HostConnection**](V1HostConnection.md) |  | [optional] 
**git_connection** | [**V1GitConnection**](V1GitConnection.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_connection_schema import V1ConnectionSchema

# TODO update the JSON string below
json = "{}"
# create an instance of V1ConnectionSchema from a JSON string
v1_connection_schema_instance = V1ConnectionSchema.from_json(json)
# print the JSON string representation of the object
print V1ConnectionSchema.to_json()

# convert the object into a dict
v1_connection_schema_dict = v1_connection_schema_instance.to_dict()
# create an instance of V1ConnectionSchema from a dict
v1_connection_schema_form_dict = v1_connection_schema.from_dict(v1_connection_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


