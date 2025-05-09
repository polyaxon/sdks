/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
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
import org.openapitools.client.model.V1Log;

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
 * V1Logs
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Logs {
  public static final String SERIALIZED_NAME_LOGS = "logs";
  @SerializedName(SERIALIZED_NAME_LOGS)
  private List<V1Log> logs;

  public static final String SERIALIZED_NAME_LAST_TIME = "last_time";
  @SerializedName(SERIALIZED_NAME_LAST_TIME)
  private OffsetDateTime lastTime;

  public static final String SERIALIZED_NAME_LAST_FILE = "last_file";
  @SerializedName(SERIALIZED_NAME_LAST_FILE)
  private String lastFile;

  public static final String SERIALIZED_NAME_FILES = "files";
  @SerializedName(SERIALIZED_NAME_FILES)
  private List<String> files;

  public V1Logs() {
  }

  public V1Logs logs(List<V1Log> logs) {

    this.logs = logs;
    return this;
  }

  public V1Logs addLogsItem(V1Log logsItem) {
    if (this.logs == null) {
      this.logs = new ArrayList<>();
    }
    this.logs.add(logsItem);
    return this;
  }

   /**
   * Get logs
   * @return logs
  **/
  @javax.annotation.Nullable

  public List<V1Log> getLogs() {
    return logs;
  }


  public void setLogs(List<V1Log> logs) {
    this.logs = logs;
  }


  public V1Logs lastTime(OffsetDateTime lastTime) {

    this.lastTime = lastTime;
    return this;
  }

   /**
   * Get lastTime
   * @return lastTime
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getLastTime() {
    return lastTime;
  }


  public void setLastTime(OffsetDateTime lastTime) {
    this.lastTime = lastTime;
  }


  public V1Logs lastFile(String lastFile) {

    this.lastFile = lastFile;
    return this;
  }

   /**
   * Get lastFile
   * @return lastFile
  **/
  @javax.annotation.Nullable

  public String getLastFile() {
    return lastFile;
  }


  public void setLastFile(String lastFile) {
    this.lastFile = lastFile;
  }


  public V1Logs files(List<String> files) {

    this.files = files;
    return this;
  }

  public V1Logs addFilesItem(String filesItem) {
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

  public List<String> getFiles() {
    return files;
  }


  public void setFiles(List<String> files) {
    this.files = files;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Logs v1Logs = (V1Logs) o;
    return Objects.equals(this.logs, v1Logs.logs) &&
        Objects.equals(this.lastTime, v1Logs.lastTime) &&
        Objects.equals(this.lastFile, v1Logs.lastFile) &&
        Objects.equals(this.files, v1Logs.files);
  }

  @Override
  public int hashCode() {
    return Objects.hash(logs, lastTime, lastFile, files);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Logs {\n");
    sb.append("    logs: ").append(toIndentedString(logs)).append("\n");
    sb.append("    lastTime: ").append(toIndentedString(lastTime)).append("\n");
    sb.append("    lastFile: ").append(toIndentedString(lastFile)).append("\n");
    sb.append("    files: ").append(toIndentedString(files)).append("\n");
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
    openapiFields.add("logs");
    openapiFields.add("last_time");
    openapiFields.add("last_file");
    openapiFields.add("files");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Logs
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Logs.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Logs is not found in the empty JSON string", V1Logs.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Logs.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Logs` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if (jsonObj.get("logs") != null && !jsonObj.get("logs").isJsonNull()) {
        JsonArray jsonArraylogs = jsonObj.getAsJsonArray("logs");
        if (jsonArraylogs != null) {
          // ensure the json data is an array
          if (!jsonObj.get("logs").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `logs` to be an array in the JSON string but got `%s`", jsonObj.get("logs").toString()));
          }

          // validate the optional field `logs` (array)
          for (int i = 0; i < jsonArraylogs.size(); i++) {
            V1Log.validateJsonObject(jsonArraylogs.get(i).getAsJsonObject());
          };
        }
      }
      if ((jsonObj.get("last_file") != null && !jsonObj.get("last_file").isJsonNull()) && !jsonObj.get("last_file").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `last_file` to be a primitive type in the JSON string but got `%s`", jsonObj.get("last_file").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("files") != null && !jsonObj.get("files").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `files` to be an array in the JSON string but got `%s`", jsonObj.get("files").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Logs.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Logs' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Logs> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Logs.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Logs>() {
           @Override
           public void write(JsonWriter out, V1Logs value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Logs read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Logs given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Logs
  * @throws IOException if the JSON string is invalid with respect to V1Logs
  */
  public static V1Logs fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Logs.class);
  }

 /**
  * Convert an instance of V1Logs to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

