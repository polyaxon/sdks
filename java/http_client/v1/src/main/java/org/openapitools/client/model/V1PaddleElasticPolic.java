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
 * V1PaddleElasticPolic
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1PaddleElasticPolic {
  public static final String SERIALIZED_NAME_MIN_REPLICAS = "minReplicas";
  @SerializedName(SERIALIZED_NAME_MIN_REPLICAS)
  private Integer minReplicas;

  public static final String SERIALIZED_NAME_MAX_REPLICAS = "maxReplicas";
  @SerializedName(SERIALIZED_NAME_MAX_REPLICAS)
  private Integer maxReplicas;

  public static final String SERIALIZED_NAME_MAX_RESTARTS = "maxRestarts";
  @SerializedName(SERIALIZED_NAME_MAX_RESTARTS)
  private Integer maxRestarts;

  public static final String SERIALIZED_NAME_METRICS = "metrics";
  @SerializedName(SERIALIZED_NAME_METRICS)
  private List<Object> metrics;

  public V1PaddleElasticPolic() {
  }

  public V1PaddleElasticPolic minReplicas(Integer minReplicas) {

    this.minReplicas = minReplicas;
    return this;
  }

   /**
   * Get minReplicas
   * @return minReplicas
  **/
  @javax.annotation.Nullable

  public Integer getMinReplicas() {
    return minReplicas;
  }


  public void setMinReplicas(Integer minReplicas) {
    this.minReplicas = minReplicas;
  }


  public V1PaddleElasticPolic maxReplicas(Integer maxReplicas) {

    this.maxReplicas = maxReplicas;
    return this;
  }

   /**
   * Get maxReplicas
   * @return maxReplicas
  **/
  @javax.annotation.Nullable

  public Integer getMaxReplicas() {
    return maxReplicas;
  }


  public void setMaxReplicas(Integer maxReplicas) {
    this.maxReplicas = maxReplicas;
  }


  public V1PaddleElasticPolic maxRestarts(Integer maxRestarts) {

    this.maxRestarts = maxRestarts;
    return this;
  }

   /**
   * Get maxRestarts
   * @return maxRestarts
  **/
  @javax.annotation.Nullable

  public Integer getMaxRestarts() {
    return maxRestarts;
  }


  public void setMaxRestarts(Integer maxRestarts) {
    this.maxRestarts = maxRestarts;
  }


  public V1PaddleElasticPolic metrics(List<Object> metrics) {

    this.metrics = metrics;
    return this;
  }

  public V1PaddleElasticPolic addMetricsItem(Object metricsItem) {
    if (this.metrics == null) {
      this.metrics = new ArrayList<>();
    }
    this.metrics.add(metricsItem);
    return this;
  }

   /**
   * Get metrics
   * @return metrics
  **/
  @javax.annotation.Nullable

  public List<Object> getMetrics() {
    return metrics;
  }


  public void setMetrics(List<Object> metrics) {
    this.metrics = metrics;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PaddleElasticPolic v1PaddleElasticPolic = (V1PaddleElasticPolic) o;
    return Objects.equals(this.minReplicas, v1PaddleElasticPolic.minReplicas) &&
        Objects.equals(this.maxReplicas, v1PaddleElasticPolic.maxReplicas) &&
        Objects.equals(this.maxRestarts, v1PaddleElasticPolic.maxRestarts) &&
        Objects.equals(this.metrics, v1PaddleElasticPolic.metrics);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minReplicas, maxReplicas, maxRestarts, metrics);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PaddleElasticPolic {\n");
    sb.append("    minReplicas: ").append(toIndentedString(minReplicas)).append("\n");
    sb.append("    maxReplicas: ").append(toIndentedString(maxReplicas)).append("\n");
    sb.append("    maxRestarts: ").append(toIndentedString(maxRestarts)).append("\n");
    sb.append("    metrics: ").append(toIndentedString(metrics)).append("\n");
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
    openapiFields.add("minReplicas");
    openapiFields.add("maxReplicas");
    openapiFields.add("maxRestarts");
    openapiFields.add("metrics");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1PaddleElasticPolic
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1PaddleElasticPolic.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1PaddleElasticPolic is not found in the empty JSON string", V1PaddleElasticPolic.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1PaddleElasticPolic.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1PaddleElasticPolic` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("metrics") != null && !jsonObj.get("metrics").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `metrics` to be an array in the JSON string but got `%s`", jsonObj.get("metrics").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1PaddleElasticPolic.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1PaddleElasticPolic' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1PaddleElasticPolic> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1PaddleElasticPolic.class));

       return (TypeAdapter<T>) new TypeAdapter<V1PaddleElasticPolic>() {
           @Override
           public void write(JsonWriter out, V1PaddleElasticPolic value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1PaddleElasticPolic read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1PaddleElasticPolic given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1PaddleElasticPolic
  * @throws IOException if the JSON string is invalid with respect to V1PaddleElasticPolic
  */
  public static V1PaddleElasticPolic fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1PaddleElasticPolic.class);
  }

 /**
  * Convert an instance of V1PaddleElasticPolic to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

