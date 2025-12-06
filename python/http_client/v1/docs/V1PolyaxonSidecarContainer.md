# V1PolyaxonSidecarContainer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** |  | [optional] 
**image_tag** | **str** |  | [optional] 
**image_pull_policy** | **str** |  | [optional] 
**sleep_interval** | **int** |  | [optional] 
**sync_interval** | **int** |  | [optional] 
**monitor_logs** | **bool** |  | [optional] 
**monitor_spec** | **bool** |  | [optional] 
**no_connections** | **bool** |  | [optional] 
**resources** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_polyaxon_sidecar_container import V1PolyaxonSidecarContainer

# TODO update the JSON string below
json = "{}"
# create an instance of V1PolyaxonSidecarContainer from a JSON string
v1_polyaxon_sidecar_container_instance = V1PolyaxonSidecarContainer.from_json(json)
# print the JSON string representation of the object
print V1PolyaxonSidecarContainer.to_json()

# convert the object into a dict
v1_polyaxon_sidecar_container_dict = v1_polyaxon_sidecar_container_instance.to_dict()
# create an instance of V1PolyaxonSidecarContainer from a dict
v1_polyaxon_sidecar_container_form_dict = v1_polyaxon_sidecar_container.from_dict(v1_polyaxon_sidecar_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


