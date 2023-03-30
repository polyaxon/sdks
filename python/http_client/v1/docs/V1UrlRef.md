# V1UrlRef


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'url_ref']
**url** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_url_ref import V1UrlRef

# TODO update the JSON string below
json = "{}"
# create an instance of V1UrlRef from a JSON string
v1_url_ref_instance = V1UrlRef.from_json(json)
# print the JSON string representation of the object
print V1UrlRef.to_json()

# convert the object into a dict
v1_url_ref_dict = v1_url_ref_instance.to_dict()
# create an instance of V1UrlRef from a dict
v1_url_ref_form_dict = v1_url_ref.from_dict(v1_url_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


