# V1RunEdgesGraph


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edges** | [**List[V1RunEdgeLineage]**](V1RunEdgeLineage.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_edges_graph import V1RunEdgesGraph

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunEdgesGraph from a JSON string
v1_run_edges_graph_instance = V1RunEdgesGraph.from_json(json)
# print the JSON string representation of the object
print V1RunEdgesGraph.to_json()

# convert the object into a dict
v1_run_edges_graph_dict = v1_run_edges_graph_instance.to_dict()
# create an instance of V1RunEdgesGraph from a dict
v1_run_edges_graph_form_dict = v1_run_edges_graph.from_dict(v1_run_edges_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


