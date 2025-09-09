# V1ServiceAccount


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**user** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**live_state** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 
**services** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_service_account import V1ServiceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of V1ServiceAccount from a JSON string
v1_service_account_instance = V1ServiceAccount.from_json(json)
# print the JSON string representation of the object
print V1ServiceAccount.to_json()

# convert the object into a dict
v1_service_account_dict = v1_service_account_instance.to_dict()
# create an instance of V1ServiceAccount from a dict
v1_service_account_form_dict = v1_service_account.from_dict(v1_service_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


