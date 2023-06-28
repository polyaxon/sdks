/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc24
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
 * V1PasswordChange
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1PasswordChange {
  public static final String SERIALIZED_NAME_OLD_PASSWORD = "old_password";
  @SerializedName(SERIALIZED_NAME_OLD_PASSWORD)
  private String oldPassword;

  public static final String SERIALIZED_NAME_NEW_PASSWORD1 = "new_password1";
  @SerializedName(SERIALIZED_NAME_NEW_PASSWORD1)
  private String newPassword1;

  public static final String SERIALIZED_NAME_NEW_PASSWORD2 = "new_password2";
  @SerializedName(SERIALIZED_NAME_NEW_PASSWORD2)
  private String newPassword2;

  public V1PasswordChange() {
  }

  public V1PasswordChange oldPassword(String oldPassword) {

    this.oldPassword = oldPassword;
    return this;
  }

   /**
   * Get oldPassword
   * @return oldPassword
  **/
  @javax.annotation.Nullable

  public String getOldPassword() {
    return oldPassword;
  }


  public void setOldPassword(String oldPassword) {
    this.oldPassword = oldPassword;
  }


  public V1PasswordChange newPassword1(String newPassword1) {

    this.newPassword1 = newPassword1;
    return this;
  }

   /**
   * Get newPassword1
   * @return newPassword1
  **/
  @javax.annotation.Nullable

  public String getNewPassword1() {
    return newPassword1;
  }


  public void setNewPassword1(String newPassword1) {
    this.newPassword1 = newPassword1;
  }


  public V1PasswordChange newPassword2(String newPassword2) {

    this.newPassword2 = newPassword2;
    return this;
  }

   /**
   * Get newPassword2
   * @return newPassword2
  **/
  @javax.annotation.Nullable

  public String getNewPassword2() {
    return newPassword2;
  }


  public void setNewPassword2(String newPassword2) {
    this.newPassword2 = newPassword2;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PasswordChange v1PasswordChange = (V1PasswordChange) o;
    return Objects.equals(this.oldPassword, v1PasswordChange.oldPassword) &&
        Objects.equals(this.newPassword1, v1PasswordChange.newPassword1) &&
        Objects.equals(this.newPassword2, v1PasswordChange.newPassword2);
  }

  @Override
  public int hashCode() {
    return Objects.hash(oldPassword, newPassword1, newPassword2);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PasswordChange {\n");
    sb.append("    oldPassword: ").append(toIndentedString(oldPassword)).append("\n");
    sb.append("    newPassword1: ").append(toIndentedString(newPassword1)).append("\n");
    sb.append("    newPassword2: ").append(toIndentedString(newPassword2)).append("\n");
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
    openapiFields.add("old_password");
    openapiFields.add("new_password1");
    openapiFields.add("new_password2");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1PasswordChange
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1PasswordChange.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1PasswordChange is not found in the empty JSON string", V1PasswordChange.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1PasswordChange.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1PasswordChange` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("old_password") != null && !jsonObj.get("old_password").isJsonNull()) && !jsonObj.get("old_password").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `old_password` to be a primitive type in the JSON string but got `%s`", jsonObj.get("old_password").toString()));
      }
      if ((jsonObj.get("new_password1") != null && !jsonObj.get("new_password1").isJsonNull()) && !jsonObj.get("new_password1").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `new_password1` to be a primitive type in the JSON string but got `%s`", jsonObj.get("new_password1").toString()));
      }
      if ((jsonObj.get("new_password2") != null && !jsonObj.get("new_password2").isJsonNull()) && !jsonObj.get("new_password2").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `new_password2` to be a primitive type in the JSON string but got `%s`", jsonObj.get("new_password2").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1PasswordChange.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1PasswordChange' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1PasswordChange> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1PasswordChange.class));

       return (TypeAdapter<T>) new TypeAdapter<V1PasswordChange>() {
           @Override
           public void write(JsonWriter out, V1PasswordChange value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1PasswordChange read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1PasswordChange given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1PasswordChange
  * @throws IOException if the JSON string is invalid with respect to V1PasswordChange
  */
  public static V1PasswordChange fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1PasswordChange.class);
  }

 /**
  * Convert an instance of V1PasswordChange to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

