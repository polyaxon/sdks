/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
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
    instance = new PolyaxonSdk.V1Search();
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

  describe('V1Search', function() {
    it('should create an instance of V1Search', function() {
      // uncomment below and update the code to test V1Search
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be.a(PolyaxonSdk.V1Search);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property live_state (base name: "live_state")', function() {
      // uncomment below and update the code to test the property live_state
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property view (base name: "view")', function() {
      // uncomment below and update the code to test the property view
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property spec (base name: "spec")', function() {
      // uncomment below and update the code to test the property spec
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property org_level (base name: "org_level")', function() {
      // uncomment below and update the code to test the property org_level
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new PolyaxonSdk.V1Search();
      //expect(instance).to.be();
    });

  });

}));
