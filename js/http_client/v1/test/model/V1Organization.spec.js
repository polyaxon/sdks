/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.2
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
    instance = new PolyaxonSdk.V1Organization();
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

  describe('V1Organization', function() {
    it('should create an instance of V1Organization', function() {
      // uncomment below and update the code to test V1Organization
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be.a(PolyaxonSdk.V1Organization);
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property user_email (base name: "user_email")', function() {
      // uncomment below and update the code to test the property user_email
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property is_public (base name: "is_public")', function() {
      // uncomment below and update the code to test the property is_public
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property support_revoke_at (base name: "support_revoke_at")', function() {
      // uncomment below and update the code to test the property support_revoke_at
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function() {
      // uncomment below and update the code to test the property expiration
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property preset (base name: "preset")', function() {
      // uncomment below and update the code to test the property preset
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property is_cloud_viewable (base name: "is_cloud_viewable")', function() {
      // uncomment below and update the code to test the property is_cloud_viewable
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property archived_deletion_interval (base name: "archived_deletion_interval")', function() {
      // uncomment below and update the code to test the property archived_deletion_interval
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property auth (base name: "auth")', function() {
      // uncomment below and update the code to test the property auth
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property plan (base name: "plan")', function() {
      // uncomment below and update the code to test the property plan
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

    it('should have the property usage (base name: "usage")', function() {
      // uncomment below and update the code to test the property usage
      //var instance = new PolyaxonSdk.V1Organization();
      //expect(instance).to.be();
    });

  });

}));
