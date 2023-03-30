# V1GitConnection


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**revision** | **bool** |  | [optional] 
**flags** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_git_connection import V1GitConnection

# TODO update the JSON string below
json = "{}"
# create an instance of V1GitConnection from a JSON string
v1_git_connection_instance = V1GitConnection.from_json(json)
# print the JSON string representation of the object
print V1GitConnection.to_json()

# convert the object into a dict
v1_git_connection_dict = v1_git_connection_instance.to_dict()
# create an instance of V1GitConnection from a dict
v1_git_connection_form_dict = v1_git_connection.from_dict(v1_git_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


