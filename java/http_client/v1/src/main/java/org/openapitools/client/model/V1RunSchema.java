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
import org.openapitools.client.model.V1Dag;
import org.openapitools.client.model.V1Dask;
import org.openapitools.client.model.V1Flink;
import org.openapitools.client.model.V1Job;
import org.openapitools.client.model.V1MPIJob;
import org.openapitools.client.model.V1MXJob;
import org.openapitools.client.model.V1PytorchJob;
import org.openapitools.client.model.V1Ray;
import org.openapitools.client.model.V1Service;
import org.openapitools.client.model.V1Spark;
import org.openapitools.client.model.V1TFJob;
import org.openapitools.client.model.V1XGBoostJob;

/**
 * V1RunSchema
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1RunSchema {
  public static final String SERIALIZED_NAME_JOB = "job";
  @SerializedName(SERIALIZED_NAME_JOB)
  private V1Job job;

  public static final String SERIALIZED_NAME_SERVICE = "service";
  @SerializedName(SERIALIZED_NAME_SERVICE)
  private V1Service service;

  public static final String SERIALIZED_NAME_DAG = "dag";
  @SerializedName(SERIALIZED_NAME_DAG)
  private V1Dag dag;

  public static final String SERIALIZED_NAME_TF_JOB = "tfJob";
  @SerializedName(SERIALIZED_NAME_TF_JOB)
  private V1TFJob tfJob;

  public static final String SERIALIZED_NAME_PYTORCH_JOB = "pytorchJob";
  @SerializedName(SERIALIZED_NAME_PYTORCH_JOB)
  private V1PytorchJob pytorchJob;

  public static final String SERIALIZED_NAME_MPI_JOB = "mpiJob";
  @SerializedName(SERIALIZED_NAME_MPI_JOB)
  private V1MPIJob mpiJob;

  public static final String SERIALIZED_NAME_MX_JOB = "mxJob";
  @SerializedName(SERIALIZED_NAME_MX_JOB)
  private V1MXJob mxJob;

  public static final String SERIALIZED_NAME_XGBOOST_JOB = "xgboostJob";
  @SerializedName(SERIALIZED_NAME_XGBOOST_JOB)
  private V1XGBoostJob xgboostJob;

  public static final String SERIALIZED_NAME_DASK = "dask";
  @SerializedName(SERIALIZED_NAME_DASK)
  private V1Dask dask;

  public static final String SERIALIZED_NAME_SPARK = "spark";
  @SerializedName(SERIALIZED_NAME_SPARK)
  private V1Spark spark;

  public static final String SERIALIZED_NAME_FLINK = "flink";
  @SerializedName(SERIALIZED_NAME_FLINK)
  private V1Flink flink;

  public static final String SERIALIZED_NAME_RUY = "ruy";
  @SerializedName(SERIALIZED_NAME_RUY)
  private V1Ray ruy;


  public V1RunSchema job(V1Job job) {
    
    this.job = job;
    return this;
  }

   /**
   * Get job
   * @return job
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Job getJob() {
    return job;
  }


  public void setJob(V1Job job) {
    this.job = job;
  }


  public V1RunSchema service(V1Service service) {
    
    this.service = service;
    return this;
  }

   /**
   * Get service
   * @return service
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Service getService() {
    return service;
  }


  public void setService(V1Service service) {
    this.service = service;
  }


  public V1RunSchema dag(V1Dag dag) {
    
    this.dag = dag;
    return this;
  }

   /**
   * Get dag
   * @return dag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Dag getDag() {
    return dag;
  }


  public void setDag(V1Dag dag) {
    this.dag = dag;
  }


  public V1RunSchema tfJob(V1TFJob tfJob) {
    
    this.tfJob = tfJob;
    return this;
  }

   /**
   * Get tfJob
   * @return tfJob
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1TFJob getTfJob() {
    return tfJob;
  }


  public void setTfJob(V1TFJob tfJob) {
    this.tfJob = tfJob;
  }


  public V1RunSchema pytorchJob(V1PytorchJob pytorchJob) {
    
    this.pytorchJob = pytorchJob;
    return this;
  }

   /**
   * Get pytorchJob
   * @return pytorchJob
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1PytorchJob getPytorchJob() {
    return pytorchJob;
  }


  public void setPytorchJob(V1PytorchJob pytorchJob) {
    this.pytorchJob = pytorchJob;
  }


  public V1RunSchema mpiJob(V1MPIJob mpiJob) {
    
    this.mpiJob = mpiJob;
    return this;
  }

   /**
   * Get mpiJob
   * @return mpiJob
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1MPIJob getMpiJob() {
    return mpiJob;
  }


  public void setMpiJob(V1MPIJob mpiJob) {
    this.mpiJob = mpiJob;
  }


  public V1RunSchema mxJob(V1MXJob mxJob) {
    
    this.mxJob = mxJob;
    return this;
  }

   /**
   * Get mxJob
   * @return mxJob
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1MXJob getMxJob() {
    return mxJob;
  }


  public void setMxJob(V1MXJob mxJob) {
    this.mxJob = mxJob;
  }


  public V1RunSchema xgboostJob(V1XGBoostJob xgboostJob) {
    
    this.xgboostJob = xgboostJob;
    return this;
  }

   /**
   * Get xgboostJob
   * @return xgboostJob
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1XGBoostJob getXgboostJob() {
    return xgboostJob;
  }


  public void setXgboostJob(V1XGBoostJob xgboostJob) {
    this.xgboostJob = xgboostJob;
  }


  public V1RunSchema dask(V1Dask dask) {
    
    this.dask = dask;
    return this;
  }

   /**
   * Get dask
   * @return dask
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Dask getDask() {
    return dask;
  }


  public void setDask(V1Dask dask) {
    this.dask = dask;
  }


  public V1RunSchema spark(V1Spark spark) {
    
    this.spark = spark;
    return this;
  }

   /**
   * Get spark
   * @return spark
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Spark getSpark() {
    return spark;
  }


  public void setSpark(V1Spark spark) {
    this.spark = spark;
  }


  public V1RunSchema flink(V1Flink flink) {
    
    this.flink = flink;
    return this;
  }

   /**
   * Get flink
   * @return flink
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Flink getFlink() {
    return flink;
  }


  public void setFlink(V1Flink flink) {
    this.flink = flink;
  }


  public V1RunSchema ruy(V1Ray ruy) {
    
    this.ruy = ruy;
    return this;
  }

   /**
   * Get ruy
   * @return ruy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Ray getRuy() {
    return ruy;
  }


  public void setRuy(V1Ray ruy) {
    this.ruy = ruy;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunSchema v1RunSchema = (V1RunSchema) o;
    return Objects.equals(this.job, v1RunSchema.job) &&
        Objects.equals(this.service, v1RunSchema.service) &&
        Objects.equals(this.dag, v1RunSchema.dag) &&
        Objects.equals(this.tfJob, v1RunSchema.tfJob) &&
        Objects.equals(this.pytorchJob, v1RunSchema.pytorchJob) &&
        Objects.equals(this.mpiJob, v1RunSchema.mpiJob) &&
        Objects.equals(this.mxJob, v1RunSchema.mxJob) &&
        Objects.equals(this.xgboostJob, v1RunSchema.xgboostJob) &&
        Objects.equals(this.dask, v1RunSchema.dask) &&
        Objects.equals(this.spark, v1RunSchema.spark) &&
        Objects.equals(this.flink, v1RunSchema.flink) &&
        Objects.equals(this.ruy, v1RunSchema.ruy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(job, service, dag, tfJob, pytorchJob, mpiJob, mxJob, xgboostJob, dask, spark, flink, ruy);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunSchema {\n");
    sb.append("    job: ").append(toIndentedString(job)).append("\n");
    sb.append("    service: ").append(toIndentedString(service)).append("\n");
    sb.append("    dag: ").append(toIndentedString(dag)).append("\n");
    sb.append("    tfJob: ").append(toIndentedString(tfJob)).append("\n");
    sb.append("    pytorchJob: ").append(toIndentedString(pytorchJob)).append("\n");
    sb.append("    mpiJob: ").append(toIndentedString(mpiJob)).append("\n");
    sb.append("    mxJob: ").append(toIndentedString(mxJob)).append("\n");
    sb.append("    xgboostJob: ").append(toIndentedString(xgboostJob)).append("\n");
    sb.append("    dask: ").append(toIndentedString(dask)).append("\n");
    sb.append("    spark: ").append(toIndentedString(spark)).append("\n");
    sb.append("    flink: ").append(toIndentedString(flink)).append("\n");
    sb.append("    ruy: ").append(toIndentedString(ruy)).append("\n");
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

