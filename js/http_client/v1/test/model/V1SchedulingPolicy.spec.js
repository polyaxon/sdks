/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
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
    instance = new PolyaxonSdk.V1SchedulingPolicy();
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

  describe('V1SchedulingPolicy', function() {
    it('should create an instance of V1SchedulingPolicy', function() {
      // uncomment below and update the code to test V1SchedulingPolicy
      //var instance = new PolyaxonSdk.V1SchedulingPolicy();
      //expect(instance).to.be.a(PolyaxonSdk.V1SchedulingPolicy);
    });

    it('should have the property minAvailable (base name: "minAvailable")', function() {
      // uncomment below and update the code to test the property minAvailable
      //var instance = new PolyaxonSdk.V1SchedulingPolicy();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new PolyaxonSdk.V1SchedulingPolicy();
      //expect(instance).to.be();
    });

    it('should have the property minResources (base name: "minResources")', function() {
      // uncomment below and update the code to test the property minResources
      //var instance = new PolyaxonSdk.V1SchedulingPolicy();
      //expect(instance).to.be();
    });

    it('should have the property priorityClass (base name: "priorityClass")', function() {
      // uncomment below and update the code to test the property priorityClass
      //var instance = new PolyaxonSdk.V1SchedulingPolicy();
      //expect(instance).to.be();
    });

    it('should have the property scheduleTimeoutSeconds (base name: "scheduleTimeoutSeconds")', function() {
      // uncomment below and update the code to test the property scheduleTimeoutSeconds
      //var instance = new PolyaxonSdk.V1SchedulingPolicy();
      //expect(instance).to.be();
    });

  });

}));
