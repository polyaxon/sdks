# V1RayCluster


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'raycluster']
**entrypoint** | **str** |  | [optional] 
**runtime_env** | **object** |  | [optional] 
**metadata** | **Dict[str, str]** |  | [optional] 
**ray_version** | **str** |  | [optional] 
**head** | [**V1RayReplica**](V1RayReplica.md) |  | [optional] 
**workers** | [**List[V1RayReplica]**](V1RayReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_ray_cluster import V1RayCluster

# TODO update the JSON string below
json = "{}"
# create an instance of V1RayCluster from a JSON string
v1_ray_cluster_instance = V1RayCluster.from_json(json)
# print the JSON string representation of the object
print V1RayCluster.to_json()

# convert the object into a dict
v1_ray_cluster_dict = v1_ray_cluster_instance.to_dict()
# create an instance of V1RayCluster from a dict
v1_ray_cluster_form_dict = v1_ray_cluster.from_dict(v1_ray_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


