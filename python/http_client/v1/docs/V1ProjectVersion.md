# V1ProjectVersion


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**owner** | **str** |  | [optional] 
**user** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**connection** | **str** |  | [optional] 
**run** | **str** |  | [optional] 
**artifacts** | **List[str]** |  | [optional] 
**meta_info** | **object** | Extra information related to the run, lineage, artifacts, ... | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**stage** | [**V1Stages**](V1Stages.md) |  | [optional] 
**kind** | [**V1ProjectVersionKind**](V1ProjectVersionKind.md) |  | [optional] 
**stage_conditions** | [**List[V1StageCondition]**](V1StageCondition.md) |  | [optional] 
**content** | **str** |  | [optional] 
**readme** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**contributors** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_project_version import V1ProjectVersion

# TODO update the JSON string below
json = "{}"
# create an instance of V1ProjectVersion from a JSON string
v1_project_version_instance = V1ProjectVersion.from_json(json)
# print the JSON string representation of the object
print V1ProjectVersion.to_json()

# convert the object into a dict
v1_project_version_dict = v1_project_version_instance.to_dict()
# create an instance of V1ProjectVersion from a dict
v1_project_version_form_dict = v1_project_version.from_dict(v1_project_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


