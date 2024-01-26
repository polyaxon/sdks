/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc16
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
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Statuses;

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
 * V1Agent
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Agent {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags;

  public static final String SERIALIZED_NAME_LIVE_STATE = "live_state";
  @SerializedName(SERIALIZED_NAME_LIVE_STATE)
  private Integer liveState;

  public static final String SERIALIZED_NAME_NAMESPACE = "namespace";
  @SerializedName(SERIALIZED_NAME_NAMESPACE)
  private String namespace;

  public static final String SERIALIZED_NAME_VERSION_API = "version_api";
  @SerializedName(SERIALIZED_NAME_VERSION_API)
  private Object versionApi;

  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private String version;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private V1Statuses status = V1Statuses.CREATED;

  public static final String SERIALIZED_NAME_IS_REPLICA = "is_replica";
  @SerializedName(SERIALIZED_NAME_IS_REPLICA)
  private Boolean isReplica;

  public static final String SERIALIZED_NAME_IS_UI_MANAGED = "is_ui_managed";
  @SerializedName(SERIALIZED_NAME_IS_UI_MANAGED)
  private Boolean isUiManaged;

  public static final String SERIALIZED_NAME_SETTINGS = "settings";
  @SerializedName(SERIALIZED_NAME_SETTINGS)
  private Object settings;

  public V1Agent() {
  }

  public V1Agent uuid(String uuid) {

    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable

  public String getUuid() {
    return uuid;
  }


  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  public V1Agent name(String name) {

    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1Agent description(String description) {

    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public V1Agent tags(List<String> tags) {

    this.tags = tags;
    return this;
  }

  public V1Agent addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @javax.annotation.Nullable

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public V1Agent liveState(Integer liveState) {

    this.liveState = liveState;
    return this;
  }

   /**
   * Get liveState
   * @return liveState
  **/
  @javax.annotation.Nullable

  public Integer getLiveState() {
    return liveState;
  }


  public void setLiveState(Integer liveState) {
    this.liveState = liveState;
  }


  public V1Agent namespace(String namespace) {

    this.namespace = namespace;
    return this;
  }

   /**
   * Get namespace
   * @return namespace
  **/
  @javax.annotation.Nullable

  public String getNamespace() {
    return namespace;
  }


  public void setNamespace(String namespace) {
    this.namespace = namespace;
  }


  public V1Agent versionApi(Object versionApi) {

    this.versionApi = versionApi;
    return this;
  }

   /**
   * Get versionApi
   * @return versionApi
  **/
  @javax.annotation.Nullable

  public Object getVersionApi() {
    return versionApi;
  }


  public void setVersionApi(Object versionApi) {
    this.versionApi = versionApi;
  }


  public V1Agent version(String version) {

    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @javax.annotation.Nullable

  public String getVersion() {
    return version;
  }


  public void setVersion(String version) {
    this.version = version;
  }


  public V1Agent content(String content) {

    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @javax.annotation.Nullable

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public V1Agent createdAt(OffsetDateTime createdAt) {

    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1Agent updatedAt(OffsetDateTime updatedAt) {

    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  public V1Agent status(V1Statuses status) {

    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable

  public V1Statuses getStatus() {
    return status;
  }


  public void setStatus(V1Statuses status) {
    this.status = status;
  }


  public V1Agent isReplica(Boolean isReplica) {

    this.isReplica = isReplica;
    return this;
  }

   /**
   * Get isReplica
   * @return isReplica
  **/
  @javax.annotation.Nullable

  public Boolean getIsReplica() {
    return isReplica;
  }


  public void setIsReplica(Boolean isReplica) {
    this.isReplica = isReplica;
  }


  public V1Agent isUiManaged(Boolean isUiManaged) {

    this.isUiManaged = isUiManaged;
    return this;
  }

   /**
   * Get isUiManaged
   * @return isUiManaged
  **/
  @javax.annotation.Nullable

  public Boolean getIsUiManaged() {
    return isUiManaged;
  }


  public void setIsUiManaged(Boolean isUiManaged) {
    this.isUiManaged = isUiManaged;
  }


  public V1Agent settings(Object settings) {

    this.settings = settings;
    return this;
  }

   /**
   * Get settings
   * @return settings
  **/
  @javax.annotation.Nullable

  public Object getSettings() {
    return settings;
  }


  public void setSettings(Object settings) {
    this.settings = settings;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Agent v1Agent = (V1Agent) o;
    return Objects.equals(this.uuid, v1Agent.uuid) &&
        Objects.equals(this.name, v1Agent.name) &&
        Objects.equals(this.description, v1Agent.description) &&
        Objects.equals(this.tags, v1Agent.tags) &&
        Objects.equals(this.liveState, v1Agent.liveState) &&
        Objects.equals(this.namespace, v1Agent.namespace) &&
        Objects.equals(this.versionApi, v1Agent.versionApi) &&
        Objects.equals(this.version, v1Agent.version) &&
        Objects.equals(this.content, v1Agent.content) &&
        Objects.equals(this.createdAt, v1Agent.createdAt) &&
        Objects.equals(this.updatedAt, v1Agent.updatedAt) &&
        Objects.equals(this.status, v1Agent.status) &&
        Objects.equals(this.isReplica, v1Agent.isReplica) &&
        Objects.equals(this.isUiManaged, v1Agent.isUiManaged) &&
        Objects.equals(this.settings, v1Agent.settings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, description, tags, liveState, namespace, versionApi, version, content, createdAt, updatedAt, status, isReplica, isUiManaged, settings);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Agent {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    liveState: ").append(toIndentedString(liveState)).append("\n");
    sb.append("    namespace: ").append(toIndentedString(namespace)).append("\n");
    sb.append("    versionApi: ").append(toIndentedString(versionApi)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    isReplica: ").append(toIndentedString(isReplica)).append("\n");
    sb.append("    isUiManaged: ").append(toIndentedString(isUiManaged)).append("\n");
    sb.append("    settings: ").append(toIndentedString(settings)).append("\n");
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
    openapiFields.add("uuid");
    openapiFields.add("name");
    openapiFields.add("description");
    openapiFields.add("tags");
    openapiFields.add("live_state");
    openapiFields.add("namespace");
    openapiFields.add("version_api");
    openapiFields.add("version");
    openapiFields.add("content");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");
    openapiFields.add("status");
    openapiFields.add("is_replica");
    openapiFields.add("is_ui_managed");
    openapiFields.add("settings");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Agent
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Agent.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Agent is not found in the empty JSON string", V1Agent.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Agent.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Agent` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("tags") != null && !jsonObj.get("tags").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `tags` to be an array in the JSON string but got `%s`", jsonObj.get("tags").toString()));
      }
      if ((jsonObj.get("namespace") != null && !jsonObj.get("namespace").isJsonNull()) && !jsonObj.get("namespace").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `namespace` to be a primitive type in the JSON string but got `%s`", jsonObj.get("namespace").toString()));
      }
      if ((jsonObj.get("version") != null && !jsonObj.get("version").isJsonNull()) && !jsonObj.get("version").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `version` to be a primitive type in the JSON string but got `%s`", jsonObj.get("version").toString()));
      }
      if ((jsonObj.get("content") != null && !jsonObj.get("content").isJsonNull()) && !jsonObj.get("content").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `content` to be a primitive type in the JSON string but got `%s`", jsonObj.get("content").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Agent.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Agent' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Agent> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Agent.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Agent>() {
           @Override
           public void write(JsonWriter out, V1Agent value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Agent read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Agent given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Agent
  * @throws IOException if the JSON string is invalid with respect to V1Agent
  */
  public static V1Agent fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Agent.class);
  }

 /**
  * Convert an instance of V1Agent to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

