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
 * The version of the OpenAPI document: 1.16.0
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
 * V1JoinParam
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1JoinParam {
  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private String value;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_TO_INIT = "toInit";
  @SerializedName(SERIALIZED_NAME_TO_INIT)
  private Boolean toInit;

  public static final String SERIALIZED_NAME_TO_ENV = "toEnv";
  @SerializedName(SERIALIZED_NAME_TO_ENV)
  private String toEnv;

  public static final String SERIALIZED_NAME_CONTEXT_ONLY = "contextOnly";
  @SerializedName(SERIALIZED_NAME_CONTEXT_ONLY)
  private Boolean contextOnly;


  public V1JoinParam value(String value) {
    
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getValue() {
    return value;
  }


  public void setValue(String value) {
    this.value = value;
  }


  public V1JoinParam connection(String connection) {
    
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


  public V1JoinParam toInit(Boolean toInit) {
    
    this.toInit = toInit;
    return this;
  }

   /**
   * Get toInit
   * @return toInit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getToInit() {
    return toInit;
  }


  public void setToInit(Boolean toInit) {
    this.toInit = toInit;
  }


  public V1JoinParam toEnv(String toEnv) {
    
    this.toEnv = toEnv;
    return this;
  }

   /**
   * Get toEnv
   * @return toEnv
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getToEnv() {
    return toEnv;
  }


  public void setToEnv(String toEnv) {
    this.toEnv = toEnv;
  }


  public V1JoinParam contextOnly(Boolean contextOnly) {
    
    this.contextOnly = contextOnly;
    return this;
  }

   /**
   * Get contextOnly
   * @return contextOnly
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getContextOnly() {
    return contextOnly;
  }


  public void setContextOnly(Boolean contextOnly) {
    this.contextOnly = contextOnly;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1JoinParam v1JoinParam = (V1JoinParam) o;
    return Objects.equals(this.value, v1JoinParam.value) &&
        Objects.equals(this.connection, v1JoinParam.connection) &&
        Objects.equals(this.toInit, v1JoinParam.toInit) &&
        Objects.equals(this.toEnv, v1JoinParam.toEnv) &&
        Objects.equals(this.contextOnly, v1JoinParam.contextOnly);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, connection, toInit, toEnv, contextOnly);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1JoinParam {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    toInit: ").append(toIndentedString(toInit)).append("\n");
    sb.append("    toEnv: ").append(toIndentedString(toEnv)).append("\n");
    sb.append("    contextOnly: ").append(toIndentedString(contextOnly)).append("\n");
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

