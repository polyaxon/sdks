# V1Pipeline


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**kind** | [**V1PipelineKind**](V1PipelineKind.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_pipeline import V1Pipeline

# TODO update the JSON string below
json = "{}"
# create an instance of V1Pipeline from a JSON string
v1_pipeline_instance = V1Pipeline.from_json(json)
# print the JSON string representation of the object
print V1Pipeline.to_json()

# convert the object into a dict
v1_pipeline_dict = v1_pipeline_instance.to_dict()
# create an instance of V1Pipeline from a dict
v1_pipeline_form_dict = v1_pipeline.from_dict(v1_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


