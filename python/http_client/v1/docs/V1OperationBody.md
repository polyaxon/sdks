# V1OperationBody


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**is_managed** | **bool** |  | [optional] 
**pending** | [**V1RunPending**](V1RunPending.md) |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**meta_info** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_operation_body import V1OperationBody

# TODO update the JSON string below
json = "{}"
# create an instance of V1OperationBody from a JSON string
v1_operation_body_instance = V1OperationBody.from_json(json)
# print the JSON string representation of the object
print V1OperationBody.to_json()

# convert the object into a dict
v1_operation_body_dict = v1_operation_body_instance.to_dict()
# create an instance of V1OperationBody from a dict
v1_operation_body_form_dict = v1_operation_body.from_dict(v1_operation_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


