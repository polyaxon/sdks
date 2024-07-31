/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.3.0
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
    instance = new PolyaxonSdk.V1Policy();
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

  describe('V1Policy', function() {
    it('should create an instance of V1Policy', function() {
      // uncomment below and update the code to test V1Policy
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be.a(PolyaxonSdk.V1Policy);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property excluded_features (base name: "excluded_features")', function() {
      // uncomment below and update the code to test the property excluded_features
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property excluded_runtimes (base name: "excluded_runtimes")', function() {
      // uncomment below and update the code to test the property excluded_runtimes
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property archived_deletion_interval (base name: "archived_deletion_interval")', function() {
      // uncomment below and update the code to test the property archived_deletion_interval
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property preset (base name: "preset")', function() {
      // uncomment below and update the code to test the property preset
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property presets (base name: "presets")', function() {
      // uncomment below and update the code to test the property presets
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property queues (base name: "queues")', function() {
      // uncomment below and update the code to test the property queues
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property agents (base name: "agents")', function() {
      // uncomment below and update the code to test the property agents
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property namespaces (base name: "namespaces")', function() {
      // uncomment below and update the code to test the property namespaces
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property user_accesses (base name: "user_accesses")', function() {
      // uncomment below and update the code to test the property user_accesses
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property teams (base name: "teams")', function() {
      // uncomment below and update the code to test the property teams
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property projects (base name: "projects")', function() {
      // uncomment below and update the code to test the property projects
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

    it('should have the property connected_projects (base name: "connected_projects")', function() {
      // uncomment below and update the code to test the property connected_projects
      //var instance = new PolyaxonSdk.V1Policy();
      //expect(instance).to.be();
    });

  });

}));
