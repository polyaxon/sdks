# V1RunEdgeLineage


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**is_upstream** | **bool** |  | [optional] 
**values** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_edge_lineage import V1RunEdgeLineage

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunEdgeLineage from a JSON string
v1_run_edge_lineage_instance = V1RunEdgeLineage.from_json(json)
# print the JSON string representation of the object
print V1RunEdgeLineage.to_json()

# convert the object into a dict
v1_run_edge_lineage_dict = v1_run_edge_lineage_instance.to_dict()
# create an instance of V1RunEdgeLineage from a dict
v1_run_edge_lineage_form_dict = v1_run_edge_lineage.from_dict(v1_run_edge_lineage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


