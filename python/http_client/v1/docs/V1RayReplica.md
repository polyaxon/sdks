# V1RayReplica


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicas** | **int** |  | [optional] 
**min_replicas** | **int** |  | [optional] 
**max_replicas** | **int** |  | [optional] 
**group_name** | **str** |  | [optional] 
**ray_start_params** | **Dict[str, str]** |  | [optional] 
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** | Volumes is a list of volumes that can be mounted. | [optional] 
**init** | [**List[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | **List[object]** |  | [optional] 
**container** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_ray_replica import V1RayReplica

# TODO update the JSON string below
json = "{}"
# create an instance of V1RayReplica from a JSON string
v1_ray_replica_instance = V1RayReplica.from_json(json)
# print the JSON string representation of the object
print V1RayReplica.to_json()

# convert the object into a dict
v1_ray_replica_dict = v1_ray_replica_instance.to_dict()
# create an instance of V1RayReplica from a dict
v1_ray_replica_form_dict = v1_ray_replica.from_dict(v1_ray_replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


