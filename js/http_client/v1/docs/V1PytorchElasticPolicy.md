# PolyaxonSdk.V1PytorchElasticPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minReplicas** | **Number** | minReplicas is the lower limit for the number of replicas to which the training job can scale down. | [optional] 
**maxReplicas** | **Number** | upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas, defaults to null. | [optional] 
**rdvzBackend** | **String** |  | [optional] 
**rdvzPort** | **Number** |  | [optional] 
**rdvzHost** | **String** |  | [optional] 
**rdvzId** | **String** |  | [optional] 
**rdvzConf** | **[Object]** | RDZVConf contains additional rendezvous configuration (&lt;key1&gt;&#x3D;&lt;value1&gt;,&lt;key2&gt;&#x3D;&lt;value2&gt;,...). | [optional] 
**standalone** | **Boolean** | Start a local standalone rendezvous backend that is represented by a C10d TCP store on port 29400. Useful when launching single-node, multi-worker job. If specified --rdzv_backend, --rdzv_endpoint, --rdzv_id are auto-assigned; any explicitly set values are ignored. | [optional] 
**nProcPerNode** | **Number** | Number of workers per node; supported values: [auto, cpu, gpu, int]. Deprecated: This API is deprecated in v1.7+ Use .spec.nprocPerNode instead. | [optional] 
**maxRestarts** | **Number** |  | [optional] 
**Metrics** | **[Object]** | Metrics contains the specifications which are used to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated with multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the HPA will not be created. | [optional] 


