/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6
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
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Cloning;
import org.openapitools.client.model.V1ManagedBy;
import org.openapitools.client.model.V1Pipeline;
import org.openapitools.client.model.V1RunKind;
import org.openapitools.client.model.V1RunPending;
import org.openapitools.client.model.V1RunResources;
import org.openapitools.client.model.V1RunSettings;
import org.openapitools.client.model.V1StatusCondition;
import org.openapitools.client.model.V1Statuses;

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
 * V1Run
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Run {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags;

  public static final String SERIALIZED_NAME_USER = "user";
  @SerializedName(SERIALIZED_NAME_USER)
  private String user;

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_PROJECT = "project";
  @SerializedName(SERIALIZED_NAME_PROJECT)
  private String project;

  public static final String SERIALIZED_NAME_SCHEDULE_AT = "schedule_at";
  @SerializedName(SERIALIZED_NAME_SCHEDULE_AT)
  private OffsetDateTime scheduleAt;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_STARTED_AT = "started_at";
  @SerializedName(SERIALIZED_NAME_STARTED_AT)
  private OffsetDateTime startedAt;

  public static final String SERIALIZED_NAME_FINISHED_AT = "finished_at";
  @SerializedName(SERIALIZED_NAME_FINISHED_AT)
  private OffsetDateTime finishedAt;

  public static final String SERIALIZED_NAME_WAIT_TIME = "wait_time";
  @SerializedName(SERIALIZED_NAME_WAIT_TIME)
  private Float waitTime;

  public static final String SERIALIZED_NAME_DURATION = "duration";
  @SerializedName(SERIALIZED_NAME_DURATION)
  private Float duration;

  public static final String SERIALIZED_NAME_MANAGED_BY = "managed_by";
  @SerializedName(SERIALIZED_NAME_MANAGED_BY)
  private V1ManagedBy managedBy = V1ManagedBy.CLIENT;

  public static final String SERIALIZED_NAME_IS_MANAGED = "is_managed";
  @SerializedName(SERIALIZED_NAME_IS_MANAGED)
  private Boolean isManaged;

  public static final String SERIALIZED_NAME_IS_APPROVED = "is_approved";
  @SerializedName(SERIALIZED_NAME_IS_APPROVED)
  private Boolean isApproved;

  public static final String SERIALIZED_NAME_PENDING = "pending";
  @SerializedName(SERIALIZED_NAME_PENDING)
  private V1RunPending pending = V1RunPending.APPROVAL;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_RAW_CONTENT = "raw_content";
  @SerializedName(SERIALIZED_NAME_RAW_CONTENT)
  private String rawContent;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private V1Statuses status = V1Statuses.CREATED;

  public static final String SERIALIZED_NAME_BOOKMARKED = "bookmarked";
  @SerializedName(SERIALIZED_NAME_BOOKMARKED)
  private Boolean bookmarked;

  public static final String SERIALIZED_NAME_LIVE_STATE = "live_state";
  @SerializedName(SERIALIZED_NAME_LIVE_STATE)
  private Integer liveState;

  public static final String SERIALIZED_NAME_README = "readme";
  @SerializedName(SERIALIZED_NAME_README)
  private String readme;

  public static final String SERIALIZED_NAME_META_INFO = "meta_info";
  @SerializedName(SERIALIZED_NAME_META_INFO)
  private Object metaInfo;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1RunKind kind = V1RunKind.JOB;

  public static final String SERIALIZED_NAME_RUNTIME = "runtime";
  @SerializedName(SERIALIZED_NAME_RUNTIME)
  private V1RunKind runtime = V1RunKind.JOB;

  public static final String SERIALIZED_NAME_INPUTS = "inputs";
  @SerializedName(SERIALIZED_NAME_INPUTS)
  private Object inputs;

  public static final String SERIALIZED_NAME_OUTPUTS = "outputs";
  @SerializedName(SERIALIZED_NAME_OUTPUTS)
  private Object outputs;

  public static final String SERIALIZED_NAME_ORIGINAL = "original";
  @SerializedName(SERIALIZED_NAME_ORIGINAL)
  private V1Cloning original;

  public static final String SERIALIZED_NAME_PIPELINE = "pipeline";
  @SerializedName(SERIALIZED_NAME_PIPELINE)
  private V1Pipeline pipeline;

  public static final String SERIALIZED_NAME_STATUS_CONDITIONS = "status_conditions";
  @SerializedName(SERIALIZED_NAME_STATUS_CONDITIONS)
  private List<V1StatusCondition> statusConditions;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;

  public static final String SERIALIZED_NAME_CONTRIBUTORS = "contributors";
  @SerializedName(SERIALIZED_NAME_CONTRIBUTORS)
  private List<Object> contributors;

  public static final String SERIALIZED_NAME_SETTINGS = "settings";
  @SerializedName(SERIALIZED_NAME_SETTINGS)
  private V1RunSettings settings;

  public static final String SERIALIZED_NAME_RESOURCES = "resources";
  @SerializedName(SERIALIZED_NAME_RESOURCES)
  private V1RunResources resources;

  public static final String SERIALIZED_NAME_GRAPH = "graph";
  @SerializedName(SERIALIZED_NAME_GRAPH)
  private Object graph;

  public static final String SERIALIZED_NAME_MERGE = "merge";
  @SerializedName(SERIALIZED_NAME_MERGE)
  private Boolean merge;

  public V1Run() {
  }

  public V1Run uuid(String uuid) {

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


  public V1Run name(String name) {

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


  public V1Run description(String description) {

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


  public V1Run tags(List<String> tags) {

    this.tags = tags;
    return this;
  }

  public V1Run addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @javax.annotation.Nullable

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public V1Run user(String user) {

    this.user = user;
    return this;
  }

   /**
   * Get user
   * @return user
  **/
  @javax.annotation.Nullable

  public String getUser() {
    return user;
  }


  public void setUser(String user) {
    this.user = user;
  }


  public V1Run owner(String owner) {

    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @javax.annotation.Nullable

  public String getOwner() {
    return owner;
  }


  public void setOwner(String owner) {
    this.owner = owner;
  }


  public V1Run project(String project) {

    this.project = project;
    return this;
  }

   /**
   * Get project
   * @return project
  **/
  @javax.annotation.Nullable

  public String getProject() {
    return project;
  }


  public void setProject(String project) {
    this.project = project;
  }


  public V1Run scheduleAt(OffsetDateTime scheduleAt) {

    this.scheduleAt = scheduleAt;
    return this;
  }

   /**
   * Get scheduleAt
   * @return scheduleAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getScheduleAt() {
    return scheduleAt;
  }


  public void setScheduleAt(OffsetDateTime scheduleAt) {
    this.scheduleAt = scheduleAt;
  }


  public V1Run createdAt(OffsetDateTime createdAt) {

    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1Run updatedAt(OffsetDateTime updatedAt) {

    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  public V1Run startedAt(OffsetDateTime startedAt) {

    this.startedAt = startedAt;
    return this;
  }

   /**
   * Get startedAt
   * @return startedAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getStartedAt() {
    return startedAt;
  }


  public void setStartedAt(OffsetDateTime startedAt) {
    this.startedAt = startedAt;
  }


  public V1Run finishedAt(OffsetDateTime finishedAt) {

    this.finishedAt = finishedAt;
    return this;
  }

   /**
   * Get finishedAt
   * @return finishedAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getFinishedAt() {
    return finishedAt;
  }


  public void setFinishedAt(OffsetDateTime finishedAt) {
    this.finishedAt = finishedAt;
  }


  public V1Run waitTime(Float waitTime) {

    this.waitTime = waitTime;
    return this;
  }

   /**
   * Get waitTime
   * @return waitTime
  **/
  @javax.annotation.Nullable

  public Float getWaitTime() {
    return waitTime;
  }


  public void setWaitTime(Float waitTime) {
    this.waitTime = waitTime;
  }


  public V1Run duration(Float duration) {

    this.duration = duration;
    return this;
  }

   /**
   * Get duration
   * @return duration
  **/
  @javax.annotation.Nullable

  public Float getDuration() {
    return duration;
  }


  public void setDuration(Float duration) {
    this.duration = duration;
  }


  public V1Run managedBy(V1ManagedBy managedBy) {

    this.managedBy = managedBy;
    return this;
  }

   /**
   * Get managedBy
   * @return managedBy
  **/
  @javax.annotation.Nullable

  public V1ManagedBy getManagedBy() {
    return managedBy;
  }


  public void setManagedBy(V1ManagedBy managedBy) {
    this.managedBy = managedBy;
  }


  public V1Run isManaged(Boolean isManaged) {

    this.isManaged = isManaged;
    return this;
  }

   /**
   * Get isManaged
   * @return isManaged
  **/
  @javax.annotation.Nullable

  public Boolean getIsManaged() {
    return isManaged;
  }


  public void setIsManaged(Boolean isManaged) {
    this.isManaged = isManaged;
  }


  public V1Run isApproved(Boolean isApproved) {

    this.isApproved = isApproved;
    return this;
  }

   /**
   * Get isApproved
   * @return isApproved
  **/
  @javax.annotation.Nullable

  public Boolean getIsApproved() {
    return isApproved;
  }


  public void setIsApproved(Boolean isApproved) {
    this.isApproved = isApproved;
  }


  public V1Run pending(V1RunPending pending) {

    this.pending = pending;
    return this;
  }

   /**
   * Get pending
   * @return pending
  **/
  @javax.annotation.Nullable

  public V1RunPending getPending() {
    return pending;
  }


  public void setPending(V1RunPending pending) {
    this.pending = pending;
  }


  public V1Run content(String content) {

    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @javax.annotation.Nullable

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public V1Run rawContent(String rawContent) {

    this.rawContent = rawContent;
    return this;
  }

   /**
   * Get rawContent
   * @return rawContent
  **/
  @javax.annotation.Nullable

  public String getRawContent() {
    return rawContent;
  }


  public void setRawContent(String rawContent) {
    this.rawContent = rawContent;
  }


  public V1Run status(V1Statuses status) {

    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable

  public V1Statuses getStatus() {
    return status;
  }


  public void setStatus(V1Statuses status) {
    this.status = status;
  }


  public V1Run bookmarked(Boolean bookmarked) {

    this.bookmarked = bookmarked;
    return this;
  }

   /**
   * Get bookmarked
   * @return bookmarked
  **/
  @javax.annotation.Nullable

  public Boolean getBookmarked() {
    return bookmarked;
  }


  public void setBookmarked(Boolean bookmarked) {
    this.bookmarked = bookmarked;
  }


  public V1Run liveState(Integer liveState) {

    this.liveState = liveState;
    return this;
  }

   /**
   * Get liveState
   * @return liveState
  **/
  @javax.annotation.Nullable

  public Integer getLiveState() {
    return liveState;
  }


  public void setLiveState(Integer liveState) {
    this.liveState = liveState;
  }


  public V1Run readme(String readme) {

    this.readme = readme;
    return this;
  }

   /**
   * Get readme
   * @return readme
  **/
  @javax.annotation.Nullable

  public String getReadme() {
    return readme;
  }


  public void setReadme(String readme) {
    this.readme = readme;
  }


  public V1Run metaInfo(Object metaInfo) {

    this.metaInfo = metaInfo;
    return this;
  }

   /**
   * Get metaInfo
   * @return metaInfo
  **/
  @javax.annotation.Nullable

  public Object getMetaInfo() {
    return metaInfo;
  }


  public void setMetaInfo(Object metaInfo) {
    this.metaInfo = metaInfo;
  }


  public V1Run kind(V1RunKind kind) {

    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable

  public V1RunKind getKind() {
    return kind;
  }


  public void setKind(V1RunKind kind) {
    this.kind = kind;
  }


  public V1Run runtime(V1RunKind runtime) {

    this.runtime = runtime;
    return this;
  }

   /**
   * Get runtime
   * @return runtime
  **/
  @javax.annotation.Nullable

  public V1RunKind getRuntime() {
    return runtime;
  }


  public void setRuntime(V1RunKind runtime) {
    this.runtime = runtime;
  }


  public V1Run inputs(Object inputs) {

    this.inputs = inputs;
    return this;
  }

   /**
   * Get inputs
   * @return inputs
  **/
  @javax.annotation.Nullable

  public Object getInputs() {
    return inputs;
  }


  public void setInputs(Object inputs) {
    this.inputs = inputs;
  }


  public V1Run outputs(Object outputs) {

    this.outputs = outputs;
    return this;
  }

   /**
   * Get outputs
   * @return outputs
  **/
  @javax.annotation.Nullable

  public Object getOutputs() {
    return outputs;
  }


  public void setOutputs(Object outputs) {
    this.outputs = outputs;
  }


  public V1Run original(V1Cloning original) {

    this.original = original;
    return this;
  }

   /**
   * Get original
   * @return original
  **/
  @javax.annotation.Nullable

  public V1Cloning getOriginal() {
    return original;
  }


  public void setOriginal(V1Cloning original) {
    this.original = original;
  }


  public V1Run pipeline(V1Pipeline pipeline) {

    this.pipeline = pipeline;
    return this;
  }

   /**
   * Get pipeline
   * @return pipeline
  **/
  @javax.annotation.Nullable

  public V1Pipeline getPipeline() {
    return pipeline;
  }


  public void setPipeline(V1Pipeline pipeline) {
    this.pipeline = pipeline;
  }


  public V1Run statusConditions(List<V1StatusCondition> statusConditions) {

    this.statusConditions = statusConditions;
    return this;
  }

  public V1Run addStatusConditionsItem(V1StatusCondition statusConditionsItem) {
    if (this.statusConditions == null) {
      this.statusConditions = new ArrayList<>();
    }
    this.statusConditions.add(statusConditionsItem);
    return this;
  }

   /**
   * Get statusConditions
   * @return statusConditions
  **/
  @javax.annotation.Nullable

  public List<V1StatusCondition> getStatusConditions() {
    return statusConditions;
  }


  public void setStatusConditions(List<V1StatusCondition> statusConditions) {
    this.statusConditions = statusConditions;
  }


  public V1Run role(String role) {

    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nullable

  public String getRole() {
    return role;
  }


  public void setRole(String role) {
    this.role = role;
  }


  public V1Run contributors(List<Object> contributors) {

    this.contributors = contributors;
    return this;
  }

  public V1Run addContributorsItem(Object contributorsItem) {
    if (this.contributors == null) {
      this.contributors = new ArrayList<>();
    }
    this.contributors.add(contributorsItem);
    return this;
  }

   /**
   * Get contributors
   * @return contributors
  **/
  @javax.annotation.Nullable

  public List<Object> getContributors() {
    return contributors;
  }


  public void setContributors(List<Object> contributors) {
    this.contributors = contributors;
  }


  public V1Run settings(V1RunSettings settings) {

    this.settings = settings;
    return this;
  }

   /**
   * Get settings
   * @return settings
  **/
  @javax.annotation.Nullable

  public V1RunSettings getSettings() {
    return settings;
  }


  public void setSettings(V1RunSettings settings) {
    this.settings = settings;
  }


  public V1Run resources(V1RunResources resources) {

    this.resources = resources;
    return this;
  }

   /**
   * Get resources
   * @return resources
  **/
  @javax.annotation.Nullable

  public V1RunResources getResources() {
    return resources;
  }


  public void setResources(V1RunResources resources) {
    this.resources = resources;
  }


  public V1Run graph(Object graph) {

    this.graph = graph;
    return this;
  }

   /**
   * Get graph
   * @return graph
  **/
  @javax.annotation.Nullable

  public Object getGraph() {
    return graph;
  }


  public void setGraph(Object graph) {
    this.graph = graph;
  }


  public V1Run merge(Boolean merge) {

    this.merge = merge;
    return this;
  }

   /**
   * Get merge
   * @return merge
  **/
  @javax.annotation.Nullable

  public Boolean getMerge() {
    return merge;
  }


  public void setMerge(Boolean merge) {
    this.merge = merge;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Run v1Run = (V1Run) o;
    return Objects.equals(this.uuid, v1Run.uuid) &&
        Objects.equals(this.name, v1Run.name) &&
        Objects.equals(this.description, v1Run.description) &&
        Objects.equals(this.tags, v1Run.tags) &&
        Objects.equals(this.user, v1Run.user) &&
        Objects.equals(this.owner, v1Run.owner) &&
        Objects.equals(this.project, v1Run.project) &&
        Objects.equals(this.scheduleAt, v1Run.scheduleAt) &&
        Objects.equals(this.createdAt, v1Run.createdAt) &&
        Objects.equals(this.updatedAt, v1Run.updatedAt) &&
        Objects.equals(this.startedAt, v1Run.startedAt) &&
        Objects.equals(this.finishedAt, v1Run.finishedAt) &&
        Objects.equals(this.waitTime, v1Run.waitTime) &&
        Objects.equals(this.duration, v1Run.duration) &&
        Objects.equals(this.managedBy, v1Run.managedBy) &&
        Objects.equals(this.isManaged, v1Run.isManaged) &&
        Objects.equals(this.isApproved, v1Run.isApproved) &&
        Objects.equals(this.pending, v1Run.pending) &&
        Objects.equals(this.content, v1Run.content) &&
        Objects.equals(this.rawContent, v1Run.rawContent) &&
        Objects.equals(this.status, v1Run.status) &&
        Objects.equals(this.bookmarked, v1Run.bookmarked) &&
        Objects.equals(this.liveState, v1Run.liveState) &&
        Objects.equals(this.readme, v1Run.readme) &&
        Objects.equals(this.metaInfo, v1Run.metaInfo) &&
        Objects.equals(this.kind, v1Run.kind) &&
        Objects.equals(this.runtime, v1Run.runtime) &&
        Objects.equals(this.inputs, v1Run.inputs) &&
        Objects.equals(this.outputs, v1Run.outputs) &&
        Objects.equals(this.original, v1Run.original) &&
        Objects.equals(this.pipeline, v1Run.pipeline) &&
        Objects.equals(this.statusConditions, v1Run.statusConditions) &&
        Objects.equals(this.role, v1Run.role) &&
        Objects.equals(this.contributors, v1Run.contributors) &&
        Objects.equals(this.settings, v1Run.settings) &&
        Objects.equals(this.resources, v1Run.resources) &&
        Objects.equals(this.graph, v1Run.graph) &&
        Objects.equals(this.merge, v1Run.merge);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, description, tags, user, owner, project, scheduleAt, createdAt, updatedAt, startedAt, finishedAt, waitTime, duration, managedBy, isManaged, isApproved, pending, content, rawContent, status, bookmarked, liveState, readme, metaInfo, kind, runtime, inputs, outputs, original, pipeline, statusConditions, role, contributors, settings, resources, graph, merge);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Run {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    project: ").append(toIndentedString(project)).append("\n");
    sb.append("    scheduleAt: ").append(toIndentedString(scheduleAt)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    startedAt: ").append(toIndentedString(startedAt)).append("\n");
    sb.append("    finishedAt: ").append(toIndentedString(finishedAt)).append("\n");
    sb.append("    waitTime: ").append(toIndentedString(waitTime)).append("\n");
    sb.append("    duration: ").append(toIndentedString(duration)).append("\n");
    sb.append("    managedBy: ").append(toIndentedString(managedBy)).append("\n");
    sb.append("    isManaged: ").append(toIndentedString(isManaged)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    pending: ").append(toIndentedString(pending)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    rawContent: ").append(toIndentedString(rawContent)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    bookmarked: ").append(toIndentedString(bookmarked)).append("\n");
    sb.append("    liveState: ").append(toIndentedString(liveState)).append("\n");
    sb.append("    readme: ").append(toIndentedString(readme)).append("\n");
    sb.append("    metaInfo: ").append(toIndentedString(metaInfo)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    runtime: ").append(toIndentedString(runtime)).append("\n");
    sb.append("    inputs: ").append(toIndentedString(inputs)).append("\n");
    sb.append("    outputs: ").append(toIndentedString(outputs)).append("\n");
    sb.append("    original: ").append(toIndentedString(original)).append("\n");
    sb.append("    pipeline: ").append(toIndentedString(pipeline)).append("\n");
    sb.append("    statusConditions: ").append(toIndentedString(statusConditions)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    contributors: ").append(toIndentedString(contributors)).append("\n");
    sb.append("    settings: ").append(toIndentedString(settings)).append("\n");
    sb.append("    resources: ").append(toIndentedString(resources)).append("\n");
    sb.append("    graph: ").append(toIndentedString(graph)).append("\n");
    sb.append("    merge: ").append(toIndentedString(merge)).append("\n");
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
    openapiFields.add("description");
    openapiFields.add("tags");
    openapiFields.add("user");
    openapiFields.add("owner");
    openapiFields.add("project");
    openapiFields.add("schedule_at");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");
    openapiFields.add("started_at");
    openapiFields.add("finished_at");
    openapiFields.add("wait_time");
    openapiFields.add("duration");
    openapiFields.add("managed_by");
    openapiFields.add("is_managed");
    openapiFields.add("is_approved");
    openapiFields.add("pending");
    openapiFields.add("content");
    openapiFields.add("raw_content");
    openapiFields.add("status");
    openapiFields.add("bookmarked");
    openapiFields.add("live_state");
    openapiFields.add("readme");
    openapiFields.add("meta_info");
    openapiFields.add("kind");
    openapiFields.add("runtime");
    openapiFields.add("inputs");
    openapiFields.add("outputs");
    openapiFields.add("original");
    openapiFields.add("pipeline");
    openapiFields.add("status_conditions");
    openapiFields.add("role");
    openapiFields.add("contributors");
    openapiFields.add("settings");
    openapiFields.add("resources");
    openapiFields.add("graph");
    openapiFields.add("merge");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Run
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Run.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Run is not found in the empty JSON string", V1Run.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Run.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Run` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("tags") != null && !jsonObj.get("tags").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `tags` to be an array in the JSON string but got `%s`", jsonObj.get("tags").toString()));
      }
      if ((jsonObj.get("user") != null && !jsonObj.get("user").isJsonNull()) && !jsonObj.get("user").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `user` to be a primitive type in the JSON string but got `%s`", jsonObj.get("user").toString()));
      }
      if ((jsonObj.get("owner") != null && !jsonObj.get("owner").isJsonNull()) && !jsonObj.get("owner").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `owner` to be a primitive type in the JSON string but got `%s`", jsonObj.get("owner").toString()));
      }
      if ((jsonObj.get("project") != null && !jsonObj.get("project").isJsonNull()) && !jsonObj.get("project").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `project` to be a primitive type in the JSON string but got `%s`", jsonObj.get("project").toString()));
      }
      if ((jsonObj.get("content") != null && !jsonObj.get("content").isJsonNull()) && !jsonObj.get("content").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `content` to be a primitive type in the JSON string but got `%s`", jsonObj.get("content").toString()));
      }
      if ((jsonObj.get("raw_content") != null && !jsonObj.get("raw_content").isJsonNull()) && !jsonObj.get("raw_content").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `raw_content` to be a primitive type in the JSON string but got `%s`", jsonObj.get("raw_content").toString()));
      }
      if ((jsonObj.get("readme") != null && !jsonObj.get("readme").isJsonNull()) && !jsonObj.get("readme").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `readme` to be a primitive type in the JSON string but got `%s`", jsonObj.get("readme").toString()));
      }
      // validate the optional field `original`
      if (jsonObj.get("original") != null && !jsonObj.get("original").isJsonNull()) {
        V1Cloning.validateJsonObject(jsonObj.getAsJsonObject("original"));
      }
      // validate the optional field `pipeline`
      if (jsonObj.get("pipeline") != null && !jsonObj.get("pipeline").isJsonNull()) {
        V1Pipeline.validateJsonObject(jsonObj.getAsJsonObject("pipeline"));
      }
      if (jsonObj.get("status_conditions") != null && !jsonObj.get("status_conditions").isJsonNull()) {
        JsonArray jsonArraystatusConditions = jsonObj.getAsJsonArray("status_conditions");
        if (jsonArraystatusConditions != null) {
          // ensure the json data is an array
          if (!jsonObj.get("status_conditions").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `status_conditions` to be an array in the JSON string but got `%s`", jsonObj.get("status_conditions").toString()));
          }

          // validate the optional field `status_conditions` (array)
          for (int i = 0; i < jsonArraystatusConditions.size(); i++) {
            V1StatusCondition.validateJsonObject(jsonArraystatusConditions.get(i).getAsJsonObject());
          };
        }
      }
      if ((jsonObj.get("role") != null && !jsonObj.get("role").isJsonNull()) && !jsonObj.get("role").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `role` to be a primitive type in the JSON string but got `%s`", jsonObj.get("role").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("contributors") != null && !jsonObj.get("contributors").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `contributors` to be an array in the JSON string but got `%s`", jsonObj.get("contributors").toString()));
      }
      // validate the optional field `settings`
      if (jsonObj.get("settings") != null && !jsonObj.get("settings").isJsonNull()) {
        V1RunSettings.validateJsonObject(jsonObj.getAsJsonObject("settings"));
      }
      // validate the optional field `resources`
      if (jsonObj.get("resources") != null && !jsonObj.get("resources").isJsonNull()) {
        V1RunResources.validateJsonObject(jsonObj.getAsJsonObject("resources"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Run.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Run' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Run> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Run.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Run>() {
           @Override
           public void write(JsonWriter out, V1Run value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Run read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Run given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Run
  * @throws IOException if the JSON string is invalid with respect to V1Run
  */
  public static V1Run fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Run.class);
  }

 /**
  * Convert an instance of V1Run to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

