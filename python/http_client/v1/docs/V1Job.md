# V1Job


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'job']
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** | Volumes is a list of volumes that can be mounted. | [optional] 
**init** | [**List[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | **List[object]** |  | [optional] 
**container** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_job import V1Job

# TODO update the JSON string below
json = "{}"
# create an instance of V1Job from a JSON string
v1_job_instance = V1Job.from_json(json)
# print the JSON string representation of the object
print V1Job.to_json()

# convert the object into a dict
v1_job_dict = v1_job_instance.to_dict()
# create an instance of V1Job from a dict
v1_job_form_dict = v1_job.from_dict(v1_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


