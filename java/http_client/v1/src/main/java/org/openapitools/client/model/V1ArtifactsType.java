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
import java.util.ArrayList;
import java.util.List;

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
 * V1ArtifactsType
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ArtifactsType {
  public static final String SERIALIZED_NAME_FILES = "files";
  @SerializedName(SERIALIZED_NAME_FILES)
  private List<Object> files;

  public static final String SERIALIZED_NAME_DIRS = "dirs";
  @SerializedName(SERIALIZED_NAME_DIRS)
  private List<Object> dirs;

  public static final String SERIALIZED_NAME_WORKERS = "workers";
  @SerializedName(SERIALIZED_NAME_WORKERS)
  private Integer workers;

  public V1ArtifactsType() {
  }

  public V1ArtifactsType files(List<Object> files) {

    this.files = files;
    return this;
  }

  public V1ArtifactsType addFilesItem(Object filesItem) {
    if (this.files == null) {
      this.files = new ArrayList<>();
    }
    this.files.add(filesItem);
    return this;
  }

   /**
   * Get files
   * @return files
  **/
  @javax.annotation.Nullable

  public List<Object> getFiles() {
    return files;
  }


  public void setFiles(List<Object> files) {
    this.files = files;
  }


  public V1ArtifactsType dirs(List<Object> dirs) {

    this.dirs = dirs;
    return this;
  }

  public V1ArtifactsType addDirsItem(Object dirsItem) {
    if (this.dirs == null) {
      this.dirs = new ArrayList<>();
    }
    this.dirs.add(dirsItem);
    return this;
  }

   /**
   * Get dirs
   * @return dirs
  **/
  @javax.annotation.Nullable

  public List<Object> getDirs() {
    return dirs;
  }


  public void setDirs(List<Object> dirs) {
    this.dirs = dirs;
  }


  public V1ArtifactsType workers(Integer workers) {

    this.workers = workers;
    return this;
  }

   /**
   * Get workers
   * @return workers
  **/
  @javax.annotation.Nullable

  public Integer getWorkers() {
    return workers;
  }


  public void setWorkers(Integer workers) {
    this.workers = workers;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ArtifactsType v1ArtifactsType = (V1ArtifactsType) o;
    return Objects.equals(this.files, v1ArtifactsType.files) &&
        Objects.equals(this.dirs, v1ArtifactsType.dirs) &&
        Objects.equals(this.workers, v1ArtifactsType.workers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(files, dirs, workers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ArtifactsType {\n");
    sb.append("    files: ").append(toIndentedString(files)).append("\n");
    sb.append("    dirs: ").append(toIndentedString(dirs)).append("\n");
    sb.append("    workers: ").append(toIndentedString(workers)).append("\n");
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
    openapiFields.add("files");
    openapiFields.add("dirs");
    openapiFields.add("workers");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1ArtifactsType
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1ArtifactsType.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1ArtifactsType is not found in the empty JSON string", V1ArtifactsType.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1ArtifactsType.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1ArtifactsType` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("files") != null && !jsonObj.get("files").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `files` to be an array in the JSON string but got `%s`", jsonObj.get("files").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("dirs") != null && !jsonObj.get("dirs").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `dirs` to be an array in the JSON string but got `%s`", jsonObj.get("dirs").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1ArtifactsType.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1ArtifactsType' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1ArtifactsType> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1ArtifactsType.class));

       return (TypeAdapter<T>) new TypeAdapter<V1ArtifactsType>() {
           @Override
           public void write(JsonWriter out, V1ArtifactsType value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1ArtifactsType read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1ArtifactsType given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1ArtifactsType
  * @throws IOException if the JSON string is invalid with respect to V1ArtifactsType
  */
  public static V1ArtifactsType fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1ArtifactsType.class);
  }

 /**
  * Convert an instance of V1ArtifactsType to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

