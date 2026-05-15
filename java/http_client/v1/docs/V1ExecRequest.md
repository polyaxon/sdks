

# V1ExecRequest

Request body for POST /exec.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**command** | **List&lt;String&gt;** | Command argv. No shell interpolation unless the caller passes a shell. |  [optional] |
|**env** | **Object** | Environment overrides. JSON null means unset the key. |  [optional] |
|**workdir** | **String** | Working directory. |  [optional] |
|**stdin** | **String** | Base64-encoded stdin bytes. |  [optional] |
|**timeoutMs** | **Integer** | Timeout in milliseconds. |  [optional] |



