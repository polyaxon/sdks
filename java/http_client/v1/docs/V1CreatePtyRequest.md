

# V1CreatePtyRequest

Request body for POST /pty.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**command** | **List&lt;String&gt;** | Command argv. Empty means use the server default shell. |  [optional] |
|**env** | **Object** | Environment overrides. JSON null means unset the key. |  [optional] |
|**workdir** | **String** | Working directory. |  [optional] |
|**cols** | **Integer** | Terminal columns. |  [optional] |
|**rows** | **Integer** | Terminal rows. |  [optional] |
|**tag** | **String** | Optional reconnect handle. |  [optional] |



