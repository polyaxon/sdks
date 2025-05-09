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
 * - replace: Replaces the keys  - isnull: Only set the keys if they do not exist or if they are null  - post_merge: Merge the all keys and replace by new one  - pre_merge: Merge the all keys and keep old ones
 */
@JsonAdapter(V1PatchStrategy.Adapter.class)
public enum V1PatchStrategy {

  REPLACE("replace"),

  ISNULL("isnull"),

  POST_MERGE("post_merge"),

  PRE_MERGE("pre_merge");

  private String value;

  V1PatchStrategy(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1PatchStrategy fromValue(String value) {
    for (V1PatchStrategy b : V1PatchStrategy.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1PatchStrategy> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1PatchStrategy enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1PatchStrategy read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1PatchStrategy.fromValue(value);
    }
  }
}

