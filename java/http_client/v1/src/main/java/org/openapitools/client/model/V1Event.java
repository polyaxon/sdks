/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.5.3
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
import java.time.OffsetDateTime;
import org.openapitools.client.model.V1EventArtifact;
import org.openapitools.client.model.V1EventAudio;
import org.openapitools.client.model.V1EventChart;
import org.openapitools.client.model.V1EventConfusionMatrix;
import org.openapitools.client.model.V1EventCurve;
import org.openapitools.client.model.V1EventDataframe;
import org.openapitools.client.model.V1EventHistogram;
import org.openapitools.client.model.V1EventImage;
import org.openapitools.client.model.V1EventModel;
import org.openapitools.client.model.V1EventSpan;
import org.openapitools.client.model.V1EventVideo;

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
 * V1Event
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Event {
  public static final String SERIALIZED_NAME_TIMESTAMP = "timestamp";
  @SerializedName(SERIALIZED_NAME_TIMESTAMP)
  private OffsetDateTime timestamp;

  public static final String SERIALIZED_NAME_STEP = "step";
  @SerializedName(SERIALIZED_NAME_STEP)
  private Integer step;

  public static final String SERIALIZED_NAME_METRIC = "metric";
  @SerializedName(SERIALIZED_NAME_METRIC)
  private Float metric;

  public static final String SERIALIZED_NAME_IMAGE = "image";
  @SerializedName(SERIALIZED_NAME_IMAGE)
  private V1EventImage image;

  public static final String SERIALIZED_NAME_HISTOGRAM = "histogram";
  @SerializedName(SERIALIZED_NAME_HISTOGRAM)
  private V1EventHistogram histogram;

  public static final String SERIALIZED_NAME_AUDIO = "audio";
  @SerializedName(SERIALIZED_NAME_AUDIO)
  private V1EventAudio audio;

  public static final String SERIALIZED_NAME_VIDEO = "video";
  @SerializedName(SERIALIZED_NAME_VIDEO)
  private V1EventVideo video;

  public static final String SERIALIZED_NAME_HTML = "html";
  @SerializedName(SERIALIZED_NAME_HTML)
  private String html;

  public static final String SERIALIZED_NAME_TEXT = "text";
  @SerializedName(SERIALIZED_NAME_TEXT)
  private String text;

  public static final String SERIALIZED_NAME_CHART = "chart";
  @SerializedName(SERIALIZED_NAME_CHART)
  private V1EventChart chart;

  public static final String SERIALIZED_NAME_MODEL = "model";
  @SerializedName(SERIALIZED_NAME_MODEL)
  private V1EventModel model;

  public static final String SERIALIZED_NAME_ARTIFACT = "artifact";
  @SerializedName(SERIALIZED_NAME_ARTIFACT)
  private V1EventArtifact artifact;

  public static final String SERIALIZED_NAME_DATAFRAME = "dataframe";
  @SerializedName(SERIALIZED_NAME_DATAFRAME)
  private V1EventDataframe dataframe;

  public static final String SERIALIZED_NAME_CURVE = "curve";
  @SerializedName(SERIALIZED_NAME_CURVE)
  private V1EventCurve curve;

  public static final String SERIALIZED_NAME_CONFUSION = "confusion";
  @SerializedName(SERIALIZED_NAME_CONFUSION)
  private V1EventConfusionMatrix confusion;

  public static final String SERIALIZED_NAME_SPAN = "span";
  @SerializedName(SERIALIZED_NAME_SPAN)
  private V1EventSpan span;

  public V1Event() {
  }

  public V1Event timestamp(OffsetDateTime timestamp) {
    
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Get timestamp
   * @return timestamp
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getTimestamp() {
    return timestamp;
  }


  public void setTimestamp(OffsetDateTime timestamp) {
    this.timestamp = timestamp;
  }


  public V1Event step(Integer step) {
    
    this.step = step;
    return this;
  }

   /**
   * Global step of the event.
   * @return step
  **/
  @javax.annotation.Nullable

  public Integer getStep() {
    return step;
  }


  public void setStep(Integer step) {
    this.step = step;
  }


  public V1Event metric(Float metric) {
    
    this.metric = metric;
    return this;
  }

   /**
   * Get metric
   * @return metric
  **/
  @javax.annotation.Nullable

  public Float getMetric() {
    return metric;
  }


  public void setMetric(Float metric) {
    this.metric = metric;
  }


  public V1Event image(V1EventImage image) {
    
    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @javax.annotation.Nullable

  public V1EventImage getImage() {
    return image;
  }


  public void setImage(V1EventImage image) {
    this.image = image;
  }


  public V1Event histogram(V1EventHistogram histogram) {
    
    this.histogram = histogram;
    return this;
  }

   /**
   * Get histogram
   * @return histogram
  **/
  @javax.annotation.Nullable

  public V1EventHistogram getHistogram() {
    return histogram;
  }


  public void setHistogram(V1EventHistogram histogram) {
    this.histogram = histogram;
  }


  public V1Event audio(V1EventAudio audio) {
    
    this.audio = audio;
    return this;
  }

   /**
   * Get audio
   * @return audio
  **/
  @javax.annotation.Nullable

  public V1EventAudio getAudio() {
    return audio;
  }


  public void setAudio(V1EventAudio audio) {
    this.audio = audio;
  }


  public V1Event video(V1EventVideo video) {
    
    this.video = video;
    return this;
  }

   /**
   * Get video
   * @return video
  **/
  @javax.annotation.Nullable

  public V1EventVideo getVideo() {
    return video;
  }


  public void setVideo(V1EventVideo video) {
    this.video = video;
  }


  public V1Event html(String html) {
    
    this.html = html;
    return this;
  }

   /**
   * Get html
   * @return html
  **/
  @javax.annotation.Nullable

  public String getHtml() {
    return html;
  }


  public void setHtml(String html) {
    this.html = html;
  }


  public V1Event text(String text) {
    
    this.text = text;
    return this;
  }

   /**
   * Get text
   * @return text
  **/
  @javax.annotation.Nullable

  public String getText() {
    return text;
  }


  public void setText(String text) {
    this.text = text;
  }


  public V1Event chart(V1EventChart chart) {
    
    this.chart = chart;
    return this;
  }

   /**
   * Get chart
   * @return chart
  **/
  @javax.annotation.Nullable

  public V1EventChart getChart() {
    return chart;
  }


  public void setChart(V1EventChart chart) {
    this.chart = chart;
  }


  public V1Event model(V1EventModel model) {
    
    this.model = model;
    return this;
  }

   /**
   * Get model
   * @return model
  **/
  @javax.annotation.Nullable

  public V1EventModel getModel() {
    return model;
  }


  public void setModel(V1EventModel model) {
    this.model = model;
  }


  public V1Event artifact(V1EventArtifact artifact) {
    
    this.artifact = artifact;
    return this;
  }

   /**
   * Get artifact
   * @return artifact
  **/
  @javax.annotation.Nullable

  public V1EventArtifact getArtifact() {
    return artifact;
  }


  public void setArtifact(V1EventArtifact artifact) {
    this.artifact = artifact;
  }


  public V1Event dataframe(V1EventDataframe dataframe) {
    
    this.dataframe = dataframe;
    return this;
  }

   /**
   * Get dataframe
   * @return dataframe
  **/
  @javax.annotation.Nullable

  public V1EventDataframe getDataframe() {
    return dataframe;
  }


  public void setDataframe(V1EventDataframe dataframe) {
    this.dataframe = dataframe;
  }


  public V1Event curve(V1EventCurve curve) {
    
    this.curve = curve;
    return this;
  }

   /**
   * Get curve
   * @return curve
  **/
  @javax.annotation.Nullable

  public V1EventCurve getCurve() {
    return curve;
  }


  public void setCurve(V1EventCurve curve) {
    this.curve = curve;
  }


  public V1Event confusion(V1EventConfusionMatrix confusion) {
    
    this.confusion = confusion;
    return this;
  }

   /**
   * Get confusion
   * @return confusion
  **/
  @javax.annotation.Nullable

  public V1EventConfusionMatrix getConfusion() {
    return confusion;
  }


  public void setConfusion(V1EventConfusionMatrix confusion) {
    this.confusion = confusion;
  }


  public V1Event span(V1EventSpan span) {
    
    this.span = span;
    return this;
  }

   /**
   * Get span
   * @return span
  **/
  @javax.annotation.Nullable

  public V1EventSpan getSpan() {
    return span;
  }


  public void setSpan(V1EventSpan span) {
    this.span = span;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Event v1Event = (V1Event) o;
    return Objects.equals(this.timestamp, v1Event.timestamp) &&
        Objects.equals(this.step, v1Event.step) &&
        Objects.equals(this.metric, v1Event.metric) &&
        Objects.equals(this.image, v1Event.image) &&
        Objects.equals(this.histogram, v1Event.histogram) &&
        Objects.equals(this.audio, v1Event.audio) &&
        Objects.equals(this.video, v1Event.video) &&
        Objects.equals(this.html, v1Event.html) &&
        Objects.equals(this.text, v1Event.text) &&
        Objects.equals(this.chart, v1Event.chart) &&
        Objects.equals(this.model, v1Event.model) &&
        Objects.equals(this.artifact, v1Event.artifact) &&
        Objects.equals(this.dataframe, v1Event.dataframe) &&
        Objects.equals(this.curve, v1Event.curve) &&
        Objects.equals(this.confusion, v1Event.confusion) &&
        Objects.equals(this.span, v1Event.span);
  }

  @Override
  public int hashCode() {
    return Objects.hash(timestamp, step, metric, image, histogram, audio, video, html, text, chart, model, artifact, dataframe, curve, confusion, span);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Event {\n");
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
    sb.append("    step: ").append(toIndentedString(step)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    histogram: ").append(toIndentedString(histogram)).append("\n");
    sb.append("    audio: ").append(toIndentedString(audio)).append("\n");
    sb.append("    video: ").append(toIndentedString(video)).append("\n");
    sb.append("    html: ").append(toIndentedString(html)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
    sb.append("    chart: ").append(toIndentedString(chart)).append("\n");
    sb.append("    model: ").append(toIndentedString(model)).append("\n");
    sb.append("    artifact: ").append(toIndentedString(artifact)).append("\n");
    sb.append("    dataframe: ").append(toIndentedString(dataframe)).append("\n");
    sb.append("    curve: ").append(toIndentedString(curve)).append("\n");
    sb.append("    confusion: ").append(toIndentedString(confusion)).append("\n");
    sb.append("    span: ").append(toIndentedString(span)).append("\n");
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
    openapiFields.add("timestamp");
    openapiFields.add("step");
    openapiFields.add("metric");
    openapiFields.add("image");
    openapiFields.add("histogram");
    openapiFields.add("audio");
    openapiFields.add("video");
    openapiFields.add("html");
    openapiFields.add("text");
    openapiFields.add("chart");
    openapiFields.add("model");
    openapiFields.add("artifact");
    openapiFields.add("dataframe");
    openapiFields.add("curve");
    openapiFields.add("confusion");
    openapiFields.add("span");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Event
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Event.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Event is not found in the empty JSON string", V1Event.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Event.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Event` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // validate the optional field `image`
      if (jsonObj.get("image") != null && !jsonObj.get("image").isJsonNull()) {
        V1EventImage.validateJsonObject(jsonObj.getAsJsonObject("image"));
      }
      // validate the optional field `histogram`
      if (jsonObj.get("histogram") != null && !jsonObj.get("histogram").isJsonNull()) {
        V1EventHistogram.validateJsonObject(jsonObj.getAsJsonObject("histogram"));
      }
      // validate the optional field `audio`
      if (jsonObj.get("audio") != null && !jsonObj.get("audio").isJsonNull()) {
        V1EventAudio.validateJsonObject(jsonObj.getAsJsonObject("audio"));
      }
      // validate the optional field `video`
      if (jsonObj.get("video") != null && !jsonObj.get("video").isJsonNull()) {
        V1EventVideo.validateJsonObject(jsonObj.getAsJsonObject("video"));
      }
      if ((jsonObj.get("html") != null && !jsonObj.get("html").isJsonNull()) && !jsonObj.get("html").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `html` to be a primitive type in the JSON string but got `%s`", jsonObj.get("html").toString()));
      }
      if ((jsonObj.get("text") != null && !jsonObj.get("text").isJsonNull()) && !jsonObj.get("text").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `text` to be a primitive type in the JSON string but got `%s`", jsonObj.get("text").toString()));
      }
      // validate the optional field `chart`
      if (jsonObj.get("chart") != null && !jsonObj.get("chart").isJsonNull()) {
        V1EventChart.validateJsonObject(jsonObj.getAsJsonObject("chart"));
      }
      // validate the optional field `model`
      if (jsonObj.get("model") != null && !jsonObj.get("model").isJsonNull()) {
        V1EventModel.validateJsonObject(jsonObj.getAsJsonObject("model"));
      }
      // validate the optional field `artifact`
      if (jsonObj.get("artifact") != null && !jsonObj.get("artifact").isJsonNull()) {
        V1EventArtifact.validateJsonObject(jsonObj.getAsJsonObject("artifact"));
      }
      // validate the optional field `dataframe`
      if (jsonObj.get("dataframe") != null && !jsonObj.get("dataframe").isJsonNull()) {
        V1EventDataframe.validateJsonObject(jsonObj.getAsJsonObject("dataframe"));
      }
      // validate the optional field `curve`
      if (jsonObj.get("curve") != null && !jsonObj.get("curve").isJsonNull()) {
        V1EventCurve.validateJsonObject(jsonObj.getAsJsonObject("curve"));
      }
      // validate the optional field `confusion`
      if (jsonObj.get("confusion") != null && !jsonObj.get("confusion").isJsonNull()) {
        V1EventConfusionMatrix.validateJsonObject(jsonObj.getAsJsonObject("confusion"));
      }
      // validate the optional field `span`
      if (jsonObj.get("span") != null && !jsonObj.get("span").isJsonNull()) {
        V1EventSpan.validateJsonObject(jsonObj.getAsJsonObject("span"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Event.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Event' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Event> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Event.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Event>() {
           @Override
           public void write(JsonWriter out, V1Event value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Event read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Event given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Event
  * @throws IOException if the JSON string is invalid with respect to V1Event
  */
  public static V1Event fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Event.class);
  }

 /**
  * Convert an instance of V1Event to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

