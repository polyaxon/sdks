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
import org.openapitools.client.model.V1BucketConnection;
import org.openapitools.client.model.V1ClaimConnection;
import org.openapitools.client.model.V1GitConnection;
import org.openapitools.client.model.V1HostConnection;
import org.openapitools.client.model.V1HostPathConnection;

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
 * V1ConnectionSchema
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ConnectionSchema {
  public static final String SERIALIZED_NAME_BUCKET_CONNECTION = "bucketConnection";
  @SerializedName(SERIALIZED_NAME_BUCKET_CONNECTION)
  private V1BucketConnection bucketConnection;

  public static final String SERIALIZED_NAME_HOST_PATH_CONNECTION = "hostPathConnection";
  @SerializedName(SERIALIZED_NAME_HOST_PATH_CONNECTION)
  private V1HostPathConnection hostPathConnection;

  public static final String SERIALIZED_NAME_CLAIM_CONNECTION = "claimConnection";
  @SerializedName(SERIALIZED_NAME_CLAIM_CONNECTION)
  private V1ClaimConnection claimConnection;

  public static final String SERIALIZED_NAME_HOST_CONNECTION = "hostConnection";
  @SerializedName(SERIALIZED_NAME_HOST_CONNECTION)
  private V1HostConnection hostConnection;

  public static final String SERIALIZED_NAME_GIT_CONNECTION = "gitConnection";
  @SerializedName(SERIALIZED_NAME_GIT_CONNECTION)
  private V1GitConnection gitConnection;

  public V1ConnectionSchema() {
  }

  public V1ConnectionSchema bucketConnection(V1BucketConnection bucketConnection) {

    this.bucketConnection = bucketConnection;
    return this;
  }

   /**
   * Get bucketConnection
   * @return bucketConnection
  **/
  @javax.annotation.Nullable

  public V1BucketConnection getBucketConnection() {
    return bucketConnection;
  }


  public void setBucketConnection(V1BucketConnection bucketConnection) {
    this.bucketConnection = bucketConnection;
  }


  public V1ConnectionSchema hostPathConnection(V1HostPathConnection hostPathConnection) {

    this.hostPathConnection = hostPathConnection;
    return this;
  }

   /**
   * Get hostPathConnection
   * @return hostPathConnection
  **/
  @javax.annotation.Nullable

  public V1HostPathConnection getHostPathConnection() {
    return hostPathConnection;
  }


  public void setHostPathConnection(V1HostPathConnection hostPathConnection) {
    this.hostPathConnection = hostPathConnection;
  }


  public V1ConnectionSchema claimConnection(V1ClaimConnection claimConnection) {

    this.claimConnection = claimConnection;
    return this;
  }

   /**
   * Get claimConnection
   * @return claimConnection
  **/
  @javax.annotation.Nullable

  public V1ClaimConnection getClaimConnection() {
    return claimConnection;
  }


  public void setClaimConnection(V1ClaimConnection claimConnection) {
    this.claimConnection = claimConnection;
  }


  public V1ConnectionSchema hostConnection(V1HostConnection hostConnection) {

    this.hostConnection = hostConnection;
    return this;
  }

   /**
   * Get hostConnection
   * @return hostConnection
  **/
  @javax.annotation.Nullable

  public V1HostConnection getHostConnection() {
    return hostConnection;
  }


  public void setHostConnection(V1HostConnection hostConnection) {
    this.hostConnection = hostConnection;
  }


  public V1ConnectionSchema gitConnection(V1GitConnection gitConnection) {

    this.gitConnection = gitConnection;
    return this;
  }

   /**
   * Get gitConnection
   * @return gitConnection
  **/
  @javax.annotation.Nullable

  public V1GitConnection getGitConnection() {
    return gitConnection;
  }


  public void setGitConnection(V1GitConnection gitConnection) {
    this.gitConnection = gitConnection;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ConnectionSchema v1ConnectionSchema = (V1ConnectionSchema) o;
    return Objects.equals(this.bucketConnection, v1ConnectionSchema.bucketConnection) &&
        Objects.equals(this.hostPathConnection, v1ConnectionSchema.hostPathConnection) &&
        Objects.equals(this.claimConnection, v1ConnectionSchema.claimConnection) &&
        Objects.equals(this.hostConnection, v1ConnectionSchema.hostConnection) &&
        Objects.equals(this.gitConnection, v1ConnectionSchema.gitConnection);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bucketConnection, hostPathConnection, claimConnection, hostConnection, gitConnection);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ConnectionSchema {\n");
    sb.append("    bucketConnection: ").append(toIndentedString(bucketConnection)).append("\n");
    sb.append("    hostPathConnection: ").append(toIndentedString(hostPathConnection)).append("\n");
    sb.append("    claimConnection: ").append(toIndentedString(claimConnection)).append("\n");
    sb.append("    hostConnection: ").append(toIndentedString(hostConnection)).append("\n");
    sb.append("    gitConnection: ").append(toIndentedString(gitConnection)).append("\n");
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
    openapiFields.add("bucketConnection");
    openapiFields.add("hostPathConnection");
    openapiFields.add("claimConnection");
    openapiFields.add("hostConnection");
    openapiFields.add("gitConnection");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1ConnectionSchema
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1ConnectionSchema.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1ConnectionSchema is not found in the empty JSON string", V1ConnectionSchema.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1ConnectionSchema.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1ConnectionSchema` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // validate the optional field `bucketConnection`
      if (jsonObj.get("bucketConnection") != null && !jsonObj.get("bucketConnection").isJsonNull()) {
        V1BucketConnection.validateJsonObject(jsonObj.getAsJsonObject("bucketConnection"));
      }
      // validate the optional field `hostPathConnection`
      if (jsonObj.get("hostPathConnection") != null && !jsonObj.get("hostPathConnection").isJsonNull()) {
        V1HostPathConnection.validateJsonObject(jsonObj.getAsJsonObject("hostPathConnection"));
      }
      // validate the optional field `claimConnection`
      if (jsonObj.get("claimConnection") != null && !jsonObj.get("claimConnection").isJsonNull()) {
        V1ClaimConnection.validateJsonObject(jsonObj.getAsJsonObject("claimConnection"));
      }
      // validate the optional field `hostConnection`
      if (jsonObj.get("hostConnection") != null && !jsonObj.get("hostConnection").isJsonNull()) {
        V1HostConnection.validateJsonObject(jsonObj.getAsJsonObject("hostConnection"));
      }
      // validate the optional field `gitConnection`
      if (jsonObj.get("gitConnection") != null && !jsonObj.get("gitConnection").isJsonNull()) {
        V1GitConnection.validateJsonObject(jsonObj.getAsJsonObject("gitConnection"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1ConnectionSchema.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1ConnectionSchema' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1ConnectionSchema> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1ConnectionSchema.class));

       return (TypeAdapter<T>) new TypeAdapter<V1ConnectionSchema>() {
           @Override
           public void write(JsonWriter out, V1ConnectionSchema value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1ConnectionSchema read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1ConnectionSchema given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1ConnectionSchema
  * @throws IOException if the JSON string is invalid with respect to V1ConnectionSchema
  */
  public static V1ConnectionSchema fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1ConnectionSchema.class);
  }

 /**
  * Convert an instance of V1ConnectionSchema to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

