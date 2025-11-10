# V1RunSchema


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**V1Job**](V1Job.md) |  | [optional] 
**service** | [**V1Service**](V1Service.md) |  | [optional] 
**dag** | [**V1Dag**](V1Dag.md) |  | [optional] 
**tf_job** | [**V1TFJob**](V1TFJob.md) |  | [optional] 
**pytorch_job** | [**V1PytorchJob**](V1PytorchJob.md) |  | [optional] 
**mpi_job** | [**V1MPIJob**](V1MPIJob.md) |  | [optional] 
**daskcluster** | [**V1DaskCluster**](V1DaskCluster.md) |  | [optional] 
**raycluster** | [**V1RayCluster**](V1RayCluster.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_schema import V1RunSchema

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunSchema from a JSON string
v1_run_schema_instance = V1RunSchema.from_json(json)
# print the JSON string representation of the object
print V1RunSchema.to_json()

# convert the object into a dict
v1_run_schema_dict = v1_run_schema_instance.to_dict()
# create an instance of V1RunSchema from a dict
v1_run_schema_form_dict = v1_run_schema.from_dict(v1_run_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


