# V1PolyaxonInitContainer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** |  | [optional] 
**image_tag** | **str** |  | [optional] 
**image_pull_policy** | **str** |  | [optional] 
**resources** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_polyaxon_init_container import V1PolyaxonInitContainer

# TODO update the JSON string below
json = "{}"
# create an instance of V1PolyaxonInitContainer from a JSON string
v1_polyaxon_init_container_instance = V1PolyaxonInitContainer.from_json(json)
# print the JSON string representation of the object
print V1PolyaxonInitContainer.to_json()

# convert the object into a dict
v1_polyaxon_init_container_dict = v1_polyaxon_init_container_instance.to_dict()
# create an instance of V1PolyaxonInitContainer from a dict
v1_polyaxon_init_container_form_dict = v1_polyaxon_init_container.from_dict(v1_polyaxon_init_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


