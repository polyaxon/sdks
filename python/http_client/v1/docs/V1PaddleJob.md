# V1PaddleJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'paddlejob']
**clean_pod_policy** | [**V1CleanPodPolicy**](V1CleanPodPolicy.md) |  | [optional] 
**scheduling_policy** | [**V1SchedulingPolicy**](V1SchedulingPolicy.md) |  | [optional] 
**elastic_policy** | [**V1PaddleElasticPolic**](V1PaddleElasticPolic.md) |  | [optional] 
**master** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 
**worker** | [**V1KFReplica**](V1KFReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_paddle_job import V1PaddleJob

# TODO update the JSON string below
json = "{}"
# create an instance of V1PaddleJob from a JSON string
v1_paddle_job_instance = V1PaddleJob.from_json(json)
# print the JSON string representation of the object
print V1PaddleJob.to_json()

# convert the object into a dict
v1_paddle_job_dict = v1_paddle_job_instance.to_dict()
# create an instance of V1PaddleJob from a dict
v1_paddle_job_form_dict = v1_paddle_job.from_dict(v1_paddle_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


