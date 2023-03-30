# V1RunConnection


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_connection import V1RunConnection

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunConnection from a JSON string
v1_run_connection_instance = V1RunConnection.from_json(json)
# print the JSON string representation of the object
print V1RunConnection.to_json()

# convert the object into a dict
v1_run_connection_dict = v1_run_connection_instance.to_dict()
# create an instance of V1RunConnection from a dict
v1_run_connection_form_dict = v1_run_connection.from_dict(v1_run_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


