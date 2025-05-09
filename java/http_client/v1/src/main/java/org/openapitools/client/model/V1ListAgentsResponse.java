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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Agent;

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
 * V1ListAgentsResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ListAgentsResponse {
  public static final String SERIALIZED_NAME_COUNT = "count";
  @SerializedName(SERIALIZED_NAME_COUNT)
  private Integer count;

  public static final String SERIALIZED_NAME_RESULTS = "results";
  @SerializedName(SERIALIZED_NAME_RESULTS)
  private List<V1Agent> results;

  public static final String SERIALIZED_NAME_PREVIOUS = "previous";
  @SerializedName(SERIALIZED_NAME_PREVIOUS)
  private String previous;

  public static final String SERIALIZED_NAME_NEXT = "next";
  @SerializedName(SERIALIZED_NAME_NEXT)
  private String next;

  public V1ListAgentsResponse() {
  }

  public V1ListAgentsResponse count(Integer count) {

    this.count = count;
    return this;
  }

   /**
   * Get count
   * @return count
  **/
  @javax.annotation.Nullable

  public Integer getCount() {
    return count;
  }


  public void setCount(Integer count) {
    this.count = count;
  }


  public V1ListAgentsResponse results(List<V1Agent> results) {

    this.results = results;
    return this;
  }

  public V1ListAgentsResponse addResultsItem(V1Agent resultsItem) {
    if (this.results == null) {
      this.results = new ArrayList<>();
    }
    this.results.add(resultsItem);
    return this;
  }

   /**
   * Get results
   * @return results
  **/
  @javax.annotation.Nullable

  public List<V1Agent> getResults() {
    return results;
  }


  public void setResults(List<V1Agent> results) {
    this.results = results;
  }


  public V1ListAgentsResponse previous(String previous) {

    this.previous = previous;
    return this;
  }

   /**
   * Get previous
   * @return previous
  **/
  @javax.annotation.Nullable

  public String getPrevious() {
    return previous;
  }


  public void setPrevious(String previous) {
    this.previous = previous;
  }


  public V1ListAgentsResponse next(String next) {

    this.next = next;
    return this;
  }

   /**
   * Get next
   * @return next
  **/
  @javax.annotation.Nullable

  public String getNext() {
    return next;
  }


  public void setNext(String next) {
    this.next = next;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ListAgentsResponse v1ListAgentsResponse = (V1ListAgentsResponse) o;
    return Objects.equals(this.count, v1ListAgentsResponse.count) &&
        Objects.equals(this.results, v1ListAgentsResponse.results) &&
        Objects.equals(this.previous, v1ListAgentsResponse.previous) &&
        Objects.equals(this.next, v1ListAgentsResponse.next);
  }

  @Override
  public int hashCode() {
    return Objects.hash(count, results, previous, next);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ListAgentsResponse {\n");
    sb.append("    count: ").append(toIndentedString(count)).append("\n");
    sb.append("    results: ").append(toIndentedString(results)).append("\n");
    sb.append("    previous: ").append(toIndentedString(previous)).append("\n");
    sb.append("    next: ").append(toIndentedString(next)).append("\n");
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
    openapiFields.add("count");
    openapiFields.add("results");
    openapiFields.add("previous");
    openapiFields.add("next");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1ListAgentsResponse
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1ListAgentsResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1ListAgentsResponse is not found in the empty JSON string", V1ListAgentsResponse.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1ListAgentsResponse.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1ListAgentsResponse` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if (jsonObj.get("results") != null && !jsonObj.get("results").isJsonNull()) {
        JsonArray jsonArrayresults = jsonObj.getAsJsonArray("results");
        if (jsonArrayresults != null) {
          // ensure the json data is an array
          if (!jsonObj.get("results").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `results` to be an array in the JSON string but got `%s`", jsonObj.get("results").toString()));
          }

          // validate the optional field `results` (array)
          for (int i = 0; i < jsonArrayresults.size(); i++) {
            V1Agent.validateJsonObject(jsonArrayresults.get(i).getAsJsonObject());
          };
        }
      }
      if ((jsonObj.get("previous") != null && !jsonObj.get("previous").isJsonNull()) && !jsonObj.get("previous").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `previous` to be a primitive type in the JSON string but got `%s`", jsonObj.get("previous").toString()));
      }
      if ((jsonObj.get("next") != null && !jsonObj.get("next").isJsonNull()) && !jsonObj.get("next").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `next` to be a primitive type in the JSON string but got `%s`", jsonObj.get("next").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1ListAgentsResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1ListAgentsResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1ListAgentsResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1ListAgentsResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<V1ListAgentsResponse>() {
           @Override
           public void write(JsonWriter out, V1ListAgentsResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1ListAgentsResponse read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1ListAgentsResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1ListAgentsResponse
  * @throws IOException if the JSON string is invalid with respect to V1ListAgentsResponse
  */
  public static V1ListAgentsResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1ListAgentsResponse.class);
  }

 /**
  * Convert an instance of V1ListAgentsResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

