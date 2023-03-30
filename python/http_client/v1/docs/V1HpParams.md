# V1HpParams


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choice** | [**V1HpChoice**](V1HpChoice.md) |  | [optional] 
**pchoice** | [**V1HpPChoice**](V1HpPChoice.md) |  | [optional] 
**range** | [**V1HpRange**](V1HpRange.md) |  | [optional] 
**linspace** | [**V1HpLinSpace**](V1HpLinSpace.md) |  | [optional] 
**logspace** | [**V1HpLogSpace**](V1HpLogSpace.md) |  | [optional] 
**geomspace** | [**V1HpGeomSpace**](V1HpGeomSpace.md) |  | [optional] 
**uniform** | [**V1HpUniform**](V1HpUniform.md) |  | [optional] 
**quniform** | [**V1HpQUniform**](V1HpQUniform.md) |  | [optional] 
**loguniform** | [**V1HpLogUniform**](V1HpLogUniform.md) |  | [optional] 
**qloguniform** | [**V1HpQLogUniform**](V1HpQLogUniform.md) |  | [optional] 
**normal** | [**V1HpNormal**](V1HpNormal.md) |  | [optional] 
**qnormal** | [**V1HpQNormal**](V1HpQNormal.md) |  | [optional] 
**lognormal** | [**V1HpLogNormal**](V1HpLogNormal.md) |  | [optional] 
**qlognormal** | [**V1HpQLogNormal**](V1HpQLogNormal.md) |  | [optional] 
**daterange** | [**V1HpDateRange**](V1HpDateRange.md) |  | [optional] 
**datetimerange** | [**V1HpDateTimeRange**](V1HpDateTimeRange.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_hp_params import V1HpParams

# TODO update the JSON string below
json = "{}"
# create an instance of V1HpParams from a JSON string
v1_hp_params_instance = V1HpParams.from_json(json)
# print the JSON string representation of the object
print V1HpParams.to_json()

# convert the object into a dict
v1_hp_params_dict = v1_hp_params_instance.to_dict()
# create an instance of V1HpParams from a dict
v1_hp_params_form_dict = v1_hp_params.from_dict(v1_hp_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


