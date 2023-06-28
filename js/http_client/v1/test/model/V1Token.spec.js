/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc24
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
    instance = new PolyaxonSdk.V1Token();
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

  describe('V1Token', function() {
    it('should create an instance of V1Token', function() {
      // uncomment below and update the code to test V1Token
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be.a(PolyaxonSdk.V1Token);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property scopes (base name: "scopes")', function() {
      // uncomment below and update the code to test the property scopes
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property started_at (base name: "started_at")', function() {
      // uncomment below and update the code to test the property started_at
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property expires_at (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expires_at
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function() {
      // uncomment below and update the code to test the property expiration
      //var instance = new PolyaxonSdk.V1Token();
      //expect(instance).to.be();
    });

  });

}));
