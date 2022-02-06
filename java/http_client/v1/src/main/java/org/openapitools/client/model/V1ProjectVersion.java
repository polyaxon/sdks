// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.15.0
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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1ProjectVersionKind;
import org.openapitools.client.model.V1StageCondition;
import org.openapitools.client.model.V1Stages;
import org.threeten.bp.OffsetDateTime;

/**
 * V1ProjectVersion
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ProjectVersion {
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
  private List<String> tags = null;

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_PROJECT = "project";
  @SerializedName(SERIALIZED_NAME_PROJECT)
  private String project;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_RUN = "run";
  @SerializedName(SERIALIZED_NAME_RUN)
  private String run;

  public static final String SERIALIZED_NAME_ARTIFACTS = "artifacts";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS)
  private List<String> artifacts = null;

  public static final String SERIALIZED_NAME_META_INFO = "meta_info";
  @SerializedName(SERIALIZED_NAME_META_INFO)
  private Object metaInfo;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_STAGE = "stage";
  @SerializedName(SERIALIZED_NAME_STAGE)
  private V1Stages stage = V1Stages.TESTING;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1ProjectVersionKind kind = V1ProjectVersionKind.COMPONENT;

  public static final String SERIALIZED_NAME_STAGE_CONDITIONS = "stage_conditions";
  @SerializedName(SERIALIZED_NAME_STAGE_CONDITIONS)
  private List<V1StageCondition> stageConditions = null;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_STATE = "state";
  @SerializedName(SERIALIZED_NAME_STATE)
  private String state;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;


  public V1ProjectVersion uuid(String uuid) {
    
    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUuid() {
    return uuid;
  }


  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  public V1ProjectVersion name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1ProjectVersion description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public V1ProjectVersion tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1ProjectVersion addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<String>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public V1ProjectVersion owner(String owner) {
    
    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getOwner() {
    return owner;
  }


  public void setOwner(String owner) {
    this.owner = owner;
  }


  public V1ProjectVersion project(String project) {
    
    this.project = project;
    return this;
  }

   /**
   * Get project
   * @return project
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getProject() {
    return project;
  }


  public void setProject(String project) {
    this.project = project;
  }


  public V1ProjectVersion connection(String connection) {
    
    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1ProjectVersion run(String run) {
    
    this.run = run;
    return this;
  }

   /**
   * Get run
   * @return run
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRun() {
    return run;
  }


  public void setRun(String run) {
    this.run = run;
  }


  public V1ProjectVersion artifacts(List<String> artifacts) {
    
    this.artifacts = artifacts;
    return this;
  }

  public V1ProjectVersion addArtifactsItem(String artifactsItem) {
    if (this.artifacts == null) {
      this.artifacts = new ArrayList<String>();
    }
    this.artifacts.add(artifactsItem);
    return this;
  }

   /**
   * Get artifacts
   * @return artifacts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getArtifacts() {
    return artifacts;
  }


  public void setArtifacts(List<String> artifacts) {
    this.artifacts = artifacts;
  }


  public V1ProjectVersion metaInfo(Object metaInfo) {
    
    this.metaInfo = metaInfo;
    return this;
  }

   /**
   * Get metaInfo
   * @return metaInfo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getMetaInfo() {
    return metaInfo;
  }


  public void setMetaInfo(Object metaInfo) {
    this.metaInfo = metaInfo;
  }


  public V1ProjectVersion createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1ProjectVersion updatedAt(OffsetDateTime updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  public V1ProjectVersion stage(V1Stages stage) {
    
    this.stage = stage;
    return this;
  }

   /**
   * Get stage
   * @return stage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Stages getStage() {
    return stage;
  }


  public void setStage(V1Stages stage) {
    this.stage = stage;
  }


  public V1ProjectVersion kind(V1ProjectVersionKind kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ProjectVersionKind getKind() {
    return kind;
  }


  public void setKind(V1ProjectVersionKind kind) {
    this.kind = kind;
  }


  public V1ProjectVersion stageConditions(List<V1StageCondition> stageConditions) {
    
    this.stageConditions = stageConditions;
    return this;
  }

  public V1ProjectVersion addStageConditionsItem(V1StageCondition stageConditionsItem) {
    if (this.stageConditions == null) {
      this.stageConditions = new ArrayList<V1StageCondition>();
    }
    this.stageConditions.add(stageConditionsItem);
    return this;
  }

   /**
   * Get stageConditions
   * @return stageConditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1StageCondition> getStageConditions() {
    return stageConditions;
  }


  public void setStageConditions(List<V1StageCondition> stageConditions) {
    this.stageConditions = stageConditions;
  }


  public V1ProjectVersion content(String content) {
    
    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public V1ProjectVersion state(String state) {
    
    this.state = state;
    return this;
  }

   /**
   * Get state
   * @return state
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getState() {
    return state;
  }


  public void setState(String state) {
    this.state = state;
  }


  public V1ProjectVersion role(String role) {
    
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRole() {
    return role;
  }


  public void setRole(String role) {
    this.role = role;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ProjectVersion v1ProjectVersion = (V1ProjectVersion) o;
    return Objects.equals(this.uuid, v1ProjectVersion.uuid) &&
        Objects.equals(this.name, v1ProjectVersion.name) &&
        Objects.equals(this.description, v1ProjectVersion.description) &&
        Objects.equals(this.tags, v1ProjectVersion.tags) &&
        Objects.equals(this.owner, v1ProjectVersion.owner) &&
        Objects.equals(this.project, v1ProjectVersion.project) &&
        Objects.equals(this.connection, v1ProjectVersion.connection) &&
        Objects.equals(this.run, v1ProjectVersion.run) &&
        Objects.equals(this.artifacts, v1ProjectVersion.artifacts) &&
        Objects.equals(this.metaInfo, v1ProjectVersion.metaInfo) &&
        Objects.equals(this.createdAt, v1ProjectVersion.createdAt) &&
        Objects.equals(this.updatedAt, v1ProjectVersion.updatedAt) &&
        Objects.equals(this.stage, v1ProjectVersion.stage) &&
        Objects.equals(this.kind, v1ProjectVersion.kind) &&
        Objects.equals(this.stageConditions, v1ProjectVersion.stageConditions) &&
        Objects.equals(this.content, v1ProjectVersion.content) &&
        Objects.equals(this.state, v1ProjectVersion.state) &&
        Objects.equals(this.role, v1ProjectVersion.role);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, description, tags, owner, project, connection, run, artifacts, metaInfo, createdAt, updatedAt, stage, kind, stageConditions, content, state, role);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ProjectVersion {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    project: ").append(toIndentedString(project)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    run: ").append(toIndentedString(run)).append("\n");
    sb.append("    artifacts: ").append(toIndentedString(artifacts)).append("\n");
    sb.append("    metaInfo: ").append(toIndentedString(metaInfo)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    stage: ").append(toIndentedString(stage)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    stageConditions: ").append(toIndentedString(stageConditions)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
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

}

