# V1ServiceShortcut


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ports** | **List[int]** |  | [optional] 
**rewrite_path** | **bool** | Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service should handle a base url. | [optional] 
**is_external** | **bool** | Optional flag to signal to Polyaxon that this service should not go through Polyaxon&#39;s auth Default is false, the service will be controlled by Polyaxon&#39;s auth. | [optional] 
**replicas** | **int** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_service_shortcut import V1ServiceShortcut

# TODO update the JSON string below
json = "{}"
# create an instance of V1ServiceShortcut from a JSON string
v1_service_shortcut_instance = V1ServiceShortcut.from_json(json)
# print the JSON string representation of the object
print V1ServiceShortcut.to_json()

# convert the object into a dict
v1_service_shortcut_dict = v1_service_shortcut_instance.to_dict()
# create an instance of V1ServiceShortcut from a dict
v1_service_shortcut_form_dict = v1_service_shortcut.from_dict(v1_service_shortcut_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


