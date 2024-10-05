/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
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
 * V1ConnectionResource
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ConnectionResource {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_MOUNT_PATH = "mountPath";
  @SerializedName(SERIALIZED_NAME_MOUNT_PATH)
  private String mountPath;

  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<String> items;

  public static final String SERIALIZED_NAME_DEFAULT_MODE = "defaultMode";
  @SerializedName(SERIALIZED_NAME_DEFAULT_MODE)
  private Integer defaultMode;

  public V1ConnectionResource() {
  }

  public V1ConnectionResource name(String name) {

    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1ConnectionResource mountPath(String mountPath) {

    this.mountPath = mountPath;
    return this;
  }

   /**
   * Get mountPath
   * @return mountPath
  **/
  @javax.annotation.Nullable

  public String getMountPath() {
    return mountPath;
  }


  public void setMountPath(String mountPath) {
    this.mountPath = mountPath;
  }


  public V1ConnectionResource items(List<String> items) {

    this.items = items;
    return this;
  }

  public V1ConnectionResource addItemsItem(String itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<>();
    }
    this.items.add(itemsItem);
    return this;
  }

   /**
   * Get items
   * @return items
  **/
  @javax.annotation.Nullable

  public List<String> getItems() {
    return items;
  }


  public void setItems(List<String> items) {
    this.items = items;
  }


  public V1ConnectionResource defaultMode(Integer defaultMode) {

    this.defaultMode = defaultMode;
    return this;
  }

   /**
   * Get defaultMode
   * @return defaultMode
  **/
  @javax.annotation.Nullable

  public Integer getDefaultMode() {
    return defaultMode;
  }


  public void setDefaultMode(Integer defaultMode) {
    this.defaultMode = defaultMode;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ConnectionResource v1ConnectionResource = (V1ConnectionResource) o;
    return Objects.equals(this.name, v1ConnectionResource.name) &&
        Objects.equals(this.mountPath, v1ConnectionResource.mountPath) &&
        Objects.equals(this.items, v1ConnectionResource.items) &&
        Objects.equals(this.defaultMode, v1ConnectionResource.defaultMode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, mountPath, items, defaultMode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ConnectionResource {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mountPath: ").append(toIndentedString(mountPath)).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    defaultMode: ").append(toIndentedString(defaultMode)).append("\n");
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
    openapiFields.add("name");
    openapiFields.add("mountPath");
    openapiFields.add("items");
    openapiFields.add("defaultMode");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1ConnectionResource
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1ConnectionResource.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1ConnectionResource is not found in the empty JSON string", V1ConnectionResource.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1ConnectionResource.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1ConnectionResource` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("mountPath") != null && !jsonObj.get("mountPath").isJsonNull()) && !jsonObj.get("mountPath").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `mountPath` to be a primitive type in the JSON string but got `%s`", jsonObj.get("mountPath").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("items") != null && !jsonObj.get("items").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `items` to be an array in the JSON string but got `%s`", jsonObj.get("items").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1ConnectionResource.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1ConnectionResource' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1ConnectionResource> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1ConnectionResource.class));

       return (TypeAdapter<T>) new TypeAdapter<V1ConnectionResource>() {
           @Override
           public void write(JsonWriter out, V1ConnectionResource value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1ConnectionResource read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1ConnectionResource given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1ConnectionResource
  * @throws IOException if the JSON string is invalid with respect to V1ConnectionResource
  */
  public static V1ConnectionResource fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1ConnectionResource.class);
  }

 /**
  * Convert an instance of V1ConnectionResource to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

