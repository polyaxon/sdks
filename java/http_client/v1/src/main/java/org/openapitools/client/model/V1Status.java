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
import org.openapitools.client.model.V1StatusCondition;
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
 * V1Status
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Status {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private V1Statuses status = V1Statuses.CREATED;

  public static final String SERIALIZED_NAME_STATUS_CONDITIONS = "status_conditions";
  @SerializedName(SERIALIZED_NAME_STATUS_CONDITIONS)
  private List<V1StatusCondition> statusConditions;

  public static final String SERIALIZED_NAME_META_INFO = "meta_info";
  @SerializedName(SERIALIZED_NAME_META_INFO)
  private Object metaInfo;

  public V1Status() {
  }

  public V1Status uuid(String uuid) {

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


  public V1Status status(V1Statuses status) {

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


  public V1Status statusConditions(List<V1StatusCondition> statusConditions) {

    this.statusConditions = statusConditions;
    return this;
  }

  public V1Status addStatusConditionsItem(V1StatusCondition statusConditionsItem) {
    if (this.statusConditions == null) {
      this.statusConditions = new ArrayList<>();
    }
    this.statusConditions.add(statusConditionsItem);
    return this;
  }

   /**
   * Get statusConditions
   * @return statusConditions
  **/
  @javax.annotation.Nullable

  public List<V1StatusCondition> getStatusConditions() {
    return statusConditions;
  }


  public void setStatusConditions(List<V1StatusCondition> statusConditions) {
    this.statusConditions = statusConditions;
  }


  public V1Status metaInfo(Object metaInfo) {

    this.metaInfo = metaInfo;
    return this;
  }

   /**
   * Get metaInfo
   * @return metaInfo
  **/
  @javax.annotation.Nullable

  public Object getMetaInfo() {
    return metaInfo;
  }


  public void setMetaInfo(Object metaInfo) {
    this.metaInfo = metaInfo;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Status v1Status = (V1Status) o;
    return Objects.equals(this.uuid, v1Status.uuid) &&
        Objects.equals(this.status, v1Status.status) &&
        Objects.equals(this.statusConditions, v1Status.statusConditions) &&
        Objects.equals(this.metaInfo, v1Status.metaInfo);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, status, statusConditions, metaInfo);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Status {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    statusConditions: ").append(toIndentedString(statusConditions)).append("\n");
    sb.append("    metaInfo: ").append(toIndentedString(metaInfo)).append("\n");
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
    openapiFields.add("status");
    openapiFields.add("status_conditions");
    openapiFields.add("meta_info");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Status
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Status.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Status is not found in the empty JSON string", V1Status.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Status.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Status` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if (jsonObj.get("status_conditions") != null && !jsonObj.get("status_conditions").isJsonNull()) {
        JsonArray jsonArraystatusConditions = jsonObj.getAsJsonArray("status_conditions");
        if (jsonArraystatusConditions != null) {
          // ensure the json data is an array
          if (!jsonObj.get("status_conditions").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `status_conditions` to be an array in the JSON string but got `%s`", jsonObj.get("status_conditions").toString()));
          }

          // validate the optional field `status_conditions` (array)
          for (int i = 0; i < jsonArraystatusConditions.size(); i++) {
            V1StatusCondition.validateJsonObject(jsonArraystatusConditions.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Status.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Status' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Status> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Status.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Status>() {
           @Override
           public void write(JsonWriter out, V1Status value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Status read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Status given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Status
  * @throws IOException if the JSON string is invalid with respect to V1Status
  */
  public static V1Status fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Status.class);
  }

 /**
  * Convert an instance of V1Status to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

