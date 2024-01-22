/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc10
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * V1Environment
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Environment {
  public static final String SERIALIZED_NAME_LABELS = "labels";
  @SerializedName(SERIALIZED_NAME_LABELS)
  private Map<String, String> labels = new HashMap<>();

  public static final String SERIALIZED_NAME_ANNOTATIONS = "annotations";
  @SerializedName(SERIALIZED_NAME_ANNOTATIONS)
  private Map<String, String> annotations = new HashMap<>();

  public static final String SERIALIZED_NAME_NODE_SELECTOR = "nodeSelector";
  @SerializedName(SERIALIZED_NAME_NODE_SELECTOR)
  private Map<String, String> nodeSelector = new HashMap<>();

  public static final String SERIALIZED_NAME_AFFINITY = "affinity";
  @SerializedName(SERIALIZED_NAME_AFFINITY)
  private Object affinity;

  public static final String SERIALIZED_NAME_TOLERATIONS = "tolerations";
  @SerializedName(SERIALIZED_NAME_TOLERATIONS)
  private List<Object> tolerations;

  public static final String SERIALIZED_NAME_NODE_NAME = "nodeName";
  @SerializedName(SERIALIZED_NAME_NODE_NAME)
  private String nodeName;

  public static final String SERIALIZED_NAME_SERVICE_ACCOUNT_NAME = "serviceAccountName";
  @SerializedName(SERIALIZED_NAME_SERVICE_ACCOUNT_NAME)
  private String serviceAccountName;

  public static final String SERIALIZED_NAME_HOST_ALIASES = "hostAliases";
  @SerializedName(SERIALIZED_NAME_HOST_ALIASES)
  private List<Object> hostAliases;

  public static final String SERIALIZED_NAME_SECURITY_CONTEXT = "securityContext";
  @SerializedName(SERIALIZED_NAME_SECURITY_CONTEXT)
  private Object securityContext;

  public static final String SERIALIZED_NAME_IMAGE_PULL_SECRETS = "imagePullSecrets";
  @SerializedName(SERIALIZED_NAME_IMAGE_PULL_SECRETS)
  private List<String> imagePullSecrets;

  public static final String SERIALIZED_NAME_HOST_NETWORK = "hostNetwork";
  @SerializedName(SERIALIZED_NAME_HOST_NETWORK)
  private Boolean hostNetwork;

  public static final String SERIALIZED_NAME_HOST_P_I_D = "hostPID";
  @SerializedName(SERIALIZED_NAME_HOST_P_I_D)
  private String hostPID;

  public static final String SERIALIZED_NAME_DNS_POLICY = "dnsPolicy";
  @SerializedName(SERIALIZED_NAME_DNS_POLICY)
  private String dnsPolicy;

  public static final String SERIALIZED_NAME_DNS_CONFIG = "dnsConfig";
  @SerializedName(SERIALIZED_NAME_DNS_CONFIG)
  private Object dnsConfig;

  public static final String SERIALIZED_NAME_SCHEDULER_NAME = "schedulerName";
  @SerializedName(SERIALIZED_NAME_SCHEDULER_NAME)
  private String schedulerName;

  public static final String SERIALIZED_NAME_PRIORITY_CLASS_NAME = "priorityClassName";
  @SerializedName(SERIALIZED_NAME_PRIORITY_CLASS_NAME)
  private String priorityClassName;

  public static final String SERIALIZED_NAME_PRIORITY = "priority";
  @SerializedName(SERIALIZED_NAME_PRIORITY)
  private Integer priority;

  public static final String SERIALIZED_NAME_RESTART_POLICY = "restartPolicy";
  @SerializedName(SERIALIZED_NAME_RESTART_POLICY)
  private String restartPolicy;

  public V1Environment() {
  }

  public V1Environment labels(Map<String, String> labels) {

    this.labels = labels;
    return this;
  }

  public V1Environment putLabelsItem(String key, String labelsItem) {
    if (this.labels == null) {
      this.labels = new HashMap<>();
    }
    this.labels.put(key, labelsItem);
    return this;
  }

   /**
   * Get labels
   * @return labels
  **/
  @javax.annotation.Nullable

  public Map<String, String> getLabels() {
    return labels;
  }


  public void setLabels(Map<String, String> labels) {
    this.labels = labels;
  }


  public V1Environment annotations(Map<String, String> annotations) {

    this.annotations = annotations;
    return this;
  }

  public V1Environment putAnnotationsItem(String key, String annotationsItem) {
    if (this.annotations == null) {
      this.annotations = new HashMap<>();
    }
    this.annotations.put(key, annotationsItem);
    return this;
  }

   /**
   * Get annotations
   * @return annotations
  **/
  @javax.annotation.Nullable

  public Map<String, String> getAnnotations() {
    return annotations;
  }


  public void setAnnotations(Map<String, String> annotations) {
    this.annotations = annotations;
  }


  public V1Environment nodeSelector(Map<String, String> nodeSelector) {

    this.nodeSelector = nodeSelector;
    return this;
  }

  public V1Environment putNodeSelectorItem(String key, String nodeSelectorItem) {
    if (this.nodeSelector == null) {
      this.nodeSelector = new HashMap<>();
    }
    this.nodeSelector.put(key, nodeSelectorItem);
    return this;
  }

   /**
   * Get nodeSelector
   * @return nodeSelector
  **/
  @javax.annotation.Nullable

  public Map<String, String> getNodeSelector() {
    return nodeSelector;
  }


  public void setNodeSelector(Map<String, String> nodeSelector) {
    this.nodeSelector = nodeSelector;
  }


  public V1Environment affinity(Object affinity) {

    this.affinity = affinity;
    return this;
  }

   /**
   * Get affinity
   * @return affinity
  **/
  @javax.annotation.Nullable

  public Object getAffinity() {
    return affinity;
  }


  public void setAffinity(Object affinity) {
    this.affinity = affinity;
  }


  public V1Environment tolerations(List<Object> tolerations) {

    this.tolerations = tolerations;
    return this;
  }

  public V1Environment addTolerationsItem(Object tolerationsItem) {
    if (this.tolerations == null) {
      this.tolerations = new ArrayList<>();
    }
    this.tolerations.add(tolerationsItem);
    return this;
  }

   /**
   * Optional Tolerations to apply.
   * @return tolerations
  **/
  @javax.annotation.Nullable

  public List<Object> getTolerations() {
    return tolerations;
  }


  public void setTolerations(List<Object> tolerations) {
    this.tolerations = tolerations;
  }


  public V1Environment nodeName(String nodeName) {

    this.nodeName = nodeName;
    return this;
  }

   /**
   * Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
   * @return nodeName
  **/
  @javax.annotation.Nullable

  public String getNodeName() {
    return nodeName;
  }


  public void setNodeName(String nodeName) {
    this.nodeName = nodeName;
  }


  public V1Environment serviceAccountName(String serviceAccountName) {

    this.serviceAccountName = serviceAccountName;
    return this;
  }

   /**
   * Get serviceAccountName
   * @return serviceAccountName
  **/
  @javax.annotation.Nullable

  public String getServiceAccountName() {
    return serviceAccountName;
  }


  public void setServiceAccountName(String serviceAccountName) {
    this.serviceAccountName = serviceAccountName;
  }


  public V1Environment hostAliases(List<Object> hostAliases) {

    this.hostAliases = hostAliases;
    return this;
  }

  public V1Environment addHostAliasesItem(Object hostAliasesItem) {
    if (this.hostAliases == null) {
      this.hostAliases = new ArrayList<>();
    }
    this.hostAliases.add(hostAliasesItem);
    return this;
  }

   /**
   * Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec.
   * @return hostAliases
  **/
  @javax.annotation.Nullable

  public List<Object> getHostAliases() {
    return hostAliases;
  }


  public void setHostAliases(List<Object> hostAliases) {
    this.hostAliases = hostAliases;
  }


  public V1Environment securityContext(Object securityContext) {

    this.securityContext = securityContext;
    return this;
  }

   /**
   * Get securityContext
   * @return securityContext
  **/
  @javax.annotation.Nullable

  public Object getSecurityContext() {
    return securityContext;
  }


  public void setSecurityContext(Object securityContext) {
    this.securityContext = securityContext;
  }


  public V1Environment imagePullSecrets(List<String> imagePullSecrets) {

    this.imagePullSecrets = imagePullSecrets;
    return this;
  }

  public V1Environment addImagePullSecretsItem(String imagePullSecretsItem) {
    if (this.imagePullSecrets == null) {
      this.imagePullSecrets = new ArrayList<>();
    }
    this.imagePullSecrets.add(imagePullSecretsItem);
    return this;
  }

   /**
   * Get imagePullSecrets
   * @return imagePullSecrets
  **/
  @javax.annotation.Nullable

  public List<String> getImagePullSecrets() {
    return imagePullSecrets;
  }


  public void setImagePullSecrets(List<String> imagePullSecrets) {
    this.imagePullSecrets = imagePullSecrets;
  }


  public V1Environment hostNetwork(Boolean hostNetwork) {

    this.hostNetwork = hostNetwork;
    return this;
  }

   /**
   * Host networking requested for this workflow pod. Default to false.
   * @return hostNetwork
  **/
  @javax.annotation.Nullable

  public Boolean getHostNetwork() {
    return hostNetwork;
  }


  public void setHostNetwork(Boolean hostNetwork) {
    this.hostNetwork = hostNetwork;
  }


  public V1Environment hostPID(String hostPID) {

    this.hostPID = hostPID;
    return this;
  }

   /**
   * Use the host&#39;s pid namespace. Default to false.
   * @return hostPID
  **/
  @javax.annotation.Nullable

  public String getHostPID() {
    return hostPID;
  }


  public void setHostPID(String hostPID) {
    this.hostPID = hostPID;
  }


  public V1Environment dnsPolicy(String dnsPolicy) {

    this.dnsPolicy = dnsPolicy;
    return this;
  }

   /**
   * Set DNS policy for the pod. Defaults to \&quot;ClusterFirst\&quot;. Valid values are &#39;ClusterFirstWithHostNet&#39;, &#39;ClusterFirst&#39;, &#39;Default&#39; or &#39;None&#39;. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to &#39;ClusterFirstWithHostNet&#39;.
   * @return dnsPolicy
  **/
  @javax.annotation.Nullable

  public String getDnsPolicy() {
    return dnsPolicy;
  }


  public void setDnsPolicy(String dnsPolicy) {
    this.dnsPolicy = dnsPolicy;
  }


  public V1Environment dnsConfig(Object dnsConfig) {

    this.dnsConfig = dnsConfig;
    return this;
  }

   /**
   * Get dnsConfig
   * @return dnsConfig
  **/
  @javax.annotation.Nullable

  public Object getDnsConfig() {
    return dnsConfig;
  }


  public void setDnsConfig(Object dnsConfig) {
    this.dnsConfig = dnsConfig;
  }


  public V1Environment schedulerName(String schedulerName) {

    this.schedulerName = schedulerName;
    return this;
  }

   /**
   * Get schedulerName
   * @return schedulerName
  **/
  @javax.annotation.Nullable

  public String getSchedulerName() {
    return schedulerName;
  }


  public void setSchedulerName(String schedulerName) {
    this.schedulerName = schedulerName;
  }


  public V1Environment priorityClassName(String priorityClassName) {

    this.priorityClassName = priorityClassName;
    return this;
  }

   /**
   * If specified, indicates the pod&#39;s priority. \&quot;system-node-critical\&quot; and \&quot;system-cluster-critical\&quot; are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
   * @return priorityClassName
  **/
  @javax.annotation.Nullable

  public String getPriorityClassName() {
    return priorityClassName;
  }


  public void setPriorityClassName(String priorityClassName) {
    this.priorityClassName = priorityClassName;
  }


  public V1Environment priority(Integer priority) {

    this.priority = priority;
    return this;
  }

   /**
   * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
   * @return priority
  **/
  @javax.annotation.Nullable

  public Integer getPriority() {
    return priority;
  }


  public void setPriority(Integer priority) {
    this.priority = priority;
  }


  public V1Environment restartPolicy(String restartPolicy) {

    this.restartPolicy = restartPolicy;
    return this;
  }

   /**
   * Get restartPolicy
   * @return restartPolicy
  **/
  @javax.annotation.Nullable

  public String getRestartPolicy() {
    return restartPolicy;
  }


  public void setRestartPolicy(String restartPolicy) {
    this.restartPolicy = restartPolicy;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Environment v1Environment = (V1Environment) o;
    return Objects.equals(this.labels, v1Environment.labels) &&
        Objects.equals(this.annotations, v1Environment.annotations) &&
        Objects.equals(this.nodeSelector, v1Environment.nodeSelector) &&
        Objects.equals(this.affinity, v1Environment.affinity) &&
        Objects.equals(this.tolerations, v1Environment.tolerations) &&
        Objects.equals(this.nodeName, v1Environment.nodeName) &&
        Objects.equals(this.serviceAccountName, v1Environment.serviceAccountName) &&
        Objects.equals(this.hostAliases, v1Environment.hostAliases) &&
        Objects.equals(this.securityContext, v1Environment.securityContext) &&
        Objects.equals(this.imagePullSecrets, v1Environment.imagePullSecrets) &&
        Objects.equals(this.hostNetwork, v1Environment.hostNetwork) &&
        Objects.equals(this.hostPID, v1Environment.hostPID) &&
        Objects.equals(this.dnsPolicy, v1Environment.dnsPolicy) &&
        Objects.equals(this.dnsConfig, v1Environment.dnsConfig) &&
        Objects.equals(this.schedulerName, v1Environment.schedulerName) &&
        Objects.equals(this.priorityClassName, v1Environment.priorityClassName) &&
        Objects.equals(this.priority, v1Environment.priority) &&
        Objects.equals(this.restartPolicy, v1Environment.restartPolicy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(labels, annotations, nodeSelector, affinity, tolerations, nodeName, serviceAccountName, hostAliases, securityContext, imagePullSecrets, hostNetwork, hostPID, dnsPolicy, dnsConfig, schedulerName, priorityClassName, priority, restartPolicy);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Environment {\n");
    sb.append("    labels: ").append(toIndentedString(labels)).append("\n");
    sb.append("    annotations: ").append(toIndentedString(annotations)).append("\n");
    sb.append("    nodeSelector: ").append(toIndentedString(nodeSelector)).append("\n");
    sb.append("    affinity: ").append(toIndentedString(affinity)).append("\n");
    sb.append("    tolerations: ").append(toIndentedString(tolerations)).append("\n");
    sb.append("    nodeName: ").append(toIndentedString(nodeName)).append("\n");
    sb.append("    serviceAccountName: ").append(toIndentedString(serviceAccountName)).append("\n");
    sb.append("    hostAliases: ").append(toIndentedString(hostAliases)).append("\n");
    sb.append("    securityContext: ").append(toIndentedString(securityContext)).append("\n");
    sb.append("    imagePullSecrets: ").append(toIndentedString(imagePullSecrets)).append("\n");
    sb.append("    hostNetwork: ").append(toIndentedString(hostNetwork)).append("\n");
    sb.append("    hostPID: ").append(toIndentedString(hostPID)).append("\n");
    sb.append("    dnsPolicy: ").append(toIndentedString(dnsPolicy)).append("\n");
    sb.append("    dnsConfig: ").append(toIndentedString(dnsConfig)).append("\n");
    sb.append("    schedulerName: ").append(toIndentedString(schedulerName)).append("\n");
    sb.append("    priorityClassName: ").append(toIndentedString(priorityClassName)).append("\n");
    sb.append("    priority: ").append(toIndentedString(priority)).append("\n");
    sb.append("    restartPolicy: ").append(toIndentedString(restartPolicy)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("labels");
    openapiFields.add("annotations");
    openapiFields.add("nodeSelector");
    openapiFields.add("affinity");
    openapiFields.add("tolerations");
    openapiFields.add("nodeName");
    openapiFields.add("serviceAccountName");
    openapiFields.add("hostAliases");
    openapiFields.add("securityContext");
    openapiFields.add("imagePullSecrets");
    openapiFields.add("hostNetwork");
    openapiFields.add("hostPID");
    openapiFields.add("dnsPolicy");
    openapiFields.add("dnsConfig");
    openapiFields.add("schedulerName");
    openapiFields.add("priorityClassName");
    openapiFields.add("priority");
    openapiFields.add("restartPolicy");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Environment
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Environment.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Environment is not found in the empty JSON string", V1Environment.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Environment.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Environment` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("tolerations") != null && !jsonObj.get("tolerations").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `tolerations` to be an array in the JSON string but got `%s`", jsonObj.get("tolerations").toString()));
      }
      if ((jsonObj.get("nodeName") != null && !jsonObj.get("nodeName").isJsonNull()) && !jsonObj.get("nodeName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `nodeName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("nodeName").toString()));
      }
      if ((jsonObj.get("serviceAccountName") != null && !jsonObj.get("serviceAccountName").isJsonNull()) && !jsonObj.get("serviceAccountName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `serviceAccountName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("serviceAccountName").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("hostAliases") != null && !jsonObj.get("hostAliases").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `hostAliases` to be an array in the JSON string but got `%s`", jsonObj.get("hostAliases").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("imagePullSecrets") != null && !jsonObj.get("imagePullSecrets").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `imagePullSecrets` to be an array in the JSON string but got `%s`", jsonObj.get("imagePullSecrets").toString()));
      }
      if ((jsonObj.get("hostPID") != null && !jsonObj.get("hostPID").isJsonNull()) && !jsonObj.get("hostPID").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `hostPID` to be a primitive type in the JSON string but got `%s`", jsonObj.get("hostPID").toString()));
      }
      if ((jsonObj.get("dnsPolicy") != null && !jsonObj.get("dnsPolicy").isJsonNull()) && !jsonObj.get("dnsPolicy").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `dnsPolicy` to be a primitive type in the JSON string but got `%s`", jsonObj.get("dnsPolicy").toString()));
      }
      if ((jsonObj.get("schedulerName") != null && !jsonObj.get("schedulerName").isJsonNull()) && !jsonObj.get("schedulerName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `schedulerName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("schedulerName").toString()));
      }
      if ((jsonObj.get("priorityClassName") != null && !jsonObj.get("priorityClassName").isJsonNull()) && !jsonObj.get("priorityClassName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `priorityClassName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("priorityClassName").toString()));
      }
      if ((jsonObj.get("restartPolicy") != null && !jsonObj.get("restartPolicy").isJsonNull()) && !jsonObj.get("restartPolicy").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `restartPolicy` to be a primitive type in the JSON string but got `%s`", jsonObj.get("restartPolicy").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Environment.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Environment' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Environment> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Environment.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Environment>() {
           @Override
           public void write(JsonWriter out, V1Environment value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Environment read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Environment given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Environment
  * @throws IOException if the JSON string is invalid with respect to V1Environment
  */
  public static V1Environment fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Environment.class);
  }

 /**
  * Convert an instance of V1Environment to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

