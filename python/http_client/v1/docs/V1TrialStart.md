# V1TrialStart


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**organization** | **str** |  | [optional] 
**plan** | **str** |  | [optional] 
**seats** | **int** |  | [optional] 
**details** | **object** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_trial_start import V1TrialStart

# TODO update the JSON string below
json = "{}"
# create an instance of V1TrialStart from a JSON string
v1_trial_start_instance = V1TrialStart.from_json(json)
# print the JSON string representation of the object
print V1TrialStart.to_json()

# convert the object into a dict
v1_trial_start_dict = v1_trial_start_instance.to_dict()
# create an instance of V1TrialStart from a dict
v1_trial_start_form_dict = v1_trial_start.from_dict(v1_trial_start_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


