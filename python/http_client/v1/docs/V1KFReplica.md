# V1KFReplica


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicas** | **int** |  | [optional] 
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** |  | [optional] 
**init** | [**List[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | **List[object]** |  | [optional] 
**container** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_kf_replica import V1KFReplica

# TODO update the JSON string below
json = "{}"
# create an instance of V1KFReplica from a JSON string
v1_kf_replica_instance = V1KFReplica.from_json(json)
# print the JSON string representation of the object
print V1KFReplica.to_json()

# convert the object into a dict
v1_kf_replica_dict = v1_kf_replica_instance.to_dict()
# create an instance of V1KFReplica from a dict
v1_kf_replica_form_dict = v1_kf_replica.from_dict(v1_kf_replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


