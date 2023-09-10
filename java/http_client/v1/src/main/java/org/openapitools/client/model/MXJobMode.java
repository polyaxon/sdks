/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc39
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
 * Gets or Sets MXJobMode
 */
@JsonAdapter(MXJobMode.Adapter.class)
public enum MXJobMode {

  MXTRAIN("MXTrain"),

  MXTUNE("MXTune");

  private String value;

  MXJobMode(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static MXJobMode fromValue(String value) {
    for (MXJobMode b : MXJobMode.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<MXJobMode> {
    @Override
    public void write(final JsonWriter jsonWriter, final MXJobMode enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public MXJobMode read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return MXJobMode.fromValue(value);
    }
  }
}

