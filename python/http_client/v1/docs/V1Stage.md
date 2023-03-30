# V1Stage


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**stage** | [**V1Stages**](V1Stages.md) |  | [optional] 
**stage_conditions** | [**List[V1StageCondition]**](V1StageCondition.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_stage import V1Stage

# TODO update the JSON string below
json = "{}"
# create an instance of V1Stage from a JSON string
v1_stage_instance = V1Stage.from_json(json)
# print the JSON string representation of the object
print V1Stage.to_json()

# convert the object into a dict
v1_stage_dict = v1_stage_instance.to_dict()
# create an instance of V1Stage from a dict
v1_stage_form_dict = v1_stage.from_dict(v1_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


