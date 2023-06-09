# V1RunReferenceCatalog


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_run_reference_catalog import V1RunReferenceCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of V1RunReferenceCatalog from a JSON string
v1_run_reference_catalog_instance = V1RunReferenceCatalog.from_json(json)
# print the JSON string representation of the object
print V1RunReferenceCatalog.to_json()

# convert the object into a dict
v1_run_reference_catalog_dict = v1_run_reference_catalog_instance.to_dict()
# create an instance of V1RunReferenceCatalog from a dict
v1_run_reference_catalog_form_dict = v1_run_reference_catalog.from_dict(v1_run_reference_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


