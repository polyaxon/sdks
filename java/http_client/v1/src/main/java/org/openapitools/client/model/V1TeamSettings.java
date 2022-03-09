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
 * The version of the OpenAPI document: 1.16.1
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
import org.openapitools.client.model.V1SettingsCatalog;

/**
 * V1TeamSettings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1TeamSettings {
  public static final String SERIALIZED_NAME_PROJECTS = "projects";
  @SerializedName(SERIALIZED_NAME_PROJECTS)
  private List<V1SettingsCatalog> projects = null;

  public static final String SERIALIZED_NAME_HUBS = "hubs";
  @SerializedName(SERIALIZED_NAME_HUBS)
  private List<V1SettingsCatalog> hubs = null;

  public static final String SERIALIZED_NAME_REGISTRIES = "registries";
  @SerializedName(SERIALIZED_NAME_REGISTRIES)
  private List<V1SettingsCatalog> registries = null;


  public V1TeamSettings projects(List<V1SettingsCatalog> projects) {
    
    this.projects = projects;
    return this;
  }

  public V1TeamSettings addProjectsItem(V1SettingsCatalog projectsItem) {
    if (this.projects == null) {
      this.projects = new ArrayList<V1SettingsCatalog>();
    }
    this.projects.add(projectsItem);
    return this;
  }

   /**
   * Get projects
   * @return projects
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1SettingsCatalog> getProjects() {
    return projects;
  }


  public void setProjects(List<V1SettingsCatalog> projects) {
    this.projects = projects;
  }


  public V1TeamSettings hubs(List<V1SettingsCatalog> hubs) {
    
    this.hubs = hubs;
    return this;
  }

  public V1TeamSettings addHubsItem(V1SettingsCatalog hubsItem) {
    if (this.hubs == null) {
      this.hubs = new ArrayList<V1SettingsCatalog>();
    }
    this.hubs.add(hubsItem);
    return this;
  }

   /**
   * Get hubs
   * @return hubs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1SettingsCatalog> getHubs() {
    return hubs;
  }


  public void setHubs(List<V1SettingsCatalog> hubs) {
    this.hubs = hubs;
  }


  public V1TeamSettings registries(List<V1SettingsCatalog> registries) {
    
    this.registries = registries;
    return this;
  }

  public V1TeamSettings addRegistriesItem(V1SettingsCatalog registriesItem) {
    if (this.registries == null) {
      this.registries = new ArrayList<V1SettingsCatalog>();
    }
    this.registries.add(registriesItem);
    return this;
  }

   /**
   * Get registries
   * @return registries
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1SettingsCatalog> getRegistries() {
    return registries;
  }


  public void setRegistries(List<V1SettingsCatalog> registries) {
    this.registries = registries;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1TeamSettings v1TeamSettings = (V1TeamSettings) o;
    return Objects.equals(this.projects, v1TeamSettings.projects) &&
        Objects.equals(this.hubs, v1TeamSettings.hubs) &&
        Objects.equals(this.registries, v1TeamSettings.registries);
  }

  @Override
  public int hashCode() {
    return Objects.hash(projects, hubs, registries);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1TeamSettings {\n");
    sb.append("    projects: ").append(toIndentedString(projects)).append("\n");
    sb.append("    hubs: ").append(toIndentedString(hubs)).append("\n");
    sb.append("    registries: ").append(toIndentedString(registries)).append("\n");
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

