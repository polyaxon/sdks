# V1Service


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'service']
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **list[str]** |  | [optional] 
**volumes** | [**list[V1Volume]**](V1Volume.md) | Volumes is a list of volumes that can be mounted. | [optional] 
**init** | [**list[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | [**list[V1Container]**](V1Container.md) |  | [optional] 
**container** | [**V1Container**](V1Container.md) |  | [optional] 
**ports** | **list[int]** |  | [optional] 
**rewrite_path** | **bool** | Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url. | [optional] 
**is_external** | **bool** | Optional flag to signal to Polyaxon that this service should not go through Polyaxon&#39;s auth Default is false, the service will be controlled by Polyaxon&#39;s auth. | [optional] 
**replicas** | **int** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


