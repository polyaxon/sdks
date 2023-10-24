/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc54
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
 * V1RunEdgeLineage
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1RunEdgeLineage {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_IS_UPSTREAM = "is_upstream";
  @SerializedName(SERIALIZED_NAME_IS_UPSTREAM)
  private Boolean isUpstream;

  public static final String SERIALIZED_NAME_VALUES = "values";
  @SerializedName(SERIALIZED_NAME_VALUES)
  private Object values;

  public V1RunEdgeLineage() {
  }

  public V1RunEdgeLineage uuid(String uuid) {

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


  public V1RunEdgeLineage isUpstream(Boolean isUpstream) {

    this.isUpstream = isUpstream;
    return this;
  }

   /**
   * Get isUpstream
   * @return isUpstream
  **/
  @javax.annotation.Nullable

  public Boolean getIsUpstream() {
    return isUpstream;
  }


  public void setIsUpstream(Boolean isUpstream) {
    this.isUpstream = isUpstream;
  }


  public V1RunEdgeLineage values(Object values) {

    this.values = values;
    return this;
  }

   /**
   * Get values
   * @return values
  **/
  @javax.annotation.Nullable

  public Object getValues() {
    return values;
  }


  public void setValues(Object values) {
    this.values = values;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunEdgeLineage v1RunEdgeLineage = (V1RunEdgeLineage) o;
    return Objects.equals(this.uuid, v1RunEdgeLineage.uuid) &&
        Objects.equals(this.isUpstream, v1RunEdgeLineage.isUpstream) &&
        Objects.equals(this.values, v1RunEdgeLineage.values);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, isUpstream, values);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunEdgeLineage {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    isUpstream: ").append(toIndentedString(isUpstream)).append("\n");
    sb.append("    values: ").append(toIndentedString(values)).append("\n");
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
    openapiFields.add("is_upstream");
    openapiFields.add("values");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1RunEdgeLineage
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1RunEdgeLineage.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1RunEdgeLineage is not found in the empty JSON string", V1RunEdgeLineage.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1RunEdgeLineage.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1RunEdgeLineage` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1RunEdgeLineage.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1RunEdgeLineage' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1RunEdgeLineage> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1RunEdgeLineage.class));

       return (TypeAdapter<T>) new TypeAdapter<V1RunEdgeLineage>() {
           @Override
           public void write(JsonWriter out, V1RunEdgeLineage value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1RunEdgeLineage read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1RunEdgeLineage given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1RunEdgeLineage
  * @throws IOException if the JSON string is invalid with respect to V1RunEdgeLineage
  */
  public static V1RunEdgeLineage fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1RunEdgeLineage.class);
  }

 /**
  * Convert an instance of V1RunEdgeLineage to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

