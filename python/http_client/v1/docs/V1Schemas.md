# V1Schemas


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**early_stopping** | [**V1EarlyStopping**](V1EarlyStopping.md) |  | [optional] 
**matrix** | [**V1Matrix**](V1Matrix.md) |  | [optional] 
**run** | [**V1RunSchema**](V1RunSchema.md) |  | [optional] 
**operation** | [**V1Operation**](V1Operation.md) |  | [optional] 
**compiled_operation** | [**V1CompiledOperation**](V1CompiledOperation.md) |  | [optional] 
**schedule** | [**V1Schedule**](V1Schedule.md) |  | [optional] 
**connection_schema** | [**V1ConnectionSchema**](V1ConnectionSchema.md) |  | [optional] 
**hp_params** | [**V1HpParams**](V1HpParams.md) |  | [optional] 
**reference** | [**V1Reference**](V1Reference.md) |  | [optional] 
**artifacts_mount** | [**V1ArtifactsMount**](V1ArtifactsMount.md) |  | [optional] 
**polyaxon_sidecar_container** | [**V1PolyaxonSidecarContainer**](V1PolyaxonSidecarContainer.md) |  | [optional] 
**polyaxon_init_container** | [**V1PolyaxonInitContainer**](V1PolyaxonInitContainer.md) |  | [optional] 
**artifacs** | [**V1ArtifactsType**](V1ArtifactsType.md) |  | [optional] 
**wasb** | [**V1WasbType**](V1WasbType.md) |  | [optional] 
**gcs** | [**V1GcsType**](V1GcsType.md) |  | [optional] 
**s3** | [**V1S3Type**](V1S3Type.md) |  | [optional] 
**auth** | [**V1AuthType**](V1AuthType.md) |  | [optional] 
**uri** | [**V1UriType**](V1UriType.md) |  | [optional] 
**resource** | [**V1ConnectionResource**](V1ConnectionResource.md) |  | [optional] 
**connection** | [**V1ConnectionType**](V1ConnectionType.md) |  | [optional] 
**event_type** | [**V1EventType**](V1EventType.md) |  | [optional] 
**matrix_kind** | [**V1MatrixKind**](V1MatrixKind.md) |  | [optional] 
**schedule_kind** | [**V1ScheduleKind**](V1ScheduleKind.md) |  | [optional] 
**event** | [**V1Event**](V1Event.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_schemas import V1Schemas

# TODO update the JSON string below
json = "{}"
# create an instance of V1Schemas from a JSON string
v1_schemas_instance = V1Schemas.from_json(json)
# print the JSON string representation of the object
print V1Schemas.to_json()

# convert the object into a dict
v1_schemas_dict = v1_schemas_instance.to_dict()
# create an instance of V1Schemas from a dict
v1_schemas_form_dict = v1_schemas.from_dict(v1_schemas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


