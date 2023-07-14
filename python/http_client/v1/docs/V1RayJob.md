# V1RayJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'rayjob']
**entrypoint** | **str** |  | [optional] 
**runtime_env** | **object** |  | [optional] 
**metadata** | **Dict[str, str]** |  | [optional] 
**ray_version** | **str** |  | [optional] 
**head** | [**V1RayReplica**](V1RayReplica.md) |  | [optional] 
**worker** | [**V1RayReplica**](V1RayReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_ray_job import V1RayJob

# TODO update the JSON string below
json = "{}"
# create an instance of V1RayJob from a JSON string
v1_ray_job_instance = V1RayJob.from_json(json)
# print the JSON string representation of the object
print V1RayJob.to_json()

# convert the object into a dict
v1_ray_job_dict = v1_ray_job_instance.to_dict()
# create an instance of V1RayJob from a dict
v1_ray_job_form_dict = v1_ray_job.from_dict(v1_ray_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


