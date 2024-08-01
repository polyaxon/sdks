/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
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
    instance = new PolyaxonSdk.AgentStateResponseAgentState();
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

  describe('AgentStateResponseAgentState', function() {
    it('should create an instance of AgentStateResponseAgentState', function() {
      // uncomment below and update the code to test AgentStateResponseAgentState
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be.a(PolyaxonSdk.AgentStateResponseAgentState);
    });

    it('should have the property schedules (base name: "schedules")', function() {
      // uncomment below and update the code to test the property schedules
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property hooks (base name: "hooks")', function() {
      // uncomment below and update the code to test the property hooks
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property watchdogs (base name: "watchdogs")', function() {
      // uncomment below and update the code to test the property watchdogs
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property tuners (base name: "tuners")', function() {
      // uncomment below and update the code to test the property tuners
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property queued (base name: "queued")', function() {
      // uncomment below and update the code to test the property queued
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property stopping (base name: "stopping")', function() {
      // uncomment below and update the code to test the property stopping
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property deleting (base name: "deleting")', function() {
      // uncomment below and update the code to test the property deleting
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property apply (base name: "apply")', function() {
      // uncomment below and update the code to test the property apply
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property checks (base name: "checks")', function() {
      // uncomment below and update the code to test the property checks
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property full (base name: "full")', function() {
      // uncomment below and update the code to test the property full
      //var instance = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

  });

}));
