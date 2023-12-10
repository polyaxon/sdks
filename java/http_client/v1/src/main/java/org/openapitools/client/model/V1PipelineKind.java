/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6-rc6
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
 * Gets or Sets v1PipelineKind
 */
@JsonAdapter(V1PipelineKind.Adapter.class)
public enum V1PipelineKind {

  DAG("dag"),

  MATRIX("matrix");

  private String value;

  V1PipelineKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1PipelineKind fromValue(String value) {
    for (V1PipelineKind b : V1PipelineKind.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1PipelineKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1PipelineKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1PipelineKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1PipelineKind.fromValue(value);
    }
  }
}

