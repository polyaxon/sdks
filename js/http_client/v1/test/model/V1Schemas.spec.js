/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
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
    instance = new PolyaxonSdk.V1Schemas();
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

  describe('V1Schemas', function() {
    it('should create an instance of V1Schemas', function() {
      // uncomment below and update the code to test V1Schemas
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be.a(PolyaxonSdk.V1Schemas);
    });

    it('should have the property earlyStopping (base name: "earlyStopping")', function() {
      // uncomment below and update the code to test the property earlyStopping
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property matrix (base name: "matrix")', function() {
      // uncomment below and update the code to test the property matrix
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property compiledOperation (base name: "compiledOperation")', function() {
      // uncomment below and update the code to test the property compiledOperation
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property connectionSchema (base name: "connectionSchema")', function() {
      // uncomment below and update the code to test the property connectionSchema
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property hpParams (base name: "hpParams")', function() {
      // uncomment below and update the code to test the property hpParams
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property artifactsMount (base name: "artifactsMount")', function() {
      // uncomment below and update the code to test the property artifactsMount
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property polyaxonSidecarContainer (base name: "polyaxonSidecarContainer")', function() {
      // uncomment below and update the code to test the property polyaxonSidecarContainer
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property polyaxonInitContainer (base name: "polyaxonInitContainer")', function() {
      // uncomment below and update the code to test the property polyaxonInitContainer
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property artifacs (base name: "artifacs")', function() {
      // uncomment below and update the code to test the property artifacs
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property wasb (base name: "wasb")', function() {
      // uncomment below and update the code to test the property wasb
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property gcs (base name: "gcs")', function() {
      // uncomment below and update the code to test the property gcs
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property s3 (base name: "s3")', function() {
      // uncomment below and update the code to test the property s3
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property auth (base name: "auth")', function() {
      // uncomment below and update the code to test the property auth
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property connection (base name: "connection")', function() {
      // uncomment below and update the code to test the property connection
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property matrixKind (base name: "matrixKind")', function() {
      // uncomment below and update the code to test the property matrixKind
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property scheduleKind (base name: "scheduleKind")', function() {
      // uncomment below and update the code to test the property scheduleKind
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

  });

}));
