/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
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
    instance = new PolyaxonSdk.V1ProjectVersion();
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

  describe('V1ProjectVersion', function() {
    it('should create an instance of V1ProjectVersion', function() {
      // uncomment below and update the code to test V1ProjectVersion
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be.a(PolyaxonSdk.V1ProjectVersion);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property connection (base name: "connection")', function() {
      // uncomment below and update the code to test the property connection
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property artifacts (base name: "artifacts")', function() {
      // uncomment below and update the code to test the property artifacts
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property meta_info (base name: "meta_info")', function() {
      // uncomment below and update the code to test the property meta_info
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property stage (base name: "stage")', function() {
      // uncomment below and update the code to test the property stage
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property stage_conditions (base name: "stage_conditions")', function() {
      // uncomment below and update the code to test the property stage_conditions
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property readme (base name: "readme")', function() {
      // uncomment below and update the code to test the property readme
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property contributors (base name: "contributors")', function() {
      // uncomment below and update the code to test the property contributors
      //var instance = new PolyaxonSdk.V1ProjectVersion();
      //expect(instance).to.be();
    });

  });

}));
