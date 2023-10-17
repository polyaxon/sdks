/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
 * V1EventConfusionMatrix
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventConfusionMatrix {
  public static final String SERIALIZED_NAME_X = "x";
  @SerializedName(SERIALIZED_NAME_X)
  private List<Object> x;

  public static final String SERIALIZED_NAME_Y = "y";
  @SerializedName(SERIALIZED_NAME_Y)
  private List<Object> y;

  public static final String SERIALIZED_NAME_Z = "z";
  @SerializedName(SERIALIZED_NAME_Z)
  private List<Object> z;

  public V1EventConfusionMatrix() {
  }

  public V1EventConfusionMatrix x(List<Object> x) {

    this.x = x;
    return this;
  }

  public V1EventConfusionMatrix addXItem(Object xItem) {
    if (this.x == null) {
      this.x = new ArrayList<>();
    }
    this.x.add(xItem);
    return this;
  }

   /**
   * Get x
   * @return x
  **/
  @javax.annotation.Nullable

  public List<Object> getX() {
    return x;
  }


  public void setX(List<Object> x) {
    this.x = x;
  }


  public V1EventConfusionMatrix y(List<Object> y) {

    this.y = y;
    return this;
  }

  public V1EventConfusionMatrix addYItem(Object yItem) {
    if (this.y == null) {
      this.y = new ArrayList<>();
    }
    this.y.add(yItem);
    return this;
  }

   /**
   * Get y
   * @return y
  **/
  @javax.annotation.Nullable

  public List<Object> getY() {
    return y;
  }


  public void setY(List<Object> y) {
    this.y = y;
  }


  public V1EventConfusionMatrix z(List<Object> z) {

    this.z = z;
    return this;
  }

  public V1EventConfusionMatrix addZItem(Object zItem) {
    if (this.z == null) {
      this.z = new ArrayList<>();
    }
    this.z.add(zItem);
    return this;
  }

   /**
   * Get z
   * @return z
  **/
  @javax.annotation.Nullable

  public List<Object> getZ() {
    return z;
  }


  public void setZ(List<Object> z) {
    this.z = z;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventConfusionMatrix v1EventConfusionMatrix = (V1EventConfusionMatrix) o;
    return Objects.equals(this.x, v1EventConfusionMatrix.x) &&
        Objects.equals(this.y, v1EventConfusionMatrix.y) &&
        Objects.equals(this.z, v1EventConfusionMatrix.z);
  }

  @Override
  public int hashCode() {
    return Objects.hash(x, y, z);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventConfusionMatrix {\n");
    sb.append("    x: ").append(toIndentedString(x)).append("\n");
    sb.append("    y: ").append(toIndentedString(y)).append("\n");
    sb.append("    z: ").append(toIndentedString(z)).append("\n");
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
    openapiFields.add("x");
    openapiFields.add("y");
    openapiFields.add("z");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1EventConfusionMatrix
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1EventConfusionMatrix.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1EventConfusionMatrix is not found in the empty JSON string", V1EventConfusionMatrix.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1EventConfusionMatrix.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1EventConfusionMatrix` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("x") != null && !jsonObj.get("x").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `x` to be an array in the JSON string but got `%s`", jsonObj.get("x").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("y") != null && !jsonObj.get("y").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `y` to be an array in the JSON string but got `%s`", jsonObj.get("y").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("z") != null && !jsonObj.get("z").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `z` to be an array in the JSON string but got `%s`", jsonObj.get("z").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1EventConfusionMatrix.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1EventConfusionMatrix' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1EventConfusionMatrix> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1EventConfusionMatrix.class));

       return (TypeAdapter<T>) new TypeAdapter<V1EventConfusionMatrix>() {
           @Override
           public void write(JsonWriter out, V1EventConfusionMatrix value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1EventConfusionMatrix read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1EventConfusionMatrix given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1EventConfusionMatrix
  * @throws IOException if the JSON string is invalid with respect to V1EventConfusionMatrix
  */
  public static V1EventConfusionMatrix fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1EventConfusionMatrix.class);
  }

 /**
  * Convert an instance of V1EventConfusionMatrix to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

