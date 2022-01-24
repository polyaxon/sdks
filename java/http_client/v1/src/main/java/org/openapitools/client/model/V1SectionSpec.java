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
 * The version of the OpenAPI document: 1.14.3
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

/**
 * V1SectionSpec
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1SectionSpec {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_IS_MINIMIZED = "is_minimized";
  @SerializedName(SERIALIZED_NAME_IS_MINIMIZED)
  private Boolean isMinimized;

  public static final String SERIALIZED_NAME_COLUMNS = "columns";
  @SerializedName(SERIALIZED_NAME_COLUMNS)
  private Integer columns;

  public static final String SERIALIZED_NAME_HEIGHT = "height";
  @SerializedName(SERIALIZED_NAME_HEIGHT)
  private Integer height;

  public static final String SERIALIZED_NAME_WIDGETS = "widgets";
  @SerializedName(SERIALIZED_NAME_WIDGETS)
  private List<Object> widgets = null;

  public static final String SERIALIZED_NAME_PAGE_INDEX = "pageIndex";
  @SerializedName(SERIALIZED_NAME_PAGE_INDEX)
  private Integer pageIndex;

  public static final String SERIALIZED_NAME_PAGE_SIZE = "pageSize";
  @SerializedName(SERIALIZED_NAME_PAGE_SIZE)
  private Integer pageSize;


  public V1SectionSpec name(String name) {
    
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


  public V1SectionSpec isMinimized(Boolean isMinimized) {
    
    this.isMinimized = isMinimized;
    return this;
  }

   /**
   * Get isMinimized
   * @return isMinimized
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getIsMinimized() {
    return isMinimized;
  }


  public void setIsMinimized(Boolean isMinimized) {
    this.isMinimized = isMinimized;
  }


  public V1SectionSpec columns(Integer columns) {
    
    this.columns = columns;
    return this;
  }

   /**
   * Get columns
   * @return columns
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getColumns() {
    return columns;
  }


  public void setColumns(Integer columns) {
    this.columns = columns;
  }


  public V1SectionSpec height(Integer height) {
    
    this.height = height;
    return this;
  }

   /**
   * Get height
   * @return height
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getHeight() {
    return height;
  }


  public void setHeight(Integer height) {
    this.height = height;
  }


  public V1SectionSpec widgets(List<Object> widgets) {
    
    this.widgets = widgets;
    return this;
  }

  public V1SectionSpec addWidgetsItem(Object widgetsItem) {
    if (this.widgets == null) {
      this.widgets = new ArrayList<Object>();
    }
    this.widgets.add(widgetsItem);
    return this;
  }

   /**
   * Get widgets
   * @return widgets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getWidgets() {
    return widgets;
  }


  public void setWidgets(List<Object> widgets) {
    this.widgets = widgets;
  }


  public V1SectionSpec pageIndex(Integer pageIndex) {
    
    this.pageIndex = pageIndex;
    return this;
  }

   /**
   * Get pageIndex
   * @return pageIndex
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getPageIndex() {
    return pageIndex;
  }


  public void setPageIndex(Integer pageIndex) {
    this.pageIndex = pageIndex;
  }


  public V1SectionSpec pageSize(Integer pageSize) {
    
    this.pageSize = pageSize;
    return this;
  }

   /**
   * Get pageSize
   * @return pageSize
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getPageSize() {
    return pageSize;
  }


  public void setPageSize(Integer pageSize) {
    this.pageSize = pageSize;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1SectionSpec v1SectionSpec = (V1SectionSpec) o;
    return Objects.equals(this.name, v1SectionSpec.name) &&
        Objects.equals(this.isMinimized, v1SectionSpec.isMinimized) &&
        Objects.equals(this.columns, v1SectionSpec.columns) &&
        Objects.equals(this.height, v1SectionSpec.height) &&
        Objects.equals(this.widgets, v1SectionSpec.widgets) &&
        Objects.equals(this.pageIndex, v1SectionSpec.pageIndex) &&
        Objects.equals(this.pageSize, v1SectionSpec.pageSize);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, isMinimized, columns, height, widgets, pageIndex, pageSize);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1SectionSpec {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    isMinimized: ").append(toIndentedString(isMinimized)).append("\n");
    sb.append("    columns: ").append(toIndentedString(columns)).append("\n");
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
    sb.append("    widgets: ").append(toIndentedString(widgets)).append("\n");
    sb.append("    pageIndex: ").append(toIndentedString(pageIndex)).append("\n");
    sb.append("    pageSize: ").append(toIndentedString(pageSize)).append("\n");
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

