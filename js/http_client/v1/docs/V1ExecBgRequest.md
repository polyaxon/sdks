# PolyaxonSdk.V1ExecBgRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **[String]** | Command argv. No shell interpolation unless the caller passes a shell. | [optional] 
**env** | **Object** | Environment overrides. JSON null means unset the key. | [optional] 
**workdir** | **String** | Working directory. | [optional] 
**stdin** | **String** | Base64-encoded stdin bytes. | [optional] 
**timeout_ms** | **Number** | Timeout in milliseconds. | [optional] 
**tag** | **String** | Optional reconnect handle. | [optional] 


