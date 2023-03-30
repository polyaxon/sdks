# V1Dag


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dag']
**operations** | [**List[V1Operation]**](V1Operation.md) |  | [optional] 
**components** | [**List[V1Component]**](V1Component.md) |  | [optional] 
**concurrency** | **int** |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** | Volumes is a list of volumes that can be mounted. | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dag import V1Dag

# TODO update the JSON string below
json = "{}"
# create an instance of V1Dag from a JSON string
v1_dag_instance = V1Dag.from_json(json)
# print the JSON string representation of the object
print V1Dag.to_json()

# convert the object into a dict
v1_dag_dict = v1_dag_instance.to_dict()
# create an instance of V1Dag from a dict
v1_dag_form_dict = v1_dag.from_dict(v1_dag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


