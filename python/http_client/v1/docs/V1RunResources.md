# V1RunResources


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** |  | [optional] 
**memory** | **float** |  | [optional] 
**gpu** | **float** |  | [optional] 
**custom** | **float** |  | [optional] 
**cost** | **float** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_resources import V1RunResources

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunResources from a JSON string
v1_run_resources_instance = V1RunResources.from_json(json)
# print the JSON string representation of the object
print V1RunResources.to_json()

# convert the object into a dict
v1_run_resources_dict = v1_run_resources_instance.to_dict()
# create an instance of V1RunResources from a dict
v1_run_resources_form_dict = v1_run_resources.from_dict(v1_run_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


