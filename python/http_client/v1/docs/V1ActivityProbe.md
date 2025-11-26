# V1ActivityProbe


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_exec** | [**V1ActivityProbeExec**](V1ActivityProbeExec.md) |  | [optional] 
**http** | [**V1ActivityProbeHttp**](V1ActivityProbeHttp.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_activity_probe import V1ActivityProbe

# TODO update the JSON string below
json = "{}"
# create an instance of V1ActivityProbe from a JSON string
v1_activity_probe_instance = V1ActivityProbe.from_json(json)
# print the JSON string representation of the object
print V1ActivityProbe.to_json()

# convert the object into a dict
v1_activity_probe_dict = v1_activity_probe_instance.to_dict()
# create an instance of V1ActivityProbe from a dict
v1_activity_probe_form_dict = v1_activity_probe.from_dict(v1_activity_probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


