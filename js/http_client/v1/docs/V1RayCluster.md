# PolyaxonSdk.V1RayCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** |  | [optional] [default to &#39;raycluster&#39;]
**entrypoint** | **String** |  | [optional] 
**runtimeEnv** | **Object** |  | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**rayVersion** | **String** |  | [optional] 
**head** | [**V1RayReplica**](V1RayReplica.md) |  | [optional] 
**workers** | [**[V1RayReplica]**](V1RayReplica.md) |  | [optional] 
**enableInTreeAutoscaling** | **Boolean** |  | [optional] 
**autoscalerOptions** | [**V1RayAutoscalerOptions**](V1RayAutoscalerOptions.md) |  | [optional] 


