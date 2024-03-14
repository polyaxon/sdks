/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc1
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
import org.openapitools.client.model.V1ProjectSettings;

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
 * V1Project
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Project {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_IS_PUBLIC = "is_public";
  @SerializedName(SERIALIZED_NAME_IS_PUBLIC)
  private Boolean isPublic;

  public static final String SERIALIZED_NAME_BOOKMARKED = "bookmarked";
  @SerializedName(SERIALIZED_NAME_BOOKMARKED)
  private Boolean bookmarked;

  public static final String SERIALIZED_NAME_README = "readme";
  @SerializedName(SERIALIZED_NAME_README)
  private String readme;

  public static final String SERIALIZED_NAME_EXCLUDED_FEATURES = "excluded_features";
  @SerializedName(SERIALIZED_NAME_EXCLUDED_FEATURES)
  private List<String> excludedFeatures;

  public static final String SERIALIZED_NAME_EXCLUDED_RUNTIMES = "excluded_runtimes";
  @SerializedName(SERIALIZED_NAME_EXCLUDED_RUNTIMES)
  private List<String> excludedRuntimes;

  public static final String SERIALIZED_NAME_ARCHIVED_DELETION_INTERVAL = "archived_deletion_interval";
  @SerializedName(SERIALIZED_NAME_ARCHIVED_DELETION_INTERVAL)
  private Integer archivedDeletionInterval;

  public static final String SERIALIZED_NAME_SETTINGS = "settings";
  @SerializedName(SERIALIZED_NAME_SETTINGS)
  private V1ProjectSettings settings;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;

  public static final String SERIALIZED_NAME_LIVE_STATE = "live_state";
  @SerializedName(SERIALIZED_NAME_LIVE_STATE)
  private Integer liveState;

  public static final String SERIALIZED_NAME_CONTRIBUTORS = "contributors";
  @SerializedName(SERIALIZED_NAME_CONTRIBUTORS)
  private List<Object> contributors;

  public V1Project() {
  }

  public V1Project uuid(String uuid) {
    
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


  public V1Project owner(String owner) {
    
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


  public V1Project name(String name) {
    
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


  public V1Project description(String description) {
    
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


  public V1Project tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1Project addTagsItem(String tagsItem) {
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


  public V1Project createdAt(OffsetDateTime createdAt) {
    
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


  public V1Project updatedAt(OffsetDateTime updatedAt) {
    
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


  public V1Project isPublic(Boolean isPublic) {
    
    this.isPublic = isPublic;
    return this;
  }

   /**
   * Get isPublic
   * @return isPublic
  **/
  @javax.annotation.Nullable

  public Boolean getIsPublic() {
    return isPublic;
  }


  public void setIsPublic(Boolean isPublic) {
    this.isPublic = isPublic;
  }


  public V1Project bookmarked(Boolean bookmarked) {
    
    this.bookmarked = bookmarked;
    return this;
  }

   /**
   * Get bookmarked
   * @return bookmarked
  **/
  @javax.annotation.Nullable

  public Boolean getBookmarked() {
    return bookmarked;
  }


  public void setBookmarked(Boolean bookmarked) {
    this.bookmarked = bookmarked;
  }


  public V1Project readme(String readme) {
    
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


  public V1Project excludedFeatures(List<String> excludedFeatures) {
    
    this.excludedFeatures = excludedFeatures;
    return this;
  }

  public V1Project addExcludedFeaturesItem(String excludedFeaturesItem) {
    if (this.excludedFeatures == null) {
      this.excludedFeatures = new ArrayList<>();
    }
    this.excludedFeatures.add(excludedFeaturesItem);
    return this;
  }

   /**
   * Get excludedFeatures
   * @return excludedFeatures
  **/
  @javax.annotation.Nullable

  public List<String> getExcludedFeatures() {
    return excludedFeatures;
  }


  public void setExcludedFeatures(List<String> excludedFeatures) {
    this.excludedFeatures = excludedFeatures;
  }


  public V1Project excludedRuntimes(List<String> excludedRuntimes) {
    
    this.excludedRuntimes = excludedRuntimes;
    return this;
  }

  public V1Project addExcludedRuntimesItem(String excludedRuntimesItem) {
    if (this.excludedRuntimes == null) {
      this.excludedRuntimes = new ArrayList<>();
    }
    this.excludedRuntimes.add(excludedRuntimesItem);
    return this;
  }

   /**
   * Get excludedRuntimes
   * @return excludedRuntimes
  **/
  @javax.annotation.Nullable

  public List<String> getExcludedRuntimes() {
    return excludedRuntimes;
  }


  public void setExcludedRuntimes(List<String> excludedRuntimes) {
    this.excludedRuntimes = excludedRuntimes;
  }


  public V1Project archivedDeletionInterval(Integer archivedDeletionInterval) {
    
    this.archivedDeletionInterval = archivedDeletionInterval;
    return this;
  }

   /**
   * Get archivedDeletionInterval
   * @return archivedDeletionInterval
  **/
  @javax.annotation.Nullable

  public Integer getArchivedDeletionInterval() {
    return archivedDeletionInterval;
  }


  public void setArchivedDeletionInterval(Integer archivedDeletionInterval) {
    this.archivedDeletionInterval = archivedDeletionInterval;
  }


  public V1Project settings(V1ProjectSettings settings) {
    
    this.settings = settings;
    return this;
  }

   /**
   * Get settings
   * @return settings
  **/
  @javax.annotation.Nullable

  public V1ProjectSettings getSettings() {
    return settings;
  }


  public void setSettings(V1ProjectSettings settings) {
    this.settings = settings;
  }


  public V1Project role(String role) {
    
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


  public V1Project liveState(Integer liveState) {
    
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


  public V1Project contributors(List<Object> contributors) {
    
    this.contributors = contributors;
    return this;
  }

  public V1Project addContributorsItem(Object contributorsItem) {
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
    V1Project v1Project = (V1Project) o;
    return Objects.equals(this.uuid, v1Project.uuid) &&
        Objects.equals(this.owner, v1Project.owner) &&
        Objects.equals(this.name, v1Project.name) &&
        Objects.equals(this.description, v1Project.description) &&
        Objects.equals(this.tags, v1Project.tags) &&
        Objects.equals(this.createdAt, v1Project.createdAt) &&
        Objects.equals(this.updatedAt, v1Project.updatedAt) &&
        Objects.equals(this.isPublic, v1Project.isPublic) &&
        Objects.equals(this.bookmarked, v1Project.bookmarked) &&
        Objects.equals(this.readme, v1Project.readme) &&
        Objects.equals(this.excludedFeatures, v1Project.excludedFeatures) &&
        Objects.equals(this.excludedRuntimes, v1Project.excludedRuntimes) &&
        Objects.equals(this.archivedDeletionInterval, v1Project.archivedDeletionInterval) &&
        Objects.equals(this.settings, v1Project.settings) &&
        Objects.equals(this.role, v1Project.role) &&
        Objects.equals(this.liveState, v1Project.liveState) &&
        Objects.equals(this.contributors, v1Project.contributors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, owner, name, description, tags, createdAt, updatedAt, isPublic, bookmarked, readme, excludedFeatures, excludedRuntimes, archivedDeletionInterval, settings, role, liveState, contributors);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Project {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    isPublic: ").append(toIndentedString(isPublic)).append("\n");
    sb.append("    bookmarked: ").append(toIndentedString(bookmarked)).append("\n");
    sb.append("    readme: ").append(toIndentedString(readme)).append("\n");
    sb.append("    excludedFeatures: ").append(toIndentedString(excludedFeatures)).append("\n");
    sb.append("    excludedRuntimes: ").append(toIndentedString(excludedRuntimes)).append("\n");
    sb.append("    archivedDeletionInterval: ").append(toIndentedString(archivedDeletionInterval)).append("\n");
    sb.append("    settings: ").append(toIndentedString(settings)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    liveState: ").append(toIndentedString(liveState)).append("\n");
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
    openapiFields.add("owner");
    openapiFields.add("name");
    openapiFields.add("description");
    openapiFields.add("tags");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");
    openapiFields.add("is_public");
    openapiFields.add("bookmarked");
    openapiFields.add("readme");
    openapiFields.add("excluded_features");
    openapiFields.add("excluded_runtimes");
    openapiFields.add("archived_deletion_interval");
    openapiFields.add("settings");
    openapiFields.add("role");
    openapiFields.add("live_state");
    openapiFields.add("contributors");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Project
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Project.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Project is not found in the empty JSON string", V1Project.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Project.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Project` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if ((jsonObj.get("owner") != null && !jsonObj.get("owner").isJsonNull()) && !jsonObj.get("owner").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `owner` to be a primitive type in the JSON string but got `%s`", jsonObj.get("owner").toString()));
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
      if ((jsonObj.get("readme") != null && !jsonObj.get("readme").isJsonNull()) && !jsonObj.get("readme").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `readme` to be a primitive type in the JSON string but got `%s`", jsonObj.get("readme").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("excluded_features") != null && !jsonObj.get("excluded_features").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `excluded_features` to be an array in the JSON string but got `%s`", jsonObj.get("excluded_features").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("excluded_runtimes") != null && !jsonObj.get("excluded_runtimes").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `excluded_runtimes` to be an array in the JSON string but got `%s`", jsonObj.get("excluded_runtimes").toString()));
      }
      // validate the optional field `settings`
      if (jsonObj.get("settings") != null && !jsonObj.get("settings").isJsonNull()) {
        V1ProjectSettings.validateJsonObject(jsonObj.getAsJsonObject("settings"));
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
       if (!V1Project.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Project' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Project> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Project.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Project>() {
           @Override
           public void write(JsonWriter out, V1Project value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Project read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Project given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Project
  * @throws IOException if the JSON string is invalid with respect to V1Project
  */
  public static V1Project fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Project.class);
  }

 /**
  * Convert an instance of V1Project to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

