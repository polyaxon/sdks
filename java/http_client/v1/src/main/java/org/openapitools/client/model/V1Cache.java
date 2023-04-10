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
 * V1Cache
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Cache {
  public static final String SERIALIZED_NAME_DISABLE = "disable";
  @SerializedName(SERIALIZED_NAME_DISABLE)
  private Boolean disable;

  public static final String SERIALIZED_NAME_TTL = "ttl";
  @SerializedName(SERIALIZED_NAME_TTL)
  private Integer ttl;

  public static final String SERIALIZED_NAME_IO = "io";
  @SerializedName(SERIALIZED_NAME_IO)
  private List<String> io;

  public static final String SERIALIZED_NAME_SECTIONS = "sections";
  @SerializedName(SERIALIZED_NAME_SECTIONS)
  private List<String> sections;

  public V1Cache() {
  }

  public V1Cache disable(Boolean disable) {
    
    this.disable = disable;
    return this;
  }

   /**
   * Get disable
   * @return disable
  **/
  @javax.annotation.Nullable

  public Boolean getDisable() {
    return disable;
  }


  public void setDisable(Boolean disable) {
    this.disable = disable;
  }


  public V1Cache ttl(Integer ttl) {
    
    this.ttl = ttl;
    return this;
  }

   /**
   * Get ttl
   * @return ttl
  **/
  @javax.annotation.Nullable

  public Integer getTtl() {
    return ttl;
  }


  public void setTtl(Integer ttl) {
    this.ttl = ttl;
  }


  public V1Cache io(List<String> io) {
    
    this.io = io;
    return this;
  }

  public V1Cache addIoItem(String ioItem) {
    if (this.io == null) {
      this.io = new ArrayList<>();
    }
    this.io.add(ioItem);
    return this;
  }

   /**
   * Get io
   * @return io
  **/
  @javax.annotation.Nullable

  public List<String> getIo() {
    return io;
  }


  public void setIo(List<String> io) {
    this.io = io;
  }


  public V1Cache sections(List<String> sections) {
    
    this.sections = sections;
    return this;
  }

  public V1Cache addSectionsItem(String sectionsItem) {
    if (this.sections == null) {
      this.sections = new ArrayList<>();
    }
    this.sections.add(sectionsItem);
    return this;
  }

   /**
   * Get sections
   * @return sections
  **/
  @javax.annotation.Nullable

  public List<String> getSections() {
    return sections;
  }


  public void setSections(List<String> sections) {
    this.sections = sections;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Cache v1Cache = (V1Cache) o;
    return Objects.equals(this.disable, v1Cache.disable) &&
        Objects.equals(this.ttl, v1Cache.ttl) &&
        Objects.equals(this.io, v1Cache.io) &&
        Objects.equals(this.sections, v1Cache.sections);
  }

  @Override
  public int hashCode() {
    return Objects.hash(disable, ttl, io, sections);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Cache {\n");
    sb.append("    disable: ").append(toIndentedString(disable)).append("\n");
    sb.append("    ttl: ").append(toIndentedString(ttl)).append("\n");
    sb.append("    io: ").append(toIndentedString(io)).append("\n");
    sb.append("    sections: ").append(toIndentedString(sections)).append("\n");
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
    openapiFields.add("disable");
    openapiFields.add("ttl");
    openapiFields.add("io");
    openapiFields.add("sections");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Cache
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Cache.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Cache is not found in the empty JSON string", V1Cache.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Cache.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Cache` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("io") != null && !jsonObj.get("io").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `io` to be an array in the JSON string but got `%s`", jsonObj.get("io").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("sections") != null && !jsonObj.get("sections").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `sections` to be an array in the JSON string but got `%s`", jsonObj.get("sections").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Cache.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Cache' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Cache> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Cache.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Cache>() {
           @Override
           public void write(JsonWriter out, V1Cache value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Cache read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Cache given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Cache
  * @throws IOException if the JSON string is invalid with respect to V1Cache
  */
  public static V1Cache fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Cache.class);
  }

 /**
  * Convert an instance of V1Cache to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

