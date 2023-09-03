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
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1ProjectVersionKind;
import org.openapitools.client.model.V1StageCondition;
import org.openapitools.client.model.V1Stages;

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
 * V1ProjectVersion
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ProjectVersion {
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

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_PROJECT = "project";
  @SerializedName(SERIALIZED_NAME_PROJECT)
  private String project;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_RUN = "run";
  @SerializedName(SERIALIZED_NAME_RUN)
  private String run;

  public static final String SERIALIZED_NAME_ARTIFACTS = "artifacts";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS)
  private List<String> artifacts;

  public static final String SERIALIZED_NAME_META_INFO = "meta_info";
  @SerializedName(SERIALIZED_NAME_META_INFO)
  private Object metaInfo;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_STAGE = "stage";
  @SerializedName(SERIALIZED_NAME_STAGE)
  private V1Stages stage = V1Stages.TESTING;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1ProjectVersionKind kind = V1ProjectVersionKind.COMPONENT;

  public static final String SERIALIZED_NAME_STAGE_CONDITIONS = "stage_conditions";
  @SerializedName(SERIALIZED_NAME_STAGE_CONDITIONS)
  private List<V1StageCondition> stageConditions;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_README = "readme";
  @SerializedName(SERIALIZED_NAME_README)
  private String readme;

  public static final String SERIALIZED_NAME_STATE = "state";
  @SerializedName(SERIALIZED_NAME_STATE)
  private String state;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;

  public static final String SERIALIZED_NAME_CONTRIBUTORS = "contributors";
  @SerializedName(SERIALIZED_NAME_CONTRIBUTORS)
  private List<Object> contributors;

  public V1ProjectVersion() {
  }

  public V1ProjectVersion uuid(String uuid) {

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


  public V1ProjectVersion name(String name) {

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


  public V1ProjectVersion description(String description) {

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


  public V1ProjectVersion tags(List<String> tags) {

    this.tags = tags;
    return this;
  }

  public V1ProjectVersion addTagsItem(String tagsItem) {
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


  public V1ProjectVersion owner(String owner) {

    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @javax.annotation.Nullable

  public String getOwner() {
    return owner;
  }


  public void setOwner(String owner) {
    this.owner = owner;
  }


  public V1ProjectVersion project(String project) {

    this.project = project;
    return this;
  }

   /**
   * Get project
   * @return project
  **/
  @javax.annotation.Nullable

  public String getProject() {
    return project;
  }


  public void setProject(String project) {
    this.project = project;
  }


  public V1ProjectVersion connection(String connection) {

    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1ProjectVersion run(String run) {

    this.run = run;
    return this;
  }

   /**
   * Get run
   * @return run
  **/
  @javax.annotation.Nullable

  public String getRun() {
    return run;
  }


  public void setRun(String run) {
    this.run = run;
  }


  public V1ProjectVersion artifacts(List<String> artifacts) {

    this.artifacts = artifacts;
    return this;
  }

  public V1ProjectVersion addArtifactsItem(String artifactsItem) {
    if (this.artifacts == null) {
      this.artifacts = new ArrayList<>();
    }
    this.artifacts.add(artifactsItem);
    return this;
  }

   /**
   * Get artifacts
   * @return artifacts
  **/
  @javax.annotation.Nullable

  public List<String> getArtifacts() {
    return artifacts;
  }


  public void setArtifacts(List<String> artifacts) {
    this.artifacts = artifacts;
  }


  public V1ProjectVersion metaInfo(Object metaInfo) {

    this.metaInfo = metaInfo;
    return this;
  }

   /**
   * Extra information related to the run, lineage, artifacts, ...
   * @return metaInfo
  **/
  @javax.annotation.Nullable

  public Object getMetaInfo() {
    return metaInfo;
  }


  public void setMetaInfo(Object metaInfo) {
    this.metaInfo = metaInfo;
  }


  public V1ProjectVersion createdAt(OffsetDateTime createdAt) {

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


  public V1ProjectVersion updatedAt(OffsetDateTime updatedAt) {

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


  public V1ProjectVersion stage(V1Stages stage) {

    this.stage = stage;
    return this;
  }

   /**
   * Get stage
   * @return stage
  **/
  @javax.annotation.Nullable

  public V1Stages getStage() {
    return stage;
  }


  public void setStage(V1Stages stage) {
    this.stage = stage;
  }


  public V1ProjectVersion kind(V1ProjectVersionKind kind) {

    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable

  public V1ProjectVersionKind getKind() {
    return kind;
  }


  public void setKind(V1ProjectVersionKind kind) {
    this.kind = kind;
  }


  public V1ProjectVersion stageConditions(List<V1StageCondition> stageConditions) {

    this.stageConditions = stageConditions;
    return this;
  }

  public V1ProjectVersion addStageConditionsItem(V1StageCondition stageConditionsItem) {
    if (this.stageConditions == null) {
      this.stageConditions = new ArrayList<>();
    }
    this.stageConditions.add(stageConditionsItem);
    return this;
  }

   /**
   * Get stageConditions
   * @return stageConditions
  **/
  @javax.annotation.Nullable

  public List<V1StageCondition> getStageConditions() {
    return stageConditions;
  }


  public void setStageConditions(List<V1StageCondition> stageConditions) {
    this.stageConditions = stageConditions;
  }


  public V1ProjectVersion content(String content) {

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


  public V1ProjectVersion readme(String readme) {

    this.readme = readme;
    return this;
  }

   /**
   * Get readme
   * @return readme
  **/
  @javax.annotation.Nullable

  public String getReadme() {
    return readme;
  }


  public void setReadme(String readme) {
    this.readme = readme;
  }


  public V1ProjectVersion state(String state) {

    this.state = state;
    return this;
  }

   /**
   * Get state
   * @return state
  **/
  @javax.annotation.Nullable

  public String getState() {
    return state;
  }


  public void setState(String state) {
    this.state = state;
  }


  public V1ProjectVersion role(String role) {

    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nullable

  public String getRole() {
    return role;
  }


  public void setRole(String role) {
    this.role = role;
  }


  public V1ProjectVersion contributors(List<Object> contributors) {

    this.contributors = contributors;
    return this;
  }

  public V1ProjectVersion addContributorsItem(Object contributorsItem) {
    if (this.contributors == null) {
      this.contributors = new ArrayList<>();
    }
    this.contributors.add(contributorsItem);
    return this;
  }

   /**
   * Get contributors
   * @return contributors
  **/
  @javax.annotation.Nullable

  public List<Object> getContributors() {
    return contributors;
  }


  public void setContributors(List<Object> contributors) {
    this.contributors = contributors;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ProjectVersion v1ProjectVersion = (V1ProjectVersion) o;
    return Objects.equals(this.uuid, v1ProjectVersion.uuid) &&
        Objects.equals(this.name, v1ProjectVersion.name) &&
        Objects.equals(this.description, v1ProjectVersion.description) &&
        Objects.equals(this.tags, v1ProjectVersion.tags) &&
        Objects.equals(this.owner, v1ProjectVersion.owner) &&
        Objects.equals(this.project, v1ProjectVersion.project) &&
        Objects.equals(this.connection, v1ProjectVersion.connection) &&
        Objects.equals(this.run, v1ProjectVersion.run) &&
        Objects.equals(this.artifacts, v1ProjectVersion.artifacts) &&
        Objects.equals(this.metaInfo, v1ProjectVersion.metaInfo) &&
        Objects.equals(this.createdAt, v1ProjectVersion.createdAt) &&
        Objects.equals(this.updatedAt, v1ProjectVersion.updatedAt) &&
        Objects.equals(this.stage, v1ProjectVersion.stage) &&
        Objects.equals(this.kind, v1ProjectVersion.kind) &&
        Objects.equals(this.stageConditions, v1ProjectVersion.stageConditions) &&
        Objects.equals(this.content, v1ProjectVersion.content) &&
        Objects.equals(this.readme, v1ProjectVersion.readme) &&
        Objects.equals(this.state, v1ProjectVersion.state) &&
        Objects.equals(this.role, v1ProjectVersion.role) &&
        Objects.equals(this.contributors, v1ProjectVersion.contributors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, description, tags, owner, project, connection, run, artifacts, metaInfo, createdAt, updatedAt, stage, kind, stageConditions, content, readme, state, role, contributors);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ProjectVersion {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    project: ").append(toIndentedString(project)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    run: ").append(toIndentedString(run)).append("\n");
    sb.append("    artifacts: ").append(toIndentedString(artifacts)).append("\n");
    sb.append("    metaInfo: ").append(toIndentedString(metaInfo)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    stage: ").append(toIndentedString(stage)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    stageConditions: ").append(toIndentedString(stageConditions)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    readme: ").append(toIndentedString(readme)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    contributors: ").append(toIndentedString(contributors)).append("\n");
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
    openapiFields.add("owner");
    openapiFields.add("project");
    openapiFields.add("connection");
    openapiFields.add("run");
    openapiFields.add("artifacts");
    openapiFields.add("meta_info");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");
    openapiFields.add("stage");
    openapiFields.add("kind");
    openapiFields.add("stage_conditions");
    openapiFields.add("content");
    openapiFields.add("readme");
    openapiFields.add("state");
    openapiFields.add("role");
    openapiFields.add("contributors");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1ProjectVersion
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1ProjectVersion.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1ProjectVersion is not found in the empty JSON string", V1ProjectVersion.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1ProjectVersion.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1ProjectVersion` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
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
      if ((jsonObj.get("owner") != null && !jsonObj.get("owner").isJsonNull()) && !jsonObj.get("owner").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `owner` to be a primitive type in the JSON string but got `%s`", jsonObj.get("owner").toString()));
      }
      if ((jsonObj.get("project") != null && !jsonObj.get("project").isJsonNull()) && !jsonObj.get("project").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `project` to be a primitive type in the JSON string but got `%s`", jsonObj.get("project").toString()));
      }
      if ((jsonObj.get("connection") != null && !jsonObj.get("connection").isJsonNull()) && !jsonObj.get("connection").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `connection` to be a primitive type in the JSON string but got `%s`", jsonObj.get("connection").toString()));
      }
      if ((jsonObj.get("run") != null && !jsonObj.get("run").isJsonNull()) && !jsonObj.get("run").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `run` to be a primitive type in the JSON string but got `%s`", jsonObj.get("run").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("artifacts") != null && !jsonObj.get("artifacts").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `artifacts` to be an array in the JSON string but got `%s`", jsonObj.get("artifacts").toString()));
      }
      if (jsonObj.get("stage_conditions") != null && !jsonObj.get("stage_conditions").isJsonNull()) {
        JsonArray jsonArraystageConditions = jsonObj.getAsJsonArray("stage_conditions");
        if (jsonArraystageConditions != null) {
          // ensure the json data is an array
          if (!jsonObj.get("stage_conditions").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `stage_conditions` to be an array in the JSON string but got `%s`", jsonObj.get("stage_conditions").toString()));
          }

          // validate the optional field `stage_conditions` (array)
          for (int i = 0; i < jsonArraystageConditions.size(); i++) {
            V1StageCondition.validateJsonObject(jsonArraystageConditions.get(i).getAsJsonObject());
          };
        }
      }
      if ((jsonObj.get("content") != null && !jsonObj.get("content").isJsonNull()) && !jsonObj.get("content").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `content` to be a primitive type in the JSON string but got `%s`", jsonObj.get("content").toString()));
      }
      if ((jsonObj.get("readme") != null && !jsonObj.get("readme").isJsonNull()) && !jsonObj.get("readme").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `readme` to be a primitive type in the JSON string but got `%s`", jsonObj.get("readme").toString()));
      }
      if ((jsonObj.get("state") != null && !jsonObj.get("state").isJsonNull()) && !jsonObj.get("state").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `state` to be a primitive type in the JSON string but got `%s`", jsonObj.get("state").toString()));
      }
      if ((jsonObj.get("role") != null && !jsonObj.get("role").isJsonNull()) && !jsonObj.get("role").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `role` to be a primitive type in the JSON string but got `%s`", jsonObj.get("role").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("contributors") != null && !jsonObj.get("contributors").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `contributors` to be an array in the JSON string but got `%s`", jsonObj.get("contributors").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1ProjectVersion.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1ProjectVersion' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1ProjectVersion> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1ProjectVersion.class));

       return (TypeAdapter<T>) new TypeAdapter<V1ProjectVersion>() {
           @Override
           public void write(JsonWriter out, V1ProjectVersion value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1ProjectVersion read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1ProjectVersion given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1ProjectVersion
  * @throws IOException if the JSON string is invalid with respect to V1ProjectVersion
  */
  public static V1ProjectVersion fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1ProjectVersion.class);
  }

 /**
  * Convert an instance of V1ProjectVersion to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

