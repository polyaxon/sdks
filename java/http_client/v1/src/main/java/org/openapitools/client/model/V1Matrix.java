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
 * The version of the OpenAPI document: 1.13.0-rc3
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
import org.openapitools.client.model.V1Bayes;
import org.openapitools.client.model.V1GridSearch;
import org.openapitools.client.model.V1Hyperband;
import org.openapitools.client.model.V1Hyperopt;
import org.openapitools.client.model.V1Iterative;
import org.openapitools.client.model.V1Mapping;
import org.openapitools.client.model.V1RandomSearch;

/**
 * V1Matrix
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Matrix {
  public static final String SERIALIZED_NAME_RANDOM = "random";
  @SerializedName(SERIALIZED_NAME_RANDOM)
  private V1RandomSearch random;

  public static final String SERIALIZED_NAME_GRID = "grid";
  @SerializedName(SERIALIZED_NAME_GRID)
  private V1GridSearch grid;

  public static final String SERIALIZED_NAME_HYPERBAND = "hyperband";
  @SerializedName(SERIALIZED_NAME_HYPERBAND)
  private V1Hyperband hyperband;

  public static final String SERIALIZED_NAME_BAYES = "bayes";
  @SerializedName(SERIALIZED_NAME_BAYES)
  private V1Bayes bayes;

  public static final String SERIALIZED_NAME_HYPEROPT = "hyperopt";
  @SerializedName(SERIALIZED_NAME_HYPEROPT)
  private V1Hyperopt hyperopt;

  public static final String SERIALIZED_NAME_ITERATIVE = "iterative";
  @SerializedName(SERIALIZED_NAME_ITERATIVE)
  private V1Iterative iterative;

  public static final String SERIALIZED_NAME_MAPPING = "mapping";
  @SerializedName(SERIALIZED_NAME_MAPPING)
  private V1Mapping mapping;


  public V1Matrix random(V1RandomSearch random) {
    
    this.random = random;
    return this;
  }

   /**
   * Get random
   * @return random
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RandomSearch getRandom() {
    return random;
  }


  public void setRandom(V1RandomSearch random) {
    this.random = random;
  }


  public V1Matrix grid(V1GridSearch grid) {
    
    this.grid = grid;
    return this;
  }

   /**
   * Get grid
   * @return grid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1GridSearch getGrid() {
    return grid;
  }


  public void setGrid(V1GridSearch grid) {
    this.grid = grid;
  }


  public V1Matrix hyperband(V1Hyperband hyperband) {
    
    this.hyperband = hyperband;
    return this;
  }

   /**
   * Get hyperband
   * @return hyperband
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Hyperband getHyperband() {
    return hyperband;
  }


  public void setHyperband(V1Hyperband hyperband) {
    this.hyperband = hyperband;
  }


  public V1Matrix bayes(V1Bayes bayes) {
    
    this.bayes = bayes;
    return this;
  }

   /**
   * Get bayes
   * @return bayes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Bayes getBayes() {
    return bayes;
  }


  public void setBayes(V1Bayes bayes) {
    this.bayes = bayes;
  }


  public V1Matrix hyperopt(V1Hyperopt hyperopt) {
    
    this.hyperopt = hyperopt;
    return this;
  }

   /**
   * Get hyperopt
   * @return hyperopt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Hyperopt getHyperopt() {
    return hyperopt;
  }


  public void setHyperopt(V1Hyperopt hyperopt) {
    this.hyperopt = hyperopt;
  }


  public V1Matrix iterative(V1Iterative iterative) {
    
    this.iterative = iterative;
    return this;
  }

   /**
   * Get iterative
   * @return iterative
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Iterative getIterative() {
    return iterative;
  }


  public void setIterative(V1Iterative iterative) {
    this.iterative = iterative;
  }


  public V1Matrix mapping(V1Mapping mapping) {
    
    this.mapping = mapping;
    return this;
  }

   /**
   * Get mapping
   * @return mapping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Mapping getMapping() {
    return mapping;
  }


  public void setMapping(V1Mapping mapping) {
    this.mapping = mapping;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Matrix v1Matrix = (V1Matrix) o;
    return Objects.equals(this.random, v1Matrix.random) &&
        Objects.equals(this.grid, v1Matrix.grid) &&
        Objects.equals(this.hyperband, v1Matrix.hyperband) &&
        Objects.equals(this.bayes, v1Matrix.bayes) &&
        Objects.equals(this.hyperopt, v1Matrix.hyperopt) &&
        Objects.equals(this.iterative, v1Matrix.iterative) &&
        Objects.equals(this.mapping, v1Matrix.mapping);
  }

  @Override
  public int hashCode() {
    return Objects.hash(random, grid, hyperband, bayes, hyperopt, iterative, mapping);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Matrix {\n");
    sb.append("    random: ").append(toIndentedString(random)).append("\n");
    sb.append("    grid: ").append(toIndentedString(grid)).append("\n");
    sb.append("    hyperband: ").append(toIndentedString(hyperband)).append("\n");
    sb.append("    bayes: ").append(toIndentedString(bayes)).append("\n");
    sb.append("    hyperopt: ").append(toIndentedString(hyperopt)).append("\n");
    sb.append("    iterative: ").append(toIndentedString(iterative)).append("\n");
    sb.append("    mapping: ").append(toIndentedString(mapping)).append("\n");
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

