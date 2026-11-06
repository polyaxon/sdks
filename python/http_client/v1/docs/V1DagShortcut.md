# V1DagShortcut


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | **List[object]** |  | [optional] 
**components** | **List[object]** |  | [optional] 
**concurrency** | **int** |  | [optional] 
**early_stopping** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dag_shortcut import V1DagShortcut

# TODO update the JSON string below
json = "{}"
# create an instance of V1DagShortcut from a JSON string
v1_dag_shortcut_instance = V1DagShortcut.from_json(json)
# print the JSON string representation of the object
print V1DagShortcut.to_json()

# convert the object into a dict
v1_dag_shortcut_dict = v1_dag_shortcut_instance.to_dict()
# create an instance of V1DagShortcut from a dict
v1_dag_shortcut_form_dict = v1_dag_shortcut.from_dict(v1_dag_shortcut_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


