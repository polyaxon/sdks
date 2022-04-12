// Copyright 2018-2022 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.17.1
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

/**
 * V1SchedulingPolicy
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1SchedulingPolicy {
  public static final String SERIALIZED_NAME_MIN_AVAILABLE = "minAvailable";
  @SerializedName(SERIALIZED_NAME_MIN_AVAILABLE)
  private Integer minAvailable;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_PRIORITY_CLASS = "priorityClass";
  @SerializedName(SERIALIZED_NAME_PRIORITY_CLASS)
  private String priorityClass;


  public V1SchedulingPolicy minAvailable(Integer minAvailable) {
    
    this.minAvailable = minAvailable;
    return this;
  }

   /**
   * Get minAvailable
   * @return minAvailable
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getMinAvailable() {
    return minAvailable;
  }


  public void setMinAvailable(Integer minAvailable) {
    this.minAvailable = minAvailable;
  }


  public V1SchedulingPolicy queue(String queue) {
    
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getQueue() {
    return queue;
  }


  public void setQueue(String queue) {
    this.queue = queue;
  }


  public V1SchedulingPolicy priorityClass(String priorityClass) {
    
    this.priorityClass = priorityClass;
    return this;
  }

   /**
   * Get priorityClass
   * @return priorityClass
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPriorityClass() {
    return priorityClass;
  }


  public void setPriorityClass(String priorityClass) {
    this.priorityClass = priorityClass;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1SchedulingPolicy v1SchedulingPolicy = (V1SchedulingPolicy) o;
    return Objects.equals(this.minAvailable, v1SchedulingPolicy.minAvailable) &&
        Objects.equals(this.queue, v1SchedulingPolicy.queue) &&
        Objects.equals(this.priorityClass, v1SchedulingPolicy.priorityClass);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minAvailable, queue, priorityClass);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1SchedulingPolicy {\n");
    sb.append("    minAvailable: ").append(toIndentedString(minAvailable)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    priorityClass: ").append(toIndentedString(priorityClass)).append("\n");
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

