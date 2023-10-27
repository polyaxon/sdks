# V1Installation


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**dist** | **str** |  | [optional] 
**host** | **str** |  | [optional] 
**hmac** | **str** |  | [optional] 
**mode** | **str** |  | [optional] 
**auth** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_installation import V1Installation

# TODO update the JSON string below
json = "{}"
# create an instance of V1Installation from a JSON string
v1_installation_instance = V1Installation.from_json(json)
# print the JSON string representation of the object
print V1Installation.to_json()

# convert the object into a dict
v1_installation_dict = v1_installation_instance.to_dict()
# create an instance of V1Installation from a dict
v1_installation_form_dict = v1_installation.from_dict(v1_installation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


