# V1EventImage


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Height of the image. | [optional] 
**width** | **int** | Width of the image. | [optional] 
**colorspace** | **int** |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_event_image import V1EventImage

# TODO update the JSON string below
json = "{}"
# create an instance of V1EventImage from a JSON string
v1_event_image_instance = V1EventImage.from_json(json)
# print the JSON string representation of the object
print V1EventImage.to_json()

# convert the object into a dict
v1_event_image_dict = v1_event_image_instance.to_dict()
# create an instance of V1EventImage from a dict
v1_event_image_form_dict = v1_event_image.from_dict(v1_event_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


