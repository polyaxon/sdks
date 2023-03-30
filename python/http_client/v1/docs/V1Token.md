# V1Token


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 
**services** | **List[str]** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**expiration** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_token import V1Token

# TODO update the JSON string below
json = "{}"
# create an instance of V1Token from a JSON string
v1_token_instance = V1Token.from_json(json)
# print the JSON string representation of the object
print V1Token.to_json()

# convert the object into a dict
v1_token_dict = v1_token_instance.to_dict()
# create an instance of V1Token from a dict
v1_token_form_dict = v1_token.from_dict(v1_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


