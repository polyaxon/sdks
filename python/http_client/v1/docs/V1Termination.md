# V1Termination

Termination specification, it defines how to handle failures, job runtime, and cleanup policy.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_retries** | **int** |  | [optional] 
**ttl** | **int** |  | [optional] 
**timeout** | **int** |  | [optional] 
**culling** | [**V1Culling**](V1Culling.md) |  | [optional] 
**probe** | [**V1ActivityProbe**](V1ActivityProbe.md) |  | [optional] 
**pod_failure_policy** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_termination import V1Termination

# TODO update the JSON string below
json = "{}"
# create an instance of V1Termination from a JSON string
v1_termination_instance = V1Termination.from_json(json)
# print the JSON string representation of the object
print V1Termination.to_json()

# convert the object into a dict
v1_termination_dict = v1_termination_instance.to_dict()
# create an instance of V1Termination from a dict
v1_termination_form_dict = v1_termination.from_dict(v1_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


