# V1DagRef


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dag_ref']
**name** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_dag_ref import V1DagRef

# TODO update the JSON string below
json = "{}"
# create an instance of V1DagRef from a JSON string
v1_dag_ref_instance = V1DagRef.from_json(json)
# print the JSON string representation of the object
print V1DagRef.to_json()

# convert the object into a dict
v1_dag_ref_dict = v1_dag_ref_instance.to_dict()
# create an instance of V1DagRef from a dict
v1_dag_ref_form_dict = v1_dag_ref.from_dict(v1_dag_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


