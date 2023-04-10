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
import org.openapitools.client.model.V1CronSchedule;
import org.openapitools.client.model.V1DateTimeSchedule;
import org.openapitools.client.model.V1IntervalSchedule;

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
 * V1Schedule
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Schedule {
  public static final String SERIALIZED_NAME_CRON = "cron";
  @SerializedName(SERIALIZED_NAME_CRON)
  private V1CronSchedule cron;

  public static final String SERIALIZED_NAME_DATETIME = "datetime";
  @SerializedName(SERIALIZED_NAME_DATETIME)
  private V1DateTimeSchedule datetime;

  public static final String SERIALIZED_NAME_INTERVAL = "interval";
  @SerializedName(SERIALIZED_NAME_INTERVAL)
  private V1IntervalSchedule interval;

  public V1Schedule() {
  }

  public V1Schedule cron(V1CronSchedule cron) {
    
    this.cron = cron;
    return this;
  }

   /**
   * Get cron
   * @return cron
  **/
  @javax.annotation.Nullable

  public V1CronSchedule getCron() {
    return cron;
  }


  public void setCron(V1CronSchedule cron) {
    this.cron = cron;
  }


  public V1Schedule datetime(V1DateTimeSchedule datetime) {
    
    this.datetime = datetime;
    return this;
  }

   /**
   * Get datetime
   * @return datetime
  **/
  @javax.annotation.Nullable

  public V1DateTimeSchedule getDatetime() {
    return datetime;
  }


  public void setDatetime(V1DateTimeSchedule datetime) {
    this.datetime = datetime;
  }


  public V1Schedule interval(V1IntervalSchedule interval) {
    
    this.interval = interval;
    return this;
  }

   /**
   * Get interval
   * @return interval
  **/
  @javax.annotation.Nullable

  public V1IntervalSchedule getInterval() {
    return interval;
  }


  public void setInterval(V1IntervalSchedule interval) {
    this.interval = interval;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Schedule v1Schedule = (V1Schedule) o;
    return Objects.equals(this.cron, v1Schedule.cron) &&
        Objects.equals(this.datetime, v1Schedule.datetime) &&
        Objects.equals(this.interval, v1Schedule.interval);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cron, datetime, interval);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Schedule {\n");
    sb.append("    cron: ").append(toIndentedString(cron)).append("\n");
    sb.append("    datetime: ").append(toIndentedString(datetime)).append("\n");
    sb.append("    interval: ").append(toIndentedString(interval)).append("\n");
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
    openapiFields.add("cron");
    openapiFields.add("datetime");
    openapiFields.add("interval");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Schedule
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Schedule.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Schedule is not found in the empty JSON string", V1Schedule.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Schedule.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Schedule` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // validate the optional field `cron`
      if (jsonObj.get("cron") != null && !jsonObj.get("cron").isJsonNull()) {
        V1CronSchedule.validateJsonObject(jsonObj.getAsJsonObject("cron"));
      }
      // validate the optional field `datetime`
      if (jsonObj.get("datetime") != null && !jsonObj.get("datetime").isJsonNull()) {
        V1DateTimeSchedule.validateJsonObject(jsonObj.getAsJsonObject("datetime"));
      }
      // validate the optional field `interval`
      if (jsonObj.get("interval") != null && !jsonObj.get("interval").isJsonNull()) {
        V1IntervalSchedule.validateJsonObject(jsonObj.getAsJsonObject("interval"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Schedule.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Schedule' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Schedule> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Schedule.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Schedule>() {
           @Override
           public void write(JsonWriter out, V1Schedule value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Schedule read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Schedule given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Schedule
  * @throws IOException if the JSON string is invalid with respect to V1Schedule
  */
  public static V1Schedule fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Schedule.class);
  }

 /**
  * Convert an instance of V1Schedule to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

