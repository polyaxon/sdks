# PolyaxonSdk.V1CreatePtyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **[String]** | Command argv. Empty means use the server default shell. | [optional] 
**env** | **Object** | Environment overrides. JSON null means unset the key. | [optional] 
**workdir** | **String** | Working directory. | [optional] 
**cols** | **Number** | Terminal columns. | [optional] 
**rows** | **Number** | Terminal rows. | [optional] 
**tag** | **String** | Optional reconnect handle. | [optional] 


