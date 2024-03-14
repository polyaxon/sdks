/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc0
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
 * Gets or Sets v1RunKind
 */
@JsonAdapter(V1RunKind.Adapter.class)
public enum V1RunKind {
  
  JOB("job"),
  
  SERVICE("service"),
  
  DAG("dag"),
  
  DASKJOB("daskjob"),
  
  RAYJOB("rayjob"),
  
  MPIJOB("mpijob"),
  
  TFJOB("tfjob"),
  
  PYTORCHJOB("pytorchjob"),
  
  MXJOB("mxjob"),
  
  XGBJOB("xgbjob"),
  
  PADDLEJOB("paddlejob"),
  
  MATRIX("matrix"),
  
  SCHEDULE("schedule"),
  
  TUNER("tuner"),
  
  WATCHDOG("watchdog"),
  
  NOTIFIER("notifier"),
  
  BUILDER("builder"),
  
  CLEANER("cleaner");

  private String value;

  V1RunKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1RunKind fromValue(String value) {
    for (V1RunKind b : V1RunKind.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1RunKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1RunKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1RunKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1RunKind.fromValue(value);
    }
  }
}

