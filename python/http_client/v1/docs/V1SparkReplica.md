# V1SparkReplica


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicas** | **int** |  | [optional] 
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**init** | [**List[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | **List[object]** |  | [optional] 
**container** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_spark_replica import V1SparkReplica

# TODO update the JSON string below
json = "{}"
# create an instance of V1SparkReplica from a JSON string
v1_spark_replica_instance = V1SparkReplica.from_json(json)
# print the JSON string representation of the object
print V1SparkReplica.to_json()

# convert the object into a dict
v1_spark_replica_dict = v1_spark_replica_instance.to_dict()
# create an instance of V1SparkReplica from a dict
v1_spark_replica_form_dict = v1_spark_replica.from_dict(v1_spark_replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


