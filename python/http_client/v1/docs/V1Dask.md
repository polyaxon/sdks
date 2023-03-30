# V1Dask


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dask']
**threads** | **int** |  | [optional] 
**scale** | **int** |  | [optional] 
**adapt_min** | **int** |  | [optional] 
**adapt_max** | **int** |  | [optional] 
**adapt_interval** | **str** |  | [optional] 
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** | Volumes is a list of volumes that can be mounted. | [optional] 
**init** | [**List[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | **List[object]** |  | [optional] 
**container** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dask import V1Dask

# TODO update the JSON string below
json = "{}"
# create an instance of V1Dask from a JSON string
v1_dask_instance = V1Dask.from_json(json)
# print the JSON string representation of the object
print V1Dask.to_json()

# convert the object into a dict
v1_dask_dict = v1_dask_instance.to_dict()
# create an instance of V1Dask from a dict
v1_dask_form_dict = v1_dask.from_dict(v1_dask_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


