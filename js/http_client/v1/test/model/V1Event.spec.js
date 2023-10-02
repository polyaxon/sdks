/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc50
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1Event();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Event', function() {
    it('should create an instance of V1Event', function() {
      // uncomment below and update the code to test V1Event
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be.a(PolyaxonSdk.V1Event);
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property step (base name: "step")', function() {
      // uncomment below and update the code to test the property step
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property histogram (base name: "histogram")', function() {
      // uncomment below and update the code to test the property histogram
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property audio (base name: "audio")', function() {
      // uncomment below and update the code to test the property audio
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property video (base name: "video")', function() {
      // uncomment below and update the code to test the property video
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property html (base name: "html")', function() {
      // uncomment below and update the code to test the property html
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property chart (base name: "chart")', function() {
      // uncomment below and update the code to test the property chart
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property artifact (base name: "artifact")', function() {
      // uncomment below and update the code to test the property artifact
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property dataframe (base name: "dataframe")', function() {
      // uncomment below and update the code to test the property dataframe
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property curve (base name: "curve")', function() {
      // uncomment below and update the code to test the property curve
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property confusion (base name: "confusion")', function() {
      // uncomment below and update the code to test the property confusion
      //var instance = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

  });

}));
