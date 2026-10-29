

# V1ServiceShortcut


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**ports** | **List&lt;Integer&gt;** |  |  [optional] |
|**rewritePath** | **Boolean** | Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service should handle a base url. |  [optional] |
|**isExternal** | **Boolean** | Optional flag to signal to Polyaxon that this service should not go through Polyaxon&#39;s auth Default is false, the service will be controlled by Polyaxon&#39;s auth. |  [optional] |
|**replicas** | **Integer** |  |  [optional] |



