# V1Agent


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**live_state** | **int** |  | [optional] 
**user** | **str** |  | [optional] 
**namespace** | **str** |  | [optional] 
**version_api** | **object** |  | [optional] 
**version** | **str** |  | [optional] 
**content** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**status** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**status_conditions** | [**List[V1StatusCondition]**](V1StatusCondition.md) |  | [optional] 
**is_replica** | **bool** |  | [optional] 
**is_ui_managed** | **bool** |  | [optional] 
**hostname** | **str** |  | [optional] 
**settings** | **object** |  | [optional] 
**stats** | **object** |  | [optional] 
**contributors** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_agent import V1Agent

# TODO update the JSON string below
json = "{}"
# create an instance of V1Agent from a JSON string
v1_agent_instance = V1Agent.from_json(json)
# print the JSON string representation of the object
print V1Agent.to_json()

# convert the object into a dict
v1_agent_dict = v1_agent_instance.to_dict()
# create an instance of V1Agent from a dict
v1_agent_form_dict = v1_agent.from_dict(v1_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


