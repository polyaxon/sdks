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
 * - roc: ROC curve  - pr: Precision Recall curve  - custom: Custom curve
 */
@JsonAdapter(V1EventCurveKind.Adapter.class)
public enum V1EventCurveKind {

  ROC("roc"),

  PR("pr"),

  CUSTOM("custom");

  private String value;

  V1EventCurveKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1EventCurveKind fromValue(String value) {
    for (V1EventCurveKind b : V1EventCurveKind.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1EventCurveKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1EventCurveKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1EventCurveKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1EventCurveKind.fromValue(value);
    }
  }
}

