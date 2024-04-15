/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.7
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
 * - tpe: tpe algorithm  - rand: random algorithm  - anneal: anneal algorithm
 */
@JsonAdapter(V1HyperoptAlgorithms.Adapter.class)
public enum V1HyperoptAlgorithms {
  
  TPE("tpe"),
  
  RAND("rand"),
  
  ANNEAL("anneal");

  private String value;

  V1HyperoptAlgorithms(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1HyperoptAlgorithms fromValue(String value) {
    for (V1HyperoptAlgorithms b : V1HyperoptAlgorithms.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1HyperoptAlgorithms> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1HyperoptAlgorithms enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1HyperoptAlgorithms read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1HyperoptAlgorithms.fromValue(value);
    }
  }
}

