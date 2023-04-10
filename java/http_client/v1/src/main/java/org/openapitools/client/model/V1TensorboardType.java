// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc3
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
 * V1TensorboardType
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1TensorboardType {
  public static final String SERIALIZED_NAME_PORT = "port";
  @SerializedName(SERIALIZED_NAME_PORT)
  private Integer port;

  public static final String SERIALIZED_NAME_UUIDS = "uuids";
  @SerializedName(SERIALIZED_NAME_UUIDS)
  private List<String> uuids;

  public static final String SERIALIZED_NAME_USE_NAMES = "use_names";
  @SerializedName(SERIALIZED_NAME_USE_NAMES)
  private Boolean useNames;

  public static final String SERIALIZED_NAME_PATH_PREFIX = "path_prefix";
  @SerializedName(SERIALIZED_NAME_PATH_PREFIX)
  private String pathPrefix;

  public static final String SERIALIZED_NAME_PLUGINS = "plugins";
  @SerializedName(SERIALIZED_NAME_PLUGINS)
  private String plugins;

  public V1TensorboardType() {
  }

  public V1TensorboardType port(Integer port) {

    this.port = port;
    return this;
  }

   /**
   * Get port
   * @return port
  **/
  @javax.annotation.Nullable

  public Integer getPort() {
    return port;
  }


  public void setPort(Integer port) {
    this.port = port;
  }


  public V1TensorboardType uuids(List<String> uuids) {

    this.uuids = uuids;
    return this;
  }

  public V1TensorboardType addUuidsItem(String uuidsItem) {
    if (this.uuids == null) {
      this.uuids = new ArrayList<>();
    }
    this.uuids.add(uuidsItem);
    return this;
  }

   /**
   * Get uuids
   * @return uuids
  **/
  @javax.annotation.Nullable

  public List<String> getUuids() {
    return uuids;
  }


  public void setUuids(List<String> uuids) {
    this.uuids = uuids;
  }


  public V1TensorboardType useNames(Boolean useNames) {

    this.useNames = useNames;
    return this;
  }

   /**
   * Get useNames
   * @return useNames
  **/
  @javax.annotation.Nullable

  public Boolean getUseNames() {
    return useNames;
  }


  public void setUseNames(Boolean useNames) {
    this.useNames = useNames;
  }


  public V1TensorboardType pathPrefix(String pathPrefix) {

    this.pathPrefix = pathPrefix;
    return this;
  }

   /**
   * Get pathPrefix
   * @return pathPrefix
  **/
  @javax.annotation.Nullable

  public String getPathPrefix() {
    return pathPrefix;
  }


  public void setPathPrefix(String pathPrefix) {
    this.pathPrefix = pathPrefix;
  }


  public V1TensorboardType plugins(String plugins) {

    this.plugins = plugins;
    return this;
  }

   /**
   * Get plugins
   * @return plugins
  **/
  @javax.annotation.Nullable

  public String getPlugins() {
    return plugins;
  }


  public void setPlugins(String plugins) {
    this.plugins = plugins;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1TensorboardType v1TensorboardType = (V1TensorboardType) o;
    return Objects.equals(this.port, v1TensorboardType.port) &&
        Objects.equals(this.uuids, v1TensorboardType.uuids) &&
        Objects.equals(this.useNames, v1TensorboardType.useNames) &&
        Objects.equals(this.pathPrefix, v1TensorboardType.pathPrefix) &&
        Objects.equals(this.plugins, v1TensorboardType.plugins);
  }

  @Override
  public int hashCode() {
    return Objects.hash(port, uuids, useNames, pathPrefix, plugins);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1TensorboardType {\n");
    sb.append("    port: ").append(toIndentedString(port)).append("\n");
    sb.append("    uuids: ").append(toIndentedString(uuids)).append("\n");
    sb.append("    useNames: ").append(toIndentedString(useNames)).append("\n");
    sb.append("    pathPrefix: ").append(toIndentedString(pathPrefix)).append("\n");
    sb.append("    plugins: ").append(toIndentedString(plugins)).append("\n");
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
    openapiFields.add("port");
    openapiFields.add("uuids");
    openapiFields.add("use_names");
    openapiFields.add("path_prefix");
    openapiFields.add("plugins");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1TensorboardType
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1TensorboardType.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1TensorboardType is not found in the empty JSON string", V1TensorboardType.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1TensorboardType.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1TensorboardType` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("uuids") != null && !jsonObj.get("uuids").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuids` to be an array in the JSON string but got `%s`", jsonObj.get("uuids").toString()));
      }
      if ((jsonObj.get("path_prefix") != null && !jsonObj.get("path_prefix").isJsonNull()) && !jsonObj.get("path_prefix").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `path_prefix` to be a primitive type in the JSON string but got `%s`", jsonObj.get("path_prefix").toString()));
      }
      if ((jsonObj.get("plugins") != null && !jsonObj.get("plugins").isJsonNull()) && !jsonObj.get("plugins").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `plugins` to be a primitive type in the JSON string but got `%s`", jsonObj.get("plugins").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1TensorboardType.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1TensorboardType' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1TensorboardType> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1TensorboardType.class));

       return (TypeAdapter<T>) new TypeAdapter<V1TensorboardType>() {
           @Override
           public void write(JsonWriter out, V1TensorboardType value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1TensorboardType read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1TensorboardType given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1TensorboardType
  * @throws IOException if the JSON string is invalid with respect to V1TensorboardType
  */
  public static V1TensorboardType fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1TensorboardType.class);
  }

 /**
  * Convert an instance of V1TensorboardType to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

