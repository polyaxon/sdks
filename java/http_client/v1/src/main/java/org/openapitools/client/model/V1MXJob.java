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
import org.openapitools.client.model.MXJobMode;
import org.openapitools.client.model.V1CleanPodPolicy;
import org.openapitools.client.model.V1KFReplica;
import org.openapitools.client.model.V1SchedulingPolicy;

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
 * V1MXJob
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1MXJob {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "mxjob";

  public static final String SERIALIZED_NAME_CLEAN_POD_POLICY = "cleanPodPolicy";
  @SerializedName(SERIALIZED_NAME_CLEAN_POD_POLICY)
  private V1CleanPodPolicy cleanPodPolicy = V1CleanPodPolicy.ALL;

  public static final String SERIALIZED_NAME_SCHEDULING_POLICY = "schedulingPolicy";
  @SerializedName(SERIALIZED_NAME_SCHEDULING_POLICY)
  private V1SchedulingPolicy schedulingPolicy;

  public static final String SERIALIZED_NAME_MODE = "mode";
  @SerializedName(SERIALIZED_NAME_MODE)
  private MXJobMode mode = MXJobMode.MXTRAIN;

  public static final String SERIALIZED_NAME_SCHEDULER = "scheduler";
  @SerializedName(SERIALIZED_NAME_SCHEDULER)
  private V1KFReplica scheduler;

  public static final String SERIALIZED_NAME_SERVER = "server";
  @SerializedName(SERIALIZED_NAME_SERVER)
  private V1KFReplica server;

  public static final String SERIALIZED_NAME_WORKER = "worker";
  @SerializedName(SERIALIZED_NAME_WORKER)
  private V1KFReplica worker;

  public static final String SERIALIZED_NAME_TUNER_TRACKER = "tuner_tracker";
  @SerializedName(SERIALIZED_NAME_TUNER_TRACKER)
  private V1KFReplica tunerTracker;

  public static final String SERIALIZED_NAME_TUNER_SERVER = "tuner_server";
  @SerializedName(SERIALIZED_NAME_TUNER_SERVER)
  private V1KFReplica tunerServer;

  public static final String SERIALIZED_NAME_TUNER = "tuner";
  @SerializedName(SERIALIZED_NAME_TUNER)
  private V1KFReplica tuner;

  public V1MXJob() {
  }

  public V1MXJob kind(String kind) {

    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1MXJob cleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {

    this.cleanPodPolicy = cleanPodPolicy;
    return this;
  }

   /**
   * Get cleanPodPolicy
   * @return cleanPodPolicy
  **/
  @javax.annotation.Nullable

  public V1CleanPodPolicy getCleanPodPolicy() {
    return cleanPodPolicy;
  }


  public void setCleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {
    this.cleanPodPolicy = cleanPodPolicy;
  }


  public V1MXJob schedulingPolicy(V1SchedulingPolicy schedulingPolicy) {

    this.schedulingPolicy = schedulingPolicy;
    return this;
  }

   /**
   * Get schedulingPolicy
   * @return schedulingPolicy
  **/
  @javax.annotation.Nullable

  public V1SchedulingPolicy getSchedulingPolicy() {
    return schedulingPolicy;
  }


  public void setSchedulingPolicy(V1SchedulingPolicy schedulingPolicy) {
    this.schedulingPolicy = schedulingPolicy;
  }


  public V1MXJob mode(MXJobMode mode) {

    this.mode = mode;
    return this;
  }

   /**
   * Get mode
   * @return mode
  **/
  @javax.annotation.Nullable

  public MXJobMode getMode() {
    return mode;
  }


  public void setMode(MXJobMode mode) {
    this.mode = mode;
  }


  public V1MXJob scheduler(V1KFReplica scheduler) {

    this.scheduler = scheduler;
    return this;
  }

   /**
   * Get scheduler
   * @return scheduler
  **/
  @javax.annotation.Nullable

  public V1KFReplica getScheduler() {
    return scheduler;
  }


  public void setScheduler(V1KFReplica scheduler) {
    this.scheduler = scheduler;
  }


  public V1MXJob server(V1KFReplica server) {

    this.server = server;
    return this;
  }

   /**
   * Get server
   * @return server
  **/
  @javax.annotation.Nullable

  public V1KFReplica getServer() {
    return server;
  }


  public void setServer(V1KFReplica server) {
    this.server = server;
  }


  public V1MXJob worker(V1KFReplica worker) {

    this.worker = worker;
    return this;
  }

   /**
   * Get worker
   * @return worker
  **/
  @javax.annotation.Nullable

  public V1KFReplica getWorker() {
    return worker;
  }


  public void setWorker(V1KFReplica worker) {
    this.worker = worker;
  }


  public V1MXJob tunerTracker(V1KFReplica tunerTracker) {

    this.tunerTracker = tunerTracker;
    return this;
  }

   /**
   * Get tunerTracker
   * @return tunerTracker
  **/
  @javax.annotation.Nullable

  public V1KFReplica getTunerTracker() {
    return tunerTracker;
  }


  public void setTunerTracker(V1KFReplica tunerTracker) {
    this.tunerTracker = tunerTracker;
  }


  public V1MXJob tunerServer(V1KFReplica tunerServer) {

    this.tunerServer = tunerServer;
    return this;
  }

   /**
   * Get tunerServer
   * @return tunerServer
  **/
  @javax.annotation.Nullable

  public V1KFReplica getTunerServer() {
    return tunerServer;
  }


  public void setTunerServer(V1KFReplica tunerServer) {
    this.tunerServer = tunerServer;
  }


  public V1MXJob tuner(V1KFReplica tuner) {

    this.tuner = tuner;
    return this;
  }

   /**
   * Get tuner
   * @return tuner
  **/
  @javax.annotation.Nullable

  public V1KFReplica getTuner() {
    return tuner;
  }


  public void setTuner(V1KFReplica tuner) {
    this.tuner = tuner;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1MXJob v1MXJob = (V1MXJob) o;
    return Objects.equals(this.kind, v1MXJob.kind) &&
        Objects.equals(this.cleanPodPolicy, v1MXJob.cleanPodPolicy) &&
        Objects.equals(this.schedulingPolicy, v1MXJob.schedulingPolicy) &&
        Objects.equals(this.mode, v1MXJob.mode) &&
        Objects.equals(this.scheduler, v1MXJob.scheduler) &&
        Objects.equals(this.server, v1MXJob.server) &&
        Objects.equals(this.worker, v1MXJob.worker) &&
        Objects.equals(this.tunerTracker, v1MXJob.tunerTracker) &&
        Objects.equals(this.tunerServer, v1MXJob.tunerServer) &&
        Objects.equals(this.tuner, v1MXJob.tuner);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, cleanPodPolicy, schedulingPolicy, mode, scheduler, server, worker, tunerTracker, tunerServer, tuner);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1MXJob {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    cleanPodPolicy: ").append(toIndentedString(cleanPodPolicy)).append("\n");
    sb.append("    schedulingPolicy: ").append(toIndentedString(schedulingPolicy)).append("\n");
    sb.append("    mode: ").append(toIndentedString(mode)).append("\n");
    sb.append("    scheduler: ").append(toIndentedString(scheduler)).append("\n");
    sb.append("    server: ").append(toIndentedString(server)).append("\n");
    sb.append("    worker: ").append(toIndentedString(worker)).append("\n");
    sb.append("    tunerTracker: ").append(toIndentedString(tunerTracker)).append("\n");
    sb.append("    tunerServer: ").append(toIndentedString(tunerServer)).append("\n");
    sb.append("    tuner: ").append(toIndentedString(tuner)).append("\n");
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
    openapiFields.add("kind");
    openapiFields.add("cleanPodPolicy");
    openapiFields.add("schedulingPolicy");
    openapiFields.add("mode");
    openapiFields.add("scheduler");
    openapiFields.add("server");
    openapiFields.add("worker");
    openapiFields.add("tuner_tracker");
    openapiFields.add("tuner_server");
    openapiFields.add("tuner");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1MXJob
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1MXJob.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1MXJob is not found in the empty JSON string", V1MXJob.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1MXJob.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1MXJob` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
      // validate the optional field `schedulingPolicy`
      if (jsonObj.get("schedulingPolicy") != null && !jsonObj.get("schedulingPolicy").isJsonNull()) {
        V1SchedulingPolicy.validateJsonObject(jsonObj.getAsJsonObject("schedulingPolicy"));
      }
      // validate the optional field `scheduler`
      if (jsonObj.get("scheduler") != null && !jsonObj.get("scheduler").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("scheduler"));
      }
      // validate the optional field `server`
      if (jsonObj.get("server") != null && !jsonObj.get("server").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("server"));
      }
      // validate the optional field `worker`
      if (jsonObj.get("worker") != null && !jsonObj.get("worker").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("worker"));
      }
      // validate the optional field `tuner_tracker`
      if (jsonObj.get("tuner_tracker") != null && !jsonObj.get("tuner_tracker").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("tuner_tracker"));
      }
      // validate the optional field `tuner_server`
      if (jsonObj.get("tuner_server") != null && !jsonObj.get("tuner_server").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("tuner_server"));
      }
      // validate the optional field `tuner`
      if (jsonObj.get("tuner") != null && !jsonObj.get("tuner").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("tuner"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1MXJob.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1MXJob' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1MXJob> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1MXJob.class));

       return (TypeAdapter<T>) new TypeAdapter<V1MXJob>() {
           @Override
           public void write(JsonWriter out, V1MXJob value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1MXJob read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1MXJob given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1MXJob
  * @throws IOException if the JSON string is invalid with respect to V1MXJob
  */
  public static V1MXJob fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1MXJob.class);
  }

 /**
  * Convert an instance of V1MXJob to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

