/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc38
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
import java.util.List;
import org.openapitools.client.model.V1Environment;
import org.openapitools.client.model.V1Init;

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
 * V1Service
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Service {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "service";

  public static final String SERIALIZED_NAME_ENVIRONMENT = "environment";
  @SerializedName(SERIALIZED_NAME_ENVIRONMENT)
  private V1Environment environment;

  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<String> connections;

  public static final String SERIALIZED_NAME_VOLUMES = "volumes";
  @SerializedName(SERIALIZED_NAME_VOLUMES)
  private List<Object> volumes;

  public static final String SERIALIZED_NAME_INIT = "init";
  @SerializedName(SERIALIZED_NAME_INIT)
  private List<V1Init> init;

  public static final String SERIALIZED_NAME_SIDECARS = "sidecars";
  @SerializedName(SERIALIZED_NAME_SIDECARS)
  private List<Object> sidecars;

  public static final String SERIALIZED_NAME_CONTAINER = "container";
  @SerializedName(SERIALIZED_NAME_CONTAINER)
  private Object container;

  public static final String SERIALIZED_NAME_PORTS = "ports";
  @SerializedName(SERIALIZED_NAME_PORTS)
  private List<Integer> ports;

  public static final String SERIALIZED_NAME_REWRITE_PATH = "rewritePath";
  @SerializedName(SERIALIZED_NAME_REWRITE_PATH)
  private Boolean rewritePath;

  public static final String SERIALIZED_NAME_IS_EXTERNAL = "isExternal";
  @SerializedName(SERIALIZED_NAME_IS_EXTERNAL)
  private Boolean isExternal;

  public static final String SERIALIZED_NAME_REPLICAS = "replicas";
  @SerializedName(SERIALIZED_NAME_REPLICAS)
  private Integer replicas;

  public V1Service() {
  }

  public V1Service kind(String kind) {

    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1Service environment(V1Environment environment) {

    this.environment = environment;
    return this;
  }

   /**
   * Get environment
   * @return environment
  **/
  @javax.annotation.Nullable

  public V1Environment getEnvironment() {
    return environment;
  }


  public void setEnvironment(V1Environment environment) {
    this.environment = environment;
  }


  public V1Service connections(List<String> connections) {

    this.connections = connections;
    return this;
  }

  public V1Service addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable

  public List<String> getConnections() {
    return connections;
  }


  public void setConnections(List<String> connections) {
    this.connections = connections;
  }


  public V1Service volumes(List<Object> volumes) {

    this.volumes = volumes;
    return this;
  }

  public V1Service addVolumesItem(Object volumesItem) {
    if (this.volumes == null) {
      this.volumes = new ArrayList<>();
    }
    this.volumes.add(volumesItem);
    return this;
  }

   /**
   * Volumes is a list of volumes that can be mounted.
   * @return volumes
  **/
  @javax.annotation.Nullable

  public List<Object> getVolumes() {
    return volumes;
  }


  public void setVolumes(List<Object> volumes) {
    this.volumes = volumes;
  }


  public V1Service init(List<V1Init> init) {

    this.init = init;
    return this;
  }

  public V1Service addInitItem(V1Init initItem) {
    if (this.init == null) {
      this.init = new ArrayList<>();
    }
    this.init.add(initItem);
    return this;
  }

   /**
   * Get init
   * @return init
  **/
  @javax.annotation.Nullable

  public List<V1Init> getInit() {
    return init;
  }


  public void setInit(List<V1Init> init) {
    this.init = init;
  }


  public V1Service sidecars(List<Object> sidecars) {

    this.sidecars = sidecars;
    return this;
  }

  public V1Service addSidecarsItem(Object sidecarsItem) {
    if (this.sidecars == null) {
      this.sidecars = new ArrayList<>();
    }
    this.sidecars.add(sidecarsItem);
    return this;
  }

   /**
   * Get sidecars
   * @return sidecars
  **/
  @javax.annotation.Nullable

  public List<Object> getSidecars() {
    return sidecars;
  }


  public void setSidecars(List<Object> sidecars) {
    this.sidecars = sidecars;
  }


  public V1Service container(Object container) {

    this.container = container;
    return this;
  }

   /**
   * Get container
   * @return container
  **/
  @javax.annotation.Nullable

  public Object getContainer() {
    return container;
  }


  public void setContainer(Object container) {
    this.container = container;
  }


  public V1Service ports(List<Integer> ports) {

    this.ports = ports;
    return this;
  }

  public V1Service addPortsItem(Integer portsItem) {
    if (this.ports == null) {
      this.ports = new ArrayList<>();
    }
    this.ports.add(portsItem);
    return this;
  }

   /**
   * Get ports
   * @return ports
  **/
  @javax.annotation.Nullable

  public List<Integer> getPorts() {
    return ports;
  }


  public void setPorts(List<Integer> ports) {
    this.ports = ports;
  }


  public V1Service rewritePath(Boolean rewritePath) {

    this.rewritePath = rewritePath;
    return this;
  }

   /**
   * Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url.
   * @return rewritePath
  **/
  @javax.annotation.Nullable

  public Boolean getRewritePath() {
    return rewritePath;
  }


  public void setRewritePath(Boolean rewritePath) {
    this.rewritePath = rewritePath;
  }


  public V1Service isExternal(Boolean isExternal) {

    this.isExternal = isExternal;
    return this;
  }

   /**
   * Optional flag to signal to Polyaxon that this service should not go through Polyaxon&#39;s auth Default is false, the service will be controlled by Polyaxon&#39;s auth.
   * @return isExternal
  **/
  @javax.annotation.Nullable

  public Boolean getIsExternal() {
    return isExternal;
  }


  public void setIsExternal(Boolean isExternal) {
    this.isExternal = isExternal;
  }


  public V1Service replicas(Integer replicas) {

    this.replicas = replicas;
    return this;
  }

   /**
   * Get replicas
   * @return replicas
  **/
  @javax.annotation.Nullable

  public Integer getReplicas() {
    return replicas;
  }


  public void setReplicas(Integer replicas) {
    this.replicas = replicas;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Service v1Service = (V1Service) o;
    return Objects.equals(this.kind, v1Service.kind) &&
        Objects.equals(this.environment, v1Service.environment) &&
        Objects.equals(this.connections, v1Service.connections) &&
        Objects.equals(this.volumes, v1Service.volumes) &&
        Objects.equals(this.init, v1Service.init) &&
        Objects.equals(this.sidecars, v1Service.sidecars) &&
        Objects.equals(this.container, v1Service.container) &&
        Objects.equals(this.ports, v1Service.ports) &&
        Objects.equals(this.rewritePath, v1Service.rewritePath) &&
        Objects.equals(this.isExternal, v1Service.isExternal) &&
        Objects.equals(this.replicas, v1Service.replicas);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, environment, connections, volumes, init, sidecars, container, ports, rewritePath, isExternal, replicas);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Service {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    environment: ").append(toIndentedString(environment)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    volumes: ").append(toIndentedString(volumes)).append("\n");
    sb.append("    init: ").append(toIndentedString(init)).append("\n");
    sb.append("    sidecars: ").append(toIndentedString(sidecars)).append("\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
    sb.append("    ports: ").append(toIndentedString(ports)).append("\n");
    sb.append("    rewritePath: ").append(toIndentedString(rewritePath)).append("\n");
    sb.append("    isExternal: ").append(toIndentedString(isExternal)).append("\n");
    sb.append("    replicas: ").append(toIndentedString(replicas)).append("\n");
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
    openapiFields.add("kind");
    openapiFields.add("environment");
    openapiFields.add("connections");
    openapiFields.add("volumes");
    openapiFields.add("init");
    openapiFields.add("sidecars");
    openapiFields.add("container");
    openapiFields.add("ports");
    openapiFields.add("rewritePath");
    openapiFields.add("isExternal");
    openapiFields.add("replicas");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Service
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Service.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Service is not found in the empty JSON string", V1Service.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Service.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Service` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
      // validate the optional field `environment`
      if (jsonObj.get("environment") != null && !jsonObj.get("environment").isJsonNull()) {
        V1Environment.validateJsonObject(jsonObj.getAsJsonObject("environment"));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("connections") != null && !jsonObj.get("connections").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `connections` to be an array in the JSON string but got `%s`", jsonObj.get("connections").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("volumes") != null && !jsonObj.get("volumes").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `volumes` to be an array in the JSON string but got `%s`", jsonObj.get("volumes").toString()));
      }
      if (jsonObj.get("init") != null && !jsonObj.get("init").isJsonNull()) {
        JsonArray jsonArrayinit = jsonObj.getAsJsonArray("init");
        if (jsonArrayinit != null) {
          // ensure the json data is an array
          if (!jsonObj.get("init").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `init` to be an array in the JSON string but got `%s`", jsonObj.get("init").toString()));
          }

          // validate the optional field `init` (array)
          for (int i = 0; i < jsonArrayinit.size(); i++) {
            V1Init.validateJsonObject(jsonArrayinit.get(i).getAsJsonObject());
          };
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("sidecars") != null && !jsonObj.get("sidecars").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `sidecars` to be an array in the JSON string but got `%s`", jsonObj.get("sidecars").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("ports") != null && !jsonObj.get("ports").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `ports` to be an array in the JSON string but got `%s`", jsonObj.get("ports").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Service.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Service' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Service> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Service.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Service>() {
           @Override
           public void write(JsonWriter out, V1Service value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Service read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Service given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Service
  * @throws IOException if the JSON string is invalid with respect to V1Service
  */
  public static V1Service fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Service.class);
  }

 /**
  * Convert an instance of V1Service to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

