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
 * V1EventVideo
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventVideo {
  public static final String SERIALIZED_NAME_HEIGHT = "height";
  @SerializedName(SERIALIZED_NAME_HEIGHT)
  private Integer height;

  public static final String SERIALIZED_NAME_WIDTH = "width";
  @SerializedName(SERIALIZED_NAME_WIDTH)
  private Integer width;

  public static final String SERIALIZED_NAME_COLORSPACE = "colorspace";
  @SerializedName(SERIALIZED_NAME_COLORSPACE)
  private Integer colorspace;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private String path;

  public static final String SERIALIZED_NAME_CONTENT_TYPE = "content_type";
  @SerializedName(SERIALIZED_NAME_CONTENT_TYPE)
  private String contentType;

  public V1EventVideo() {
  }

  public V1EventVideo height(Integer height) {

    this.height = height;
    return this;
  }

   /**
   * Height of the video.
   * @return height
  **/
  @javax.annotation.Nullable

  public Integer getHeight() {
    return height;
  }


  public void setHeight(Integer height) {
    this.height = height;
  }


  public V1EventVideo width(Integer width) {

    this.width = width;
    return this;
  }

   /**
   * Width of the video.
   * @return width
  **/
  @javax.annotation.Nullable

  public Integer getWidth() {
    return width;
  }


  public void setWidth(Integer width) {
    this.width = width;
  }


  public V1EventVideo colorspace(Integer colorspace) {

    this.colorspace = colorspace;
    return this;
  }

   /**
   * Get colorspace
   * @return colorspace
  **/
  @javax.annotation.Nullable

  public Integer getColorspace() {
    return colorspace;
  }


  public void setColorspace(Integer colorspace) {
    this.colorspace = colorspace;
  }


  public V1EventVideo path(String path) {

    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable

  public String getPath() {
    return path;
  }


  public void setPath(String path) {
    this.path = path;
  }


  public V1EventVideo contentType(String contentType) {

    this.contentType = contentType;
    return this;
  }

   /**
   * Get contentType
   * @return contentType
  **/
  @javax.annotation.Nullable

  public String getContentType() {
    return contentType;
  }


  public void setContentType(String contentType) {
    this.contentType = contentType;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventVideo v1EventVideo = (V1EventVideo) o;
    return Objects.equals(this.height, v1EventVideo.height) &&
        Objects.equals(this.width, v1EventVideo.width) &&
        Objects.equals(this.colorspace, v1EventVideo.colorspace) &&
        Objects.equals(this.path, v1EventVideo.path) &&
        Objects.equals(this.contentType, v1EventVideo.contentType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(height, width, colorspace, path, contentType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventVideo {\n");
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
    sb.append("    width: ").append(toIndentedString(width)).append("\n");
    sb.append("    colorspace: ").append(toIndentedString(colorspace)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
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
    openapiFields.add("height");
    openapiFields.add("width");
    openapiFields.add("colorspace");
    openapiFields.add("path");
    openapiFields.add("content_type");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1EventVideo
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1EventVideo.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1EventVideo is not found in the empty JSON string", V1EventVideo.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1EventVideo.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1EventVideo` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("path") != null && !jsonObj.get("path").isJsonNull()) && !jsonObj.get("path").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `path` to be a primitive type in the JSON string but got `%s`", jsonObj.get("path").toString()));
      }
      if ((jsonObj.get("content_type") != null && !jsonObj.get("content_type").isJsonNull()) && !jsonObj.get("content_type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `content_type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("content_type").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1EventVideo.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1EventVideo' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1EventVideo> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1EventVideo.class));

       return (TypeAdapter<T>) new TypeAdapter<V1EventVideo>() {
           @Override
           public void write(JsonWriter out, V1EventVideo value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1EventVideo read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1EventVideo given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1EventVideo
  * @throws IOException if the JSON string is invalid with respect to V1EventVideo
  */
  public static V1EventVideo fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1EventVideo.class);
  }

 /**
  * Convert an instance of V1EventVideo to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

