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
import org.openapitools.client.model.V1StageCondition;
import org.openapitools.client.model.V1Stages;

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
 * V1Stage
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Stage {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_STAGE = "stage";
  @SerializedName(SERIALIZED_NAME_STAGE)
  private V1Stages stage = V1Stages.TESTING;

  public static final String SERIALIZED_NAME_STAGE_CONDITIONS = "stage_conditions";
  @SerializedName(SERIALIZED_NAME_STAGE_CONDITIONS)
  private List<V1StageCondition> stageConditions;

  public V1Stage() {
  }

  public V1Stage uuid(String uuid) {

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


  public V1Stage stage(V1Stages stage) {

    this.stage = stage;
    return this;
  }

   /**
   * Get stage
   * @return stage
  **/
  @javax.annotation.Nullable

  public V1Stages getStage() {
    return stage;
  }


  public void setStage(V1Stages stage) {
    this.stage = stage;
  }


  public V1Stage stageConditions(List<V1StageCondition> stageConditions) {

    this.stageConditions = stageConditions;
    return this;
  }

  public V1Stage addStageConditionsItem(V1StageCondition stageConditionsItem) {
    if (this.stageConditions == null) {
      this.stageConditions = new ArrayList<>();
    }
    this.stageConditions.add(stageConditionsItem);
    return this;
  }

   /**
   * Get stageConditions
   * @return stageConditions
  **/
  @javax.annotation.Nullable

  public List<V1StageCondition> getStageConditions() {
    return stageConditions;
  }


  public void setStageConditions(List<V1StageCondition> stageConditions) {
    this.stageConditions = stageConditions;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Stage v1Stage = (V1Stage) o;
    return Objects.equals(this.uuid, v1Stage.uuid) &&
        Objects.equals(this.stage, v1Stage.stage) &&
        Objects.equals(this.stageConditions, v1Stage.stageConditions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, stage, stageConditions);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Stage {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    stage: ").append(toIndentedString(stage)).append("\n");
    sb.append("    stageConditions: ").append(toIndentedString(stageConditions)).append("\n");
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
    openapiFields.add("stage");
    openapiFields.add("stage_conditions");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Stage
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Stage.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Stage is not found in the empty JSON string", V1Stage.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Stage.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Stage` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if (jsonObj.get("stage_conditions") != null && !jsonObj.get("stage_conditions").isJsonNull()) {
        JsonArray jsonArraystageConditions = jsonObj.getAsJsonArray("stage_conditions");
        if (jsonArraystageConditions != null) {
          // ensure the json data is an array
          if (!jsonObj.get("stage_conditions").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `stage_conditions` to be an array in the JSON string but got `%s`", jsonObj.get("stage_conditions").toString()));
          }

          // validate the optional field `stage_conditions` (array)
          for (int i = 0; i < jsonArraystageConditions.size(); i++) {
            V1StageCondition.validateJsonObject(jsonArraystageConditions.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Stage.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Stage' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Stage> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Stage.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Stage>() {
           @Override
           public void write(JsonWriter out, V1Stage value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Stage read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Stage given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Stage
  * @throws IOException if the JSON string is invalid with respect to V1Stage
  */
  public static V1Stage fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Stage.class);
  }

 /**
  * Convert an instance of V1Stage to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

