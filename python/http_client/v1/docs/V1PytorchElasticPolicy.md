# V1PytorchElasticPolicy


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_replicas** | **int** | minReplicas is the lower limit for the number of replicas to which the training job can scale down. | [optional] 
**max_replicas** | **int** | upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas, defaults to null. | [optional] 
**rdvz_backend** | **str** |  | [optional] 
**rdvz_port** | **int** |  | [optional] 
**rdvz_host** | **str** |  | [optional] 
**rdvz_id** | **str** |  | [optional] 
**rdvz_conf** | **List[object]** | RDZVConf contains additional rendezvous configuration (&lt;key1&gt;&#x3D;&lt;value1&gt;,&lt;key2&gt;&#x3D;&lt;value2&gt;,...). | [optional] 
**standalone** | **bool** | Start a local standalone rendezvous backend that is represented by a C10d TCP store on port 29400. Useful when launching single-node, multi-worker job. If specified --rdzv_backend, --rdzv_endpoint, --rdzv_id are auto-assigned; any explicitly set values are ignored. | [optional] 
**n_proc_per_node** | **int** | Number of workers per node; supported values: [auto, cpu, gpu, int]. Deprecated: This API is deprecated in v1.7+ Use .spec.nprocPerNode instead. | [optional] 
**max_restarts** | **int** |  | [optional] 
**metrics** | **List[object]** | Metrics contains the specifications which are used to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated with multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the HPA will not be created. | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_pytorch_elastic_policy import V1PytorchElasticPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of V1PytorchElasticPolicy from a JSON string
v1_pytorch_elastic_policy_instance = V1PytorchElasticPolicy.from_json(json)
# print the JSON string representation of the object
print V1PytorchElasticPolicy.to_json()

# convert the object into a dict
v1_pytorch_elastic_policy_dict = v1_pytorch_elastic_policy_instance.to_dict()
# create an instance of V1PytorchElasticPolicy from a dict
v1_pytorch_elastic_policy_form_dict = v1_pytorch_elastic_policy.from_dict(v1_pytorch_elastic_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


