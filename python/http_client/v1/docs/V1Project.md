# V1Project


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**user** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**is_public** | **bool** |  | [optional] 
**bookmarked** | **bool** |  | [optional] 
**readme** | **str** |  | [optional] 
**excluded_features** | **List[str]** |  | [optional] 
**excluded_runtimes** | **List[str]** |  | [optional] 
**archived_deletion_interval** | **int** |  | [optional] 
**settings** | [**V1ProjectSettings**](V1ProjectSettings.md) |  | [optional] 
**role** | **str** |  | [optional] 
**live_state** | **int** |  | [optional] 
**contributors** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_project import V1Project

# TODO update the JSON string below
json = "{}"
# create an instance of V1Project from a JSON string
v1_project_instance = V1Project.from_json(json)
# print the JSON string representation of the object
print V1Project.to_json()

# convert the object into a dict
v1_project_dict = v1_project_instance.to_dict()
# create an instance of V1Project from a dict
v1_project_form_dict = v1_project.from_dict(v1_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


