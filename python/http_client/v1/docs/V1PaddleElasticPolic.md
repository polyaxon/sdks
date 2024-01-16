# V1PaddleElasticPolic


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_replicas** | **int** |  | [optional] 
**max_replicas** | **int** |  | [optional] 
**max_restarts** | **int** |  | [optional] 
**metrics** | **List[object]** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_paddle_elastic_polic import V1PaddleElasticPolic

# TODO update the JSON string below
json = "{}"
# create an instance of V1PaddleElasticPolic from a JSON string
v1_paddle_elastic_polic_instance = V1PaddleElasticPolic.from_json(json)
# print the JSON string representation of the object
print V1PaddleElasticPolic.to_json()

# convert the object into a dict
v1_paddle_elastic_polic_dict = v1_paddle_elastic_polic_instance.to_dict()
# create an instance of V1PaddleElasticPolic from a dict
v1_paddle_elastic_polic_form_dict = v1_paddle_elastic_polic.from_dict(v1_paddle_elastic_polic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


