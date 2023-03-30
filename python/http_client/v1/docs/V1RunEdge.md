# V1RunEdge


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upstream** | [**V1Run**](V1Run.md) |  | [optional] 
**downstream** | [**V1Run**](V1Run.md) |  | [optional] 
**kind** | [**V1RunEdgeKind**](V1RunEdgeKind.md) |  | [optional] 
**values** | **object** |  | [optional] 
**statuses** | [**List[V1Statuses]**](V1Statuses.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_edge import V1RunEdge

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunEdge from a JSON string
v1_run_edge_instance = V1RunEdge.from_json(json)
# print the JSON string representation of the object
print V1RunEdge.to_json()

# convert the object into a dict
v1_run_edge_dict = v1_run_edge_instance.to_dict()
# create an instance of V1RunEdge from a dict
v1_run_edge_form_dict = v1_run_edge.from_dict(v1_run_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


