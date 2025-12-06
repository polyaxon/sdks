# V1RayAutoscalerOptions


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upscaling_mode** | **str** |  | [optional] 
**image_pull_policy** | **str** |  | [optional] 
**resources** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_ray_autoscaler_options import V1RayAutoscalerOptions

# TODO update the JSON string below
json = "{}"
# create an instance of V1RayAutoscalerOptions from a JSON string
v1_ray_autoscaler_options_instance = V1RayAutoscalerOptions.from_json(json)
# print the JSON string representation of the object
print V1RayAutoscalerOptions.to_json()

# convert the object into a dict
v1_ray_autoscaler_options_dict = v1_ray_autoscaler_options_instance.to_dict()
# create an instance of V1RayAutoscalerOptions from a dict
v1_ray_autoscaler_options_form_dict = v1_ray_autoscaler_options.from_dict(v1_ray_autoscaler_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


