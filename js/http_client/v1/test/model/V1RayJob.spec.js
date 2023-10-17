/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
    instance = new PolyaxonSdk.V1RayJob();
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

  describe('V1RayJob', function() {
    it('should create an instance of V1RayJob', function() {
      // uncomment below and update the code to test V1RayJob
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be.a(PolyaxonSdk.V1RayJob);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

    it('should have the property entrypoint (base name: "entrypoint")', function() {
      // uncomment below and update the code to test the property entrypoint
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

    it('should have the property runtimeEnv (base name: "runtimeEnv")', function() {
      // uncomment below and update the code to test the property runtimeEnv
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

    it('should have the property rayVersion (base name: "rayVersion")', function() {
      // uncomment below and update the code to test the property rayVersion
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

    it('should have the property head (base name: "head")', function() {
      // uncomment below and update the code to test the property head
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

    it('should have the property workers (base name: "workers")', function() {
      // uncomment below and update the code to test the property workers
      //var instance = new PolyaxonSdk.V1RayJob();
      //expect(instance).to.be();
    });

  });

}));
