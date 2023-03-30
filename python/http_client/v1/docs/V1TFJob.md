# V1TFJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'tfjob']
**clean_pod_policy** | [**V1CleanPodPolicy**](V1CleanPodPolicy.md) |  | [optional] 
**scheduling_policy** | [**V1SchedulingPolicy**](V1SchedulingPolicy.md) |  | [optional] 
**enable_dynamic_worker** | **bool** |  | [optional] 
**chief** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**worker** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**ps** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**evaluator** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_tf_job import V1TFJob

# TODO update the JSON string below
json = "{}"
# create an instance of V1TFJob from a JSON string
v1_tf_job_instance = V1TFJob.from_json(json)
# print the JSON string representation of the object
print V1TFJob.to_json()

# convert the object into a dict
v1_tf_job_dict = v1_tf_job_instance.to_dict()
# create an instance of V1TFJob from a dict
v1_tf_job_form_dict = v1_tf_job.from_dict(v1_tf_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


