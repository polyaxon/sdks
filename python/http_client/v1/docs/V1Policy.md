# V1Policy


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**excluded_features** | **List[str]** |  | [optional] 
**excluded_runtimes** | **List[str]** |  | [optional] 
**archived_deletion_interval** | **int** |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**preset** | **str** |  | [optional] 
**presets** | **List[str]** |  | [optional] 
**queue** | **str** |  | [optional] 
**queues** | **List[str]** |  | [optional] 
**agents** | **List[str]** |  | [optional] 
**namespaces** | **List[str]** |  | [optional] 
**teams** | **List[str]** |  | [optional] 
**projects** | **List[str]** |  | [optional] 
**projects_settings** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_policy import V1Policy

# TODO update the JSON string below
json = "{}"
# create an instance of V1Policy from a JSON string
v1_policy_instance = V1Policy.from_json(json)
# print the JSON string representation of the object
print V1Policy.to_json()

# convert the object into a dict
v1_policy_dict = v1_policy_instance.to_dict()
# create an instance of V1Policy from a dict
v1_policy_form_dict = v1_policy.from_dict(v1_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


