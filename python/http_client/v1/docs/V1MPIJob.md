# V1MPIJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'mpi_job']
**clean_pod_policy** | [**V1CleanPodPolicy**](V1CleanPodPolicy.md) |  | [optional] 
**scheduling_policy** | [**V1SchedulingPolicy**](V1SchedulingPolicy.md) |  | [optional] 
**ssh_auth_mount_path** | **str** |  | [optional] 
**implementation** | [**MPIJobImplementation**](MPIJobImplementation.md) |  | [optional] 
**slots_per_worker** | **int** |  | [optional] 
**worker** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**launcher** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


