# V1Plugins


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | **bool** |  | [optional] 
**docker** | **bool** |  | [optional] 
**shm** | **bool** |  | [optional] 
**mount_artifacts_store** | **bool** |  | [optional] 
**collect_artifacts** | **bool** |  | [optional] 
**collect_logs** | **bool** |  | [optional] 
**collect_resources** | **bool** |  | [optional] 
**sync_statuses** | **bool** |  | [optional] 
**auto_resume** | **bool** |  | [optional] 
**log_level** | **str** |  | [optional] 
**external_host** | **bool** |  | [optional] 
**sidecar** | [**V1PolyaxonSidecarContainer**](V1PolyaxonSidecarContainer.md) |  | [optional] 
**notifications** | [**List[V1Notification]**](V1Notification.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_plugins import V1Plugins

# TODO update the JSON string below
json = "{}"
# create an instance of V1Plugins from a JSON string
v1_plugins_instance = V1Plugins.from_json(json)
# print the JSON string representation of the object
print V1Plugins.to_json()

# convert the object into a dict
v1_plugins_dict = v1_plugins_instance.to_dict()
# create an instance of V1Plugins from a dict
v1_plugins_form_dict = v1_plugins.from_dict(v1_plugins_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


