# V1Join


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref** | **str** |  | [optional] 
**query** | **str** |  | [optional] 
**sort** | **str** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**params** | [**Dict[str, V1JoinParam]**](V1JoinParam.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_join import V1Join

# TODO update the JSON string below
json = "{}"
# create an instance of V1Join from a JSON string
v1_join_instance = V1Join.from_json(json)
# print the JSON string representation of the object
print V1Join.to_json()

# convert the object into a dict
v1_join_dict = v1_join_instance.to_dict()
# create an instance of V1Join from a dict
v1_join_form_dict = v1_join.from_dict(v1_join_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


