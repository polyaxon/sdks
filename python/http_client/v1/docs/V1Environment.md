# V1Environment


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** |  | [optional] 
**annotations** | **Dict[str, str]** |  | [optional] 
**node_selector** | **Dict[str, str]** |  | [optional] 
**affinity** | **object** |  | [optional] 
**tolerations** | **List[object]** | Optional Tolerations to apply. | [optional] 
**node_name** | **str** | Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. | [optional] 
**service_account_name** | **str** |  | [optional] 
**host_aliases** | **List[object]** | Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec. | [optional] 
**security_context** | **object** |  | [optional] 
**image_pull_secrets** | **List[str]** |  | [optional] 
**host_network** | **bool** | Host networking requested for this workflow pod. Default to false. | [optional] 
**host_pid** | **str** | Use the host&#39;s pid namespace. Default to false. | [optional] 
**dns_policy** | **str** | Set DNS policy for the pod. Defaults to \&quot;ClusterFirst\&quot;. Valid values are &#39;ClusterFirstWithHostNet&#39;, &#39;ClusterFirst&#39;, &#39;Default&#39; or &#39;None&#39;. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to &#39;ClusterFirstWithHostNet&#39;. | [optional] 
**dns_config** | **object** |  | [optional] 
**scheduler_name** | **str** |  | [optional] 
**priority_class_name** | **str** | If specified, indicates the pod&#39;s priority. \&quot;system-node-critical\&quot; and \&quot;system-cluster-critical\&quot; are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. | [optional] 
**priority** | **int** | The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. | [optional] 
**restart_policy** | **str** |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_environment import V1Environment

# TODO update the JSON string below
json = "{}"
# create an instance of V1Environment from a JSON string
v1_environment_instance = V1Environment.from_json(json)
# print the JSON string representation of the object
print V1Environment.to_json()

# convert the object into a dict
v1_environment_dict = v1_environment_instance.to_dict()
# create an instance of V1Environment from a dict
v1_environment_form_dict = v1_environment.from_dict(v1_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


