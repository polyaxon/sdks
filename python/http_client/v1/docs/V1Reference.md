# V1Reference


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hub_ref** | [**V1HubRef**](V1HubRef.md) |  | [optional] 
**dag_ref** | [**V1DagRef**](V1DagRef.md) |  | [optional] 
**url_ref** | [**V1UrlRef**](V1UrlRef.md) |  | [optional] 
**path_ref** | [**V1PathRef**](V1PathRef.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_reference import V1Reference

# TODO update the JSON string below
json = "{}"
# create an instance of V1Reference from a JSON string
v1_reference_instance = V1Reference.from_json(json)
# print the JSON string representation of the object
print V1Reference.to_json()

# convert the object into a dict
v1_reference_dict = v1_reference_instance.to_dict()
# create an instance of V1Reference from a dict
v1_reference_form_dict = v1_reference.from_dict(v1_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


