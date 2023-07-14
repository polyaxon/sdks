# V1MPIJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'mpijob']
**clean_pod_policy** | [**V1CleanPodPolicy**](V1CleanPodPolicy.md) |  | [optional] 
**scheduling_policy** | [**V1SchedulingPolicy**](V1SchedulingPolicy.md) |  | [optional] 
**slots_per_worker** | **int** |  | [optional] 
**worker** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**launcher** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_mpi_job import V1MPIJob

# TODO update the JSON string below
json = "{}"
# create an instance of V1MPIJob from a JSON string
v1_mpi_job_instance = V1MPIJob.from_json(json)
# print the JSON string representation of the object
print V1MPIJob.to_json()

# convert the object into a dict
v1_mpi_job_dict = v1_mpi_job_instance.to_dict()
# create an instance of V1MPIJob from a dict
v1_mpi_job_form_dict = v1_mpi_job.from_dict(v1_mpi_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


