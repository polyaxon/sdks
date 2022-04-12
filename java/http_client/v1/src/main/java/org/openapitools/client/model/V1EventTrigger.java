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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1EventKind;

/**
 * V1EventTrigger
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventTrigger {
  public static final String SERIALIZED_NAME_KINDS = "kinds";
  @SerializedName(SERIALIZED_NAME_KINDS)
  private List<V1EventKind> kinds = null;

  public static final String SERIALIZED_NAME_REF = "ref";
  @SerializedName(SERIALIZED_NAME_REF)
  private String ref;


  public V1EventTrigger kinds(List<V1EventKind> kinds) {
    
    this.kinds = kinds;
    return this;
  }

  public V1EventTrigger addKindsItem(V1EventKind kindsItem) {
    if (this.kinds == null) {
      this.kinds = new ArrayList<V1EventKind>();
    }
    this.kinds.add(kindsItem);
    return this;
  }

   /**
   * Get kinds
   * @return kinds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1EventKind> getKinds() {
    return kinds;
  }


  public void setKinds(List<V1EventKind> kinds) {
    this.kinds = kinds;
  }


  public V1EventTrigger ref(String ref) {
    
    this.ref = ref;
    return this;
  }

   /**
   * Get ref
   * @return ref
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRef() {
    return ref;
  }


  public void setRef(String ref) {
    this.ref = ref;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventTrigger v1EventTrigger = (V1EventTrigger) o;
    return Objects.equals(this.kinds, v1EventTrigger.kinds) &&
        Objects.equals(this.ref, v1EventTrigger.ref);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kinds, ref);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventTrigger {\n");
    sb.append("    kinds: ").append(toIndentedString(kinds)).append("\n");
    sb.append("    ref: ").append(toIndentedString(ref)).append("\n");
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

