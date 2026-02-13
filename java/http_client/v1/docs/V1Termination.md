

# V1Termination

Termination specification, it defines how to handle failures, job runtime, and cleanup policy.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**maxRetries** | **Integer** |  |  [optional] |
|**ttl** | **Integer** |  |  [optional] |
|**timeout** | **Integer** |  |  [optional] |
|**culling** | [**V1Culling**](V1Culling.md) |  |  [optional] |
|**probe** | [**V1ActivityProbe**](V1ActivityProbe.md) |  |  [optional] |
|**podFailurePolicy** | **Object** |  |  [optional] |



