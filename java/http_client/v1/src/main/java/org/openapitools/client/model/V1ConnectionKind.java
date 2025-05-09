/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets v1ConnectionKind
 */
@JsonAdapter(V1ConnectionKind.Adapter.class)
public enum V1ConnectionKind {

  HOST_PATH("host_path"),

  VOLUME_CLAIM("volume_claim"),

  GCS("gcs"),

  S3("s3"),

  WASB("wasb"),

  REGISTRY("registry"),

  GIT("git"),

  AWS("aws"),

  GCP("gcp"),

  AZURE("azure"),

  MYSQL("mysql"),

  POSTGRES("postgres"),

  ORACLE("oracle"),

  VERTICA("vertica"),

  SQLITE("sqlite"),

  MSSQL("mssql"),

  REDIS("redis"),

  PRESTO("presto"),

  MONGO("mongo"),

  CASSANDRA("cassandra"),

  FTP("ftp"),

  GRPC("grpc"),

  HDFS("hdfs"),

  HTTP("http"),

  PIG_CLI("pig_cli"),

  HIVE_CLI("hive_cli"),

  HIVE_METASTORE("hive_metastore"),

  HIVE_SERVER2("hive_server2"),

  JDBC("jdbc"),

  JENKINS("jenkins"),

  SAMBA("samba"),

  SNOWFLAKE("snowflake"),

  SSH("ssh"),

  CLOUDANT("cloudant"),

  DATABRICKS("databricks"),

  SEGMENT("segment"),

  SLACK("slack"),

  DISCORD("discord"),

  MATTERMOST("mattermost"),

  PAGERDUTY("pagerduty"),

  HIPCHAT("hipchat"),

  WEBHOOK("webhook"),

  CUSTOM("custom");

  private String value;

  V1ConnectionKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1ConnectionKind fromValue(String value) {
    for (V1ConnectionKind b : V1ConnectionKind.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1ConnectionKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1ConnectionKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1ConnectionKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1ConnectionKind.fromValue(value);
    }
  }
}

