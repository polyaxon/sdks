# V1Run


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**user** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**schedule_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**finished_at** | **datetime** |  | [optional] 
**wait_time** | **int** |  | [optional] 
**duration** | **int** |  | [optional] 
**is_managed** | **bool** |  | [optional] 
**is_approved** | **bool** |  | [optional] 
**pending** | [**V1RunPending**](V1RunPending.md) |  | [optional] 
**content** | **str** |  | [optional] 
**raw_content** | **str** |  | [optional] 
**status** | [**V1Statuses**](V1Statuses.md) |  | [optional] 
**bookmarked** | **bool** |  | [optional] 
**live_state** | **int** |  | [optional] 
**readme** | **str** |  | [optional] 
**meta_info** | **object** |  | [optional] 
**kind** | [**V1RunKind**](V1RunKind.md) |  | [optional] 
**runtime** | [**V1RunKind**](V1RunKind.md) |  | [optional] 
**inputs** | **object** |  | [optional] 
**outputs** | **object** |  | [optional] 
**original** | [**V1Cloning**](V1Cloning.md) |  | [optional] 
**pipeline** | [**V1Pipeline**](V1Pipeline.md) |  | [optional] 
**status_conditions** | [**List[V1StatusCondition]**](V1StatusCondition.md) |  | [optional] 
**role** | **str** |  | [optional] 
**settings** | [**V1RunSettings**](V1RunSettings.md) |  | [optional] 
**resources** | [**V1RunResources**](V1RunResources.md) |  | [optional] 
**graph** | **object** |  | [optional] 
**merge** | **bool** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run import V1Run

# TODO update the JSON string below
json = "{}"
# create an instance of V1Run from a JSON string
v1_run_instance = V1Run.from_json(json)
# print the JSON string representation of the object
print V1Run.to_json()

# convert the object into a dict
v1_run_dict = v1_run_instance.to_dict()
# create an instance of V1Run from a dict
v1_run_form_dict = v1_run.from_dict(v1_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


