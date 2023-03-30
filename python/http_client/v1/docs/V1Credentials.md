# V1Credentials


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | [optional] 
**password** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_credentials import V1Credentials

# TODO update the JSON string below
json = "{}"
# create an instance of V1Credentials from a JSON string
v1_credentials_instance = V1Credentials.from_json(json)
# print the JSON string representation of the object
print V1Credentials.to_json()

# convert the object into a dict
v1_credentials_dict = v1_credentials_instance.to_dict()
# create an instance of V1Credentials from a dict
v1_credentials_form_dict = v1_credentials.from_dict(v1_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


