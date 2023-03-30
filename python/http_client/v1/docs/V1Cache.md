# V1Cache


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable** | **bool** |  | [optional] 
**ttl** | **int** |  | [optional] 
**io** | **List[str]** |  | [optional] 
**sections** | **List[str]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_cache import V1Cache

# TODO update the JSON string below
json = "{}"
# create an instance of V1Cache from a JSON string
v1_cache_instance = V1Cache.from_json(json)
# print the JSON string representation of the object
print V1Cache.to_json()

# convert the object into a dict
v1_cache_dict = v1_cache_instance.to_dict()
# create an instance of V1Cache from a dict
v1_cache_form_dict = v1_cache.from_dict(v1_cache_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


