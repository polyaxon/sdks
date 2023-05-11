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
 * The version of the OpenAPI document: 2.0.0-rc14
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
 * V1SchedulingPolicy
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1SchedulingPolicy {
  public static final String SERIALIZED_NAME_MIN_AVAILABLE = "minAvailable";
  @SerializedName(SERIALIZED_NAME_MIN_AVAILABLE)
  private Integer minAvailable;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_PRIORITY_CLASS = "priorityClass";
  @SerializedName(SERIALIZED_NAME_PRIORITY_CLASS)
  private String priorityClass;

  public V1SchedulingPolicy() {
  }

  public V1SchedulingPolicy minAvailable(Integer minAvailable) {

    this.minAvailable = minAvailable;
    return this;
  }

   /**
   * Get minAvailable
   * @return minAvailable
  **/
  @javax.annotation.Nullable

  public Integer getMinAvailable() {
    return minAvailable;
  }


  public void setMinAvailable(Integer minAvailable) {
    this.minAvailable = minAvailable;
  }


  public V1SchedulingPolicy queue(String queue) {

    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable

  public String getQueue() {
    return queue;
  }


  public void setQueue(String queue) {
    this.queue = queue;
  }


  public V1SchedulingPolicy priorityClass(String priorityClass) {

    this.priorityClass = priorityClass;
    return this;
  }

   /**
   * Get priorityClass
   * @return priorityClass
  **/
  @javax.annotation.Nullable

  public String getPriorityClass() {
    return priorityClass;
  }


  public void setPriorityClass(String priorityClass) {
    this.priorityClass = priorityClass;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1SchedulingPolicy v1SchedulingPolicy = (V1SchedulingPolicy) o;
    return Objects.equals(this.minAvailable, v1SchedulingPolicy.minAvailable) &&
        Objects.equals(this.queue, v1SchedulingPolicy.queue) &&
        Objects.equals(this.priorityClass, v1SchedulingPolicy.priorityClass);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minAvailable, queue, priorityClass);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1SchedulingPolicy {\n");
    sb.append("    minAvailable: ").append(toIndentedString(minAvailable)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    priorityClass: ").append(toIndentedString(priorityClass)).append("\n");
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
    openapiFields.add("minAvailable");
    openapiFields.add("queue");
    openapiFields.add("priorityClass");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1SchedulingPolicy
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1SchedulingPolicy.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1SchedulingPolicy is not found in the empty JSON string", V1SchedulingPolicy.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1SchedulingPolicy.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1SchedulingPolicy` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("queue") != null && !jsonObj.get("queue").isJsonNull()) && !jsonObj.get("queue").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `queue` to be a primitive type in the JSON string but got `%s`", jsonObj.get("queue").toString()));
      }
      if ((jsonObj.get("priorityClass") != null && !jsonObj.get("priorityClass").isJsonNull()) && !jsonObj.get("priorityClass").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `priorityClass` to be a primitive type in the JSON string but got `%s`", jsonObj.get("priorityClass").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1SchedulingPolicy.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1SchedulingPolicy' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1SchedulingPolicy> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1SchedulingPolicy.class));

       return (TypeAdapter<T>) new TypeAdapter<V1SchedulingPolicy>() {
           @Override
           public void write(JsonWriter out, V1SchedulingPolicy value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1SchedulingPolicy read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1SchedulingPolicy given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1SchedulingPolicy
  * @throws IOException if the JSON string is invalid with respect to V1SchedulingPolicy
  */
  public static V1SchedulingPolicy fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1SchedulingPolicy.class);
  }

 /**
  * Convert an instance of V1SchedulingPolicy to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

