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
    instance = new PolyaxonSdk.V1XGBoostJob();
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

  describe('V1XGBoostJob', function() {
    it('should create an instance of V1XGBoostJob', function() {
      // uncomment below and update the code to test V1XGBoostJob
      //var instance = new PolyaxonSdk.V1XGBoostJob();
      //expect(instance).to.be.a(PolyaxonSdk.V1XGBoostJob);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1XGBoostJob();
      //expect(instance).to.be();
    });

    it('should have the property cleanPodPolicy (base name: "cleanPodPolicy")', function() {
      // uncomment below and update the code to test the property cleanPodPolicy
      //var instance = new PolyaxonSdk.V1XGBoostJob();
      //expect(instance).to.be();
    });

    it('should have the property schedulingPolicy (base name: "schedulingPolicy")', function() {
      // uncomment below and update the code to test the property schedulingPolicy
      //var instance = new PolyaxonSdk.V1XGBoostJob();
      //expect(instance).to.be();
    });

    it('should have the property master (base name: "master")', function() {
      // uncomment below and update the code to test the property master
      //var instance = new PolyaxonSdk.V1XGBoostJob();
      //expect(instance).to.be();
    });

    it('should have the property worker (base name: "worker")', function() {
      // uncomment below and update the code to test the property worker
      //var instance = new PolyaxonSdk.V1XGBoostJob();
      //expect(instance).to.be();
    });

  });

}));
