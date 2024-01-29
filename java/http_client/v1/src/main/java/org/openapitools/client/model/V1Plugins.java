/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
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
import org.openapitools.client.model.V1Notification;
import org.openapitools.client.model.V1PolyaxonSidecarContainer;

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
 * V1Plugins
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Plugins {
  public static final String SERIALIZED_NAME_AUTH = "auth";
  @SerializedName(SERIALIZED_NAME_AUTH)
  private Boolean auth;

  public static final String SERIALIZED_NAME_DOCKER = "docker";
  @SerializedName(SERIALIZED_NAME_DOCKER)
  private Boolean docker;

  public static final String SERIALIZED_NAME_SHM = "shm";
  @SerializedName(SERIALIZED_NAME_SHM)
  private Boolean shm;

  public static final String SERIALIZED_NAME_MOUNT_ARTIFACTS_STORE = "mountArtifactsStore";
  @SerializedName(SERIALIZED_NAME_MOUNT_ARTIFACTS_STORE)
  private Boolean mountArtifactsStore;

  public static final String SERIALIZED_NAME_COLLECT_ARTIFACTS = "collectArtifacts";
  @SerializedName(SERIALIZED_NAME_COLLECT_ARTIFACTS)
  private Boolean collectArtifacts;

  public static final String SERIALIZED_NAME_COLLECT_LOGS = "collectLogs";
  @SerializedName(SERIALIZED_NAME_COLLECT_LOGS)
  private Boolean collectLogs;

  public static final String SERIALIZED_NAME_COLLECT_RESOURCES = "collectResources";
  @SerializedName(SERIALIZED_NAME_COLLECT_RESOURCES)
  private Boolean collectResources;

  public static final String SERIALIZED_NAME_SYNC_STATUSES = "syncStatuses";
  @SerializedName(SERIALIZED_NAME_SYNC_STATUSES)
  private Boolean syncStatuses;

  public static final String SERIALIZED_NAME_AUTO_RESUME = "autoResume";
  @SerializedName(SERIALIZED_NAME_AUTO_RESUME)
  private Boolean autoResume;

  public static final String SERIALIZED_NAME_LOG_LEVEL = "logLevel";
  @SerializedName(SERIALIZED_NAME_LOG_LEVEL)
  private String logLevel;

  public static final String SERIALIZED_NAME_EXTERNAL_HOST = "externalHost";
  @SerializedName(SERIALIZED_NAME_EXTERNAL_HOST)
  private Boolean externalHost;

  public static final String SERIALIZED_NAME_SIDECAR = "sidecar";
  @SerializedName(SERIALIZED_NAME_SIDECAR)
  private V1PolyaxonSidecarContainer sidecar;

  public static final String SERIALIZED_NAME_NOTIFICATIONS = "notifications";
  @SerializedName(SERIALIZED_NAME_NOTIFICATIONS)
  private List<V1Notification> notifications;

  public V1Plugins() {
  }

  public V1Plugins auth(Boolean auth) {

    this.auth = auth;
    return this;
  }

   /**
   * Get auth
   * @return auth
  **/
  @javax.annotation.Nullable

  public Boolean getAuth() {
    return auth;
  }


  public void setAuth(Boolean auth) {
    this.auth = auth;
  }


  public V1Plugins docker(Boolean docker) {

    this.docker = docker;
    return this;
  }

   /**
   * Get docker
   * @return docker
  **/
  @javax.annotation.Nullable

  public Boolean getDocker() {
    return docker;
  }


  public void setDocker(Boolean docker) {
    this.docker = docker;
  }


  public V1Plugins shm(Boolean shm) {

    this.shm = shm;
    return this;
  }

   /**
   * Get shm
   * @return shm
  **/
  @javax.annotation.Nullable

  public Boolean getShm() {
    return shm;
  }


  public void setShm(Boolean shm) {
    this.shm = shm;
  }


  public V1Plugins mountArtifactsStore(Boolean mountArtifactsStore) {

    this.mountArtifactsStore = mountArtifactsStore;
    return this;
  }

   /**
   * Get mountArtifactsStore
   * @return mountArtifactsStore
  **/
  @javax.annotation.Nullable

  public Boolean getMountArtifactsStore() {
    return mountArtifactsStore;
  }


  public void setMountArtifactsStore(Boolean mountArtifactsStore) {
    this.mountArtifactsStore = mountArtifactsStore;
  }


  public V1Plugins collectArtifacts(Boolean collectArtifacts) {

    this.collectArtifacts = collectArtifacts;
    return this;
  }

   /**
   * Get collectArtifacts
   * @return collectArtifacts
  **/
  @javax.annotation.Nullable

  public Boolean getCollectArtifacts() {
    return collectArtifacts;
  }


  public void setCollectArtifacts(Boolean collectArtifacts) {
    this.collectArtifacts = collectArtifacts;
  }


  public V1Plugins collectLogs(Boolean collectLogs) {

    this.collectLogs = collectLogs;
    return this;
  }

   /**
   * Get collectLogs
   * @return collectLogs
  **/
  @javax.annotation.Nullable

  public Boolean getCollectLogs() {
    return collectLogs;
  }


  public void setCollectLogs(Boolean collectLogs) {
    this.collectLogs = collectLogs;
  }


  public V1Plugins collectResources(Boolean collectResources) {

    this.collectResources = collectResources;
    return this;
  }

   /**
   * Get collectResources
   * @return collectResources
  **/
  @javax.annotation.Nullable

  public Boolean getCollectResources() {
    return collectResources;
  }


  public void setCollectResources(Boolean collectResources) {
    this.collectResources = collectResources;
  }


  public V1Plugins syncStatuses(Boolean syncStatuses) {

    this.syncStatuses = syncStatuses;
    return this;
  }

   /**
   * Get syncStatuses
   * @return syncStatuses
  **/
  @javax.annotation.Nullable

  public Boolean getSyncStatuses() {
    return syncStatuses;
  }


  public void setSyncStatuses(Boolean syncStatuses) {
    this.syncStatuses = syncStatuses;
  }


  public V1Plugins autoResume(Boolean autoResume) {

    this.autoResume = autoResume;
    return this;
  }

   /**
   * Get autoResume
   * @return autoResume
  **/
  @javax.annotation.Nullable

  public Boolean getAutoResume() {
    return autoResume;
  }


  public void setAutoResume(Boolean autoResume) {
    this.autoResume = autoResume;
  }


  public V1Plugins logLevel(String logLevel) {

    this.logLevel = logLevel;
    return this;
  }

   /**
   * Get logLevel
   * @return logLevel
  **/
  @javax.annotation.Nullable

  public String getLogLevel() {
    return logLevel;
  }


  public void setLogLevel(String logLevel) {
    this.logLevel = logLevel;
  }


  public V1Plugins externalHost(Boolean externalHost) {

    this.externalHost = externalHost;
    return this;
  }

   /**
   * Get externalHost
   * @return externalHost
  **/
  @javax.annotation.Nullable

  public Boolean getExternalHost() {
    return externalHost;
  }


  public void setExternalHost(Boolean externalHost) {
    this.externalHost = externalHost;
  }


  public V1Plugins sidecar(V1PolyaxonSidecarContainer sidecar) {

    this.sidecar = sidecar;
    return this;
  }

   /**
   * Get sidecar
   * @return sidecar
  **/
  @javax.annotation.Nullable

  public V1PolyaxonSidecarContainer getSidecar() {
    return sidecar;
  }


  public void setSidecar(V1PolyaxonSidecarContainer sidecar) {
    this.sidecar = sidecar;
  }


  public V1Plugins notifications(List<V1Notification> notifications) {

    this.notifications = notifications;
    return this;
  }

  public V1Plugins addNotificationsItem(V1Notification notificationsItem) {
    if (this.notifications == null) {
      this.notifications = new ArrayList<>();
    }
    this.notifications.add(notificationsItem);
    return this;
  }

   /**
   * Get notifications
   * @return notifications
  **/
  @javax.annotation.Nullable

  public List<V1Notification> getNotifications() {
    return notifications;
  }


  public void setNotifications(List<V1Notification> notifications) {
    this.notifications = notifications;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Plugins v1Plugins = (V1Plugins) o;
    return Objects.equals(this.auth, v1Plugins.auth) &&
        Objects.equals(this.docker, v1Plugins.docker) &&
        Objects.equals(this.shm, v1Plugins.shm) &&
        Objects.equals(this.mountArtifactsStore, v1Plugins.mountArtifactsStore) &&
        Objects.equals(this.collectArtifacts, v1Plugins.collectArtifacts) &&
        Objects.equals(this.collectLogs, v1Plugins.collectLogs) &&
        Objects.equals(this.collectResources, v1Plugins.collectResources) &&
        Objects.equals(this.syncStatuses, v1Plugins.syncStatuses) &&
        Objects.equals(this.autoResume, v1Plugins.autoResume) &&
        Objects.equals(this.logLevel, v1Plugins.logLevel) &&
        Objects.equals(this.externalHost, v1Plugins.externalHost) &&
        Objects.equals(this.sidecar, v1Plugins.sidecar) &&
        Objects.equals(this.notifications, v1Plugins.notifications);
  }

  @Override
  public int hashCode() {
    return Objects.hash(auth, docker, shm, mountArtifactsStore, collectArtifacts, collectLogs, collectResources, syncStatuses, autoResume, logLevel, externalHost, sidecar, notifications);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Plugins {\n");
    sb.append("    auth: ").append(toIndentedString(auth)).append("\n");
    sb.append("    docker: ").append(toIndentedString(docker)).append("\n");
    sb.append("    shm: ").append(toIndentedString(shm)).append("\n");
    sb.append("    mountArtifactsStore: ").append(toIndentedString(mountArtifactsStore)).append("\n");
    sb.append("    collectArtifacts: ").append(toIndentedString(collectArtifacts)).append("\n");
    sb.append("    collectLogs: ").append(toIndentedString(collectLogs)).append("\n");
    sb.append("    collectResources: ").append(toIndentedString(collectResources)).append("\n");
    sb.append("    syncStatuses: ").append(toIndentedString(syncStatuses)).append("\n");
    sb.append("    autoResume: ").append(toIndentedString(autoResume)).append("\n");
    sb.append("    logLevel: ").append(toIndentedString(logLevel)).append("\n");
    sb.append("    externalHost: ").append(toIndentedString(externalHost)).append("\n");
    sb.append("    sidecar: ").append(toIndentedString(sidecar)).append("\n");
    sb.append("    notifications: ").append(toIndentedString(notifications)).append("\n");
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
    openapiFields.add("auth");
    openapiFields.add("docker");
    openapiFields.add("shm");
    openapiFields.add("mountArtifactsStore");
    openapiFields.add("collectArtifacts");
    openapiFields.add("collectLogs");
    openapiFields.add("collectResources");
    openapiFields.add("syncStatuses");
    openapiFields.add("autoResume");
    openapiFields.add("logLevel");
    openapiFields.add("externalHost");
    openapiFields.add("sidecar");
    openapiFields.add("notifications");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Plugins
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Plugins.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Plugins is not found in the empty JSON string", V1Plugins.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Plugins.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Plugins` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("logLevel") != null && !jsonObj.get("logLevel").isJsonNull()) && !jsonObj.get("logLevel").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `logLevel` to be a primitive type in the JSON string but got `%s`", jsonObj.get("logLevel").toString()));
      }
      // validate the optional field `sidecar`
      if (jsonObj.get("sidecar") != null && !jsonObj.get("sidecar").isJsonNull()) {
        V1PolyaxonSidecarContainer.validateJsonObject(jsonObj.getAsJsonObject("sidecar"));
      }
      if (jsonObj.get("notifications") != null && !jsonObj.get("notifications").isJsonNull()) {
        JsonArray jsonArraynotifications = jsonObj.getAsJsonArray("notifications");
        if (jsonArraynotifications != null) {
          // ensure the json data is an array
          if (!jsonObj.get("notifications").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `notifications` to be an array in the JSON string but got `%s`", jsonObj.get("notifications").toString()));
          }

          // validate the optional field `notifications` (array)
          for (int i = 0; i < jsonArraynotifications.size(); i++) {
            V1Notification.validateJsonObject(jsonArraynotifications.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Plugins.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Plugins' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Plugins> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Plugins.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Plugins>() {
           @Override
           public void write(JsonWriter out, V1Plugins value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Plugins read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Plugins given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Plugins
  * @throws IOException if the JSON string is invalid with respect to V1Plugins
  */
  public static V1Plugins fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Plugins.class);
  }

 /**
  * Convert an instance of V1Plugins to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

