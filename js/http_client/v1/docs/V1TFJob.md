# PolyaxonSdk.V1TFJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** |  | [optional] [default to &#39;tfjob&#39;]
**cleanPodPolicy** | [**V1CleanPodPolicy**](V1CleanPodPolicy.md) |  | [optional] 
**schedulingPolicy** | [**V1SchedulingPolicy**](V1SchedulingPolicy.md) |  | [optional] 
**successPolicy** | **String** |  | [optional] 
**enableDynamicWorker** | **Boolean** |  | [optional] 
**chief** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**worker** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**ps** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**evaluator** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 


