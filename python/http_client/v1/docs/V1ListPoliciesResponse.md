# V1ListPoliciesResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**results** | [**List[V1Policy]**](V1Policy.md) |  | [optional] 
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_list_policies_response import V1ListPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1ListPoliciesResponse from a JSON string
v1_list_policies_response_instance = V1ListPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print V1ListPoliciesResponse.to_json()

# convert the object into a dict
v1_list_policies_response_dict = v1_list_policies_response_instance.to_dict()
# create an instance of V1ListPoliciesResponse from a dict
v1_list_policies_response_form_dict = v1_list_policies_response.from_dict(v1_list_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


