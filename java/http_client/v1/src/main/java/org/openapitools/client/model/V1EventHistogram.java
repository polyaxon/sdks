/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc50
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
 * V1EventHistogram
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventHistogram {
  public static final String SERIALIZED_NAME_VALUES = "values";
  @SerializedName(SERIALIZED_NAME_VALUES)
  private List<Double> values;

  public static final String SERIALIZED_NAME_COUNTS = "counts";
  @SerializedName(SERIALIZED_NAME_COUNTS)
  private List<Double> counts;

  public V1EventHistogram() {
  }

  public V1EventHistogram values(List<Double> values) {

    this.values = values;
    return this;
  }

  public V1EventHistogram addValuesItem(Double valuesItem) {
    if (this.values == null) {
      this.values = new ArrayList<>();
    }
    this.values.add(valuesItem);
    return this;
  }

   /**
   * Get values
   * @return values
  **/
  @javax.annotation.Nullable

  public List<Double> getValues() {
    return values;
  }


  public void setValues(List<Double> values) {
    this.values = values;
  }


  public V1EventHistogram counts(List<Double> counts) {

    this.counts = counts;
    return this;
  }

  public V1EventHistogram addCountsItem(Double countsItem) {
    if (this.counts == null) {
      this.counts = new ArrayList<>();
    }
    this.counts.add(countsItem);
    return this;
  }

   /**
   * Get counts
   * @return counts
  **/
  @javax.annotation.Nullable

  public List<Double> getCounts() {
    return counts;
  }


  public void setCounts(List<Double> counts) {
    this.counts = counts;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventHistogram v1EventHistogram = (V1EventHistogram) o;
    return Objects.equals(this.values, v1EventHistogram.values) &&
        Objects.equals(this.counts, v1EventHistogram.counts);
  }

  @Override
  public int hashCode() {
    return Objects.hash(values, counts);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventHistogram {\n");
    sb.append("    values: ").append(toIndentedString(values)).append("\n");
    sb.append("    counts: ").append(toIndentedString(counts)).append("\n");
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
    openapiFields.add("values");
    openapiFields.add("counts");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1EventHistogram
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1EventHistogram.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1EventHistogram is not found in the empty JSON string", V1EventHistogram.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1EventHistogram.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1EventHistogram` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("values") != null && !jsonObj.get("values").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `values` to be an array in the JSON string but got `%s`", jsonObj.get("values").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("counts") != null && !jsonObj.get("counts").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `counts` to be an array in the JSON string but got `%s`", jsonObj.get("counts").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1EventHistogram.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1EventHistogram' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1EventHistogram> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1EventHistogram.class));

       return (TypeAdapter<T>) new TypeAdapter<V1EventHistogram>() {
           @Override
           public void write(JsonWriter out, V1EventHistogram value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1EventHistogram read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1EventHistogram given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1EventHistogram
  * @throws IOException if the JSON string is invalid with respect to V1EventHistogram
  */
  public static V1EventHistogram fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1EventHistogram.class);
  }

 /**
  * Convert an instance of V1EventHistogram to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

