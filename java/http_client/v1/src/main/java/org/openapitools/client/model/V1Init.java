// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.22.0
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
import org.openapitools.client.model.V1ArtifactsType;
import org.openapitools.client.model.V1DockerfileType;
import org.openapitools.client.model.V1FileType;
import org.openapitools.client.model.V1GitType;
import org.openapitools.client.model.V1TensorboardType;

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
 * V1Init
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Init {
  public static final String SERIALIZED_NAME_ARTIFACTS = "artifacts";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS)
  private V1ArtifactsType artifacts;

  public static final String SERIALIZED_NAME_PATHS = "paths";
  @SerializedName(SERIALIZED_NAME_PATHS)
  private List<Object> paths = null;

  public static final String SERIALIZED_NAME_GIT = "git";
  @SerializedName(SERIALIZED_NAME_GIT)
  private V1GitType git;

  public static final String SERIALIZED_NAME_DOCKERFILE = "dockerfile";
  @SerializedName(SERIALIZED_NAME_DOCKERFILE)
  private V1DockerfileType dockerfile;

  public static final String SERIALIZED_NAME_FILE = "file";
  @SerializedName(SERIALIZED_NAME_FILE)
  private V1FileType _file;

  public static final String SERIALIZED_NAME_TENSORBOARD = "tensorboard";
  @SerializedName(SERIALIZED_NAME_TENSORBOARD)
  private V1TensorboardType tensorboard;

  public static final String SERIALIZED_NAME_LINEAGE_REF = "lineageRef";
  @SerializedName(SERIALIZED_NAME_LINEAGE_REF)
  private String lineageRef;

  public static final String SERIALIZED_NAME_ARTIFACT_REF = "artifactRef";
  @SerializedName(SERIALIZED_NAME_ARTIFACT_REF)
  private String artifactRef;

  public static final String SERIALIZED_NAME_MODEL_REF = "modelRef";
  @SerializedName(SERIALIZED_NAME_MODEL_REF)
  private String modelRef;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private String path;

  public static final String SERIALIZED_NAME_CONTAINER = "container";
  @SerializedName(SERIALIZED_NAME_CONTAINER)
  private Object container;

  public V1Init() {
  }

  public V1Init artifacts(V1ArtifactsType artifacts) {
    
    this.artifacts = artifacts;
    return this;
  }

   /**
   * Get artifacts
   * @return artifacts
  **/
  @javax.annotation.Nullable

  public V1ArtifactsType getArtifacts() {
    return artifacts;
  }


  public void setArtifacts(V1ArtifactsType artifacts) {
    this.artifacts = artifacts;
  }


  public V1Init paths(List<Object> paths) {
    
    this.paths = paths;
    return this;
  }

  public V1Init addPathsItem(Object pathsItem) {
    if (this.paths == null) {
      this.paths = new ArrayList<>();
    }
    this.paths.add(pathsItem);
    return this;
  }

   /**
   * Get paths
   * @return paths
  **/
  @javax.annotation.Nullable

  public List<Object> getPaths() {
    return paths;
  }


  public void setPaths(List<Object> paths) {
    this.paths = paths;
  }


  public V1Init git(V1GitType git) {
    
    this.git = git;
    return this;
  }

   /**
   * Get git
   * @return git
  **/
  @javax.annotation.Nullable

  public V1GitType getGit() {
    return git;
  }


  public void setGit(V1GitType git) {
    this.git = git;
  }


  public V1Init dockerfile(V1DockerfileType dockerfile) {
    
    this.dockerfile = dockerfile;
    return this;
  }

   /**
   * Get dockerfile
   * @return dockerfile
  **/
  @javax.annotation.Nullable

  public V1DockerfileType getDockerfile() {
    return dockerfile;
  }


  public void setDockerfile(V1DockerfileType dockerfile) {
    this.dockerfile = dockerfile;
  }


  public V1Init _file(V1FileType _file) {
    
    this._file = _file;
    return this;
  }

   /**
   * Get _file
   * @return _file
  **/
  @javax.annotation.Nullable

  public V1FileType getFile() {
    return _file;
  }


  public void setFile(V1FileType _file) {
    this._file = _file;
  }


  public V1Init tensorboard(V1TensorboardType tensorboard) {
    
    this.tensorboard = tensorboard;
    return this;
  }

   /**
   * Get tensorboard
   * @return tensorboard
  **/
  @javax.annotation.Nullable

  public V1TensorboardType getTensorboard() {
    return tensorboard;
  }


  public void setTensorboard(V1TensorboardType tensorboard) {
    this.tensorboard = tensorboard;
  }


  public V1Init lineageRef(String lineageRef) {
    
    this.lineageRef = lineageRef;
    return this;
  }

   /**
   * Get lineageRef
   * @return lineageRef
  **/
  @javax.annotation.Nullable

  public String getLineageRef() {
    return lineageRef;
  }


  public void setLineageRef(String lineageRef) {
    this.lineageRef = lineageRef;
  }


  public V1Init artifactRef(String artifactRef) {
    
    this.artifactRef = artifactRef;
    return this;
  }

   /**
   * Get artifactRef
   * @return artifactRef
  **/
  @javax.annotation.Nullable

  public String getArtifactRef() {
    return artifactRef;
  }


  public void setArtifactRef(String artifactRef) {
    this.artifactRef = artifactRef;
  }


  public V1Init modelRef(String modelRef) {
    
    this.modelRef = modelRef;
    return this;
  }

   /**
   * Get modelRef
   * @return modelRef
  **/
  @javax.annotation.Nullable

  public String getModelRef() {
    return modelRef;
  }


  public void setModelRef(String modelRef) {
    this.modelRef = modelRef;
  }


  public V1Init connection(String connection) {
    
    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1Init path(String path) {
    
    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable

  public String getPath() {
    return path;
  }


  public void setPath(String path) {
    this.path = path;
  }


  public V1Init container(Object container) {
    
    this.container = container;
    return this;
  }

   /**
   * Get container
   * @return container
  **/
  @javax.annotation.Nullable

  public Object getContainer() {
    return container;
  }


  public void setContainer(Object container) {
    this.container = container;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Init v1Init = (V1Init) o;
    return Objects.equals(this.artifacts, v1Init.artifacts) &&
        Objects.equals(this.paths, v1Init.paths) &&
        Objects.equals(this.git, v1Init.git) &&
        Objects.equals(this.dockerfile, v1Init.dockerfile) &&
        Objects.equals(this._file, v1Init._file) &&
        Objects.equals(this.tensorboard, v1Init.tensorboard) &&
        Objects.equals(this.lineageRef, v1Init.lineageRef) &&
        Objects.equals(this.artifactRef, v1Init.artifactRef) &&
        Objects.equals(this.modelRef, v1Init.modelRef) &&
        Objects.equals(this.connection, v1Init.connection) &&
        Objects.equals(this.path, v1Init.path) &&
        Objects.equals(this.container, v1Init.container);
  }

  @Override
  public int hashCode() {
    return Objects.hash(artifacts, paths, git, dockerfile, _file, tensorboard, lineageRef, artifactRef, modelRef, connection, path, container);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Init {\n");
    sb.append("    artifacts: ").append(toIndentedString(artifacts)).append("\n");
    sb.append("    paths: ").append(toIndentedString(paths)).append("\n");
    sb.append("    git: ").append(toIndentedString(git)).append("\n");
    sb.append("    dockerfile: ").append(toIndentedString(dockerfile)).append("\n");
    sb.append("    _file: ").append(toIndentedString(_file)).append("\n");
    sb.append("    tensorboard: ").append(toIndentedString(tensorboard)).append("\n");
    sb.append("    lineageRef: ").append(toIndentedString(lineageRef)).append("\n");
    sb.append("    artifactRef: ").append(toIndentedString(artifactRef)).append("\n");
    sb.append("    modelRef: ").append(toIndentedString(modelRef)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
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
    openapiFields.add("artifacts");
    openapiFields.add("paths");
    openapiFields.add("git");
    openapiFields.add("dockerfile");
    openapiFields.add("file");
    openapiFields.add("tensorboard");
    openapiFields.add("lineageRef");
    openapiFields.add("artifactRef");
    openapiFields.add("modelRef");
    openapiFields.add("connection");
    openapiFields.add("path");
    openapiFields.add("container");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Init
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Init.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Init is not found in the empty JSON string", V1Init.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Init.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Init` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // validate the optional field `artifacts`
      if (jsonObj.get("artifacts") != null && !jsonObj.get("artifacts").isJsonNull()) {
        V1ArtifactsType.validateJsonObject(jsonObj.getAsJsonObject("artifacts"));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("paths") != null && !jsonObj.get("paths").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `paths` to be an array in the JSON string but got `%s`", jsonObj.get("paths").toString()));
      }
      // validate the optional field `git`
      if (jsonObj.get("git") != null && !jsonObj.get("git").isJsonNull()) {
        V1GitType.validateJsonObject(jsonObj.getAsJsonObject("git"));
      }
      // validate the optional field `dockerfile`
      if (jsonObj.get("dockerfile") != null && !jsonObj.get("dockerfile").isJsonNull()) {
        V1DockerfileType.validateJsonObject(jsonObj.getAsJsonObject("dockerfile"));
      }
      // validate the optional field `file`
      if (jsonObj.get("file") != null && !jsonObj.get("file").isJsonNull()) {
        V1FileType.validateJsonObject(jsonObj.getAsJsonObject("file"));
      }
      // validate the optional field `tensorboard`
      if (jsonObj.get("tensorboard") != null && !jsonObj.get("tensorboard").isJsonNull()) {
        V1TensorboardType.validateJsonObject(jsonObj.getAsJsonObject("tensorboard"));
      }
      if ((jsonObj.get("lineageRef") != null && !jsonObj.get("lineageRef").isJsonNull()) && !jsonObj.get("lineageRef").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `lineageRef` to be a primitive type in the JSON string but got `%s`", jsonObj.get("lineageRef").toString()));
      }
      if ((jsonObj.get("artifactRef") != null && !jsonObj.get("artifactRef").isJsonNull()) && !jsonObj.get("artifactRef").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `artifactRef` to be a primitive type in the JSON string but got `%s`", jsonObj.get("artifactRef").toString()));
      }
      if ((jsonObj.get("modelRef") != null && !jsonObj.get("modelRef").isJsonNull()) && !jsonObj.get("modelRef").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `modelRef` to be a primitive type in the JSON string but got `%s`", jsonObj.get("modelRef").toString()));
      }
      if ((jsonObj.get("connection") != null && !jsonObj.get("connection").isJsonNull()) && !jsonObj.get("connection").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `connection` to be a primitive type in the JSON string but got `%s`", jsonObj.get("connection").toString()));
      }
      if ((jsonObj.get("path") != null && !jsonObj.get("path").isJsonNull()) && !jsonObj.get("path").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `path` to be a primitive type in the JSON string but got `%s`", jsonObj.get("path").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Init.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Init' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Init> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Init.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Init>() {
           @Override
           public void write(JsonWriter out, V1Init value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Init read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Init given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Init
  * @throws IOException if the JSON string is invalid with respect to V1Init
  */
  public static V1Init fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Init.class);
  }

 /**
  * Convert an instance of V1Init to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

