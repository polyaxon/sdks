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
import org.openapitools.client.model.V1Validation;

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
 * V1IO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1IO {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private Object value;

  public static final String SERIALIZED_NAME_IS_OPTIONAL = "isOptional";
  @SerializedName(SERIALIZED_NAME_IS_OPTIONAL)
  private Boolean isOptional;

  public static final String SERIALIZED_NAME_IS_LIST = "isList";
  @SerializedName(SERIALIZED_NAME_IS_LIST)
  private Boolean isList;

  public static final String SERIALIZED_NAME_IS_FLAG = "isFlag";
  @SerializedName(SERIALIZED_NAME_IS_FLAG)
  private Boolean isFlag;

  public static final String SERIALIZED_NAME_ARG_FORMAT = "argFormat";
  @SerializedName(SERIALIZED_NAME_ARG_FORMAT)
  private String argFormat;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_TO_INIT = "toInit";
  @SerializedName(SERIALIZED_NAME_TO_INIT)
  private Boolean toInit;

  public static final String SERIALIZED_NAME_TO_ENV = "toEnv";
  @SerializedName(SERIALIZED_NAME_TO_ENV)
  private String toEnv;

  public static final String SERIALIZED_NAME_VALIDATION = "validation";
  @SerializedName(SERIALIZED_NAME_VALIDATION)
  private V1Validation validation;

  public static final String SERIALIZED_NAME_DELAY_VALIDATION = "delayValidation";
  @SerializedName(SERIALIZED_NAME_DELAY_VALIDATION)
  private Boolean delayValidation;

  public static final String SERIALIZED_NAME_OPTIONS = "options";
  @SerializedName(SERIALIZED_NAME_OPTIONS)
  private List<Object> options;

  public V1IO() {
  }

  public V1IO name(String name) {

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


  public V1IO description(String description) {

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


  public V1IO type(String type) {

    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @javax.annotation.Nullable

  public String getType() {
    return type;
  }


  public void setType(String type) {
    this.type = type;
  }


  public V1IO value(Object value) {

    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable

  public Object getValue() {
    return value;
  }


  public void setValue(Object value) {
    this.value = value;
  }


  public V1IO isOptional(Boolean isOptional) {

    this.isOptional = isOptional;
    return this;
  }

   /**
   * Get isOptional
   * @return isOptional
  **/
  @javax.annotation.Nullable

  public Boolean getIsOptional() {
    return isOptional;
  }


  public void setIsOptional(Boolean isOptional) {
    this.isOptional = isOptional;
  }


  public V1IO isList(Boolean isList) {

    this.isList = isList;
    return this;
  }

   /**
   * Get isList
   * @return isList
  **/
  @javax.annotation.Nullable

  public Boolean getIsList() {
    return isList;
  }


  public void setIsList(Boolean isList) {
    this.isList = isList;
  }


  public V1IO isFlag(Boolean isFlag) {

    this.isFlag = isFlag;
    return this;
  }

   /**
   * Get isFlag
   * @return isFlag
  **/
  @javax.annotation.Nullable

  public Boolean getIsFlag() {
    return isFlag;
  }


  public void setIsFlag(Boolean isFlag) {
    this.isFlag = isFlag;
  }


  public V1IO argFormat(String argFormat) {

    this.argFormat = argFormat;
    return this;
  }

   /**
   * Get argFormat
   * @return argFormat
  **/
  @javax.annotation.Nullable

  public String getArgFormat() {
    return argFormat;
  }


  public void setArgFormat(String argFormat) {
    this.argFormat = argFormat;
  }


  public V1IO connection(String connection) {

    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1IO toInit(Boolean toInit) {

    this.toInit = toInit;
    return this;
  }

   /**
   * Get toInit
   * @return toInit
  **/
  @javax.annotation.Nullable

  public Boolean getToInit() {
    return toInit;
  }


  public void setToInit(Boolean toInit) {
    this.toInit = toInit;
  }


  public V1IO toEnv(String toEnv) {

    this.toEnv = toEnv;
    return this;
  }

   /**
   * Get toEnv
   * @return toEnv
  **/
  @javax.annotation.Nullable

  public String getToEnv() {
    return toEnv;
  }


  public void setToEnv(String toEnv) {
    this.toEnv = toEnv;
  }


  public V1IO validation(V1Validation validation) {

    this.validation = validation;
    return this;
  }

   /**
   * Get validation
   * @return validation
  **/
  @javax.annotation.Nullable

  public V1Validation getValidation() {
    return validation;
  }


  public void setValidation(V1Validation validation) {
    this.validation = validation;
  }


  public V1IO delayValidation(Boolean delayValidation) {

    this.delayValidation = delayValidation;
    return this;
  }

   /**
   * Get delayValidation
   * @return delayValidation
  **/
  @javax.annotation.Nullable

  public Boolean getDelayValidation() {
    return delayValidation;
  }


  public void setDelayValidation(Boolean delayValidation) {
    this.delayValidation = delayValidation;
  }


  public V1IO options(List<Object> options) {

    this.options = options;
    return this;
  }

  public V1IO addOptionsItem(Object optionsItem) {
    if (this.options == null) {
      this.options = new ArrayList<>();
    }
    this.options.add(optionsItem);
    return this;
  }

   /**
   * Get options
   * @return options
  **/
  @javax.annotation.Nullable

  public List<Object> getOptions() {
    return options;
  }


  public void setOptions(List<Object> options) {
    this.options = options;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1IO v1IO = (V1IO) o;
    return Objects.equals(this.name, v1IO.name) &&
        Objects.equals(this.description, v1IO.description) &&
        Objects.equals(this.type, v1IO.type) &&
        Objects.equals(this.value, v1IO.value) &&
        Objects.equals(this.isOptional, v1IO.isOptional) &&
        Objects.equals(this.isList, v1IO.isList) &&
        Objects.equals(this.isFlag, v1IO.isFlag) &&
        Objects.equals(this.argFormat, v1IO.argFormat) &&
        Objects.equals(this.connection, v1IO.connection) &&
        Objects.equals(this.toInit, v1IO.toInit) &&
        Objects.equals(this.toEnv, v1IO.toEnv) &&
        Objects.equals(this.validation, v1IO.validation) &&
        Objects.equals(this.delayValidation, v1IO.delayValidation) &&
        Objects.equals(this.options, v1IO.options);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, type, value, isOptional, isList, isFlag, argFormat, connection, toInit, toEnv, validation, delayValidation, options);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1IO {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    isOptional: ").append(toIndentedString(isOptional)).append("\n");
    sb.append("    isList: ").append(toIndentedString(isList)).append("\n");
    sb.append("    isFlag: ").append(toIndentedString(isFlag)).append("\n");
    sb.append("    argFormat: ").append(toIndentedString(argFormat)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    toInit: ").append(toIndentedString(toInit)).append("\n");
    sb.append("    toEnv: ").append(toIndentedString(toEnv)).append("\n");
    sb.append("    validation: ").append(toIndentedString(validation)).append("\n");
    sb.append("    delayValidation: ").append(toIndentedString(delayValidation)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
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
    openapiFields.add("description");
    openapiFields.add("type");
    openapiFields.add("value");
    openapiFields.add("isOptional");
    openapiFields.add("isList");
    openapiFields.add("isFlag");
    openapiFields.add("argFormat");
    openapiFields.add("connection");
    openapiFields.add("toInit");
    openapiFields.add("toEnv");
    openapiFields.add("validation");
    openapiFields.add("delayValidation");
    openapiFields.add("options");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1IO
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1IO.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1IO is not found in the empty JSON string", V1IO.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1IO.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1IO` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("argFormat") != null && !jsonObj.get("argFormat").isJsonNull()) && !jsonObj.get("argFormat").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `argFormat` to be a primitive type in the JSON string but got `%s`", jsonObj.get("argFormat").toString()));
      }
      if ((jsonObj.get("connection") != null && !jsonObj.get("connection").isJsonNull()) && !jsonObj.get("connection").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `connection` to be a primitive type in the JSON string but got `%s`", jsonObj.get("connection").toString()));
      }
      if ((jsonObj.get("toEnv") != null && !jsonObj.get("toEnv").isJsonNull()) && !jsonObj.get("toEnv").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `toEnv` to be a primitive type in the JSON string but got `%s`", jsonObj.get("toEnv").toString()));
      }
      // validate the optional field `validation`
      if (jsonObj.get("validation") != null && !jsonObj.get("validation").isJsonNull()) {
        V1Validation.validateJsonObject(jsonObj.getAsJsonObject("validation"));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("options") != null && !jsonObj.get("options").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `options` to be an array in the JSON string but got `%s`", jsonObj.get("options").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1IO.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1IO' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1IO> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1IO.class));

       return (TypeAdapter<T>) new TypeAdapter<V1IO>() {
           @Override
           public void write(JsonWriter out, V1IO value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1IO read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1IO given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1IO
  * @throws IOException if the JSON string is invalid with respect to V1IO
  */
  public static V1IO fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1IO.class);
  }

 /**
  * Convert an instance of V1IO to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

