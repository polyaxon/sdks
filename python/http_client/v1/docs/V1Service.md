# V1Service


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'service']
**environment** | [**V1Environment**](V1Environment.md) |  | [optional] 
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** | Volumes is a list of volumes that can be mounted. | [optional] 
**init** | [**List[V1Init]**](V1Init.md) |  | [optional] 
**sidecars** | **List[object]** |  | [optional] 
**container** | **object** |  | [optional] 
**ports** | **List[int]** |  | [optional] 
**rewrite_path** | **bool** | Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url. | [optional] 
**is_external** | **bool** | Optional flag to signal to Polyaxon that this service should not go through Polyaxon&#39;s auth Default is false, the service will be controlled by Polyaxon&#39;s auth. | [optional] 
**replicas** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_service import V1Service

# TODO update the JSON string below
json = "{}"
# create an instance of V1Service from a JSON string
v1_service_instance = V1Service.from_json(json)
# print the JSON string representation of the object
print V1Service.to_json()

# convert the object into a dict
v1_service_dict = v1_service_instance.to_dict()
# create an instance of V1Service from a dict
v1_service_form_dict = v1_service.from_dict(v1_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


