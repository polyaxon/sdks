# V1DaskJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dask_job']
**job** | [**V1DaskReplica**](V1DaskReplica.md) |  | [optional] 
**worker** | [**V1DaskReplica**](V1DaskReplica.md) |  | [optional] 
**scheduler** | [**V1DaskReplica**](V1DaskReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dask_job import V1DaskJob

# TODO update the JSON string below
json = "{}"
# create an instance of V1DaskJob from a JSON string
v1_dask_job_instance = V1DaskJob.from_json(json)
# print the JSON string representation of the object
print V1DaskJob.to_json()

# convert the object into a dict
v1_dask_job_dict = v1_dask_job_instance.to_dict()
# create an instance of V1DaskJob from a dict
v1_dask_job_form_dict = v1_dask_job.from_dict(v1_dask_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


