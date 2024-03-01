/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.2
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
 * V1Tag
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Tag {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_COLOR = "color";
  @SerializedName(SERIALIZED_NAME_COLOR)
  private String color;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_ICON = "icon";
  @SerializedName(SERIALIZED_NAME_ICON)
  private String icon;

  public static final String SERIALIZED_NAME_STATS = "stats";
  @SerializedName(SERIALIZED_NAME_STATS)
  private Object stats;

  public V1Tag() {
  }

  public V1Tag uuid(String uuid) {

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


  public V1Tag name(String name) {

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


  public V1Tag color(String color) {

    this.color = color;
    return this;
  }

   /**
   * Get color
   * @return color
  **/
  @javax.annotation.Nullable

  public String getColor() {
    return color;
  }


  public void setColor(String color) {
    this.color = color;
  }


  public V1Tag description(String description) {

    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public V1Tag icon(String icon) {

    this.icon = icon;
    return this;
  }

   /**
   * Get icon
   * @return icon
  **/
  @javax.annotation.Nullable

  public String getIcon() {
    return icon;
  }


  public void setIcon(String icon) {
    this.icon = icon;
  }


  public V1Tag stats(Object stats) {

    this.stats = stats;
    return this;
  }

   /**
   * Get stats
   * @return stats
  **/
  @javax.annotation.Nullable

  public Object getStats() {
    return stats;
  }


  public void setStats(Object stats) {
    this.stats = stats;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Tag v1Tag = (V1Tag) o;
    return Objects.equals(this.uuid, v1Tag.uuid) &&
        Objects.equals(this.name, v1Tag.name) &&
        Objects.equals(this.color, v1Tag.color) &&
        Objects.equals(this.description, v1Tag.description) &&
        Objects.equals(this.icon, v1Tag.icon) &&
        Objects.equals(this.stats, v1Tag.stats);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, color, description, icon, stats);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Tag {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    color: ").append(toIndentedString(color)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    stats: ").append(toIndentedString(stats)).append("\n");
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
    openapiFields.add("name");
    openapiFields.add("color");
    openapiFields.add("description");
    openapiFields.add("icon");
    openapiFields.add("stats");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Tag
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Tag.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Tag is not found in the empty JSON string", V1Tag.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Tag.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Tag` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("color") != null && !jsonObj.get("color").isJsonNull()) && !jsonObj.get("color").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `color` to be a primitive type in the JSON string but got `%s`", jsonObj.get("color").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      if ((jsonObj.get("icon") != null && !jsonObj.get("icon").isJsonNull()) && !jsonObj.get("icon").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `icon` to be a primitive type in the JSON string but got `%s`", jsonObj.get("icon").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Tag.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Tag' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Tag> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Tag.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Tag>() {
           @Override
           public void write(JsonWriter out, V1Tag value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Tag read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Tag given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Tag
  * @throws IOException if the JSON string is invalid with respect to V1Tag
  */
  public static V1Tag fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Tag.class);
  }

 /**
  * Convert an instance of V1Tag to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

